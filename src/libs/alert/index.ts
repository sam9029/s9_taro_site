import { h, render } from 'vue'
import alertComponent from './index.vue'
/**
 *
 * @param param0 { type, icon, message, showClose, duration }
 * @param0 {*} type
 * @param0 {*} icon
 * @param0 {*} message
 * @param0 {*} showClose
 * @param0 {*} duration
 * @returns
 */

type optionType = {
  type: string | null
  icon: string | null
  message: string | null
  showClose: boolean | null
  duration: number | null
}

const option: optionType = {
  type: null,
  icon: null,
  message: 'alert提示',
  showClose: true,
  duration: 2000,
}

export const uiAlert = (query: optionType) => {
  let { type, icon, message, showClose, duration } = { ...option, ...query }

  // 允许只传递 message
  if (!message) {
    message = 'alert提示'
  }

  // 1. vnode
  const vnode = h(alertComponent, {
    type,
    icon,
    message,
    showClose,
    duration,
  })

  // 2. 创建一个新的容器 div--创建 div是为了防止多次调用仅渲染一个alertComponent
  const container = document.createElement('div')
  document.body.appendChild(container)

  // 3. render 到新的容器中
  render(vnode, container)

  // 4.注销div
  setTimeout(
    () => {
      render(null, container) // 卸载组件
      document.body.removeChild(container) // 移除 DOM 节点
    },
    (duration as number) + 1000,
  )
}
