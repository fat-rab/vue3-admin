import {RouteRecordRaw} from 'vue-router'

export interface RouteMeta {
    title: string
    icon?: string
    roles?: Array<string>
    noCache?: boolean
    breadcrumb?: boolean
    affix?: boolean
}

export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta' | 'children' | 'name'> {
    hidden?: boolean
    redirect?: string
    alwaysShow?: boolean
    meta?: RouteMeta
    children?: Array<AppRouteRecordRaw>
    pId?: string //仅仅用来后端返回路由的层级判断
    id?: string
    name?: string
}

export interface RouteRedirect {
    path: string
    name?: string
    query?: {
        [key: string]: any
    }
}
