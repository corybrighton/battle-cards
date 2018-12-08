import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/games/:gameId',
      name: 'game',
      // route level code-splitting
      // this generates a separate chunk (game.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component() {
        // @ts-ignore
        return import(/* webpackChunkName: "game" */ './views/Game.vue')
      }
    }
  ]
})
