export interface SettingState {
    showTitle: boolean
}
export enum SettingMutationEnum {
    SHOW_TITLE = 'SHOW_TITLE'
}

// 规定mutations可以有哪些方法
export interface Mutations<s = SettingState> {
    [SettingMutationEnum.SHOW_TITLE](state: s): void
}
