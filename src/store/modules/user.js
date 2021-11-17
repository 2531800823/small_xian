// 用户模块


const state = () => {
    return {
        // 用户信息
        profile: {
            id: '',
            avatar: '',
            nickname: '',
            account: '',
            mobile: '',
            token: '',
        }
    }
}

const mutations = {
    setUser(state, payload) {
        state.profile = payload;
    }
}



export default {
    namespaced: true,
    state,
    mutations,
}