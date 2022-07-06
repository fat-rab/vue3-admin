import {getToken} from "@/utils/auth";
import {UserState} from "@/ts/store/user"

const state: UserState = {
    token: getToken() || '',
    name: '',
    roles: [],
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
}
export default state
