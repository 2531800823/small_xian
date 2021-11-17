// 分类模块


import { topCategory } from '@/api/constants'
import { findAllCategory } from '@/api/category.js'


const state = () => {
    return {
        // 分类列表
        list: topCategory.map(item => ({ name: item }))
    }
}

const mutations = {
    setList(state, playod) {
        state.list = playod
    },
}

const actions = {
    async getList(context) {
        const { result } = await findAllCategory()
        context.commit('setList', result)
    }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions,
}
