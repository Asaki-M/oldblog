import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import './assets/css/reset.css'
import './assets/css/common.css'

import axios from 'axios'
Vue.prototype.$axios = axios

Vue.prototype.$api = 'https://asaki-m.com:10520'

Vue.use(mavonEditor)
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

router.afterEach((to,from,next) => {
     window.scrollTo(0,0);
})


