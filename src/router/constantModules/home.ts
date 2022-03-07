import Layout from "@/Layout/index.vue"
import {AppRouteRecordRaw} from "@/router";
import {markRaw} from "vue";


const homeRouter: Array<AppRouteRecordRaw> = [
    {
        path: '/',
        component: markRaw(Layout),
        redirect: '/home',
        children: [
            {
                path: '/home',
                component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
                name: 'home',
                meta: {
                    title: '首页',
                    icon: 'Eleme',
                    affix: true
                }
            }
        ]
    }
]
export default homeRouter
