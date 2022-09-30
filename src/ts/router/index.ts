import {RouteRecordRaw} from 'vue-router'

export interface RouteMeta {
    title: string
    icon?: string
    roles?: Array<string>
    noCache?: boolean
    breadcrumb?: boolean
    affix?: boolean
}
//test
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
    hidden?: boolean
    redirect?: string
    alwaysShow?: boolean
    meta?: RouteMeta
    children?: Array<AppRouteRecordRaw>
}
