// Polyfills
import 'es6-promise/auto'
import 'babel-polyfill'

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import App from './App'
import store from './store'
import router from './router'
import VuesticPlugin from 'vuestic-theme/vuestic-plugin'
import './i18n'
import fullpage from 'vue-fullpage.js'
import * as firebase from 'firebase'
import * as VueGoogleMaps from 'vue2-google-maps'
import vueResource from 'vue-resource'

Vue.use(vueResource)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDvXy0SXRp70BztZMu4czB_ChLFdK_RWMY'
  }
})

Vue.use(VuesticPlugin)
Vue.use(fullpage)

// NOTE: workaround for VeeValidate + vuetable-2
Vue.use(VeeValidate, {fieldsBagName: 'formFields'})

let mediaHandler = () => {
  if (window.matchMedia(store.getters.config.windowMatchSizeLg).matches) {
    store.dispatch('toggleSidebar', true)
  } else {
    store.dispatch('toggleSidebar', false)
  }
}

router.beforeEach((to, from, next) => {
  store.commit('setLoading', true)
  next()
})

router.afterEach((to, from) => {
  mediaHandler()
  store.commit('setLoading', false)
})

/* eslint-disable no-new */

export const EventBus = new Vue()

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCVH_TBZwmyYLsDY0EMQJJWb5uq159W19I',
      authDomain: 'rio-travels.firebaseapp.com',
      databaseURL: 'https://rio-travels.firebaseio.com',
      projectId: 'rio-travels',
      storageBucket: 'rio-travels.appspot.com',
      messagingSenderId: '630057921565'
    })
  }
})
