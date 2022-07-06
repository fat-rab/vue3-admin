import {PermissionState, Mutations, PermissionMutationEnum} from "@/ts/store/permission"
import {MutationTree} from "vuex";
import {asyncRoutes, constantModules} from "@/router";
import {AppRouteRecordRaw} from "@/ts/router";
import {getCachedRoutes} from "@/utils/route";


const mutations: MutationTree<PermissionState> & Mutations = {
    [PermissionMutationEnum.SET_PERMISSION_ROUTES]: (state: PermissionState, payload: Array<AppRouteRecordRaw>): void => {
        state.permissionRoutes = payload
    },
    [PermissionMutationEnum.SET_CACHED_ROUTES]: (state: PermissionState): void => {
        state.cachedRoutes = getCachedRoutes([...constantModules, ...asyncRoutes])
    }
}

export default mutations
