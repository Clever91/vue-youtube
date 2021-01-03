import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import dateFormat from '@/filters/date.filter'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize'

Vue.config.productionTip = false

Vue.filter('date', dateFormat)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
