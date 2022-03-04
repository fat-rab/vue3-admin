import {createStore} from "vuex";
import {UserState} from "@/store/modules/user/state";
import {PermissionState} from "@/store/modules/permission/state";
import user from "./modules/user"
import permission from "./modules/permission"
import setting from "./modules/setting"
import tagsView from "./modules/tagsView"
import {SettingState} from "@/store/modules/setting/state";
import {tagsViewState} from "@/store/modules/tagsView/state";

export interface RootState {
    user: UserState
    permission: PermissionState
    setting: SettingState
    tagsView:tagsViewState
}

const store = createStore({
    modules: {
        user,
        permission,
        setting,
        tagsView
    }
})
export default store
