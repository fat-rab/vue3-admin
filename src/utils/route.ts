import {hasPermission} from '@/utils/permission'
import {AppRouteRecordRaw} from '@/ts/router'
import router from '@/router'

export function filterRoute(routes: Array<AppRouteRecordRaw>, roles: Array<string>): Array<AppRouteRecordRaw> {
    const res: Array<AppRouteRecordRaw> = []
    routes.forEach((route) => {
        const r = {...route}
        if (hasPermission(roles, r)) {
            if (r.children) {
                r.children = filterRoute(r.children, roles)
            }
            res.push(r)
        }
    })
    return res
}

export function judgeShowingChild(item: AppRouteRecordRaw): Array<AppRouteRecordRaw> {
    let showingChildren: Array<AppRouteRecordRaw> = []
    if (item.children?.length) {
        showingChildren = item.children.filter((item) => !item.hidden)
    }
    return showingChildren
}


export function getCachedRoutes(routes: Array<AppRouteRecordRaw>): Array<string> {
    const res: Array<string> = []
    routes.forEach((item) => {
        // 父路由可能不设置meta
        if (item.meta) {
            if (item.meta.noCache !== true && item.name) {
                res.push(item.name)
                // 如果父级路由不缓存（noCache=true），则子路由也不缓存
                if (item.children) {
                    res.push(...getCachedRoutes(item.children))
                }
            }
        } else {
            if (item.children) {
                res.push(...getCachedRoutes(item.children))
            }
        }
    })
    return res
}


// 保存路由重定向信息
export function saveRedirectRoute() {
    const routeMsg = router.currentRoute.value
    sessionStorage.setItem('redirect', JSON.stringify({
        path: routeMsg.path,
        name: routeMsg.name,
        query: routeMsg.query
    }))
}
