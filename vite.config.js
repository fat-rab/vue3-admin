import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

const {resolve} = require('path')
export default defineConfig({
    plugins: [vue()],
    server: {
        open:true, //启动自动打开浏览器
        hmr: true, //启动热更新
        host: '0.0.0.0',  // 设置0.0.0.0控制台显示外部访问的地址
        port: 3000,
    },
    resolve: {
        alias: {
            '@': resolve('src'),
            '*': resolve(''),
            'Assets': resolve('src/assets'),
            //https://dev.to/0xbf/vite-module-path-has-been-externalized-for-browser-compatibility-2bo6
            //vite禁止在客户端访问内置模块代码
            path: "path-browserify",
        },
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.scss'] //忽略文件后缀, vue3不再支持忽略vue后缀
    },
})
