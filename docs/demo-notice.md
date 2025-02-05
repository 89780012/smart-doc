# 在线演示

::: tip 温馨提示
这是一个演示环境，后台使用的此插件开发，前端也是自研的，使用ant design vue逐步完善中。
:::

## 演示账号

您可以使用以下账号登录系统：

| 账号类型 | 用户名 | 密码 | 说明 |
|---------|--------|------|------|
| 管理员 | admin | 123456 | 具有所有权限 |

## 使用须知

### 数据说明
- 系统每天凌晨 3 点会自动清理所有测试数据
- 请不要在演示环境中存储重要信息


### 系统状态
- 演示环境运行时间：7x24 小时
- 系统维护时间：每周一 02:00-04:00
- 如遇到问题，请通过 [Issues](https://github.com/89780012/smart-flow-plugin/issues) 反馈

## 界面预览

<div class="preview-container">
  <div class="preview-item">
    <img src="/images/preview/workflow.png" alt="流程设计器">
    <p>流程设计器</p>
  </div>
  <div class="preview-item">
    <img src="/images/preview/home.png" alt="前端工作台">
    <p>前端工作台</p>
  </div>
  <div class="preview-item">
    <img src="/images/preview/table.png" alt="前端表格页">
    <p>前端表格页</p>
  </div>
</div>

## 开始体验

准备好了吗？点击下方按钮访问演示站点：

<div class="action-container">
  <a href="https://demo.smartflow.fun" target="_blank" class="demo-button">
    立即体验
  </a>
</div>

<style>
.preview-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.preview-item {
  border: 1px solid #eaecef;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;
}

.preview-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.preview-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.preview-item p {
  text-align: center;
  padding: 10px;
  margin: 0;
  background: #f6f8fa;
  border-top: 1px solid #eaecef;
}

.action-container {
  text-align: center;
  margin: 40px 0;
}

.demo-button {
  display: inline-block;
  padding: 12px 36px;
  background-color: #3eaf7c;
  color: white;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s;
  border: 2px solid #3eaf7c;
}

.demo-button:hover {
  background-color: #fff;
  color: #3eaf7c;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(62,175,124,0.3);
}

.custom-container.tip {
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 30px;
}
</style> 