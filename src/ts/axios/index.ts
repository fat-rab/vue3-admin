import {AxiosRequestConfig} from 'axios'

export interface myAxiosConfig extends AxiosRequestConfig{
    url: string
}


export interface resStructure<T = any> {
    code: number
    data: T
    message: string
}
