const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Steamcord',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', { rel: 'icon', href: 'https://steamcord.io/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#6200ee' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'og:image', content: 'https://steamcord.io/logo.png' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Steamcord',
        link: 'https://steamcord.io'
      }
    ],
    sidebar: {
      '/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            '/guide/integration-guide'
          ],
        },
        {
          title: 'API Reference',
          collapsable: false,
          children: [
            '/api-reference/',
            '/api-reference/action-queue',
            '/api-reference/players-resource',
            '/api-reference/steam-group-queue'
          ],
        },
        {
          title: 'Integrations',
          collapsable: false,
          children: [
            '/integrations/rust-plugin'
          ]
        }
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
