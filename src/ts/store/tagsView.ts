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


export enum TagsViewActionEnum {
    SET_TAG_LIST = 'SET_TAG_LIST',
    ADD_TAG_LIST = 'ADD_TAG_LIST',
    DELETE_TAG = 'DELETE_TAG',
    DELETE_OTHER_TAG = 'DELETE_OTHER_TAG',
    DELETE_ALL_TAG = 'DELETE_ALL_TAG'
}
