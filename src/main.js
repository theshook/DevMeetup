
import Vue from 'vue'

import Vuetify from 'vuetify'
import './stylus/main.styl'

import App from './App'
// Import firebase package
import * as firebase from 'firebase'
import router from './router'

import {store} from './store'

// Import date.js from filters folder under the src folder
import DateFilter from './filters/date'

// Import shared folder for alert
import AlertCmp from './components/shared/Alert'

Vue.use(Vuetify)

Vue.config.productionTip = false

// User the date.js that you imported from filter/date as a Global
Vue.filter('date', DateFilter)

// Register the Alert component
Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDj9W2wpVM2kIF6FiMTTOhiLqBijfjGHlc',
      authDomain: 'devmeetup-73a25.firebaseapp.com',
      databaseURL: 'https://devmeetup-73a25.firebaseio.com',
      projectId: 'devmeetup-73a25',
      storageBucket: 'devmeetup-73a25.appspot.com',
      messagingSenderId: '906236966007'
    })
  }
})
