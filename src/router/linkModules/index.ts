import {AppRouteRecordRaw} from '@/ts/router'
import {markRaw} from 'vue'
import Layout from '@/Layout/index.vue'

 const linkRouter: Array<AppRouteRecordRaw> = [
    {
        path: '/external-link',
        component: markRaw(Layout),
        children: [
            {
                path: 'https://gitee.com/oujinlong/yunjia-template-web3.0',
                meta: {title: '外链', icon: 'court-video'}
            }
        ]
    }
]
export default linkRouter
