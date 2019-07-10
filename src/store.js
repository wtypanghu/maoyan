import Vue from 'vue'
import Vuex from 'vuex'
import film from './views/film/film.js'
import filmlist from './views/nowing/filmlist.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    film,filmlist
  }
})
