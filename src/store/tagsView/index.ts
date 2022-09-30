import {defineStore} from 'pinia'
import {TagDetail, TagsViewActionEnum, TagsViewState} from '@/ts/store/tagsView'
import {judgeArr} from '@/utils/array'

export const useTagsViewStore = defineStore('tagsView', {
    state: (): TagsViewState => {
        return {
            tagList: []
        }
    },
    actions: {
        [TagsViewActionEnum.SET_TAG_LIST](payload: Array<TagDetail>) {
            this.tagList = payload
        },
        [TagsViewActionEnum.ADD_TAG_LIST](payload: TagDetail): void {
            if (!judgeArr(this.tagList, payload.path, 'path')) {
                this.tagList.push(payload)
            }
        },
        [TagsViewActionEnum.DELETE_TAG](payload: string): void {
            let index = -1
            this.tagList.some((item, i) => {
                if (item.path === payload) {
                    index = i
                    return true
                }
            })
            if (index > -1) this.tagList.splice(index, 1)
        },
        [TagsViewActionEnum.DELETE_OTHER_TAG](payload: string): void {
            const list: Array<TagDetail> = []
            this.tagList.forEach((item) => {
                console.log(item)
                if (item.path === payload || item.affix) list.push(item)
            })
            this.tagList = list
        },
        [TagsViewActionEnum.DELETE_ALL_TAG](): void {
            const list: Array<TagDetail> = []
            this.tagList.forEach((item) => {
                if (item.affix) list.push(item)
            })
            this.tagList = list
        }
    }
})
