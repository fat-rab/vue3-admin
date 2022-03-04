// 需要在src目录下创建
// 仅仅用作ts的只能提示，似乎没有定义类型的作用
interface ImportMetaEnv {
    readonly VITE_APP_BASE_API: string
    readonly VITE_APP_TEST: string
}e

interface ImportMeta {
    readonly env: ImportMetaEnv
}
