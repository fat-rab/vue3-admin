import {AppRouteRecordRaw} from '@/ts/router'
import {RouteRecordName} from 'vue-router'

export interface PermissionState {
    permissionRoutes: Array<AppRouteRecordRaw>
    cachedRoutes: Array<RouteRecordName>
}
export enum PermissionActionsEnum {
    GET_PERMISSION_ROUTES = 'GET_PERMISSION_ROUTES',
    GET_CACHED_ROUTES = 'GET_CACHED_ROUTES'
}
