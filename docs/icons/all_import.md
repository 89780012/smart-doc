# 快速使用

如果想全部引用并查看效果，则将以下配置复制至resources/components.xml文件中

## 配置
```xml
<?xml version="1.0" encoding="UTF-8"?>
<components>
    <component-type name="business" display-name="业务组件">
        <item>
            <name>邮件</name>
            <type>email</type>
            <icon>/icons/ext/email.svg</icon>
        </item>
        <item>
            <name>统计-饼图</name>
            <type>chart_pie</type>
            <icon>/icons/ext/chart_pie.svg</icon>
        </item>
        <item>
            <name>统计-柱图</name>
            <type>chart_bar</type>
            <icon>/icons/ext/chart_bar.svg</icon>
        </item>
        <item>
            <name>报表</name>
            <type>report</type>
            <icon>/icons/ext/report.svg</icon>
        </item>
        <item>
            <name>业务查询</name>
            <type>biz_query</type>
            <icon>/icons/ext/biz_query.svg</icon>
        </item>
        <item>
            <name>业务通知</name>
            <type>biz_notify</type>
            <icon>/icons/ext/biz_notify.svg</icon>
        </item>
    </component-type>
    <component-type name="txt" display-name="文本处理组件">
        <item>
            <name>csv处理器</name>
            <type>csv</type>
            <icon>/icons/ext/csv.svg</icon>
        </item>
        <item>
            <name>excel处理器</name>
            <type>start</type>
            <icon>/icons/ext/excel.svg</icon>
        </item>
    </component-type>
    <component-type name="remote" display-name="远程调用">
        <item>
            <name>http</name>
            <type>http</type>
            <icon>/icons/ext/http.svg</icon>
        </item>
    </component-type>
    <component-type name="middle" display-name="中间件">
        <item>
            <name>网关</name>
            <type>api</type>
            <icon>/icons/ext/api.svg</icon>
        </item>
        <item>
            <name>redis</name>
            <type>redis</type>
            <icon>/icons/ext/redis.svg</icon>
        </item>
        <item>
            <name>kafka</name>
            <type>kafka</type>
            <icon>/icons/ext/kafka.svg</icon>
        </item>
    </component-type>
</components>
```

## 效果

在扩展面板中即可看到扩展的图标

![效果](/images/all_import.png)
