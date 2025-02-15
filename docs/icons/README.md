# 图标使用指南

本文档展示了系统支持的内置图标类型及其使用方法。

## 图标总览

系统提供了以下几类图标:

- 业务组件 - 常用的业务操作图标
- 文本处理组件 - 处理不同文本
- 远程调用 - 远程调用
- 中间件 - 特定功能相关图标

>自定义图标已经支持, 需要32X32的png图标, 请支持划到最下面。

## 使用方法

需要在java项目resources下创建components.xml文件(没有则创建), 然后复制以下代码:
```xml
<components>
    <component-type>
        <item>
            <name>email</name>
            <type>email</type>
            <!-- 若不填写, 则使用默认图标 biz.svg 就是齿轮那个 -->
            <icon>/icons/ext/email.svg</icon>  
        </item>
    </component-type>
</components>
```
## 内置图标

### 业务组件

| 图标 | 类型 | 描述 |
|------|------|------|
| ![](/icons/biz.svg) | biz | 默认图标 |
| ![](/icons/ext/email.svg) | email | 邮箱 |
| ![](/icons/ext/chart_pie.svg) | chart_pie | 统计-饼图 |
| ![](/icons/ext/chart_bar.svg) | chart_bar | 统计-柱图 |
| ![](/icons/ext/report.svg) | report | 报表 |
| ![](/icons/ext/biz_query.svg) | biz_query | 业务查询 |
| ![](/icons/ext/biz_notify.svg) | biz_notify | 业务通知 |

### 文本处理组件

| 图标 | 类型 | 描述 |
|------|------|------|
| ![](/icons/ext/csv.svg) | csv | csv处理器 |
| ![](/icons/ext/excel.svg) | excel | excel |

### 远程调用

| 图标 | 类型 | 描述 |
|------|------|------|
| ![](/icons/ext/http.svg) | http | http |


### 中间件

| 图标 | 类型 | 描述 |
|------|------|------|
| ![](/icons/ext/api.svg) | api | api |
| ![](/icons/ext/redis.svg) | redis | redis |
| ![](/icons/ext/kafka.svg) | kafka | kafka |

还在不断增加中...


## 外置图标

### 将图标放置到项目文件夹中

我是从阿里图标随便找的一个

![](/images/icons/importIcon1.png)

### 在component.xml 加入配置

![](/images/icons/importIcon2.png)

### 重新打开biz文件,查看效果

![](/images/icons/importIcon3.png)

::: tip 温馨提示
注意: <font color="red">因插件内开发限制,需要引入 32*32 的png图标才可以，不要使用其他格式，区别于内置的svg图标。</font>
:::

阿里图标截图

![](/images/icons/importIcon4.png)