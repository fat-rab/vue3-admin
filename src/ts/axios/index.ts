import {AxiosResponse} from 'axios'

export interface resStructure<T = any> {
    code: number
    data: T
    message: string
}

export interface Result<T> extends AxiosResponse {
    data: resStructure<T>
}
