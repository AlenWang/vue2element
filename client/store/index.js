import Vue from 'vue'
import Vuex from 'vuex'
import {actions} from './action'
import {mutations} from './mutation'
import {state} from './state'
Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store
