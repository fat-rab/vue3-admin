import {AppRouteRecordRaw} from "@/ts/router";
import {RouteRecordName} from "vue-router";

export interface PermissionState {
    permissionRoutes: Array<AppRouteRecordRaw>
    cachedRoutes: Array<RouteRecordName>
}
export enum PermissionMutationEnum {
    SET_PERMISSION_ROUTES = 'SET_PERMISSION_ROUTES',
    SET_CACHED_ROUTES = 'SET_CACHED_ROUTES'
}

export interface Mutations<s = PermissionState> {
    [PermissionMutationEnum.SET_PERMISSION_ROUTES](state: s, payload: Array<AppRouteRecordRaw>): void

    [PermissionMutationEnum.SET_CACHED_ROUTES](state: s): void
}
export enum PermissionActionsEnum {
    GET_PERMISSION_ROUTES = 'GET_PERMISSION_ROUTES'
}
