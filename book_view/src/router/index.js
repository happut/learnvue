import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import ShowText from '@/components/ShowText'
import ShowHTML from '@/components/ShowHTML'
import JSExpressionTest from '@/components/JSExpressionTest'
import RobotTest from '@/components/RobotTest'
import axios from 'axios'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(Router)
Vue.use(VueResource)
Vue.use(axios)
Vue.use(iView)

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
