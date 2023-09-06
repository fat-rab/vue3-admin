export {}

declare global {
    interface Window {
        [key: string]: any
    }
}

declare module 'axios' {
    interface AxiosRequestConfig {
        // 在这里添加您自定义的属性
        contentType?: string
    }
}
