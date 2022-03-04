import {hasPermission} from "@/utils/permission";
import {AppRouteRecordRaw} from "@/router";

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
