import {Mutations, PermissionMutationTypes} from "./mutations";
import {ActionContext, ActionTree} from "vuex";
import {PermissionState} from "@/store/modules/permission/state";
import {RootState} from "@/store";
import {asyncRoutes} from "@/router"
import {RouteRecordRaw} from "vue-router";
import {filterRoute} from "@/utils/route"

export enum ActionsEnum {
    GET_PERMISSION_ROUTES = 'GET_PERMISSION_ROUTES'
}

type AugmentedActionContext = {
    commit<k extends keyof Mutations>(
        Key: string,
        payload: Parameters<Mutations[k]>[1]
    ): ReturnType<Mutations[k]>
} & Omit<ActionContext<PermissionState, RootState>, "commit">

interface Actions {
    [ActionsEnum.GET_PERMISSION_ROUTES](context: AugmentedActionContext, payload: Array<string>): void
}


const actions: Actions & ActionTree<PermissionState, RootState> = {
    [ActionsEnum.GET_PERMISSION_ROUTES]: ({commit}: AugmentedActionContext, payload: Array<string>): void => {
        const routes: Array<RouteRecordRaw> = filterRoute(asyncRoutes, payload)
        commit(PermissionMutationTypes.SET_PERMISSION_ROUTES, routes)
    }

}
export default actions
