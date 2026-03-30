// import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'

// 1. 导入 Element Plus
import ElementPlus from 'element-plus'
// 2. 导入 Element Plus 全局样式
import 'element-plus/dist/index.css'
import chinese from 'element-plus/dist/locale/zh-cn.js'

const app = createApp(App)

// 3. 注册 Element Plus
app.use(ElementPlus,{chinese})

app.mount('#app')
