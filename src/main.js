import {createApp} from 'vue'
import App from './App.vue'
import router from "./router/index"
import store from "./store/index"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "./styles/index.scss"
import request from "./utils/request"
import "./permission"
import {mockXHR} from "../mock"

import * as Icons from '@element-plus/icons'


// if (process.env.NODE_ENV === 'production') {
//     mockXHR()
// }
mockXHR()
const app = createApp(App).use(router).use(store).use(ElementPlus)
// 全局注册icon组件
Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key])
})
app.config.globalProperties.$http = request
app.mount("#app")  // 需要放到最后,否则无法配置app.config
