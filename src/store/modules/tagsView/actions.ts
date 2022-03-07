import {tagsViewMutation, tagsViewMutationEnum} from "@/store/modules/tagsView/mutations";
import {RootState} from "@/store";
import {tagDetail, tagsViewState} from "@/store/modules/tagsView/state";
import {ActionContext, ActionTree} from "vuex";

enum tagsViewActionEnum {
    SET_TAG_LIST = 'SET_TAG_LIST'
}

type AugmentedActionContext = {
    commit<k extends keyof tagsViewMutation>(
        k: string,
        payload: Parameters<tagsViewMutation[k]>[1]
    ): ReturnType<tagsViewMutation[k]>
} & Omit<ActionContext<tagsViewState, RootState>, 'commit'>

interface tagsViewActions {
    [tagsViewActionEnum.SET_TAG_LIST](context: AugmentedActionContext, payload: Array<tagDetail>): void
}

const actions: tagsViewActions & ActionTree<tagsViewState, RootState> = {
    [tagsViewActionEnum.SET_TAG_LIST]({commit}: AugmentedActionContext, payload: Array<tagDetail>): void {
        commit(tagsViewMutationEnum.SET_TAG_LIST, payload)
    }
}

export default actions
