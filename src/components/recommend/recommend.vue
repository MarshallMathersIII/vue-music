<template>
  <div class="recommend" ref="recommend">
    <scroll ref="scroll" class="recommend-content" :data="discList">
      <div>
        <swiper :list="recommends"></swiper>
        <div class="recommend-list">
          <div class="list-title">热门歌单推荐</div>
          <ul>
            <li class="item" v-for="(item, index) of discList" :key="index">
              <div class="icon">
                <img
                  @load="loadImage"
                  v-lazy="item.imgurl"
                  width="60"
                  height="60"
                />
              </div>
              <div class="text">
                <h2 class="name" v-html="item.creator.name"></h2>
                <p class="desc" v-html="item.dissname"></p>
              </div>
            </li>
          </ul>
        </div>
        <div class="loading-container" v-show="!discList.length">
          <loading></loading>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'components/recommend/swiper'
  import Loading from 'base/loading/loading'
  import Scroll from 'base/scroll/scroll'

  import {getRecommend,getDiscList} from 'api/recommend'
  import {ERR_OK} from 'api/config'
export default {
    data() {
        return {
            recommends:[],
            discList:[]
        }
    },
    components:{
        Swiper,
        Loading,
        Scroll
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
            this.discList=res.data.list
          }
        })
      },
      loadImage() {
        if (!this.checkloaded) {
          this.checkloaded = true
          setTimeout(() => {
            this.$refs.scroll.refresh()
          }, 20)
        }
      }
    }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
.recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
        height: 100%
        overflow: hidden
        .recommend-list
            .list-title
                height 65px
                line-height 65px
                text-align center
                font-size $font-size-medium
                color $color-theme
            .item
                box-sizing border-box
                color $color-theme
                display flex
                padding 0 20px 20px 20px
                align-items center
                .icon
                    flex 0 0 60px
                    width 60px
                    height 60px
                .text
                    margin-left 20px
                    display flex
                    flex-direction column
                    justify-content center
                    flex 1
                    line-height 20px
                    overflow hidden
                    font-size $font-size-medium
                    .name
                        margin-bottom: 10px
                        color $color-text
                    .desc
                        color $color-text-d
            .loading-container
                position: absolute
                width: 100%
                top: 50%
                transform: translateY(-50%)
</style>
