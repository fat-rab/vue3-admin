import {TagDetail, TagsViewState,TagsViewMutationEnum,TagsViewMutation} from "@/ts/store/tagsView";
import {MutationTree} from "vuex";
import {judgeArr} from "@/utils/array";




const mutations: MutationTree<TagsViewState> & TagsViewMutation = {

    [TagsViewMutationEnum.SET_TAG_LIST](state: TagsViewState, payload: Array<TagDetail>): void {
        state.tagList = payload
    },
    [TagsViewMutationEnum.ADD_TAG_LIST](state: TagsViewState, payload: TagDetail): void {
        if (!judgeArr(state.tagList, payload.path, 'path')) {
            state.tagList.push(payload)
        }
    },
    [TagsViewMutationEnum.DELETE_TAG](state: TagsViewState, payload: string): void {
        let index = -1
        state.tagList.some((item, i) => {
            if (item.path === payload) {
                index = i
                return true
            }
        })
        if (index > -1) state.tagList.splice(index, 1)
    },
    [TagsViewMutationEnum.DELETE_OTHER_TAG](state: TagsViewState, payload: string): void {
        const list: Array<TagDetail> = []
        state.tagList.forEach((item) => {
            console.log(item)
            if (item.path === payload || item.affix) list.push(item)
        })
        state.tagList = list
    },
    [TagsViewMutationEnum.DELETE_ALL_TAG](state: TagsViewState): void {
        const list: Array<TagDetail> = []
        state.tagList.forEach((item) => {
            if (item.affix) list.push(item)
        })
        state.tagList = list
    }
}
export default mutations
