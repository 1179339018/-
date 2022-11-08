import Vuex from 'vuex'
import Vue from 'vue'

// 1.安装插件
Vue.use(Vuex)
// 2.创建对象
const store = new Vuex.Store({
    state: {
        count: 2
    },
    mutations: {
        increment(state){
            state.count++
        },
        decrement(state){
            state.count--
        }
    },
    actions: {
        
    },
    getters: {
        
    },
    modules: {
        
    }
})

// 导出store对象
export default store