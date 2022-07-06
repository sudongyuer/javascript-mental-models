import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'JavaScript 心智💗模型',
  description: 'JavaScript Mental Modules',
  lastUpdated: true,
  base:"/javascript-mental-models/",
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  ],
  themeConfig: {
    siteTitle: '❤️JavaScript心智模型',
    nav: [
      { text: 'Start', link: '/' },
      { text: 'AboutMe', link: 'https://github.com/sudongyuer' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sudongyuer/javascript-mental-models' },
    ],
    editLink: {
      pattern: 'https://github.com/sudongyuer/javascript-mental-models/tree/master/packages/javascript-mental-modules-doc/docs/:path',
      text: 'Edit this page on GitHub',
    },
    lastUpdatedText: '最后更新',
    algolia: {
      appId: '8J64VVRP8K',
      apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
      indexName: 'vitepress',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present sudongyuer',
    },
    sidebar: getSideBar(),
  },
})

function getSideBar(): DefaultTheme.Sidebar {
  return [
    {
      text: '开始探索我们的JavaScript宇宙吧🌈',
      collapsible: true,
      items: [
        { text: '第一章-什么是心智模型', link: '/guide/第一章-心智模型' },

        { text: '第二章-JavaScript宇宙', link: '/guide/第二章-JavaScript宇宙' },

        { text: '第三章-值与变量', link: '/guide/第三章-值与变量' },

        { text: '第四章-从内部学习', link: '/guide/第四章-从内部学习' },

        { text: '第五章-会见原始值', link: '/guide/第五章-会见原始值' },

        { text: '第六章-会见对象与函数', link: '/guide/第六章-会见对象与函数' },

        { text: '第七章-平等的价值', link: '/guide/第七章-平等的价值' },

        { text: '第八章-Properties(属性)', link: '/guide/第八章-Properties(属性)' },

        { text: '第九章-突变', link: '/guide/第九章-突变' },

        { text: '第十章-原型', link: '/guide/第十章-原型' },
      ],
    }
  ]
}
