import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'
import {getToken, TokenKey} from '@/utils/auth'
import {ElMessage, ElMessageBox} from "element-plus";
import {UserActionEnum} from "@/store/ts/user";
import store from '@/store'


interface resStructure {
    code: number
    data: any
    message: string
}

const request = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 5000
})
// 请求拦截器
request.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
    if (getToken()) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        config.headers[TokenKey] = getToken()
    }
    return config;
}, (error) => {
    console.log(error)
    return Promise.reject(error)
})
// 响应拦截器
request.interceptors.response.use((response: AxiosResponse) => {
    const res: resStructure = response.data
    // 如果code不是20000，那么弹出报错
    if (res.code !== 20000) {
        ElMessage({
            type: "error",
            message: res.message,
            duration: 3000
        })
        // token过期，token错误等情况
        if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
            ElMessageBox.confirm(
                '登陆验证信息失效，是否重新登陆?',
                '警告',
                {
                    confirmButtonText: '确认',
                    cancelButtonText: '取消',
                    type: 'warning',
                }
            )
                .then(() => {
                    // 重置token,刷新页面重新登陆
                    store.dispatch(`user/${UserActionEnum.RESET_TOKEN}`).then(() => {
                        location.reload()
                    })
                })
        }
        return Promise.reject(new Error(res.message || 'Error'))
    } else {
        return response
    }
}, (error) => {
    ElMessage({
        type: "error",
        message: error.message,
        duration: 3000
    })
    return Promise.reject(error)
})
export default request
