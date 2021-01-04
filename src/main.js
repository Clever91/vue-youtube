// libs
import Vue from 'vue'
import Vueladate from 'vuelidate'
// firebase libs
import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/database'
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

firebase.initializeApp({
  apiKey: "AIzaSyBO-l0pE1WI1tKJZavdUeuhWpP8I9Ake3g",
  authDomain: "vue-fb2df.firebaseapp.com",
  projectId: "vue-fb2df",
  storageBucket: "vue-fb2df.appspot.com",
  messagingSenderId: "271080954156",
  appId: "1:271080954156:web:253259dff2a1a396d6b489"
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

