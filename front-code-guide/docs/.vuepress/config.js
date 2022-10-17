module.exports = {
  base: '/front-code-guide/',
  title: '前端代码规范',
  description: '前端指导，代码规范',
  /** 插件配置 */
  plugins: [
    '@vuepress/back-to-top' // 返回顶部
  ],
  /** 主题配置 */
  themeConfig: {
    logo: '/logo-h.png',
    // 菜单导航
    nav: [
      { text: '首页', link: '/' },
      { text: '命名规范', link: '/guide/name.md' },
      { text: 'HTML', link: '/guide/html.md' },
      { text: 'CSS/SCSS', link: '/guide/style.md' },
      { text: 'JavaScript', link: '/guide/javascript.md' },
      { text: 'Git', link: '/guide/git.md' },
    ],
  }
}