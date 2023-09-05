import Layout from '@/Layout/index.vue'
import {AppRouteRecordRaw} from '@/ts/router'


const homeRouter: Array<AppRouteRecordRaw> = [
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [
            {
                path: '/home',
                component: () => import('@/views/home/index.vue'),
                name: 'Home',
                meta: {
                    title: '首页',
                    icon: 'court-video',
                    affix: true
                }
            }
        ]
    }
]
export default homeRouter
