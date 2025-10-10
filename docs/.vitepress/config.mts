import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "fylcr学习笔记",
  description: "fylcr在学习新知识时留下的笔记",
  srcDir: './note',
  cleanUrls: true,
  lastUpdated: true,
  base: '/note/',
  themeConfig: {
    nav: [
      { text: '博客', link: 'https://fylcr.dpdns.org/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fylcr/note' }
    ]
  }
})
