import {RouteLocationMatched, RouteLocationNormalizedLoaded} from "vue-router";
import {compile} from "path-to-regexp";

export const getBreadCrumbList = function(route: RouteLocationNormalizedLoaded): Array<RouteLocationMatched> {
    const matched = route.matched.filter((item) => item.meta && item.meta.title)
    const first = matched[0]
    if (!isHome(first)) {
        matched.unshift(({path: '/home', name: "home", meta: {title: '首页'}} as any))
    }
    return matched.filter((item) => item.meta?.title && item.meta.breadcrumb !== 'false')
}
//https://www.npmjs.com/package/path-to-regexp
export const pathCompile = (path: string, currentRoute: RouteLocationNormalizedLoaded) => {
    const {params} = currentRoute
    const toPath = compile(path)
    return toPath(params)
}
const isHome = function(route: RouteLocationMatched): boolean {
    const name = route && route.name
    if (!name) {
        return false
    }
    return name?.toString().trim().toLocaleLowerCase() === 'home'
}
