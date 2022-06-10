import {PermissionState, Mutations, PermissionMutationEnum, PermissionActionsEnum} from "../../ts/permission";

import {ActionContext, ActionTree} from "vuex";
import {RootState} from "@/store";
import {AppRouteRecordRaw, asyncRoutes} from "@/router"
import {filterRoute} from "@/utils/route"


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
