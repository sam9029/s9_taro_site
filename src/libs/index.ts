/** 自动化注册组件 */
import { defineAsyncComponent } from 'vue'

export { uiAlert } from './alert/index'

export default {
  install(app: any) {
    // 获取当前路径任意文件夹下的 index.vue 文件
    const components = import.meta.glob('./*/index.vue')

    // 遍历获取到的组件模块
    for (const [key, value] of Object.entries(components)) {
      // 拼接组件注册的 name
      let componentName = 'ui-' + key.replace('./', '').split('/')[0]
      componentName = componentName.toLowerCase() // 组件名称小写

      // 通过 defineAsyncComponent 异步导入指定路径下的组件
      app.component(componentName, defineAsyncComponent(value as any))
    }
  },
}
