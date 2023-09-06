import {AppRouteRecordRaw} from '@/ts/router'

export interface PermissionState {
    permissionRoutes: Array<AppRouteRecordRaw>
    cachedRoutes: Array<string>
}
export enum PermissionActionsEnum {
    GET_PERMISSION_ROUTES = 'GET_PERMISSION_ROUTES',
    GET_CACHED_ROUTES = 'GET_CACHED_ROUTES'
}
