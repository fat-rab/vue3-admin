import {PermissionState} from "./state"
import {MutationTree} from "vuex";
import {AppRouteRecordRaw, asyncRoutes, constantModules} from "@/router";
import {getCachedRoutes} from "@/utils/route";

export enum PermissionMutationEnum {
    SET_PERMISSION_ROUTES = 'SET_PERMISSION_ROUTES',
    SET_CACHED_ROUTES = 'SET_CACHED_ROUTES'
}

export interface Mutations<s = PermissionState> {
    [PermissionMutationEnum.SET_PERMISSION_ROUTES](state: s, payload: Array<AppRouteRecordRaw>): void

    [PermissionMutationEnum.SET_CACHED_ROUTES](state: s): void
}


const mutations: MutationTree<PermissionState> & Mutations = {
    [PermissionMutationEnum.SET_PERMISSION_ROUTES]: (state: PermissionState, payload: Array<AppRouteRecordRaw>): void => {
        state.permissionRoutes = payload
    },
    [PermissionMutationEnum.SET_CACHED_ROUTES]: (state: PermissionState): void => {
        state.cachedRoutes = getCachedRoutes([...constantModules, ...asyncRoutes])
    }
}

export default mutations
