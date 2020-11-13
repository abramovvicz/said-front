import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import moment from 'moment'
import router from './router'
import store from './store'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false


Vue.filter('formatDate', function(value){
  if(value){
    return moment(String(value)).format('DD/MM/YYYY')
  }
})

new Vue({
  vuetify,
  render: h => h(App),
  store,
  router
  
}).$mount('#app')
