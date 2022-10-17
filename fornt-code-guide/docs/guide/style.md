---
sidebar: auto
---

## 命名
- 类名使用小写字母，以中划线分隔
- id采用驼峰式命名
- scss中的变量、函数、混合、placeholder采用驼峰式命名

## 注释
- 注释统一用'/* */'（scss中也不要用'//'）
- 缩进与下一行代码保持一致；

## 属性分组
属性应该按照关联性进行分组以保证易读性

推荐：
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
并不对属性简写做约束，但分开书写样式，通过 scss 的继承、混入等功能特性来加快工作效率，而非一味简写。

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
  尽量将媒体查询的样式规则写在原规则附近，避免过度拆分和放到文档底部。
- 复杂度高
  独立文件维护，同时将将原样式完全拷贝，在不需要更改的位置以 {} 代替，这样保留样式的结构关联性，方便理解。

## SCSS 相关
计划在未来中设计一套全局变量环境，但在这之前应遵循基本的使用规范：

- 变量：重复性数值，尽量用变量代替
- 嵌套：嵌套规则不宜过长，可按照功能模块进行结构划分
- 计算：在复杂的计算逻辑中，应做出详细的注释说明
