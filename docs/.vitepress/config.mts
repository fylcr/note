import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "fylcr学习笔记",
  description: "fylcr在学习新知识时留下的笔记",
  markdown: {
    image: {
      lazyLoading: true
    },
    math: true
  },
  srcDir: './note',
  cleanUrls: true,
  lastUpdated: true,
  base: '/note/',
  sitemap: {
    hostname: 'https://fylcr.dpdns.org/note/',
    lastmodDateOnly: true
  },
  themeConfig: {
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    notFound: {
      title: '页面未找到',
      quote:
        '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页'
    },
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',
    editLink: {
      pattern: 'https://github.com/fylcr/note/blob/main/docs/note/:path',
      text: '在 GitHub 上编辑此页面'
    },
    lastUpdated: {
      text: '最后更新于'
    },
    logo: '/logo.png',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            noResultsText: '未找到匹配结果',
            resetButtonTitle: '清空搜索',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },
    nav: [
      { text: '博客', link: 'https://fylcr.dpdns.org/' },
      { text: '总览', link: '/overview/preface' }
    ],

    sidebar: {
      // 当用户位于 `guide` 目录时，会显示此侧边栏
      '/overview/': [
        {
          text: '总览',
          items: [
            { text: '前言', link: '/overview/preface' },
            {
              text: '目录',
              collapsed: false,
              items: [
                {
                  text: '自然科学',
                  collapsed: true,
                  items: [
                    { text: '', link: '' },
              ]},
                {
                  text: '农业科学',
                  collapsed: true,
                  items: [
                    { text: '', link: '' },
              ]},
                {
                  text: '医药科学',
                  collapsed: true,
                  items: [
                    { text: '', link: '' },
              ]},
                {
                  text: '工程与技术科学',
                  collapsed: true,
                  items: [
                    { text: '', link: '' },
              ]},
                {
                  text: '人文与社会科学',
                  collapsed: true,
                  items: [
                    { text: '', link: '' },
              ]},
              ],
              link: '/overview/content'
            }
          ]
        }
      ],

      // 当用户位于 `config` 目录时，会显示此侧边栏
      '/config/': [
        {
          text: 'Config',
          items: [
            { text: 'Index', link: '/config/' },
            { text: 'Three', link: '/config/three' },
            { text: 'Four', link: '/config/four' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fylcr/note' }
    ],

    footer: {
      message: '基于 <a href="https://github.com/fylcr/note/blob/main/LICENSE">Apache License 2.0</a> 许可证发布。',
      copyright: '<img src="https://img.shields.io/github/stars/fylcr/note" alt="stars" style="height: 20px;">'
    }
  }
})
