import Layout from "@/Layout/index.vue"
import {AppRouteRecordRaw} from "@/router";
import {markRaw} from "vue";

const errorManagerRouter: Array<AppRouteRecordRaw> = [
    {
        path: '/errManager',
        name: 'errManager',
        alwaysShow: true,
        redirect: 'noRedirect',
        meta: {
            title: '错误管理',
            icon: 'Aim'
        },
        // markRaw 标记 Layout，使其不会转换成代理对象，减少开销
        component: markRaw(Layout),
        children: [
            {
                path: 'errMessage',
                name: "errMessage",
                meta: {
                    title: '错误信息',
                    roles: ["admin"]
                },
                component: () => import(/* webpackChunkName: "errorMessage" */"@/views/errorManager/errorMessage.vue")
            },
            {
                path: 'errChart',
                name: "errChart",
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
