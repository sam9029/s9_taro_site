## 技术方案

## 网站地址

https://sam9029.github.io/s9_taro_site/

## 网站介绍

### 技术栈

- HTML+CSS+Javascript

### 图片 CDN 地址：

- https://ibb.co/album/jgGtPd

## 需求表

- 🆗 发牌动画
- 🆗 抽取卡片
- 🆗 重新洗牌
- 🆗 Github部署
- 🆗 卡片逆位描述信息收集 
-  （Break Change）使用Vue3框架重新编写代码
- 卡片博物馆
- 顶部不做导航，做成微软格式的 AI 问答框&文字动态问候框
- 点击卡片时就 new Image 请求一次卡片地址，实现图片链接本地缓存
- 多语言
- 主题模式
- 服务器部署
- Nignx 转发端口 traoai.sam9029.asia

## Bug 解决表

- 重新洗牌后无法选中卡牌, 一次洗牌无法选中，二次洗牌可选中（没清空选中数组&drawerCardCircle 中多次绑定 click 事件）
