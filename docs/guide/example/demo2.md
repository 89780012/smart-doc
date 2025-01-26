

# 示例2: 文件上传(smart-auth-back)

以我们smart-auth-back项目演示，这是我们完整的工作流图

![基本流程](/images/upload_file_workflow.png)

## 1. 新增自定义组件

需要在resouces/components.xml 中新增自定义组件

```xml
<?xml version="1.0" encoding="UTF-8"?>
<components>
    <component-type name="biz" display-name="业务组件">
      <item>
            <name>文件处理</name>
            <type>file_handler</type>
            <icon></icon>.
            <beanRef>fileHandler</beanRef>
            <method>fun.smartflow.handler.FileHandler#handler</method>
            <!-- 异步  0:同步 1:异步-->
            <threadType>0</threadType>
            <description>文件处理器</description>
            <config>
                <header>
                    <column isEdit="false">属性</column>
                    <column isEdit="true">值</column>
                    <column isEdit="false" width="100">描述</column>
                </header>
                <data>
                    <row>
                        <column>fileKey</column>
                        <column></column>
                        <column>表单中文件key</column>
                    </row>
                    <row>
                        <column>bindKey</column>
                        <column></column>
                        <column>文件存储到上下文的key</column>
                    </row>
                </data>
            </config>
        </item>
    </component-type>
</components>
```


## 2. 设置组件参数

文件处理参数

![文件处理](/images/upload_file_handler.png)

获取文件域名

![文件域名](/images/upload_file_domain.png)

拼接访问地址

![拼接访问地址](/images/upload_file_url.png)

## 3. 适配改造我们的java方法

需要在application.yml 中配置文件上传路径

```yaml
server:
  port: 8080
  servlet:
    context-path: /
    # 访问url防止乱码
    encoding:
      charset: UTF-8
      force: true
      enabled: true


spring:
  application:
    name: smart-auth-back
  mvc:
    pathmatch:
      matching-strategy: ant_path_matcher
    #静态资源访问路径
    static-path-pattern: /files/**
  #静态资源映射
  web:
    resources:
      static-locations: 
        - file:${file.uploadPath}
        - classpath:/static/

file:
  # 文件访问域名
  domain: http://localhost:8080
  # 文件存储 使用绝对路径
  uploadPath: F:\code\smart-auth-back\smart-auth-back\src\main\resources\static\files

smart:
  flow:
    enabled: true


logging:
  level:
    root: INFO
    fun.smartflow: DEBUG
    org.springframework: INFO
  file:
    name: logs/app.log
```

java代码

```java
package fun.smartflow.handler;

import cc.xiaonuo.common.exception.FlowException;
import cc.xiaonuo.flow.annotation.FlowComponent;
import cc.xiaonuo.flow.engine.FlowContext;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.util.Map;
import java.util.UUID;

@FlowComponent("fileHandler")
@Slf4j
public class FileHandler {

    @Value("${file.uploadPath}")
    private String uploadPath;

    public void handler(Map<String,String> fileNameMap, Map<String,String> filePathMap, FlowContext context) {
        try {
            HttpServletRequest request = context.getRequest();
            
            // 解析参数
            String valMap = fileNameMap.get("val");
            String fileKey = valMap.split("\\|")[1]; // fileName|file|表单中文件key

            // 获取上传文件
            MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
            MultipartFile file = multipartRequest.getFile(fileKey);
            if(file == null){
                throw new FlowException("没有找到对应的文件");
            }
            String ext = file.getOriginalFilename().split("\\.")[1];  //后缀

            // 确保上传目录存在
            File uploadDir = new File(uploadPath);
            if (!uploadDir.exists()) {
                uploadDir.mkdirs();
            }
            
            // 生成唯一文件名避免冲突
            String uniqueFileName = UUID.randomUUID().toString() + "." + ext;
            String filePath = uploadPath + File.separator + uniqueFileName;
            String fileName = uniqueFileName;
            // 保存文件
            file.transferTo(new File(filePath));
            
            // 解析bindKey并存储文件路径到上下文
            String val2Map = filePathMap.get("val");
            String bindKey = val2Map.split("\\|")[1];
            context.setVariable(bindKey, fileName);
            
            log.info("File saved successfully: {}", filePath);
            
        } catch (IOException e) {
            log.error("Failed to handle file upload", e);
            throw new RuntimeException("文件上传处理失败", e);
        } catch (ClassCastException e) {
            log.error("Request is not multipart request", e);
            throw new RuntimeException("请求类型错误,不是文件上传请求", e);
        }
    }
}

```

## 4. 设置基本属性和出入参
1. 接口属性

![接口属性](/images/upload_file_in.png)


2. 入参

因为没有设置入参，所以没有入参的配置


3. 出参

![出参](/images/upload_file_output.png)


## 4.启动后接口测试

![接口测试](/images/upload_file_test.png)



