import 'babel-polyfill'
import Vue from 'vue'
import App from '@/App.vue'
import router from './router/index.js'
//点击延时
import fastlick from 'fastclick'
//基础样式
import 'common/stylus/index.styl'
//轮播组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
//swipper必须
require('swiper/dist/css/swiper.css')

Vue.config.productionTip = false
fastlick.attach(document.body)
Vue.use(VueAwesomeSwiper)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
