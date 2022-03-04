import Layout from "@/Layout/index.vue"
import {AppRouteRecordRaw} from "@/router";
import {markRaw} from "vue";


const sysManagerRouter: Array<AppRouteRecordRaw> = [
    {
        path: '/sysManager',
        name: 'sysManager',
        alwaysShow: true,
        redirect: 'noRedirect',
        meta: {
            title: '系统管理',
            icon: 'Setting',
            roles: ["admin"]
        },
        component: markRaw(Layout),
        children: [
            {
                path: 'sysMessage',
                name: "sysMessage",
                meta: {
                    title: '系统信息'
                },
                component: () => import(/* webpackChunkName: "sysMessage" */"@/views/sysManager/sysMessage.vue")
            },
            {
                path: "sysTest",
                name: 'sysTest',
                alwaysShow: true,
                redirect: 'noRedirect',
                meta: {
                    title: '错误测试'
                },
                component: () => import(/* webpackChunkName: "sysTest" */"@/views/sysManager/sysTest.vue"),
                children: [
                    {
                        path: 'sysTest1',
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
