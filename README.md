## 技术方案

## 网站地址

仓库地址：https://github.com/sam9029/s9_taro_site

网站地址：https://sam9029.github.io/s9_taro_site/

## 网站介绍

### 技术栈

- ~~HTML+CSS+Javascript~~

- Vite + Vue3 + Tailwindcss + Daisyui

- 所有icon资源 https://akaricons.com/ （传至iconfont走阿里的CDN）

> **技术栈重构工作**
> 项目将使用 Vite + Vue3 + Tailwindcss + Daisyui 进行重构
> 还好现在的内容还不多，，重构工作量不大
> - 首页迁移（已完成）
> - 抽取卡牌页面迁移（已完成70%）
> - 主要是首页/Museum页面切换（已完成）
> - Daisyui 重构 Nav 和 Museum的卡牌选择项（tab）（已完成）
> - 卡牌展示页面弹窗 gasp 方案 （已完成）
> - 主题色变化（daisyui提供了很多的主题，之后挑一些合适的加上,不知道冷色调好、还是暖色调好一些）

### 图片 CDN 地址：

- https://ibb.co/album/jgGtPd

## 需求表

- 🆗 发牌动画
- 🆗 抽取卡片
- 🆗 重新洗牌
- 🆗 Github部署
- 🆗 卡片逆位描述信息收集 
-  （Break Change）使用Vue3框架重新编写代码
- home 和 museum 的切换动画
- 卡片博物馆
- 顶部不做导航，做成微软格式的 AI 问答框&文字动态问候框
- 点击卡片时就 new Image 请求一次卡片地址，实现图片链接本地缓存
- 多语言
- 主题模式
- 服务器部署
- Nignx 转发端口 traotai.sam9029.asia

## Bug 解决表

- 重新洗牌后无法选中卡牌, 一次洗牌无法选中，二次洗牌可选中（没清空选中数组&drawerCardCircle 中多次绑定 click 事件）




