import {createStore} from "vuex";
import {UserState} from "@/store/modules/user/state";
import {PermissionState} from "@/store/modules/permission/state";
import user from "./modules/user"
import permission from "./modules/permission"
import setting from "./modules/setting"
import {SettingState} from "@/store/modules/setting/state";

export interface RootState {
    user: UserState
    permission: PermissionState
    setting: SettingState
}

const store = createStore({
    modules: {
        user,
        permission,
        setting
    }
})
export default store
