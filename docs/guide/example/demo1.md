

# 示例1: 获取业务流水号

我们在 [自定义业务节点-流水号](/guide/advanced/UserDefinedNode.md) 创建一个获取流水号的节点，我们顺着创建的节点继续开发。

这是我们完整的工作流图

![基本流程](/images/user_custom_flow.png)

## 1. 设置组件参数
设置渠道为XTP，绑定变量no到上下文
![设置值](/images/user_custom_set_value.png)

我们设置完后可以在biz对应的xml 源码看到更新的配置文件
```xml
<component>
      <id>b2f8b6c5-e93a-4e7b-b691-e9a7fc289006</id>
      <type>custom-get_serial_number</type>
      <name>获取流水号</name>
      <x>350</x>
      <y>290</y>
      <property>
        <!-- 节点对应的spring bean -->
        <beanRef>serialNumber</beanRef>
        <!-- 节点对应的方法 -->
        <method>cc.xiaonuo.test.SerialNumber#getSerialNumber</method>
        <!-- 异步 0:同步 1:异步 -->
        <threadType>0</threadType>
        <!-- 节点配置 -->
        <params>
          <param>
            <seq>1</seq>
            <val>channel|XTP|渠道号</val>
          </param>
          <param>
            <seq>2</seq>
            <val>bindKey|bindKey|绑定变量到上下文</val>
          </param>
        </params>
      </property>
    </component>
```

## 2. 适配改造我们的java方法
```java

import cc.xiaonuo.flow.engine.FlowContext;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import java.util.Map;

@Component("serialNumber")
@Slf4j
public class SerialNumber{

    /**
     * 获取流水号
     * @param context
     */
    public void getSerialNumber(Map<String,String> channelMap, Map<String,String> bindKeyMap, FlowContext context){

        String seq = channelMap.get("seq");     // 序号
        String valMap = channelMap.get("val");  //channel|XTP|渠道号    -- 整行值
        String channel = valMap.split("\\|")[1];
        log.info("seq={}, channel={}", seq, channel);

        String seq2 = bindKeyMap.get("seq");     // 序号
        String val2Map = bindKeyMap.get("val");  //bindKey|no|绑定变量到上下文     -- 整行值
        String bindKey = val2Map.split("\\|")[1];
        log.info("seq2={}, bindKey={}", seq2, bindKey);
        // 业务逻辑
        String serialNumber = getSerialNumber(channel);
        // 将流水号绑定到上下文
        context.setVariable(bindKey, serialNumber);
    }

    /**
     * 获取流水号
     * @param channel
     * @return
     */
    public String getSerialNumber(String channel){
        return "123456";
    }
}

```

## 3. 设置基本属性和出入参
1. 接口属性

![接口属性](/images/user_custom_interface.png)

2. 入参

因为没有设置入参，所以没有入参的配置
![入参](/images/user_custom_input.png)


3. 出参

![出参](/images/user_custom_output.png)

## 4.接口测试

![接口测试](/images/user_custom_test.png)


