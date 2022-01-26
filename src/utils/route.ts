import {RouteRecordRaw} from "vue-router";
import {hasPermission} from "@/utils/permission";

export function filterRoute(routes: Array<RouteRecordRaw>, roles: Array<string>): Array<RouteRecordRaw> {
    const res: Array<RouteRecordRaw> = []
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
