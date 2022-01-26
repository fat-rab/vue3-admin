import {RouteRecordRaw} from "vue-router";
import Layout from "@/Layout/index.vue"

const sysManagerRouter: Array<RouteRecordRaw> = [
    {
        path: '/sysManager',
        name: 'sysManager',
        meta: {
            title: '系统管理',
            icon: 'Avatar',
            roles: ["admin"]
        },
        component: Layout,
        children: [
            {
                path: '/sysMessage',
                name: "sysMessage",
                meta: {
                    title: '系统信息'
                },
                component: () => import(/* webpackChunkName: "sysMessage" */"@/views/sysManager/sysMessage.vue")
            },
            {
                path: "/sysTest",
                name: 'sysTest',
                meta: {
                    title: '错误测试'
                },
                component: () => import(/* webpackChunkName: "sysTest" */"@/views/sysManager/sysTest.vue"),
                children: [
                    {
                        path: '/sysTest1',
                        name: "sysTest1",
                        meta: {
                            title: '错误测试1'
                        },
                        component: () => import(/* webpackChunkName: "sysTest1" */"@/views/sysManager/sysTestChild.vue")
                    }
                ]
            }
        ]
    }
]
export default sysManagerRouter
