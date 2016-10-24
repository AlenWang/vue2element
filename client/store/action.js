// action 处理异步 （通过$store.dispatch触发）
export const actions = {
    incrementAsync({commit}) {
        setTimeout(() => {
            commit('INCREMENT')
        }, 200)
    }
}

