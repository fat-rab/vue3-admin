import {tagDetail, tagsViewState} from "@/store/modules/tagsView/state";
import {MutationTree} from "vuex";
import {judgeArr} from "@/utils/array";

export enum tagsViewMutationEnum {

    SET_TAG_LIST = 'SET_TAG_LIST',
    ADD_TAG_LIST = 'ADD_TAG_LIST',
    DELETE_TAG = 'DELETE_TAG',
    DELETE_OTHER_TAG = 'DELETE_OTHER_TAG',
    DELETE_ALL_TAG = 'DELETE_ALL_TAG'
}


export interface tagsViewMutation {

    [tagsViewMutationEnum.SET_TAG_LIST](state: tagsViewState, payload: Array<tagDetail>): void

    [tagsViewMutationEnum.ADD_TAG_LIST](state: tagsViewState, payload: tagDetail): void

    [tagsViewMutationEnum.DELETE_TAG](state: tagsViewState, payload: string): void

    [tagsViewMutationEnum.DELETE_OTHER_TAG](state: tagsViewState, payload: string): void

    [tagsViewMutationEnum.DELETE_ALL_TAG](state: tagsViewState): void
}


const mutations: MutationTree<tagsViewState> & tagsViewMutation = {

    [tagsViewMutationEnum.SET_TAG_LIST](state: tagsViewState, payload: Array<tagDetail>): void {
        state.tagList = payload
    },
    [tagsViewMutationEnum.ADD_TAG_LIST](state: tagsViewState, payload: tagDetail): void {
        if (!judgeArr(state.tagList, payload.path, 'path')) {
            state.tagList.push(payload)
        }
    },
    [tagsViewMutationEnum.DELETE_TAG](state: tagsViewState, payload: string): void {
        let index = -1
        state.tagList.some((item, i) => {
            if (item.path === payload) {
                index = i
                return true
            }
        })
        if (index > -1) state.tagList.splice(index, 1)
    },
    [tagsViewMutationEnum.DELETE_OTHER_TAG](state: tagsViewState, payload: string): void {
        const list: Array<tagDetail> = []
        state.tagList.forEach((item) => {
            console.log(item)
            if (item.path === payload || item.affix) list.push(item)
        })
        state.tagList = list
    },
    [tagsViewMutationEnum.DELETE_ALL_TAG](state: tagsViewState): void {
        const list: Array<tagDetail> = []
        state.tagList.forEach((item) => {
            if (item.affix) list.push(item)
        })
        state.tagList = list
    }
}
export default mutations
