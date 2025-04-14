## 技术方案

## 网站地址

线上地址：https://tarot.sam9029.site

仓库地址：https://github.com/sam9029/s9_taro_site
网站地址：https://sam9029.github.io/s9_taro_site/

## 网站介绍

### 技术栈

- ~~HTML+CSS+Javascript~~

- Vite + Vue3 + Tailwindcss + Daisyui（V3）

- 所有icon资源 https://akaricons.com/ （传至iconfont走阿里的CDN）

- [Aplayerjs](https://aplayer.js.org/#/zh-Hans/) + [meting-js](https://github.com/metowolf/MetingJS) 音乐播放器
    - 直接走网易的服务CDN音乐资源

> 待调研 ant-design-x AI对话UI库

> **🆗技术栈重构工作**
> 项目将使用 Vite + Vue3 + Tailwindcss + Daisyui 进行重构
> 还好现在的内容还不多，，重构工作量不大
>
> - 🆗首页迁移（已完成）
> - 🆗抽取卡牌页面迁移（已完成）
> - 🆗主要是首页/Museum页面切换（已完成）
> - 🆗Daisyui 重构 Nav 和 Museum的卡牌选择项（tab）（已完成）
> - 🆗卡牌展示页面弹窗 gasp 方案 （已完成）
> - 🆗主题色变化（daisyui提供了很多的主题，之后挑一些合适的加上,不知道冷色调好、还是暖色调好一些）

### 图片 CDN 地址：

- https://img.tg/album/tarot.OKRJ1
- ~~（弃用）https://ibb.co/album/jgGtPd~~

其他图床方案：最全的图床集合（国内外，站长必备）-木头分享 https://flowus.cn/boxker/share/fb583111-bb3a-42ff-aef6-71d820d8bd8c

## 服务器部署

- 🆗 自有服务器部署
> Coding 平台拉仓库，手动触发构建流水线即可（配置已完成）

- 🆗 使用github部署
> GitHub Action + GitHub Pages 的 gh-pages 分支来托管生成的静态站点。使用 gh-pages npm 包，它能自动将 dist/ 文件夹的内容推送到 gh-pages 分支，并将其发布到 GitHub Pages。

- https证书设置及部署

## 需求表

> 优先级依次递减 📕📙📘📗

- 🆗 发牌动画
- 🆗 抽取卡片
- 🆗 重新洗牌
- 🆗 Github部署
- 🆗 卡片逆位描述信息收集
- 🆗（Break Change）使用Vue3框架重新编写代码
- 🆗 home 和 museum 的切换动画
- 🆗 卡片博物馆
- 🆗 Nignx 转发端口 traotai.sam9029.site
- 🆗（随机模式）不限数量卡牌抽取
- 🆗（限定模式）自定义数量卡牌抽取
- 🆗（限定模式）快捷选中数量抽取
- 📕 接入AI分析
- 📕（专家模式）预设问题

- 移动端发牌改为侧边式
- 顶部不做导航，做成微软格式的 AI 问答框&文字动态问候框
- 点击卡片时就 new Image 请求一次卡片地址，实现图片链接本地缓存
- 多语言



## Bug 解决表

- 🆗 重新洗牌后无法选中卡牌, 一次洗牌无法选中，二次洗牌可选中
    （没清空选中数组&drawerCardCircle 中多次绑定 click 事件）
- 🆗 移动端浏览器主题色样式失效
    （dasiyui使用了 css 新特性 oklch()，兼容性需要chrome 111版本以上）
    （检测浏览器版本：https://www.browserscan.net/zh/browser-checker）
    解决方案：https://github.com/saadeghi/daisyui/issues/2693
    降级 dasiyui 到v3 版本 https://v3.daisyui.com
- 📕 移动端图片无法加载
    （可能式http无法加载 https 图片，需要授权加载；~~目前的解决方案是博物馆直接点击图片，就好了~~）
    解决方案：不排查了问题，直接换图床
- 随机模式下选中卡牌可能出现重复的情况


## 参考

> [用纯 CSS 实现网格背景] https://spacexcode.com/blog/pure-css-grid-line/