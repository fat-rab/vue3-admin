import {TagsViewMutation, TagsViewMutationEnum,TagsViewActionEnum} from "../../ts/tagsView";
import {RootState} from "@/store";
import {TagDetail, TagsViewState} from "../../ts/tagsView";
import {ActionContext, ActionTree} from "vuex";



type AugmentedActionContext = {
    commit<k extends keyof TagsViewMutation>(
        k: string,
        payload: Parameters<TagsViewMutation[k]>[1]
    ): ReturnType<TagsViewMutation[k]>
} & Omit<ActionContext<TagsViewState, RootState>, 'commit'>

interface tagsViewActions {
    [TagsViewActionEnum.SET_TAG_LIST](context: AugmentedActionContext, payload: Array<TagDetail>): void
}

const actions: tagsViewActions & ActionTree<TagsViewState, RootState> = {
    [TagsViewActionEnum.SET_TAG_LIST]({commit}: AugmentedActionContext, payload: Array<TagDetail>): void {
        commit(TagsViewMutationEnum.SET_TAG_LIST, payload)
    }
}

export default actions
