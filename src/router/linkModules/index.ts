import {AppRouteRecordRaw} from "@/router";
import {markRaw} from "vue";
import Layout from "@/Layout/index.vue";

 const linkRouter: Array<AppRouteRecordRaw> = [
    {
        path: '/external-link',
        component: markRaw(Layout),
        children: [
            {
                path: 'https://github.com/PanJiaChen/vue-element-admin',
                meta: {title: '外链', icon: 'link'}
            }
        ]
    }
]
export default linkRouter
