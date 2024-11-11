import './assets/main.scss'

import { createApp } from 'vue'
import pinia from '@/stores'
import router from '@/router'

import App from './App.vue'

/** 物料库 */
import snLibs from './libs'
import useTheme from './utils/theme.js'
import { useREM } from './utils/flexible.js'

const app = createApp(App)

app.use(router).use(pinia).use(snLibs).mount('#app')

// 设置 rem
useREM()
// 初始化主题
useTheme()
