import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'JavaScript 心智💗模型',
  description: 'Vite & Vue powered static site generator.',
  lastUpdated: true,
  base:"/javascript-mental-models/",

  themeConfig: {
    repo: 'sudongyuer/javascript-mental-models',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: false,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    algolia: {
      appId: '8J64VVRP8K',
      apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
      indexName: 'vitepress'
    },

    nav: [
      { text: 'Start', link: '/guide', activeMatch: '^/$|^/guide/' },
      {
        text: 'About ME',
        link: 'https://github.com/sudongyuer'
      }
    ],

    sidebar: {
      '/guide/': getGuideSidebar(),
      '/': getGuideSidebar()
    }
  }
})

function getGuideSidebar() {
  return [
    {
      text: '开始探索我们的JavaScript宇宙吧🌈',
      children: [
        { text: '第一章-什么是心智模型', link: '/guide/第一章-心智模型' },
        { text: '第二章-JavaScript宇宙', link: '/guide/第二章-JavaScript宇宙' },
        { text: '第三章-值与变量', link: '/guide/第三章-值与变量' },
        { text: '第四章-从内部学习', link: '/guide/第四章-从内部学习' },
        { text: '第五章-会见原始值', link: '/guide/第五章-会见原始值' },
        { text: '第六章-会见对象与函数', link: '/guide/第六章-会见对象与函数' },
      ]
    }
  ]
}
