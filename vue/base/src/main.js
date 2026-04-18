import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import {createPinia} from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCN from 'element-plus/dist/locale/zh-cn.js'

const app = createApp(App)
const pinia = createPinia()
app.use(ElementPlus,{locale:zhCN})
app.use(pinia)
app.mount('#app')

// // 开发环境下，把 app 实例挂载到 window，方便调试
// if (import.meta.env.DEV) {
//     window.vm = app._instance?.proxy
// }