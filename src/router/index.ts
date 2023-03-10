import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { App } from 'vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/login.vue'),
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,

})

export const initRouter = (app: App<Element>) => {
    app.use(router)
}
