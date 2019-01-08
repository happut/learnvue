import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import ShowText from '@/components/ShowText'
import ShowHTML from '@/components/ShowHTML'
import JSExpressionTest from '@/components/JSExpressionTest'
import RobotTest from '@/components/RobotTest'
import axios from 'axios'

Vue.use(Router)
Vue.use(VueResource)
Vue.use(axios)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: resolve => require(['../pages/index'], resolve),
      meta: {
        title: 'home'
      }
    },
    {
      path: '/ShowText',
      component: ShowText
    },
    {
      path: '/ShowHTML',
      component: ShowHTML
    },
    {
      path: '/JSExpression',
      component: JSExpressionTest
    },
    {
      path: '/RobotTest',
      component: RobotTest
    }
  ]
})
