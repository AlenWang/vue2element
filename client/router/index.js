import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Router1 from '../views/TestRouter1'
import Child1 from '../views/TestRouterChild1'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      name:'one',
      path: '/one',
      component: Router1,
      children: [
        {
          path: 'child1',
          component: Child1
        },
        {
          path: '',
          component: Child1
        }
      ]
    }
  ]
})
