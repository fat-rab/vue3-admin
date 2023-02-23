// import axios, {AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse} from 'axios'
//
// interface MyAxiosRequestConfig<D = any> extends Omit<AxiosRequestConfig<D>, 'headers'> {
//     headers: AxiosRequestHeaders
// }
//
// interface MyAxiosRequestConfig<D = any> extends AxiosRequestConfig<D> {
//     error: Function
// }
//
// interface MyAxiosResponse<T = any, D = any> extends Omit<AxiosResponse<T, D>, 'config'> {
//     config: AxiosRequestConfig<D>
// }
//
// class MyAxios {
//     private request = axios.create({
//         baseURL: import.meta.env.VITE_APP_BASE_API,
//         timeout: 5000
//     })
//
//     constructor() {
//     }
// }
//
// export default new MyAxios()
