import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index';
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
const router = new Router({
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
          component: HomePage,
          meta:{
            title:'首页'
          }
        },
        {
          path: 'technique',
          name: 'technique',
          component: Technique,
          meta:{
            title:'技术帖'
          }
        },
        {
          path: 'continent',
          name: 'continent',
          component: Continent,
          meta:{
            title:'小酒馆'
          }
        },
        {
          path: 'amusement',
          name: 'amusement',
          component: Amusement,
          meta:{
            title:'音乐电影'
          }
        },
        {
          path: 'resourse',
          name: 'resourse',
          component: Resourse,
          meta:{
            title:'资源中心'
          }
        },
        {
          path: 'discovery',
          name: 'discovery',
          component: Find,
          meta:{
            title:'发型'
          }
        },
        {
          path: 'discuss',
          name: 'discuss',
          component: Discuss,
          meta:{
            title:'讨论'
          }
        }
      ]
    },
    {
      path: '/console',
      name: 'console',
      component: Console,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: 'banner',
          name: 'banner',
          component: Consolebanner,
          meta:{
            title:'轮播'
          }
        },
        {
          path: 'mine',
          name: 'mine',
          component: Consolemine,
          meta:{
            title:'我的信息'
          }
        },
        {
          path: 'js',
          name: 'js',
          component: Techniquejs,
          meta:{
            title:'js列表'
          }
        },
        {
          path: 'hc',
          name: 'hc',
          component: Techniquehc,
          meta:{
            title:'html+css'
          }
        },
        {
          path: 'frame',
          name: 'frame',
          component: Techniqueframe,
          meta:{
            title:'前端框架'
          }
        },
        {
          path: 'node',
          name: 'node',
          component: Techniquenode,
          meta:{
            title:'nodeJS'
          }
        },
        {
          path: 'other',
          name: 'other',
          component: Techniqueother,
          meta:{
            title:'其他'
          }
        },
        {
          path: 'continent',
          name: 'continent',
          component: Continentconsole,
          meta:{
            title:'小酒馆'
          }
        },
        {
          path: 'music',
          name: 'music',
          component: Amusementmusic,
          meta:{
            title:'音乐'
          }
        },
        {
          path: 'video',
          name: 'video',
          component: Amusementvideo,
          meta:{
            title:'电影'
          }
        },
        {
          path: 'resource',
          name: 'resource',
          component: Resourceconsole,
          meta:{
            title:'资源中心'
          }
        },
        {
          path: 'discovery',
          name: 'discovery',
          component: Discoveryconsole,
          meta:{
            title:'发现'
          }
        },
        {
          path: 'edit/:id',
          name: 'edit',
          component: Edit,
          meta:{
            title:'编辑作品'
          }
        },
        {
          path: 'add/:type',
          name: 'add',
          component: Add,
          meta:{
            title:'新增作品'
          }
        }
      ]
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail,
      meta:{
        title:'详情页'
      }
    }
  ]
})
//注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
  //获取store里面的token
  let token = store.state.Token.token;
  //判断要去的路由有没有requiresAuth
  if (to.meta.requiresAuth) {
    if (token) {
      next();
    } else {
      next({
        path: '/home',
      });
    }
  } else {
    next();
  }
});
export default router;
