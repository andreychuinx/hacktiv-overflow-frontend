import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import home from '@/components/Home'
import question from '@/components/Question'
import detail from '@/components/Detail'
import account from '@/components/Account'
import editQuestion from '@/components/EditQuestion'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: home
    },
    {
      path: '/question',
      name: 'questionPage',
      component: question
    },
    {
      path: '/detail/:id',
      name: 'detailPage',
      component: detail
    },
    {
      path: '/account',
      name: 'accountPage',
      component: account,
      children: [
        {
          path: ':id/editquestion',
          name: 'editQuestionPage',
          component: editQuestion
        }
      ]
    }
  ]
})
