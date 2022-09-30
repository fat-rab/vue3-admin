import {defineStore} from 'pinia'
import {SettingActionsEnum, SettingState} from '@/ts/store/setting'

export const useSettingStore = defineStore('setting', {
    state: (): SettingState => {
        return {
            showTitle: true
        }
    },
    actions: {
        [SettingActionsEnum.SHOW_TITLE]() {
            this.showTitle = !this.showTitle
        }
    }
})
