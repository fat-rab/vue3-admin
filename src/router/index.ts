import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";
import Layout from "@/Layout/index.vue"

let constantModules: Array<RouteRecordRaw> = []
const constantFiles = import.meta.globEager('./constantModules/*.ts')
for (const modules in constantFiles) {
    if (modules.indexOf("index.ts") === -1) {
        constantModules = constantModules.concat(constantFiles[modules].default)
    }
}
let permissionModules: Array<RouteRecordRaw> = []

const permissionFiles = import.meta.globEager("./permissionModules/*.ts")
for (const modules in permissionFiles) {
    if (modules.indexOf("index.ts") === -1) {
        permissionModules = permissionModules.concat(permissionFiles[modules].default)
    }
}
export const asyncRoutes: Array<RouteRecordRaw> = [
    ...permissionModules
]
export const constantRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [
            {
                path: 'dashboard',
                component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
                name: 'Dashboard',
                meta: {
                    title: 'dashboard',
                    icon: 'Avatar'
                }
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import("@/views/login/index.vue")
    },
    ...constantModules
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes
})
export function resetRouter() {
    const newRouter = router;
    (router as any).matcher = (newRouter as any).matcher // reset router
}
export default router
