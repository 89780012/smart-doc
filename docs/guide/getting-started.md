# 快速开始

本文将帮助您快速上手 Smart Flow。

## 全景页面
![全景视图](/images/full_view.png)

## 环境要求

- JDK 1.8+
- Maven 3.6+ 
- Spring Boot 2.x
- MySQL 5.7+


## 快速开始

考虑大多数项目还是以mysql作为数据库，所以这里以mysql为例，演示如何快速开始，以下是我本地配置，仅供参考。
### 1. 添加依赖 

在 `pom.xml` 中添加依赖:
```xml
  <parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.7.18</version>
    <relativePath/>
  </parent>
    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <maven.compiler.source>11</maven.compiler.source>
        <maven.compiler.target>11</maven.compiler.target>
    </properties>
    <dependencies>
        <!-- web项目 -->
        <dependency>
            <groupId>cc.xiaonuo</groupId>
            <artifactId>smart-flow-web-spring-boot-starter</artifactId>
            <version>0.6.0</version>
        </dependency>
        <!-- database项目 -->
        <dependency>
            <groupId>cc.xiaonuo</groupId>
            <artifactId>smart-flow-database-mysql-spring-boot-starter</artifactId>
            <version>0.6.0</version>
        </dependency>
        <!-- 主要用内置日志框架-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
        </dependency>
    </dependencies>
```

### 2. 配置数据库
因为采用默认配置数据库，同时需要插件识别，需要在resources下创建flow.xml文件, 内容如下:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<smart-flow>
    <!-- 全局配置 -->
    <settings>
        <!-- 雪花算法机房ID、工作机器id -->
        <property name="unique_roomid">1</property>
        <property name="unique_workid">1</property>
        <!-- 分页变量使用，若与项目定义key不同，则替换标签内key -->
        <property name="sql_currentPage">currentPage</property>
        <property name="sql_pageNo">pageNo</property>
        <property name="sql_pageSize">pageSize</property>
        <property name="sql_total">total</property>
        <property name="sql_records">records</property>
        <property name="sql_pages">pages</property>
    </settings>

    <!-- 数据源配置 -->
    <dataSources>
        <!-- 默认数据源配置 -->
        <dataSource id="default" type="mysql">
            <property name="driverClassName">com.mysql.cj.jdbc.Driver</property>
            <property name="url">jdbc:mysql://xxx:3306/xxx?useUnicode=true&characterEncoding=utf8&serverTimezone=Asia/Shanghai</property>
            <property name="username">xxx</property>
            <property name="password">xxx</property>
        </dataSource>

        <!-- 业务数据源配置示例 -->
        <dataSource id="business" type="mysql">
            <property name="driverClassName">com.mysql.cj.jdbc.Driver</property>
            <property name="url">jdbc:mysql://xxx:3306/xxx?useUnicode=true&characterEncoding=utf8&serverTimezone=Asia/Shanghai</property>
            <property name="username">xxx</property>
            <property name="password">xxx</property>
        </dataSource>
    </dataSources>
</smart-flow>
```


### 3. 配置application.yml
```yaml
server:
  port: 8080
  servlet:
    context-path: /

spring:
  application:
    name: smart-auth-back
  mvc:
    pathmatch:
      matching-strategy: ant_path_matcher  #路径匹配规则

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

### 4. 配置启动类忽略原数据源配置
若项目内已配置有数据源，可忽略此步骤。 
```java
package fun.smartflow;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class App {
    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }
}
```

### 5. 在项目resources下创建以biz结尾的文件

![test文件](/images/biz_demo_file.png)

### 6. 双击打开即看到初始界面
![初始界面](/images/biz_demo_init.png)

### 7. 示例
我们在下方示例模块提供了丰富的例子，可以参考学习。
