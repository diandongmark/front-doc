---
sidebar: auto
---


## 变量
- 标准变量采用 ***“驼峰式命名”***
- 特殊名称的命名不需要按照 ***“驼峰是命名”*** ，例举：
  - ```Android``` 在变量名中大写第一个字母
  ```
  let Android = getSystemOs()
  ```
  - ```iOS``` 在变量名中小写第一个，大写后两个字母
  ```
  let iOS = getSystemOs()
  ```
  - ***常量*** 全大写，用下划线连接
  ```
  const PI = 3.1415926
  const CHINA_TEL_TOP = '+86'
  ```
  - 构造函数，大写第一个字母
- 其他特殊名称，没有明确的对、错，现统一格式为以 ***单词*** 划分的 ***小驼峰格式***
  - ```userinfo``` // userinfo 为单词
  - ```username``` // username 为单词
  - ```openId``` // 小驼峰
  - ```appId``` // 小驼峰

## 注释
### 单行注释
- 双斜线后，必须跟一个空格；
```
✅
// 注释

❌
//注释
```
- 缩进与下一行代码保持一致；
```
✅
let test = {
  a: 1,
  b: 2,
  // 测试
  c: 3
}

❌
let test = {
  a: 1,
  b: 2,
// 测试
  c: 3
}
```
- 可位于一个代码行的末尾，与代码间隔一个空格。
```
✅
let a = 123 // 测试

❌
let a = 123//测试
let a = 123// 测试
let a = 123       // 测试
```

### 多行注释
- 最少三行, ```*```后跟一个空格
```
/**
 * 正确示例
 */

/**
 *错误示例
 */

/** 错误示例
*/
```
- 多行注释的使用时机：
  - 难于理解的代码段
  ```
  // 代码逻辑复杂时，应注释好逻辑思路
  if() {
    if() {}
  } else {
    if() {}
    callback()
  }
  ```
  - 可能存在错误的代码段
  ```
  // 在不确定的逻辑，应说明情况
  if(a==b || a==c || a==d) {}
  ```
  - 浏览器特殊的HACK代码
  ```
  // 应注释为何使用插件，解决了什么问题
  const hackPlug = hack()
  const fixBug = hackPlug()
  ```
  - 业务逻辑强相关的代码
  ```
  // 代码逻辑拆解封装后，应注释关联性
  function (a) {
    doSome...
    return a
  }
  ```

### 文档型注释
- 各类标签```@param, @method```等可参考 [JSDoc Guide](http://yuri4ever.github.io/jsdoc/#@module)

```注``` 不做强制的格式要求，但应遵循基本规则，并能正确明示参数属性的用途

```
// 函数逻辑中，逻辑注释的情况较为多
method: {
  ✅
  /**
   * 获取参数，处理 router 路中，query 不能获取的情况
   * @params { string } str 传入的 url 字符
   * @returns { object } 返回处理完的参数对象
   */
  getParams(str) {}

  ✅
  /**
   * 获取参数，处理 router 路中，query 不能获取的情况
   * str 传入的 url 字符
   * 返回处理完的参数对象
   */
  getParams(str) {}

  ❗️ 没有错误，但应尽量描述清晰  
  // 获取 url 参数转换成对象
  getParams(str) {}

  ❌
  getPrams(str) {}
}
```
