export interface UserState {
    token: string
    name: string
    roles: string[]
    avatar: string
}
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

export enum UserActionEnum {
    LOGIN = 'ACTION_LOGIN',
    RESET_TOKEN = 'ACTION_RESET_TOKEN',
    GET_USER_INFO = 'ACTION_GET_USER_INFO',
    CHANGE_ROLES = 'ACTION_CHANGE_ROLES',
    LOGIN_OUT = 'ACTION_LOGIN_OUT',
}
