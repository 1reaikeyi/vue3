// 1. 正确导入 Vue Router 核心API
import { createRouter, createWebHistory } from "vue-router";
// 配置 history 模式
// 1. history模式：createWebHistory     地址栏不带 #
// 2. hash模式：   createWebHashHistory 地址栏带 #
// console.log(import.meta.env.DEV)

// vite 中的环境变量 import.meta.env.BASE_URL  就是 vite.config.js 中的 base 配置项
// 2. 创建路由实例
const router = createRouter({
    // 配置路由模式：HTML5 History 模式
    history: createWebHistory(import.meta.env.BASE_URL),
    // 路由规则配置（空数组代表暂未配置页面）
    routes: []
});

// 3. 必须导出路由实例，供项目使用
export default router;