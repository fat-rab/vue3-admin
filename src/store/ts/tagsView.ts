
export interface TagDetail {
    path: string
    title: string
    affix: boolean
    query?: {
        [key: string]: any
    }
}

export interface TagsViewState {
    tagList: Array<TagDetail>
}
export enum TagsViewMutationEnum {

    SET_TAG_LIST = 'SET_TAG_LIST',
    ADD_TAG_LIST = 'ADD_TAG_LIST',
    DELETE_TAG = 'DELETE_TAG',
    DELETE_OTHER_TAG = 'DELETE_OTHER_TAG',
    DELETE_ALL_TAG = 'DELETE_ALL_TAG'
}


export interface TagsViewMutation {

    [TagsViewMutationEnum.SET_TAG_LIST](state: TagsViewState, payload: Array<TagDetail>): void

    [TagsViewMutationEnum.ADD_TAG_LIST](state: TagsViewState, payload: TagDetail): void

    [TagsViewMutationEnum.DELETE_TAG](state: TagsViewState, payload: string): void

    [TagsViewMutationEnum.DELETE_OTHER_TAG](state: TagsViewState, payload: string): void

    [TagsViewMutationEnum.DELETE_ALL_TAG](state: TagsViewState): void
}
export enum TagsViewActionEnum {
    SET_TAG_LIST = 'SET_TAG_LIST'
}
