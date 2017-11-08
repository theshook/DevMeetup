import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'http://y101fm.com/images/articleimages/021417/2017-02-8-pub-beach-cebu-beyond-cebu-main.jpg',
        id: 'asdqwe',
        title: 'Meetup in Baguio',
        date: '2017-11-28'
      },
      {
        imageUrl: 'http://www.philippinestogo.com/wp-content/uploads/2017/04/IMG_3971-1024x683.jpg',
        id: 'zxcqwse',
        title: 'Meetup in Lingayen',
        date: '2017-11-29'
      }
    ],
    user: {
      id: 'asdqwe123',
      registeredMeetups: ['asdasd']
    }
  },
  mutations: {},
  actions: {},
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
