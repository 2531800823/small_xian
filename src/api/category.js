// 请求头部数据

import request from '@/utils/requset'

// 获取头部 下拉 数据
export const findAllCategory = () => {
    return request({
        method: 'get',
        url: '/home/category/head'
    })
}