import Vue from 'vue'
import App from './App.vue'
import { VLazyImagePlugin } from 'v-lazy-image'
import router from './router'
import store from './store'
import style from './scss/style.scss'

Vue.config.productionTip = false
Vue.use(VLazyImagePlugin)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
