import {Module} from "vuex";
import {PermissionState} from "@/store/modules/permission/state";
import {RootState} from "@/store";
import state from "./state"
import mutations from "./mutations"
import actions from "./actions";

const permissionStore: Module<PermissionState, RootState> = {
    namespaced: true,
    state,
    mutations,
    actions
}

export default permissionStore
