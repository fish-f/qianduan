/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import app from './App.vue'
import goods from './components/goods/goods.vue'
import seller from './components/seller/seller.vue'
import ratings from './components/ratings/ratings.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'goods',
      component: goods
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    }
  ]
})
