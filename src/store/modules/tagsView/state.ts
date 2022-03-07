export interface tagDetail {
    path: string
    title: string
    affix: boolean
    query?: {
        [key: string]: any
    }
}

export interface tagsViewState {
    tagList: Array<tagDetail>
}

const state: tagsViewState = {
    tagList: []
}
export default state
