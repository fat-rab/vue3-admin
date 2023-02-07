import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'

const {resolve} = require('path')
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
            resolvers: [
                ElementPlusResolver(),

                // 自动导入图标组件
                // // {prefix}-{enabledCollections}-{icon} 使用组件解析器时，必须遵循名称转换才能正确推断图标。
                IconsResolver({
                    prefix: 'icon', // 自动引入的Icon组件统一前缀，默认为 i
                    enabledCollections: ['ep']
                }),
            ],
        }),

        Components({
            // extensions: ['vue', 'md'],
            // // 自动引入和注册组件
            // include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
            // // 指定组件位置，默认是src/components
            // dirs: ['src/components'],
            resolvers: [
                // 自动注册图标组件
                IconsResolver(),
                // 自动导入 Element Plus 组件
                ElementPlusResolver(),
            ],

            dts: 'src/dts/components.d.ts'
        }),

        Icons({
            compiler: 'vue3',
            autoInstall: true,
        }),
    ],
    css: {
        preprocessorOptions: {
            // 引入全局sass，用于替换element的自定义样式
            scss: {
                additionalData: '@use "/src/styles/element/index.scss" as *;',
            },
        },
    },
    build: {
        target: 'es2020',
        cssCodeSplit: true, // 如果设置为false，整个项目中的所有 CSS 将被提取到一个 CSS 文件中
        // minify:'terser',
        terserOptions: {
            compress: {
                drop_console: true,  //打包时删除console
                drop_debugger: true, //打包时删除 debugger
                pure_funcs: ['console.log'],
            }
        },
        rollupOptions: {
            external: [],
            output: {
                // {getModuleInfo}
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        const arr = id.toString().split('node_modules/')[1].split('/')
                        // lodash 单独打包
                        if (arr.includes('lodash')) {
                            return 'lodash'
                        }
                        if (arr.includes('vue')) {
                            return 'vue'
                        }
                        if (arr.includes('axios')) {
                            return 'axios'
                        }
                        if (arr.includes('echarts')) {
                            return 'echarts'
                        }
                    }
                }
            }
        }
    },
    optimizedeps: {
        esbuildoptions: {
            target: 'es2020'
        }
    },
    server: {
        open: true, //启动自动打开浏览器
        hmr: true, //启动热更新
        host: '0.0.0.0',  // 设置0.0.0.0控制台显示外部访问的地址
        port: 3000,
        proxy: {}
    },
    resolve: {
        alias: {
            '@': resolve('src'),
            '*': resolve(''),
            'Assets': resolve('src/assets'),
            //https://dev.to/0xbf/vite-module-path-has-been-externalized-for-browser-compatibility-2bo6
            //vite禁止在客户端访问内置模块代码
            path: 'path-browserify',
        },
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.scss'] //忽略文件后缀, vue3不再支持忽略vue后缀
    },
})
