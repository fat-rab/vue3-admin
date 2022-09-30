import {useRoute} from 'vue-router'
import {AppRouteRecordRaw} from '@/ts/router'
import {TagDetail} from '@/ts/store/tagsView'


// 获取所有固定在tagsView中的路由
export function initTagList(routes: Array<AppRouteRecordRaw>) {
    const list: Array<TagDetail> = []
    routes.forEach((item) => {
        if (item.meta?.affix) {
            list.push({
                path: item.path,
                title: item.meta.title,
                affix: true
            })
        }
        if (item.children?.length) {
            list.push(...initTagList(item.children))
        }
    })
    return list
}

export function isActive(path: string): boolean {
    const route = useRoute()
    return path === route.path
}

