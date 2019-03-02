// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import { Button, Row, Col, Menu, MenuItem, Upload, Icon, Layout, Sider, Submenu, MenuGroup, Input, DatePicker, Card, RadioGroup, Radio, Notice, Tag, Table, Page, Modal, Message, Circle, Poptip, Switch, Divider } from 'iview'
import 'iview/dist/styles/iview.css'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import {server} from './providers/http-servide'
import hljs from 'highlight.js'
// import 'highlight.js/styles/googlecode.css' //样式文件
Vue.use(ElementUI)
Vue.component('Button', Button)
Vue.component('Row', Row)
Vue.component('Col', Col)
Vue.component('Menu', Menu)
Vue.component('MenuItem', MenuItem)
Vue.component('Icon', Icon)
Vue.component('Layout', Layout)
Vue.component('Sider', Sider)
Vue.component('Submenu', Submenu)
Vue.component('MenuGroup', MenuGroup)
Vue.component('Input', Input)
Vue.component('DatePicker', DatePicker)
Vue.component('Card', Card)
Vue.component('RadioGroup', RadioGroup)
Vue.component('Radio', Radio)
Vue.component('Tag', Tag)
Vue.component('Table', Table)
Vue.component('Page', Page)
Vue.component('Modal', Modal)
Vue.component('i-circle', Circle)
Vue.component('Poptip', Poptip)
Vue.component('Upload', Upload)
Vue.component('i-Switch', Switch)
Vue.component('Divider', Divider)
Vue.config.productionTip = false
Vue.prototype.$server=server;
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
