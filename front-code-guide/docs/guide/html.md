---
sidebar: auto
---


## 语法
在未来的技术框架规划中，会计划整合一套 eslint、自动格式化的基础环境，但在这之前应尽量遵循基本规范
- 缩进使用 ***（2个空格）***
- 在属性上，使用 ***双引号***，不要使用单引号
- 属性名采用 ***“串式命名法”*** ，即：***全小写，用中划线做分隔符***
```
<Button some-atter="someVar">
  按钮
</Button>

<Banner :data="bannerList" limit-number="2" />
```

## 属性顺序
属性应该按照特定的顺序出现以保证易读性
- ```class```、```id```、```ref```
  - ```class``` 是为复用设计的，所以应处在第一位
  - ```id``` 作为标识应靠前，但是使用频率较 ```class```  低，所以将它放在第二位
  - ```ref``` 同 ```id```，通常情况两者只需要使用一种
- 

- ```src，type，href，value``` 等
- ```readonly，disabled``` 等
  - 常规属性放在第二序列
- ```for，if，style``` 等
- ```event：click，change，select``` 等
  ```for、if、style、event``` 等逻辑属性放在尾部
```
<div
  class="list"
  id="listWrapper"
  ref="listRef"
>
  <div
    // css 名称等优先级最高
    class="list-item"

    // 常规属性
    :src="item.src"
    :type="item.type"

    // 尾部属性
    v-for="(item, i) in list"
    :key=item.id
    @click="clickItem(item)"
  >
  </div>
</div>
```

## 简写
```boolean``` 属性指不需要声明取值的属性，（ ***HTML5*** 并不需要）

```boolean``` 属性的存在表示取值为 ```true```，不存在则表示取值为 ```false```。
```
<!-- 表示禁用 -->
<Button disabled>按钮</Button>

<!-- 变量情况 -->
<Button :disabled="disabled">按钮</Button>

<!-- 错误使用 -->
<Button disabled="1">按钮</Button>
```

## 组件的 Props 设计
- ```slot``` 尽量利用 ```slot``` 来完成基础文字的展示功能
```
<!-- 应用部分 -->
<Button>按钮</Button>

<!-- 组件部分 -->
<div class="custom-button">
  <slot></slot>
</div>
```
- 属性：属性设计应遵循
  - 数据: 数据应单独为一个独立属性传入
  ```
  <Banner :data="bannerData"></Banner>
  ```
  - 配置: 配置项过多时应传入 object 来实现分组，避免过多的属性设计，导致维护困难
  ```
  <Banner :data="bannerData" config="bannerConfig"></Banner>

  <!--错误的示例 -->
  <Banner
    :data="bannerData"
    :auto="bannerAuto"
    :deplay="someDeplay"
    :countTime="time"
    :hideButton="hideButton"
    :beforeData="getBeforeData"
  >
  </Banner>

  <!-- 函数设计，也应遵循这个设计思路 -->
  ```
  - 事件: 事件作为独立项交互，并遵循语义化规则

## 其他
- ***html*** 的设计思路应尽量遵循 ***文档流***
- 避免过多的使用 ***定位***
- 避免过多使用 ***固定宽、高***
- 避免无意义的节点嵌套
- ***实用性、扩展性*** 高于代码的 ***完美性***（仅对强迫症程序员）
