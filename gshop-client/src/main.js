// 入口js
import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App.vue'
import Vuelazyload from 'vue-lazyload'
import router from './router/index.js'
import store from './store'
import './common/font/iconfont.css'

import './mock/mockServer.js' //加载mockServe即可
import './filters' //加载过滤器
import loading from './common/img/loading.gif'
//注册全局组件标签
Vue.component(Button.name,Button)//<mt-button>

Vue.use(Vuelazyload,{//内部自定义一个指令lazy
  loading
})
new Vue({
  el:'#app',
  render:h => h(App),
  router,//使用上vue-router
  store,//使用上vuex
})
