import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import HelloWorld from '@/components/HelloWorld'
import ShowText from '@/components/ShowText'
import ShowHTML from '@/components/ShowHTML'
import JSExpressionTest from '@/components/JSExpressionTest'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
    }
  ]
})
