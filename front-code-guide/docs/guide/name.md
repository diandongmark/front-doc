---
sidebar: auto
---


## 命名方式
- 串式命名法
  
  即 ***小写英文***、***中划线*** 。
  ```
  home-banner
  home-slider
  shop // 商城页
  shop-detail // 商品-详情
  ```
- 大驼峰命名法
  
  即开头 ***首字母大写***，后面接的 ***动作名称、语义名称*** 首字母均 ***大写***。
  ```
  Button // 按钮
  Icon // 图标
  Swiper
  ```
- 小驼峰命名法

  即开头 ***首字母小写***，后面接的 ***动作名称、语义名称*** 首字母均 ***大写***。
  ```
  listConfig // 列表、配置
  tabList // 选项卡、列表
  tabAct // 选项卡、选中｜激活
  ```

### 其他约定命名
其他特殊情况下，自行约定后的命名规范。
- 全局命名
  
  即 ```$``` 开头的小驼峰格式，以 ***Vue*** 为例，在添加全局公用属性、方法时适用。
  ```
  $baseUrl // Vue 下挂载的基础地址
  $env // Vue 下挂载的环境信息
  ```
- 其他命名
  
  在实际情况中，会有需要跟其他对象、参数合并的类似情况，为尽量避免冲突
  
  现约定以 ```_``` 开头的小驼峰格式来区分，实际使用根据自身代码情况斟酌。
  ```
  // 不知配置的情况下
  import config from 'config'
  const someItem = {
    ...config,
    _selectIndex: 0
  }

  // 参数冲突的情况下
  someMonted(item) {
    console.log('click:', item)
    this.$emit('clickComponent', {
      ...item,
      _name: 'some' + item.name
    })
  }
  ```



## 项目命名
规范的项目命名，不仅美观同时也利于阅读理解、分析查找。
  
### 规则
- 全部采用 ***“串式命名法”*** ，即：***英文小写 + “-”*** 链接符号组成。
- 命名应以 ***“项目英文名称” - “项目类型的顺序组成”*** 。
```
scientific-research-platform-admin // 科研-平台-管理端
scientific-research-platform-pc // 科研-平台-PC前端
scientific-research-platform-service // 科研-平台-服务端（此命名后端约定，仅举例）

// future
public-health-admin // 公共卫生-管理端
public-health-h5 // 公共卫生-移动端
public-health-uni // 公共卫生-uniapp端（具体类型在项目简介中说明）
```

#### 项目类型说明
```
project-name-pc // 电脑端 web 项目
project-name-h5 // 移动端 web 项目
project-name-admin // 管理端 web 项目
project-name-uni // uni项目
project-name-other // 其他项目
```
```
/**
 * uniapp 可开发多平台项目，所以 uni 即代表：小程序、H5、App
 * 具体项目类型，应在 git 项目说明中详细描述
 */
```



## 文件、目录命名

### 目录命名
- 目录的命名采用 ***“串式命名法”*** 。
- 命名应语义化、***简洁、明确*** 。
```
home // 首页模块文件夹
shop // 商城模块文件夹
user // 个人中心模块
```

### 文件命名
- 文件的命名采用 ***“串式命名法”*** 。
- 命名应语义化，在保证描述 ***精准、清晰*** 的前提下，尽量简洁。
  - 首页、单独 ***JS*** 均应命名为 ```index```
```
home
  - index.vue // 首页
  - search.vue // 搜索页

shop
  - index.vue // 商城首页
  - detail.vue // 商城详情页

user
  - index.vue // 个人中心首页
  - userinfo.vue // 修改信息页
  - agree.vue // 个人协议相关
  - setting.vue // 个人应用设置
```

### 组件命名
- 组件的命名采用 ***“大驼峰命名法”*** 。
- 命名应语义化，在与其他业务组件同层时，应加上页面前缀来区分，若已分割独立文件夹存放组件，可以采用简略、清晰的命名。
```
components
  - Button.vue // 按钮组件
  - Banner.vue // 版块图
  - Swiper.vue // 轮播图

// 推荐的组件命名
components
  - some // 文件夹下的相关依赖
    - other.scss
    - lib.js
  - Some.vue // 组件

// 不推荐，但不强制修改，多为框架中自带，但依然可以通过：大驼峰理解为组件
components
  - Some // 组件文件夹
    - index.vue
    - index.scss
    - img
      - some.png
```

### 资源命名
- 资源的命名采用 ***“串式命名法”***
- 资源命名应遵循一定的前缀词，增强可读性。
  - 资源词缀例举：
    - 根据类型划分：```img-``` ```icon-```
    - 根据页面划分：```home-``` ```home-icon-```
    - 根据功能划分： ```nav-``` ```menu-```



## 目录的划分
采用技术框架的不同，结构目录会有些许差异，但是层级结构相仿。实际开发中应保持 ***所使用技术框架*** 的设计思路。

本文讲述的为业务逻辑下目录结构的设计，主要遵循 2个策略：```“全局分配，就近原则”```

### 全局分配
所有涉及多次用的 ***依赖、插件、资源、API*** 等等都应放置在顶层目录下 ```src/```。
```
// 例举
project/src
  - api
    - app.js // 存放 APP 相关接口，用户登录、登出，token、配置信息获取等等
  - assets
  - compoents // 涉及到复用、通用性强的组件，应统一在顶层 components 下
    - Button
    - Icon
    - Loading // 通用的家在
    - Title // 通用的标题
  - store
  - views

```
- 如何理解可复用性：```login、user、config``` 等必然为全局 ```API``` ，其他组件、资源同理

### 就近原则
所有非复用的：***组件、插件、数据资源、接口API*** ，全部可放置在当前页面对应的资源文件夹下。
```
project/src/views

views
  - home
    index // 首页依赖文件夹
      components // 组件
        home-title
          - someLib.js
        - HomeButton.vue
        - HomeTitle.vue
    search
      api.js
      data.json // 假定依赖的数据
    index.vue
    search.vue
  - shop 
  - user
```
