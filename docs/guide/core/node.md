# 组件

组件是工作流中的基本处理单元，负责执行具体的业务逻辑。

我们只提供了流程中一些最基础的组件，考虑到用户各个业务场景可能不同，用户可以仿照[自定义组件](/guide/advanced/UserDefinedNode.html)自定义组件，我们后续会补充更多的starter助力业务提升。

![组件](/images/guide/node/baseComponent.png)


## 基础组件

### 开始节点
   - 工作流的起点
   - 只能有一个出边

### 结束节点
   - 工作流的终点
   - 只能有一个入边
   - 可以返回结果数据

### 空操作节点
   - 没有任何实际作用，主要考虑节点多了，可以用他做中转美化流程图

### 异常节点
   - 用于处理异常情况，右键编辑节点输出错误信息

   ![异常节点](/images/guide/node/exception.png)

   我们在[实例3](/guide/example/demo3.md)来演示异常组件

## 简单组件

### 输出组件
   - 将流程中对象打印到控制台
   - 可以设置输出字段

   ![输出组件](/images/guide/node/print.png)

   我们在[实例4](/guide/example/demo4.md)来演示输出组件

### 赋值组件
   - 将流程中对象赋值到变量
   - 可以设置赋值字段
   - 如果赋值类型为常量，则表示给'左值'赋值为固定值
   - 如果赋值类型为变量，则表示将右值变量key对应的值赋值给左值

   ![赋值组件](/images/guide/node/assign.png)

   我们在[实例5](/guide/example/demo5.md)来演示赋值组件

### 基础类型转换
   - 将流程中对象转换为指定类型
   - 可以设置转换字段


   ![基础类型转换](/images/guide/node/baseTypeConvert.png)

   我们在[实例6](/guide/example/demo6.md)来演示基础类型转换组件

## 工具组件

### 获取系统配置
   - 获取系统变量的值

   ![获取系统配置](/images/guide/node/getSystemConfig.png)

   - 入参：系统变量key
   - 绑定值：将获取到的值绑定到上下文具体的key

### 日期组件
   - 获取当前日期
   - 格式化日期

   ![日期组件](/images/guide/node/dateUtil.png)

### 数值运算组件
   - 引用变量之间数值的加减乘除运算

   ![日期组件](/images/guide/node/numberUtil.png)

### 随机工具组件
   - 随机生成数字
   - 随机生成字符串

   ![随机工具组件](/images/guide/node/random.png)

### 唯一性ID组件
   - 生成唯一性ID, 支持UUID和雪花算法

   ![唯一性ID组件](/images/guide/node/uniqueId.png)

### Base64编码组件
   - 将字符串编码为Base64
   - 将Base64解码为字符串

   ![Base64编码组件](/images/guide/node/base64.png)

## 高阶组件

### SQL工具
   - 需要安装对应的包
   - 支持AI生成SQL语句
   ![SQL工具](/images/guide/node/sql.png)


### Groovy
   - 支持groovy脚本
   - 支持AI辅助编写
   ![Groovy](/images/guide/node/groovy.png) 

### 自定义组件
   - 业务上可能需要自定义组件，比如复杂的逻辑使用java写的，或者调用三方服务等
   - 自定义组件需要用户自己实现，然后注册到系统中
   - 可以看下我们的进阶使用增加自定义组件
   ![自定义组件](/images/guide/node/custom.png) 

