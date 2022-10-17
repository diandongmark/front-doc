/*
 * @Author: wangzuo wangzuo@diandong.com
 * @Date: 2022-10-13 09:18:28
 * @LastEditors: wangzuo wangzuo@diandong.com
 * @LastEditTime: 2022-10-13 17:33:01
 * @FilePath: \归档\docs\.vuepress\config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  base: '/front-develop-guide/',
  title: '开发指引',
  description: '开发流程，培训',
  /** 插件配置 */
  plugins: [
    '@vuepress/back-to-top' // 返回顶部
  ],
  /** 主题配置 */
  themeConfig: {
    logo: '/logo-h.png',
    // 菜单导航
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '开发流程',
        link: '/guide/flow.md'
      },
      {
        text: '新人培训',
        link: '/guide/train.md'
      },
    ],
  }
}