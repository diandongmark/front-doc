---
sidebar: auto
---


## 变量
- 标准变量采用 “驼峰式命名”
- 特殊名称的命名不需要按照 “驼峰是命名”，例举：
  - Android 在变量名中大写第一个字母
  - iOS 在变量名中小写第一个，大写后两个字母
  - 常量全大写，用下划线连接
  - 构造函数，大写第一个字母
- 其他特殊名称，没有明确的对、错，现统一格式
  - userinfo
  - username
  - openid
  - appid

## 注释
### 单行注释
- 双斜线后，必须跟一个空格；
- 缩进与下一行代码保持一致；
- 可位于一个代码行的末尾，与代码间隔一个空格。

### 多行注释
- 最少三行, '*'后跟一个空格
- 多行注释的使用时机：
  - 难于理解的代码段
  - 可能存在错误的代码段
  - 浏览器特殊的HACK代码
  - 业务逻辑强相关的代码

### 文档注释
各类标签@param, @method等请参考 [JSDoc Guide](http://yuri4ever.github.io/jsdoc/#@module)

```注``` 不做强制的格式要求，但应遵循基本的数值原则，将每个参数属性的用途标明