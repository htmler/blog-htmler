import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index';
Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: (resolve) => require(['../views/auth/home'],resolve),
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'homepage',
          component: (resolve) => require(['@/components/homepage'],resolve),
          meta:{
            title:'首页'
          }
        },
        {
          path: 'technique',
          name: 'technique',
          component: (resolve) => require(['@/components/technique'],resolve),
          meta:{
            title:'技术帖'
          }
        },
        {
          path: 'continent',
          name: 'continent',
          component: (resolve) => require(['@/components/continent'],resolve),
          meta:{
            title:'小酒馆'
          }
        },
        {
          path: 'amusement',
          name: 'amusement',
          component: (resolve) => require(['@/components/amusement'],resolve),
          meta:{
            title:'音乐电影'
          }
        },
        {
          path: 'resourse',
          name: 'resourse',
          component: (resolve) => require(['@/components/resourse'],resolve),
          meta:{
            title:'资源中心'
          }
        },
        {
          path: 'discovery',
          name: 'discovery',
          component: (resolve) => require(['@/components/find'],resolve),
          meta:{
            title:'发型'
          }
        },
        {
          path: 'discuss',
          name: 'discuss',
          component: (resolve) => require(['@/components/discuss'],resolve),
          meta:{
            title:'讨论'
          }
        }
      ]
    },
    {
      path: '/console',
      name: 'console',
      component: (resolve) => require(['../views/auth/console'],resolve),
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: 'banner',
          name: 'banner',
          component: (resolve) => require(['@/components/console/banner'],resolve),
          meta:{
            title:'轮播'
          }
        },
        {
          path: 'mine',
          name: 'mine',
          component: (resolve) => require(['@/components/console/mine-info'],resolve),
          meta:{
            title:'我的信息'
          }
        },
        {
          path: 'js',
          name: 'js',
          component: (resolve) => require(['@/components/console/technique/console-js'],resolve),
          meta:{
            title:'js列表'
          }
        },
        {
          path: 'hc',
          name: 'hc',
          component: (resolve) => require(['@/components/console/technique/console-hc'],resolve),
          meta:{
            title:'html+css'
          }
        },
        {
          path: 'frame',
          name: 'frame',
          component: (resolve) => require(['@/components/console/technique/console-frame'],resolve),
          meta:{
            title:'前端框架'
          }
        },
        {
          path: 'node',
          name: 'node',
          component: (resolve) => require(['@/components/console/technique/console-node'],resolve),
          meta:{
            title:'nodeJS'
          }
        },
        {
          path: 'other',
          name: 'other',
          component: (resolve) => require(['@/components/console/technique/console-other'],resolve),
          meta:{
            title:'其他'
          }
        },
        {
          path: 'continent',
          name: 'continent',
          component: (resolve) => require(['@/components/console/continent/console-continent'],resolve),
          meta:{
            title:'小酒馆'
          }
        },
        {
          path: 'music',
          name: 'music',
          component: (resolve) => require(['@/components/console/amusement/console-music'],resolve),
          meta:{
            title:'音乐'
          }
        },
        {
          path: 'video',
          name: 'video',
          component: (resolve) => require(['@/components/console/amusement/console-video'],resolve),
          meta:{
            title:'电影'
          }
        },
        {
          path: 'resource',
          name: 'resource',
          component: (resolve) => require(['@/components/console/resource/console-resource'],resolve),
          meta:{
            title:'资源中心'
          }
        },
        {
          path: 'discovery',
          name: 'discovery',
          component: (resolve) => require(['@/components/console/discovery/console-discovery'],resolve),
          meta:{
            title:'发现'
          }
        },
        {
          path: 'edit/:id',
          name: 'edit',
          component: (resolve) => require(['@/components/console/edit/console-edit'],resolve),
          meta:{
            title:'编辑作品'
          }
        },
        {
          path: 'add/:type',
          name: 'add',
          component: (resolve) => require(['@/components/console/add/console-add'],resolve),
          meta:{
            title:'新增作品'
          }
        }
      ]
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: (resolve) => require(['../views/auth/detail'],resolve),
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
