import state, {SettingState} from "./state";
import mutations from "./mutations";
import actions from "./actions";
import {Module} from "vuex";
import {RootState} from "@/store";

const setting: Module<SettingState, RootState> = {
    namespaced: true,
    state,
    mutations,
    actions
}

export default setting

