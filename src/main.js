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
//懒加载
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
fastlick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {
  // preLoad: 1.3, //预加载的宽高比
  // error: 'dist/error.png', //图片加载失败时使用的图片源
  // attempt: 1 //尝试加载次数
  loading: require('common/image/default.png') //图片加载的路径
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
