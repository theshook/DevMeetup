
import Vue from 'vue'

import Vuetify from 'vuetify'
import './stylus/main.styl'

import App from './App'
import router from './router'

import {store} from './store'

// Import date.js from filters folder under the src folder
import DateFilter from './filters/date'

Vue.use(Vuetify)

Vue.config.productionTip = false

// User the date.js that you imported from filter/date as a Global
Vue.filter('date', DateFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
