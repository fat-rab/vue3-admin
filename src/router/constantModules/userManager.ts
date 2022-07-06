import Layout from "@/Layout/index.vue"
import {AppRouteRecordRaw} from "@/ts/router";
import {markRaw} from "vue";

const userManagerRouter: Array<AppRouteRecordRaw> = [
    {
        path: '/userManager',
        name: 'UserManager',
        alwaysShow: true,
        redirect: 'noRedirect',
        meta: {
            title: '用户管理',
            icon: 'Avatar',
            noCache: true
        },
        component: markRaw(Layout),
        children: [
            {
                path: 'userMessage',
                name: "UserMessage",
                meta: {
                    title: '用户信息'
                },
                component: () => import(/* webpackChunkName: "userMessage" */"@/views/userManager/userMessage.vue")
            }
        ]
    }
]
export default userManagerRouter
