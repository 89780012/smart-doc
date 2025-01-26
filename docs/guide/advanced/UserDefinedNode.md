# 自定义业务节点

用户自定义业务节点允许您根据业务需求扩展工作流的功能。本文将介绍如何创建和使用自定义节点。

## 概述

自定义节点可以:
- 实现特定的业务逻辑
- 集成外部系统
- 扩展工作流功能
- 复用常用业务组件

## 创建自定义节点


### 1. 创建节点类
首先定义一个spring bean类，定义好名称和需要实现的方法 
```java
import cc.xiaonuo.flow.annotation.FlowComponent;
import cc.xiaonuo.flow.engine.FlowContext;

@FlowComponent("serialNumber")
public class SerialNumber{

    /**
     * 获取流水号
     * @param context
     */
    public void getSerialNumber(FlowContext context){
            
    }

}
```
### 2. 配置自定义节点
我们已经在插件内配置一批常用的图标，可以看 [图标](/icons/) 板块
```xml
<?xml version="1.0" encoding="UTF-8"?>
<components>
    <!-- 节点类型 -->   
    <component-type name="business" display-name="业务组件">
        <!-- 节点 -->
        <item>
            <!-- 节点名称 -->   
            <name>获取流水号</name>
            <!-- 节点标识 -->
            <type>get_serial_number</type>
            <!-- 节点图标 -->
            <icon></icon>.
            <!-- 节点对应的spring bean -->
            <beanRef>serialNumber</beanRef>
            <!-- 节点对应的方法 -->
            <method>cc.xiaonuo.test.SerialNumber#getSerialNumber</method>
            <!-- 异步 0:同步 1:异步 -->
            <threadType>0</threadType>
            <!-- 节点描述 -->
            <description>获取各个渠道的流水号</description>
            <!-- 节点配置 -->
            <config>
                <!-- 节点配置表头 -->
                <header>
                    <!-- 是否可编辑 0:不可编辑 1:可编辑 -->
                    <column isEdit="false">渠道</column>
                    <column isEdit="true">值</column>
                    <!-- width列宽 -->
                    <column isEdit="false" width="100">描述</column>
                </header>
                <!-- 节点配置数据 -->
                <data>
                    <row>
                        <column>channel</column>
                        <column></column>  <!-- 用户在表单内输入的值 -->
                        <column>渠道号</column>  <!-- 节点描述 -->
                    </row>
                    <row>
                        <column>bindKey</column>
                        <column></column>  <!-- 用户在表单内输入的值 -->
                        <column>绑定变量到上下文</column>  <!-- 节点描述 -->
                    </row>
                </data>
            </config>
        </item>
    </component-type>
</components>
```
### 3. 效果展示

打开任意biz组件，可以看到我们自定义的节点
![业务组件](/images/user_custom_node.png)

将该组件拖入到画布中，右键组件配置可以看到我们配置的一些属性
![节点配置](/images/user_custom_config.png)

### 4. 示例
请看 [示例](/guide/example/demo1.html) 继续学习。
