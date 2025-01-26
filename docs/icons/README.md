# 图标使用指南

本文档展示了系统支持的内置图标类型及其使用方法。

## 图标总览

系统提供了以下几类图标:

- 业务组件 - 常用的业务操作图标
- 文本处理组件 - 处理不同文本
- 远程调用 - 远程调用
- 中间件 - 特定功能相关图标

>自定义图标暂不支持, 后续会支持

## 使用方法

需要在java项目resources下创建components.xml文件(没有则创建), 然后复制以下代码:
```xml
<components>
    <component-type>
        <item>
            <name>email</name>
            <type>email</type>
            <!-- 若不填写, 则使用默认图标 -->
            <icon>/icons/ext/email.svg</icon>  
        </item>
    </component-type>
</components>
```
## 图标列表

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
