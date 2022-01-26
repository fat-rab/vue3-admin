import {RouteRecordRaw} from "vue-router";
import {PermissionState} from "./state"
import {MutationTree} from "vuex";

export enum PermissionMutationTypes {
    SET_PERMISSION_ROUTES = 'SET_PERMISSION_ROUTES'
}

export interface Mutations<s = PermissionState> {
    [PermissionMutationTypes.SET_PERMISSION_ROUTES](state: s, payload: Array<RouteRecordRaw>): void
}


const mutations: MutationTree<PermissionState> & Mutations = {
    [PermissionMutationTypes.SET_PERMISSION_ROUTES]: (state: PermissionState, payload: Array<RouteRecordRaw>): void => {
        state.permissionRoutes = payload
    }
}

export default mutations
