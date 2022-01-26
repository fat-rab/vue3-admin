import {RouteRecordRaw} from "vue-router";
import Layout from "@/Layout/index.vue"

const userManagerRouter: Array<RouteRecordRaw> = [
    {
        path: '/userManager',
        name: 'userManager',
        meta: {
            title: '用户管理',
            icon: 'Avatar'
        },
        component: Layout,
        children: [
            {
                path: '/userMessage',
                name: "userMessage",
                meta: {
                    title: '用户信息'
                },
                component: () => import(/* webpackChunkName: "userMessage" */"@/views/userManager/userMessage.vue")
            }
        ]
    }
]
export default userManagerRouter
