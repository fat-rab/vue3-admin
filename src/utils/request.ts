import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'
import {getToken, prefixStr, TokenKey} from '@/utils/auth'
import {ElMessage, ElMessageBox} from 'element-plus'
import {UserActionEnum} from '@/ts/store/user'
import {myAxiosConfig, ResStructure} from '@/ts/axios'
import {useUserStore} from '@/store/user'
import qs from 'qs'

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 5000
})

// 请求拦截器
axiosInstance.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
    if (!config.headers) {
        config.headers = {
            'Content-Type': 'application/json'
        }
    }
    if (getToken()) {
        config.headers[TokenKey] = `${prefixStr} ${getToken()}`
    }
    if (config.contentType && config.contentType === 'application/x-www-form-urlencoded') {
        console.log(config, 'config1')
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8'
        config.transformRequest = [
            function(data) {
                return qs.stringify(data)
            }
        ]
    }
    console.log(config, 'config3')
    return config
}, (error) => {
    return Promise.reject(error)
})
// 响应拦截器
axiosInstance.interceptors.response.use((response: AxiosResponse<ResStructure>) => {
    if (response.config.responseType === 'blob') return response
    const res: ResStructure = response.data
    // 如果code不是20000，那么弹出报错
    if (res.code !== 20000) {
        ElMessage({
            type: 'error',
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
                    const userStore = useUserStore()
                    // 重置token,刷新页面重新登陆
                    userStore[UserActionEnum.RESET_TOKEN]()
                    location.reload()
                })
        }
        return Promise.reject(new Error(res.message || 'Error'))
    } else {
        return response
    }
}, (error) => {
    ElMessage({
        type: 'error',
        message: error.message,
        duration: 3000
    })
    return Promise.reject(error)
})

class HttpClient {
    public http(config: myAxiosConfig): Promise<ResStructure> {
        return new Promise((resolve, reject) => {
            axiosInstance(config).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err)
            })
        })

    }
}

export default new HttpClient().http
