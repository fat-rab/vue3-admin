import state, {tagsViewState} from "./state"
import mutations from "./mutations"
import actions from "./actions";
import {Module} from "vuex";
import {RootState} from "@/store";

const tagsViewStore: Module<tagsViewState, RootState> = {
    namespaced: true,
    state,
    mutations,
    actions
}

export default tagsViewStore
