import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import './common/stylus/index.styl'
import VueResource from 'vue-resource'
Vue.config.productionTip = false
Vue.use(VueResource)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
