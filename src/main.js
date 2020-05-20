import 'babel-polyfill'
import Vue from 'vue'
import App from '@/App.vue'
import router from './router/index.js'
//点击延时
import fastlick from 'fastclick'
//基础样式
import 'common/stylus/index.styl'

Vue.config.productionTip = false

fastlick.attach(document.body)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
