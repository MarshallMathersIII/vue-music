<template>
  <div>
    <swiper :list="recommends"></swiper>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'components/recommend/swiper'

  import {getRecommend} from 'api/recommend'
  import {ERR_OK} from 'api/config'
export default {
    data() {
        return {
            recommends:[]
        }
    },
    components:{
        Swiper
    },
    created(){
        this._getRecommend()

    },
    methods: {
     _getRecommend() {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            console.log(res.data.slider)
            this.recommends = res.data.slider
          }
        })
      }
    }
}
</script>

<style lang="stylus"></style>
