import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/login', component: () => import('@/views/login/Login.vue') },
    {
        path: '/', component: () => import('@/views/login/Layout.vue'),redirect:'/article/manage', children: [
            { path: '/article/category', component: () => import('@/views/article/ArticleCategory.vue') },
            { path: '/article/manage', component: () => import('@/views/article/ArticleManage.vue') },
            { path: '/user/info', component: () => import('@/views/user/UserInfo.vue') },
            { path: '/user/avatar', component: () => import('@/views/user/UserAvatar.vue') },
            { path: '/user/resetPassword', component: () => import('@/views/user/UserResetPassword.vue') }
        ]
    }
]

//创建路由器
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

//导出路由
export default router
