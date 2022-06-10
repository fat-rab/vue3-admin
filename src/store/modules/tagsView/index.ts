import state from "./state"
import mutations from "./mutations"
import actions from "./actions";
import {Module} from "vuex";
import {RootState} from "@/store";
import {TagsViewState} from "../../ts/tagsView";

const tagsViewStore: Module<TagsViewState, RootState> = {
    namespaced: true,
    state,
    mutations,
    actions
}

export default tagsViewStore
