import {store} from '../store'

export default (to, from, next) => {
  setTimeout(() => {
    if (store.getters.user) {
      next()
    } else {
      next('/signin')
    }
  }, 1500)
}
