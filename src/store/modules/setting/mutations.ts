import {MutationTree} from "vuex";
import {SettingState, Mutations, SettingMutationEnum} from "../../ts/setting"


//除了需要符合vuex规定的MutationTree<UserState>接口要求，还需要符合上述Mutations规定的函数
//MutationTree<UserState>，要求key为string,value为(state: S, payload?: any) => any
const mutations: MutationTree<SettingState> & Mutations = {
    [SettingMutationEnum.SHOW_TITLE](state: SettingState): void {
        state.showTitle = !state.showTitle
    }
}

export default mutations
