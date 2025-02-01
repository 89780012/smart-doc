import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchPlugin } from '@vuepress/plugin-search'
import { iconsPlugin } from '@vuepress/plugin-icons'

export default defineUserConfig({
  bundler: viteBundler(),
  lang: 'zh-CN',
  title: 'Smart Flow',
  description: 'Smart Flow 项目文档',
  head: [
    ['link', { rel: 'icon', href: '/images/logo.png' }]
  ],
  
  theme: defaultTheme({
    logo: '/images/logo.png',
    repo: 'your-org/smart-flow',
    docsDir: 'docs',
    editLink: true,
    lastUpdated: true,
    contributors: true,
    
    navbar: [
      { 
        text: '🏠 首页', 
        link: '/' 
      },
      { 
        text: '📖 指南', 
        link: '/guide/' 
      },
      { 
        text: '🎨 内置图标', 
        link: '/icons/' 
      },
      // { text: 'API参考', link: '/api/' },
      { 
        text: '🎮 在线演示',
        children: [
          { text: '⚠️ 注意事项', link: '/demo-notice' },
          { text: '🔗 跳转网站', link: 'https://demo.smartflow.fun', target: '_blank' },
        ]
      },
      { 
        text: 'ℹ️ 了解更多',
        children: [
          { text: '📋 更新日志', link: '/changelog' }
          // { text: '贡献指南', link: '/contributing' },
        ]
      }
    ],
    
    sidebar: {
      '/guide/': [
        {
          text: '📝 介绍',
          children: [
            '/guide/README.md',
            '/guide/getting-started.md',
          ],
        },
        {
          text: '💡 核心概念',
          children: [
            '/guide/core/workflow.md',
            '/guide/core/node.md',
          ]
        },
        {
          text: '🚀 进阶使用',
          children: [
            '/guide/advanced/UserDefinedNode.md',
          ]
        },
        {
          text: '🌰 示例',
          children: [
            '/guide/example/demo1.md',
            '/guide/example/demo2.md',
            '/guide/example/demo3.md',
            '/guide/example/demo4.md',
          ]
        }
      ],
      '/api/': [
        {
          text: '📚 API参考',
          children: [
            '/api/README.md',
            '/api/workflow.md',
            '/api/node.md',
            '/api/event.md',
            '/api/plugin.md'
          ]
        }
      ],
      '/icons/': [
        {
          text: '🎨 介绍',
          children: [
            '/icons/README.md',
            '/icons/all_import.md'
          ]
        }
      ],
    }
  }),

  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索文档'
        }
      }
    })
  ]
}) 