import { createStore } from 'vuex'

// 导入数据持久化
import createPersistedState from "vuex-persistedstate";

// 导入模块
import cart from './modules/cart'
import user from './modules/user'
import category from './modules/category'


// 创建 Vue2 仓库 new Vuex.Store({})
// 创建 Vue3 创库 createStore({})
export default createStore({
  modules: {
    cart,
    user,
    category,
  },
  plugins: [createPersistedState({
    key: 'small_xian',
    paths: ['user', 'cart'],
  })]
})
