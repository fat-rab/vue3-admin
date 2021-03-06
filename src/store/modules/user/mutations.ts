import {MutationTree} from "vuex";
import {Mutations, UserMutationEnum, UserState} from "@/ts/store/user"
import {resetRouter} from "@/router";
import {removeToken} from "@/utils/auth";



//除了需要符合vuex规定的MutationTree<UserState>接口要求，还需要符合上述Mutations规定的函数
//MutationTree<UserState>，要求key为string,value为(state: S, payload?: any) => any
const mutations: MutationTree<UserState> & Mutations = {
    [UserMutationEnum.SET_TOKEN](state: UserState, token: string): void {
        state.token = token
    },
    [UserMutationEnum.SET_NAME](state: UserState, name: string): void {
        state.name = name
    },
    [UserMutationEnum.SET_ROLES](state: UserState, roles: string[]): void {
        state.roles = roles
    },
    [UserMutationEnum.SET_AVATAR](state: UserState, avatar: string): void {
        state.avatar = avatar
    },
    [UserMutationEnum.RESET_TOKEN](state: UserState): void {
        state.roles = []
        state.token = ''
        state.name = ''
        state.avatar = 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
        removeToken()
        resetRouter()
    },
}

export default mutations
