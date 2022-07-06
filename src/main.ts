import {createApp} from 'vue'
import App from './App.vue'
import router from "./router/index"
import store from "./store/index"

// 开启自动引入，不需要全部引入
// import './styles/element/index.scss'
// import ElementPlus from 'element-plus'

// 如果需要使用ElMessage 还是需要引入
// import "element-plus/theme-chalk/src/message.scss"

import "./styles/index.scss"
import request from "./utils/request"
import "./permission"
import {mockXHR} from "../mock"

import * as Icons from '@element-plus/icons-vue'


// if (process.env.NODE_ENV === 'production') {
//     mockXHR()
// }
mockXHR()

const app = createApp(App).use(router).use(store)
// 全局注册icon组件
Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key])
})
app.config.globalProperties.$http = request
app.mount("#app")  // 需要放到最后,否则无法配置app.config
