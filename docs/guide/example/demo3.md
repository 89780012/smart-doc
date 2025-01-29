# 示例3: 异常节点[组件]

流程图

![流程图](/images/example/demo3/flow_exception.png)

我们对着异常节点右键设置异常条件, <span style="color: red">优先判断有条件的连接线, 若返回true,直接往下执行，不再验证其他条件,在这我们入参设置num1,值设为字符串'1',主动抛出异常</span>

入参参数,注意入参类型, 若不同,会对入参进行类型转换

![入参](/images/example/demo3/exception_input.png)


异常条件

![异常条件](/images/example/demo3/exception_condi.png)


启动项目,通过apipost调用接口,执行结果 

![执行结果](/images/example/demo3/exception_result.png)

