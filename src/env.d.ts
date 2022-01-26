// 定义环境变量类型
interface ImportMetaEnv {
    readonly VITE_APP_BASE_API: string
    readonly VITE_APP_TEST: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
