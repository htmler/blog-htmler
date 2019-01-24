import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/auth/home'
import Detail from '../views/auth/detail'
import HomePage from '@/components/homepage'
import Technique from '@/components/technique'
import Continent from '@/components/continent'
import Amusement from '@/components/amusement'
import Resourse from '@/components/resourse'
import Find from '@/components/find'
import Discuss from '@/components/discuss'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'homepage',
          component: HomePage
        },
        {
          path: 'technique',
          name: 'technique',
          component: Technique
        },
        {
          path: 'continent',
          name: 'continent',
          component: Continent
        },
        {
          path: 'amusement',
          name: 'amusement',
          component: Amusement
        },
        {
          path: 'resourse',
          name: 'resourse',
          component: Resourse
        },
        {
          path: 'discovery',
          name: 'discovery',
          component: Find
        },
        {
          path: 'discuss',
          name: 'discuss',
          component: Discuss
        }
      ]
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ]
})
