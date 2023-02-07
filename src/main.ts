import {createApp} from 'vue'
import App from './App.vue'
import router from './router/index'
import {createPinia} from 'pinia'
// 开启自动引入，不需要全部引入
// import './styles/element/index.scss'
// import ElementPlus from 'element-plus'

import './styles/index.scss'
import request from './utils/request'
import './permission'
import {mockXHR} from '../mock'

// if (process.env.NODE_ENV === 'production') {
//     mockXHR()
// }
mockXHR()

const app = createApp(App).use(router).use(createPinia())
app.config.globalProperties.$http = request
app.mount('#app')  // 需要放到最后,否则无法配置app.config
