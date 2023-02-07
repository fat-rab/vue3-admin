import {createApp} from 'vue'
import App from './App.vue'
import router from './router/index'
import {createPinia} from 'pinia'
// 开启自动引入，不需要全部引入
// import './styles/element/index.scss'
// import ElementPlus from 'element-plus'

// 如果需要使用ElMessage 还是需要引入(使用了unplugin-element-plus/vite,不再需要引入该样式)
// import "element-plus/theme-chalk/src/message.scss"

import './styles/index.scss'
import request from './utils/request'
import './permission'
import {mockXHR} from '../mock'

// if (process.env.NODE_ENV === 'production') {
//     mockXHR()
// }
mockXHR()

const app = createApp(App).use(router).use(createPinia())
// 全局注册icon组件
import * as Icons from '@element-plus/icons-vue'
Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key])
})
app.config.globalProperties.$http = request
app.mount('#app')  // 需要放到最后,否则无法配置app.config
