import Layout from '@/Layout/index.vue'
import {AppRouteRecordRaw} from '@/ts/router'

const errorManagerRouter: Array<AppRouteRecordRaw> = [
    {
        path: '/errManager',
        name: 'ErrManager',
        alwaysShow: true,
        redirect: 'noRedirect',
        meta: {
            title: '错误管理',
            icon: 'court-video'
        },
        component: Layout,
        children: [
            {
                path: 'errMessage',
                name: 'ErrMessage',
                meta: {
                    title: '错误信息',
                    roles: ['admin'],
                    noCache: true
                },
                component: () => import('@/views/errorManager/errorMessage.vue')
            },
            {
                path: 'errChart',
                name: 'ErrChart',
                meta: {
                    title: '错误列表',
                    roles: ['charter']
                },
                component: () => import('@/views/errorManager/errorChart.vue')
            }
        ]
    }
]
export default errorManagerRouter
