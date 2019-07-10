import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
Vue.prototype.$axios = axios;
import "./assets/flexble.js";
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);
import { Indicator } from 'mint-ui';
Vue.config.productionTip = false
axios.interceptors.request.use((config)=>{
  Indicator.open({
    text: '加载中...',
    spinnerType: 'fading-circle'
  });
  return config
  })
  axios.interceptors.response.use((res)=>{
    Indicator.close();
    return res.data.data.films;
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
