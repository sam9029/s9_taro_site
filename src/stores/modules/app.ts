import pinia from '../index'

import { ref } from 'vue'
import { defineStore } from 'pinia'
import { THEME_LIGHT } from '@/constants'

/** 组件内使用 appStore */
export const useAppStore = defineStore('app', () => {
  // state
  const theme = ref<String>(THEME_LIGHT)

  //action
  /** 切换主题模式 */
  function changeTheme(_newTheme: String) {
    theme.value = _newTheme
  }

  return { theme, changeTheme }
})

/** 组件外使用 appStore */
export const useAppStoreWithout = () => useAppStore(pinia)
