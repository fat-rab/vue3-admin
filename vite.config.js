import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

const {resolve} = require('path')
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': resolve('src'),
            '*': resolve(''),
            'Assets': resolve('src/assets'),
            //https://dev.to/0xbf/vite-module-path-has-been-externalized-for-browser-compatibility-2bo6
            //vite禁止在客户端访问内置模块代码
            path: "path-browserify",
        },
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'] //忽略文件后缀, vue3不再支持忽略vue后缀
    },
})
