---
sidebar: auto
---


## 项目仓库
- 项目命名: 语义化，并能明确表示项目名称
- 命名格式: 名称（公司名 + 项目名） + 项目类型
- 举例：某项目为：京东商城仓库管理系统
  1. 项目存在简写: 采用公司简写 + 项目名称 + 类型
  1. 不存在简写: 采用英译简写 + 项目名称 + 类型
  1. 不存在通俗易懂的英译: 采用首字母拼音简写 + 项目名称 + 类型
  1. 同一个项目下，命名应前后端共同约定统一的名称
```
中国药科大学科研平台门户端: CPU-scientific-research-pc // 京东-仓库-客户端-管理系统
中国药科大学科研平台管理端: CPU-scientific-research-admin // 京东-仓库-客户端-管理系统
中国药科大学科研平台服务端: CPU-scientific-research-service // 京东-仓库-管理端-服务端（后端）
```
- 项目后缀：项目命名时加持对应的项目类型 ***（pc、h5、admin、uni）***
```
PingAn-app-uni // 中国平安-app-uniapp端
PingAn-warehouse-pc // 中国平安-仓库管理-pc端
```
- 项目简介：应具备

名称：对应的 ***中文项目名***

框架：使用的 ***框架版本***

简介：主要的 ***功能表述***
```
项目名称: 中国平安-仓库系统-管理端
项目框架: vue2、element-ui、echarts
项目简介: 用户权限管理，审批流提交，数据图表报表展示，仓库数据埋点跟踪
```
- 成员
  - 项目创建后，应将所有参与 ***开发人员、相关上级、以及未来可能会参与的开发人员*** 全部添加到成员列表
  - 所有成员应具备 ***开发、管理的权限***

## 分支管理
项目分支定为两种：
1. ```master + 1``` 主分支 + 主开发分支，适用中小型项目
1. ```master + 1 + n``` 主分支 + 主开发分支 + 功能性分支，只用较为复杂，或敏捷开发项目
主分支：
  - 固定命名：```master```
    - 作为项目上线后 ***主要分支*** 。
    - 在提测、验收通过后提交版本。

开发分支：
  - 固定命名：```dev```
    - 作为主要 ***开发分支*** 。
    - 主要开发分支，同时作为合并不同分支时的主分支。

功能性分支：
  - 不固定名称，但命名需要 ***语义化***
    - 应对不同功能，不同上线时间约束，或不同协作人员开发时，为了不影响主开发分支，开辟的辅助分支。
    - 在项目要求提测、或上线时，再选择合并对应的分支提交。

## 提交规范
- 必须要阶段性提交同步代码。
- 提交不限制次数，但应遵循以下原则：
  - 按照 ***功能点*** 提交。
  - 按照 ***fix情况*** 提交。
- commit 时一定要提交详细的 ***中文说明***
  - 页面模块、功能点、修复的 ***BUG*** 等
  ```
  git add .

  // 正确的示例
  git commit -m '首页，布局样式'
  git commit -m '购物车，增删改查'
  git commit -m '购物车，列表上拉加载逻辑'
  git commit -m '个人中心，接口对接'

  // 错误的示例，不一一列举
  git commit
  git commit -m '1'
  git commit -m '修改'
  ```
  