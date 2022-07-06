import state from "@/store/modules/user/state";
import {UserState} from "@/ts/store/user";
import mutations from "@/store/modules/user/mutations";
import actions from "@/store/modules/user/actions";
import {Module} from "vuex";
import {RootState} from "@/store";

const userStore: Module<UserState, RootState> = {
    namespaced: true,
    state,
    mutations,
    actions
}

export default userStore

