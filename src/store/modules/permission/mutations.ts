import {PermissionState} from "./state"
import {MutationTree} from "vuex";
import {AppRouteRecordRaw} from "@/router";

export enum PermissionMutationEnum {
    SET_PERMISSION_ROUTES = 'SET_PERMISSION_ROUTES'
}

export interface Mutations<s = PermissionState> {
    [PermissionMutationEnum.SET_PERMISSION_ROUTES](state: s, payload: Array<AppRouteRecordRaw>): void
}


const mutations: MutationTree<PermissionState> & Mutations = {
    [PermissionMutationEnum.SET_PERMISSION_ROUTES]: (state: PermissionState, payload: Array<AppRouteRecordRaw>): void => {
        state.permissionRoutes = payload
    }
}

export default mutations
