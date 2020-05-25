<template>
  <div class="wrapper">
    <!-- v-if当数据请求完成创建，默认显示第一张 不出现逻辑代码 -->
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.picUrl" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
      }
    }
  },
  computed: {
    showSwiper() {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
// 样式穿透swiper-pagination-bullet-active属于swiper组件内容，因scoped限制，需要穿透设置
.wrapper >>> .swiper-pagination-bullets
    bottom: 10px;
    left: 0;
    width: 100%;
.wrapper >>> .swiper-pagination-bullet
    background: #000;
    opacity: 0.5;
.wrapper >>> .swiper-pagination-bullet-active
    background: #fff
    opacity: 1
// 宽高比设置
.wrapper
    overflow : hidden
    width : 100%
    height : 0
    padding-bottom 40.00%
    background : #ee
    .swiper-img
        width : 100%
</style>
