import {Mutations, UserMutationTypes} from "./mutations"
import {ActionContext, ActionTree} from "vuex";
import {UserState} from "@/store/modules/user/state";
import {RootState} from "@/store";
import {getInfo, login} from "@/apis/user";

export enum UserActionEnum {
    LOGIN = 'ACTION_LOGIN',
    RESET_TOKEN = 'ACTION_RESET_TOKEN',
    GET_USER_INFO = 'ACTION_GET_USER_INFO',
    CHANGE_ROLES = 'ACTION_CHANGE_ROLES',
    LOGIN_OUT = 'ACTION_LOGIN_OUT',
}

// ReturnType 获取t函数的返回类型
// Parameters 获取函数的参数类型
// Action函数接受一个与store实例具有相同方法和属性的context对象,
// 所有使用Omit将context对象接口ActionContext中比较笼统的commit属性剔除，使用自定义的更加具体的commit属性
type AugmentedActionContext = {
    commit<k extends keyof Mutations>(
        key: string,
        payload: Parameters<Mutations[k]>[1]
    ): ReturnType<Mutations[k]>
} & Omit<ActionContext<UserState, RootState>, 'commit'>

// type test = {
//     a: number
// }
// const obj = {
//     a: 1
// }

interface Actions {
    //也可以简单的写成
    //[UserActionEnum.LOGIN](context: ActionContext<UserState, RootState>, payload: { username: string, password: string }): any
    [UserActionEnum.LOGIN](context: AugmentedActionContext, payload: { username: string, password: string }): any
}

const actions: Actions & ActionTree<UserState, RootState> = {
    [UserActionEnum.LOGIN]({commit}: AugmentedActionContext, payload: { username: string, password: string }) {
        return new Promise((resolve, reject) => {
            login(payload).then((res) => {
                commit(UserMutationTypes.SET_TOKEN, res.data.token)
                sessionStorage.setItem("token", res.data.token)
                resolve(res)
            }).catch((error) => {
                reject(error)
            })
        })
    },
    [UserActionEnum.GET_USER_INFO]({commit}: AugmentedActionContext) {
        return new Promise((resolve, reject) => {
            getInfo().then(({data}) => {
                commit(UserMutationTypes.SET_NAME, data.name)
                commit(UserMutationTypes.SET_ROLES, data.roles)
                resolve(data)
            }).catch((err) => {
                reject(err)
            })
        })

    },
    [UserActionEnum.RESET_TOKEN]({commit}: AugmentedActionContext) {
        commit(`user/${UserMutationTypes.RESET_TOKEN}`, undefined)
    }

}

export default actions
