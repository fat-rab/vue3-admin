import {ActionContext, ActionTree} from "vuex";
import {UserState, UserMutationEnum, Mutations, UserActionEnum} from "../../ts/user"
import {RootState} from "@/store";
import {getInfo, login} from "@/apis/user";
import {setToken} from "@/utils/auth";



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


interface Actions {
    //也可以简单的写成
    //[UserActionEnum.LOGIN](context: ActionContext<UserState, RootState>, payload: { username: string, password: string }): any
    [UserActionEnum.LOGIN](context: AugmentedActionContext, payload: { username: string, password: string }): any
}

const actions: Actions & ActionTree<UserState, RootState> = {
    [UserActionEnum.LOGIN]({commit}: AugmentedActionContext, payload: { username: string, password: string }) {
        return new Promise((resolve, reject) => {
            login(payload).then(({data}) => {
                console.log(data, 'data')
                commit(UserMutationEnum.SET_TOKEN, data.data.token)
                setToken(data.data.token)
                resolve(data)
            }).catch((error) => {
                reject(error)
            })
        })
    },
    [UserActionEnum.GET_USER_INFO]({commit}: AugmentedActionContext) {
        return new Promise((resolve, reject) => {
            getInfo().then(({data}) => {
                commit(UserMutationEnum.SET_NAME, data.data.name)
                commit(UserMutationEnum.SET_ROLES, data.data.roles)
                if (data.data.avatar) {
                    commit(UserMutationEnum.SET_AVATAR, data.data.avatar)
                }
                resolve(data)
            }).catch((err) => {
                reject(err)
            })
        })

    },
    [UserActionEnum.RESET_TOKEN]({commit}: AugmentedActionContext) {
        commit(`${UserMutationEnum.RESET_TOKEN}`, undefined)
    }

}

export default actions
