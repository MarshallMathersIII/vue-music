<template>
  <div>
    <swiper :list="recommends"></swiper>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'components/recommend/swiper'

  import {getRecommend,getDiscList} from 'api/recommend'
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
        this._getRecommend(),
        this._getDiscList()
    },
    methods: {
     _getRecommend() {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            console.log(res.data.slider)
            this.recommends = res.data.slider
          }
        })
      },
      _getDiscList(){
        getDiscList().then((res)=>{
          if (res.code === ERR_OK) {
            console.log(res.data.list)
          }
        })
      }
    }
}
</script>

<style lang="stylus"></style>
