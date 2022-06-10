import {createStore} from "vuex";
import {UserState} from "./ts/user";
import {TagsViewState} from "./ts/tagsView";
import {SettingState} from "./ts/setting";
import {PermissionState} from "./ts/permission";
import user from "./modules/user"
import permission from "./modules/permission"
import setting from "./modules/setting"
import tagsView from "./modules/tagsView"

export interface RootState {
    user: UserState
    permission: PermissionState
    setting: SettingState
    tagsView: TagsViewState
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
