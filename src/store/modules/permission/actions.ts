import {Mutations, PermissionMutationEnum} from "./mutations";
import {ActionContext, ActionTree} from "vuex";
import {PermissionState} from "@/store/modules/permission/state";
import {RootState} from "@/store";
import {AppRouteRecordRaw, asyncRoutes} from "@/router"
import {filterRoute} from "@/utils/route"

export enum PermissionActionsEnum {
    GET_PERMISSION_ROUTES = 'GET_PERMISSION_ROUTES'
}

type AugmentedActionContext = {
    commit<k extends keyof Mutations>(
        Key: string,
        payload: Parameters<Mutations[k]>[1]
    ): ReturnType<Mutations[k]>
} & Omit<ActionContext<PermissionState, RootState>, "commit">

interface PermissionActions {
    [PermissionActionsEnum.GET_PERMISSION_ROUTES](context: AugmentedActionContext, payload: Array<string>): void
}


const actions: PermissionActions & ActionTree<PermissionState, RootState> = {
    [PermissionActionsEnum.GET_PERMISSION_ROUTES]: ({commit}: AugmentedActionContext, payload: Array<string>): void => {
        const routes: Array<AppRouteRecordRaw> = filterRoute(asyncRoutes, payload)
        commit(PermissionMutationEnum.SET_PERMISSION_ROUTES, routes)
    }

}
export default actions
