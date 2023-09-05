import {defineStore} from 'pinia'
import {getToken, removeToken, setToken} from '@/utils/auth'
import {UserActionEnum, UserState} from '@/ts/store/user'
import {getInfo, login} from '@/apis/user'
import {ResStructure} from '@/ts/axios'
import {resetRouter} from '@/router'
import {LoginRes} from '@/ts/login'


export const useUserStore = defineStore('user', {
    state: (): UserState => {
        return {
            token: getToken() || '',
            name: '',
            roles: [],
            avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
        }
    },
    actions: {
        [UserActionEnum.LOGIN](payload: any) {
            return new Promise((resolve, reject) => {
                login(payload).then(({data}:ResStructure<LoginRes>) => {
                    this.token = data.token
                    setToken(data.token)
                    resolve(data)
                }).catch((error) => {
                    reject(error)
                })
            })
        },
        [UserActionEnum.GET_USER_INFO]() {
            return new Promise((resolve, reject) => {
                getInfo().then(({data}:ResStructure<UserState>) => {
                    this.name = data.name
                    this.roles = data.roles
                    if (data.avatar) {
                        this.avatar = data.avatar
                    }
                    resolve(data)
                }).catch((err) => {
                    reject(err)
                })
            })
        },
        [UserActionEnum.RESET_TOKEN](): void {
            this.token = ''
            this.name = ''
            this.roles = []
            this.avatar = 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
            removeToken()
            resetRouter()
        },
    }
})
