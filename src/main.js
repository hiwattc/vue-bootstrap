import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'


//============================================
//2022.07.03 jb: bootstrap vue 사용을 위해 추가
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
//============================================

Vue.prototype.$http = axios 

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
