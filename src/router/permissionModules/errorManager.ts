import {RouteRecordRaw} from "vue-router";
import Layout from "@/Layout/index.vue"

const errorManagerRouter: Array<RouteRecordRaw> = [
    {
        path: '/errManager',
        name: 'errManager',
        meta: {
            title: '错误管理',
            icon: 'Avatar'
        },
        component: Layout,
        children: [
            {
                path: '/errMessage',
                name: "errMessage",
                meta: {
                    title: '错误信息',
                    roles: ["admin"]
                },
                component: () => import(/* webpackChunkName: "errorMessage" */"@/views/errorManager/errorMessage.vue")
            },
            {
                path: '/errorChart',
                name: "errorChart",
                meta: {
                    title: '错误列表',
                    roles: ["charter"]
                },
                component: () => import(/* webpackChunkName: "errorChart" */"@/views/errorManager/errorChart.vue")
            }
        ]
    }
]
export default errorManagerRouter
