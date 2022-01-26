import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

const {resolve} = require('path')
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': resolve('src'),
            '*': resolve(''),
            'Assets': resolve('src/assets')
        },
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'] //忽略文件后缀, vue3不再支持忽略vue后缀
    }
})
