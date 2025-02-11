---
home: true
heroImage: /images/logo.png
heroText: Smart Flow
tagline: 轻量级可视化工作流引擎
actions:
  - text: 快速开始 →
    link: /guide/getting-started.html
    type: primary
  - text: 项目简介
    link: /guide/
    type: secondary

features:
  - title: 💡 简单易用
    details: 提供简单直观的API，快速集成到您的项目中。可视化设计器让工作流搭建更轻松。
  
  - title: 🚀 功能强大 
    details: 支持复杂的工作流定义，内置丰富的节点类型，满足各类业务场景需求。

  - title: 🔌 高度可扩展
    details: 插件化架构设计，支持自定义节点和功能扩展。轻松扩展以满足特定业务需求。

  - title: 📦 开箱即用
    details: 基于 Spring Boot，快速集成到现有项目。详细的文档和示例助您快速上手。

  - title: ⚡️ 高性能
    details: 优化的执行引擎，确保工作流高效运行。支持异步执行和并行处理。

  - title: 🛠️ 可视化监控
    details: 提供工作流执行状态可视化监控，轻松掌握流程运行情况。

head:
  - - meta
    - name: keywords
      content: Smart Flow,工作流,流程引擎,可视化
  - - meta
    - name: description 
      content: Smart Flow 是一个基于 Spring Boot 的轻量级可视化工作流引擎

footer: MIT Licensed | Copyright © 2024-present Smart Flow

---

<div class="custom-home-page">

## 🎯 设计目标

Smart Flow 旨在提供一个**简单**、**灵活**、**高效**的工作流引擎，帮助开发者快速构建业务流程。

## 🚀 快速体验
```bash
1. 下载依赖插件
从idea插件市场, 搜索smart-flow-plugin并下载。 注意idea版本需要

2. 参开集成文档
git clone https://github.com/89780012/smart-auth-back.git

安装依赖
cd smart-auth-back && mvn install

启动示例
mvn spring-boot:run
```
---

## 🌟 核心优势

- 📝 **可视化设计**: 直观的流程设计器，所见即所得
- 🔌 **插件化架构**: 支持自定义节点，扩展性强
- 🚀 **性能优化**: 经过性能优化的执行引擎
- 📦 **开箱即用**: 快速集成到 Spring Boot 项目

## 🤝 参与贡献

欢迎加入 Smart Flow 社区！[贡献指南](https://github.com/89780012/smart-flow-plugin)

<div class="features-section">
<div class="feature-item">
<h3>💬 交流讨论</h3>
<a href="https://github.com/89780012/smart-flow-plugin/issues" target="_blank">GitHub Discussions</a>
</div>

<div class="feature-item">
<h3>🐛 问题反馈</h3>
<a href="https://github.com/89780012/smart-flow-plugin/issues" target="_blank">GitHub Issues</a>
</div>

<div class="feature-item">
<h3>📖 使用文档</h3>
<a href="/guide/getting-started.html">快速开始</a>
</div>
</div>

</div>

<style>
.custom-home-page {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 2.5rem;
}

.features-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.feature-item {
  padding: 1.5rem;
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  transition: all 0.3s;
}

.feature-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
}

.feature-item h3 {
  margin-top: 0;
}

.feature-item a {
  color: var(--vp-c-brand);
  font-weight: 500;
  text-decoration: none;
}

.feature-item a:hover {
  text-decoration: underline;
}

:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);
}
</style> 