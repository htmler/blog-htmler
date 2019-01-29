import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/auth/home'
import Detail from '../views/auth/detail'
import Console from '../views/auth/console'
import HomePage from '@/components/homepage'
import Technique from '@/components/technique'
import Continent from '@/components/continent'
import Amusement from '@/components/amusement'
import Resourse from '@/components/resourse'
import Find from '@/components/find'
import Discuss from '@/components/discuss'
import Consolebanner from '@/components/console/banner'
import Consolemine from '@/components/console/mine-info'
import Techniquehc from '@/components/console/technique/console-hc'
import Techniquejs from '@/components/console/technique/console-js'
import Techniqueframe from '@/components/console/technique/console-frame'
import Techniquenode from '@/components/console/technique/console-node'
import Techniqueother from '@/components/console/technique/console-other'
import Amusementmusic from '@/components/console/amusement/console-music'
import Amusementvideo from '@/components/console/amusement/console-video'
import Continentconsole from '@/components/console/continent/console-continent'
import Discoveryconsole from '@/components/console/discovery/console-discovery'
import Resourceconsole from '@/components/console/resource/console-resource'
import Edit from '@/components/console/edit/console-edit'
import Add from '@/components/console/add/console-add'
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
      path: '/console',
      name: 'console',
      component: Console,
      children:[
        {
          path:'banner',
          name: 'banner',
          component: Consolebanner
        },
        {
          path:'mine',
          name: 'mine',
          component: Consolemine
        },
        {
          path:'js',
          name: 'js',
          component: Techniquejs
        },
        {
          path:'hc',
          name: 'hc',
          component: Techniquehc
        },
        {
          path:'frame',
          name: 'frame',
          component: Techniqueframe
        },
        {
          path:'node',
          name: 'node',
          component: Techniquenode
        },
        {
          path:'other',
          name: 'other',
          component: Techniqueother
        },
        {
          path:'continent',
          name: 'continent',
          component: Continentconsole
        },
        {
          path:'music',
          name: 'music',
          component: Amusementmusic
        },
        {
          path:'video',
          name: 'video',
          component: Amusementvideo
        },
        {
          path:'resource',
          name: 'resource',
          component: Resourceconsole
        },
        {
          path:'discovery',
          name: 'discovery',
          component: Discoveryconsole
        },
        {
          path: 'edit',
          name: 'edit',
          component: Edit
        },
        {
          path: 'add/:type',
          name: 'add',
          component: Add
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
