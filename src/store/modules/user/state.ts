import {getToken} from "@/utils/auth";

export interface UserState {
    token: string
    name: string
    roles: string[]
    avatar: string
}

const state: UserState = {
    token: getToken() || '',
    name: '',
    roles: [],
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
}
export default state
