<template>
  <transition name="slide">
    <div class="singer-detail"></div>
  </transition>
</template>

<script type="text/ecmascript-6">
// import ListView from 'base/listview/listview'
import {getSingerDetail} from 'api/singer'
import {ERR_OK} from 'api/config'
import {mapGetters} from 'vuex'
import {createSong } from 'common/js/song'





export default {
  data() {
    return {
      songs:[]
    }
  },
  computed: {
    ...mapGetters([
      //语法糖等同于 console.log(this.$store.getters.singer)
      "singer"
    ])
  },
  created() {
    this._getDetail()
    console.log("vuex传入歌手实例",this.singer)
  },
  methods: {
    //边界处理
    _getDetail(){
      if (!this.singer.id) {
        this.$router.push('/singer')
        return
      }
      getSingerDetail(this.singer.id).then((res) => {
          if (res.code === ERR_OK) {
            this.singers = this._normalizeSongs(res.data.list)
            console.log(this.singers)
          }
        })
    },
    _normalizeSongs(list) {
        let ret = []
        list.forEach((item) => {
          let {musicData} = item
          if (musicData.songid&&musicData.albummid) {
            ret.push(createSong(musicData))
          }
        })
        return ret
      }
  },

}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"

.singer-detail
    position fixed
    z-index 100
    top 0
    left 0
    right 0
    bottom 0
    background $color-background

.slide-enter-active, .slide-leave-active
  transition: all 0.9s

.slide-enter, .slide-leave-to
  transform: translate3d(100%, 0, 0)
</style>
