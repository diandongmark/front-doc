---
sidebar: auto
---


## 语法
在未来的技术框架规划中，会计划整合一套 eslint、自动格式化的基础环境，但在这之前应尽量遵循基本规范
- 缩进使用 ***（2个空格）***
- 在属性上，使用 ***双引号***，不要使用单引号
- 属性名采用 ***“串式命名法”*** ，即：***全小写，用中划线做分隔符***
- 绑定的函数属性，应采用 ***串式命名***，函数事件使用 ***小驼峰命名***。
```
<Button some-atter="someVar">
  按钮
</Button>

<Banner :data="bannerList" limit-number="2" @some-change="someChange"/>
```

## 属性顺序
属性应该按照特定的顺序出现以保证易读性
- 第一梯队，标识命名
  - ```class```、```id```、```ref```
  - ```class``` 是为复用设计的，所以应处在第一位
  - ```id``` 作为标识应靠前，但是使用频率较 ```class```  低，所以将它放在第二位
  - ```ref``` 同 ```id```，通常情况两者只需要使用一种

- 第二梯队，常规属性
  - ```src，type，href，value...``` 等
  - ```readonly，disabled...``` 等
- 第三梯队，业务逻辑性强
  - ```for、if、:style...``` 等
  - ```click，change，select，@some-custom...``` 等
```
<div
  class="list"
  id="listWrapper"
  ref="listRef"
>
  <div
    // 命名优先级最高
    class="list-item"

    // 常规属性
    :src="item.src"
    :type="item.type"

    // 逻辑相关
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

## 插槽
- 尽量利用 ```slot``` 来完成基础文字等展示功能
```
<!-- 应用部分 -->
<Button>按钮</Button>

<!-- 组件部分 -->
<div class="custom-button">
  <slot></slot>
</div>
```

## 其他
- ***html*** 的编写设计思路应尽量遵循 ***文档流***
- 避免过多的使用 ***定位***
- 避免过多使用 ***固定宽、高***
- 避免无意义的节点嵌套
- ***实用性、扩展性*** 高于代码的 ***完美性***（仅对强迫症程序员）
