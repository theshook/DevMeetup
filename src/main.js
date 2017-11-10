
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

// Import edit dialog meetups
import EditMeetupDetailsDialog from './components/Meetup/Edit/EditMeetupDetailsDialog'

// Import edit date dialog meetup
import EditMeetupDateDialog from './components/Meetup/Edit/EditMeetupDateDialog'
import EditMeetupTimeDialog from './components/Meetup/Edit/EditMeetupTimeDialog'

// Import Register to event meetup
import RegisterDialog from './components/Meetup/Registration/RegisterDialog'

Vue.use(Vuetify)

Vue.config.productionTip = false

// User the date.js that you imported from filter/date as a Global
Vue.filter('date', DateFilter)

// Register the Alert component
Vue.component('app-alert', AlertCmp)

// Register the Edit Dialog for modal
Vue.component('app-edit-meetup-details-dialog', EditMeetupDetailsDialog)

// Register the Edit Date Dialog for modal
Vue.component('app-edit-meetup-date-dialog', EditMeetupDateDialog)
Vue.component('app-edit-meetup-time-dialog', EditMeetupTimeDialog)

// Register the RegisterDialog .vue file
Vue.component('app-meetup-register-dialog', RegisterDialog)

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
      storageBucket: 'gs://devmeetup-73a25.appspot.com/',
      messagingSenderId: '906236966007'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
        this.$store.dispatch('fetchUserData')
      }
    })
    firebase.database().ref('meetups').on('value', (snapshot) => {
      const meetups = []
      const obj = snapshot.val()
      for (let key in obj) {
        meetups.push({
          id: key,
          title: obj[key].title,
          description: obj[key].description,
          imageUrl: obj[key].imageUrl,
          date: obj[key].date,
          location: obj[key].location,
          creatorId: obj[key].creatorId
        })
      }
      this.$store.dispatch('loadMeetups', meetups)
    })
    // this.$store.dispatch('loadMeetups')
  }
})
