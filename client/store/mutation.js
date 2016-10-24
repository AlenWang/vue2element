// mutations 处理同步（通过$store.commit触发）
export const mutations = {
    INCREMENT(state) {
        state.count++
    }
}