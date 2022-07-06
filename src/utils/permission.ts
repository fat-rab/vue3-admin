import {AppRouteRecordRaw} from "@/ts/router";

export const hasPermission = (roles: Array<string>, route: AppRouteRecordRaw) => {
    if (route.meta && route.meta.roles) {
        return roles.some(role => {
            if (route.meta?.roles !== undefined) {
                return (route.meta.roles as Array<string>).includes(role)
            }
        })
    } else {
        return true
    }
}
