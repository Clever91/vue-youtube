// libs
import Vue from 'vue'
import Vueladate from 'vuelidate'
// files
import App from './App.vue'
import './registerServiceWorker'
import dateFormat from '@/filters/date.filter'
import router from './router'
import store from './store'
import messagePlugin from '@/utils/message.plugin'
// additional libs
import 'materialize-css/dist/js/materialize'

Vue.config.productionTip = false

Vue.filter('date', dateFormat)

Vue.use(Vueladate)
Vue.use(messagePlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
