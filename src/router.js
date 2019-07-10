import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cinema from './views/Cinema.vue'
import Sale from './views/Sale.vue'
import Mine from './views/Mine.vue'
import Hotshow from './views/Hotshow.vue'
import Comming from './views/Comming.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect:{"name":'home'}
  },
    {
      path: '/home',
      name: 'home',
      component: Home,
      redirect:{"name":"hotshow"},
      children:[
          {
            path: '/home/hotshow',
            name: 'hotshow',
            component:Hotshow
          },
          {
            path: '/home/comming',
            name: 'comming',
            component:Comming
          }
        
      ]
    },
    {
      path: '/cinema',
      name: 'cinema',
      component:Cinema
    },
    {
      path: '/sale',
      name: 'sale',
      component:Sale
    },
    {
      path: '/mine',
      name: 'mine',
      component:Mine
    }
    
  ]
})
