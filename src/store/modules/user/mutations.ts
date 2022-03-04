import {MutationTree} from "vuex";
import {UserState} from "./state"
import {resetRouter} from "@/router";

export enum UserMutationEnum {
    SET_TOKEN = 'SET_TOKEN',
    SET_NAME = 'SET_NAME',
    SET_ROLES = 'SET_ROLES',
    SET_AVATAR = 'SET_AVATAR',
    RESET_TOKEN = "RESET_TOKEN"
}

// 规定mutations可以有哪些方法
export interface Mutations<s = UserState> {
    [UserMutationEnum.SET_TOKEN](state: s, token: string): void

    [UserMutationEnum.SET_NAME](state: s, name: string): void

    [UserMutationEnum.SET_ROLES](state: s, roles: string[]): void

    [UserMutationEnum.SET_AVATAR](state: s, avatar: string): void

    [UserMutationEnum.RESET_TOKEN](state: s): void
}

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
        sessionStorage.removeItem("token")
        resetRouter()
    },
}

export default mutations
