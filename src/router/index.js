import { createRouter, createWebHashHistory } from 'vue-router'

// 引入路由
import Layout from '@/views/layout.vue'
import Home from '@/views/home'


const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: '/category/:id',
        component: () => import('@/views/category')
      },
      {
        path: '/category/sub/:id',
        component: () => import('@/views/category/sub')
      },
    ]
  }
]


// vue2 new VueRouter({})
// vue3 createRouter({})
const router = createRouter({
  // 使用 hash 路由模式
  history: createWebHashHistory(),
  routes
})

export default router
