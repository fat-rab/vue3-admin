import Layout from '@/Layout/index.vue'
import {AppRouteRecordRaw} from '@/ts/router'


const sysManagerRouter: Array<AppRouteRecordRaw> = [
    {
        path: '/sysManager',
        name: 'SysManager',
        alwaysShow: true,
        redirect: 'noRedirect',
        meta: {
            title: '系统管理',
            icon: 'court-video',
            roles: ['admin']
        },
        component: Layout,
        children: [
            {
                path: 'sysMessage',
                name: 'SysMessage',
                meta: {
                    title: '系统信息'
                },
                component: () => import('@/views/sysManager/sysMessage.vue')
            },
            {
                path: 'sysTest1',
                name: 'SysTest1',
                alwaysShow: true,
                redirect: 'noRedirect',
                meta: {
                    title: '错误测试1'
                },
                component: () => import('@/views/sysManager/sysTest.vue'),
                children: [
                    {
                        path: 'sysTest1-1',
                        name: 'SysTest1-1',
                        meta: {
                            title: '错误测试1-1'
                        },
                        component: () => import('@/views/sysManager/sysTestChild.vue')
                    }
                ]
            },
            {
                path: 'sysTest2',
                name: 'SysTest2',
                alwaysShow: true,
                redirect: 'noRedirect',
                meta: {
                    title: '错误测试2'
                },
                component: () => import('@/views/sysManager/sysTest.vue'),
                children: [
                    {
                        path: 'sysTest2-2',
                        name: 'SysTest2-2',
                        meta: {
                            title: '错误测试2-2'
                        },
                        component: () => import('@/views/sysManager/sysTestChild.vue')
                    }
                ]
            }
        ]
    }
]
export default sysManagerRouter
