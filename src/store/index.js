import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import state from './states'

Vue.use(Vuex)
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules : {
    
  },
  strict : true
})