import request from '@/utils/requset'

export const findBrand = (limit) => {
    return request({
        method: "get",
        url: '/home/brand',
        params: limit
    })
}

/**
 * 获取广告图
 * @returns Promise
 */
export const findBanner = () => {
    return request({
        url: '/home/banner',
    })
}

