export interface UserState {
    token: string
    name: string
    roles: string[]
    avatar: string
}

export enum UserActionEnum {
    LOGIN = 'ACTION_LOGIN',
    RESET_TOKEN = 'ACTION_RESET_TOKEN',
    GET_USER_INFO = 'ACTION_GET_USER_INFO',
}
