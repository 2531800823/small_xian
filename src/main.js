import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ui from './components/library'

// 导入全局样式 重置 和 插件重置
import 'normalize.css'
import '@/assets/style/commit.less'

// 插件的使用，在main.js使用app.use(插件)
createApp(App).use(store).use(router).use(ui).mount('#app')

