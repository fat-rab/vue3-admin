import {MutationTree} from "vuex";
import {SettingState} from "./state"

export enum SettingMutationTypes {
    SHOW_TITLE = 'SHOW_TITLE'
}

// 规定mutations可以有哪些方法
export interface Mutations<s = SettingState> {
    [SettingMutationTypes.SHOW_TITLE](state: s): void
}

//除了需要符合vuex规定的MutationTree<UserState>接口要求，还需要符合上述Mutations规定的函数
//MutationTree<UserState>，要求key为string,value为(state: S, payload?: any) => any
const mutations: MutationTree<SettingState> & Mutations = {
    [SettingMutationTypes.SHOW_TITLE](state: SettingState): void {
        state.showTitle = !state.showTitle
    }
}

export default mutations
