import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "fylcr学习笔记",
  description: "fylcr在学习新知识时留下的笔记",
  srcDir: './note',
  cleanUrls: true,
  lastUpdated: true,
  base: '/note/',
  sitemap: {
    hostname: 'https://fylcr.dpdns.org/note/',
    lastmodDateOnly: true
  },
  themeConfig: {
    nav: [
      { text: '博客', link: 'https://fylcr.dpdns.org/' },
      { text: '总览', link: '/overview' }
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
    ],

    footer: {
      message: '基于 <a href="https://github.com/fylcr/note/blob/main/LICENSE">Apache License 2.0</a> 许可证发布。',
      copyright: '<img src="https://img.shields.io/github/stars/fylcr/note" alt="stars" style="height: 20px;">'
    }
  }
})
