import {Mutations} from "@/ts/store/setting"
import {ActionContext, ActionTree} from "vuex";
import {UserState} from "@/ts/store/user";
import {RootState} from "@/store";
import {SettingState} from "@/ts/store/setting";

export enum UserActionEnum {

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



const actions: ActionTree<SettingState, RootState> = {}

export default actions
