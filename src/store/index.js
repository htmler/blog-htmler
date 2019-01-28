import Vue from 'vue'
import vuex from 'vuex'
import fileList from './modules/fileList'
Vue.use(vuex);

export default new vuex.Store({
   modules:{
       fileList
   }
})