import './assets/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import language from 'element-plus/dist/locale/zh-cn.js'
import router from '@/router'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-persistedstate-plugin'

const app = createApp(App);
const pinia = createPinia();
const persist = createPersistedState();

pinia.use(persist);
app.use(pinia);
app.use(router);
app.use(ElementPlus, { language });
app.mount('#app');
