import { watch } from 'vue'
import { THEME_LIST, THEME_SYSTEM } from '@/constants'
import { useAppStoreWithout } from '@/stores/modules/app.ts'
const appStore = useAppStoreWithout()

/**
 * 监听系统主题变更
 */
let matchMedia
const watchSystemThemeChange = () => {
  // 仅需初始化一次即可
  if (matchMedia) return
  matchMedia = window.matchMedia('(prefers-color-scheme: dark)')
  // 监听主题变更
  matchMedia.onchange = function () {
    changeTheme(THEME_SYSTEM)
  }
}

/**
 * 变更主题
 * @param {*} theme 主题的标记常量
 */
const changeTheme = (theme) => {
  // html 的 class
  let themeClassName = ''

  if (THEME_LIST.includes(theme)) themeClassName = theme

  if (theme === THEME_SYSTEM) {
    watchSystemThemeChange()
    themeClassName = matchMedia.matches ? 'dark' : 'light'
  }

  // 修改 html 的 class
  const htmlEl = document.querySelector('html')
  htmlEl.className = themeClassName
  htmlEl.setAttribute('data-theme', themeClassName)
}

/**
 * 初始化主题
 */
export default () => {
  watch(() => appStore.theme, changeTheme, {
    // 初始执行一次
    immediate: true,
  })
}
