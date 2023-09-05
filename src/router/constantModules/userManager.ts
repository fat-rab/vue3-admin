import Layout from '@/Layout/index.vue'
import {AppRouteRecordRaw} from '@/ts/router'

const userManagerRouter: Array<AppRouteRecordRaw> = [
    {
        path: '/userManager',
        name: 'UserManager',
        alwaysShow: true,
        redirect: 'noRedirect',
        meta: {
            title: '用户管理',
            icon: 'court-video',
            noCache: true
        },
        component: Layout,
        children: [
            {
                path: 'userMessage',
                name: 'UserMessage',
                meta: {
                    title: '用户信息'
                },
                component: () => import('@/views/userManager/userMessage.vue')
            }
        ]
    }
]
export default userManagerRouter
