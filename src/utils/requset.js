import axios from 'axios'
import router from '@/router'
import store from '@/store'

const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'

const service = axios.create({
    baseURL,
    timeout: 5000
})

// 请求拦截器
service.interceptors.request.use((config) => {

    const { profile } = store.state.user
    // 如果有 token 就带上
    if (profile.token) {
        // 设置请求头
        config.headers.Authorization = `Bearer ` + profile.token
    }

    return config

}, err => {
    console.log(err);
    return Promise.reject(err)
})


// 响应拦截器
service.interceptors.response.use((res) => {

    // 把 axios 包的那个数据给剥离
    return res.data

}, err => {
    // 如果是 401 进入该函数
    console.log(err);
    if (err.response && err.response.status === 401) {
        // 购物车请求 ，然后没有登录，跳转登录页，然后登录成功再让他跳转到当前位置
        // 1 清空无效用户信息
        // 2 跳转到 登录页
        // 3 跳转 传参，（把当前路由地址）传到 登录页
        store.commit('user/setUser', {})

        // router.currentRoute 获取当前路由信息对象  .value.fullPath 获取全部路径信息 编码一下防止有特殊字符
        const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
        router.push('/login?redirectUrl=' + fullPath)

    }
    return Promise.reject(err)
})


export default service