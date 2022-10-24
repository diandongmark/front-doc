---
sidebar: auto
---

## 命名
- 类名使用 ***小写字母，以中划线分隔***
```
<div class="some-header">
```
- id采用 ***驼峰式命名***
```
<div class="someHeader">
```
- ```scss```中的 ***变量、混入采用驼峰式命名***
```
// 变量
$fontSize: 24px;
$lineHeight: 32px;

.title {
    font-size: $fontSize;
    color: white;
    line-height: $lineHeight;
}

// 混入
@mixin flexBox($alignItems) {
    display: flex;
    flex-wrap: wrap;
    align-items: $alignItems;
}

.tabs {
    width: 100%;
    height: 300px;
    @include flexBox;
}
```

## 注释
- 注释统一用 ```/* */```（ ***scss*** 中也不要用```//```）
- 缩进与下一行代码保持一致；
```
/* 头部导航 */
.header {
    ...
}

/* 内容区域 */
.content {
    ...
}

/* 底部公告 */
.footer-ad {
    ...
}
```

## 属性分组
- 属性推荐按照 ***关联性*** 进行分组
- 不做强制性要求，但良好的书写习惯能保证易读

推荐的关联顺序：
```
[
    // 1 改变元素性质
    display、float、visibility...

    // 2 元素外层样式
    list-style...

    // 3 定位相关
    position...

    // 4 边距、宽、高
    margin、padding...

    // 5 字体相关
    font、text...

    // 6 颜色相关
    color、background...

    // 7 效果相关
    opacity、box-shadow...

    // 8 动画相关
    transtion、animation...

    // 9 交互相关
    cursor、resize...
]
```

详细列举: 
```
[
    [
        "display",
        "visibility",
        "float",
        "clear",
        "overflow",
        "clip",
        "zoom"
    ],
    [
        "table-layout",
        "empty-cells",
        "caption-side",
        "border-spacing",
        "border-collapse",
        "list-style",
    ],
    [
        "position",
        "top",
        "right",
        "bottom",
        "left",
        "z-index"
    ],
    [
        "margin",
        "margin-top",
        "margin-right",
        "margin-bottom",
        "margin-left",
        "box-sizing",
        "border",
        "border-width",
        "border-style",
        "border-color",
        "border-radius",
        "border-image",
        "padding",
        "width",
        "min-width",
        "max-width",
        "height",
        "min-height",
        "max-height"
    ],
    [
        "font",
        "font-family",
        "font-size",
        "font-weight",
        "font-style",
        "font-variant",
        "line-height",
        "text-align",
        "vertical-align",
        "white-space",
        "text-decoration",
        "text-indent",
        "text-justify",
        "letter-spacing",
        "word-spacing",
        "text-outline",
        "text-transform",
        "text-wrap",
        "text-overflow",
        "text-overflow-ellipsis",
        "text-overflow-mode",
        "word-wrap",
        "word-break"
    ],
    [
        "color",
        "background",
        "background-color",
        "background-image",
        "background-repeat",
        "background-attachment",
        "background-position",
        "background-clip",
        "background-origin",
        "background-size"
    ],
    [
        "outline",
        "outline-width",
        "outline-style",
        "outline-color",
        "outline-offset",
        "opacity",
        "box-shadow",
        "text-shadow"
    ],
    [
        "transition",
        "transition-delay",
        "transition-timing-function",
        "transition-duration",
        "transition-property",
        "transform",
        "transform-origin",
        "animation",
        "animation-name",
        "animation-duration",
        "animation-play-state",
        "animation-timing-function",
        "animation-delay",
        "animation-iteration-count",
        "animation-direction"
    ],
    [
        "content",
        "quotes",
        "counter-reset",
        "counter-increment",
        "resize",
        "cursor",
        "tab-size",
        "hyphens",
        "pointer-events"
    ]
]
```

## 简写
- 分开书写样式可以提高代码易读性，但并不限制属性的简写
- 可以通过 ```scss``` 的 ***继承、混入*** 等特性来加快工作效率，而非一味简写。

常见的属性简写：

```
margin
padding
background
font （不常见）
transtion
animation
```

## 媒体查询
- 复杂度低
  - 尽量将媒体查询的样式规则写在原规则附近，避免过度拆分和放到文档底部。
- 复杂度高
  - 独立文件维护，同时将将原样式完全拷贝，在不需要更改的位置以 ```{}``` 代替，这样保留样式的结构关联性，方便理解。
  ```
  .header {
    some-style...

    .card {
        some-style...
    }

    .header-left {
        some-style...
    }
  }

  // 独立维护媒体查询
  // some.scss
  @media screen and (max-width: 1200px) {
    .header {
      // 卡片样式
      .card {} // 即使不需要修改，也要加上空样式以及注释，保证代码的连续性
      .header-left {
        width: 600px;
      }
    }
  }
  ```

## SCSS 相关
计划在未来中设计一套全局变量环境，但在这之前应遵循基本的使用规范：

- 变量：重复性数值，尽量用变量代替
- 嵌套：嵌套规则不宜过长，可按照功能模块进行结构划分
```
<div class="header-wrapper">
    <!-- 养成注释的好习惯 -->
    <div class="header">
        <!-- 养成注释的好习惯 -->
        <div class="inner-layout">
            <!-- 养成注释的好习惯 -->
            <div class="title">
                <div class="title-text">
            </div>
        </div>
    </div>
</div>

// 正确的示例
.header-wrapper {
    /* 养成注释的好习惯 */
    .header {}
    /* 养成注释的好习惯 */
    .inner-layout {}
    /* 养成注释的好习惯 */
    .title {
        .title-text {}
    }
}

// 错误的示例
.header-wrapper {
    .header {
        .inner-layout {
            .title {
                .title-text{}
            }
        }
    }
}
```
- 计算：在复杂的计算逻辑中，应做出详细的注释说明
```
.card-container {
    width: 100%;
    height: 60px;
    top: 60px + 40px + 72px + 28px; // 此处应该加上注释

    /**
     * 卡片高度距离，需要加上定位、和搜索栏、标题
     * 60自身高度 + 40定位 + 72顶部搜索栏 + 28标题 // 此处仅模拟
     */
    top: 60px + 40px + 72px + 28px;
}
```
