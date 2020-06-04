<template>
  <div class="song-list">
    <ul>
      <li
        @click="selectItem(song, index)"
        class="item"
        v-for="(song, index) in songs"
        :key="index"
      >
        <div class="content">
          <h2 class="name">{{ song.name }}</h2>
          <p class="desc">{{ getDesc(song) }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    songs: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: []
    }
  },
  methods: {
    getDesc(song) {
      //es6字符串模版占位，等价于song.singer+"."+song.album
      return `${song.singer}·${song.album}`
    },
    //此为基础组件，不处理业务逻辑，只派发时间给调用组件
    selectItem(item,index){
      this.$emit("select",item,index)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
@import "~common/stylus/mixin"

.song-list
  .item
    display: flex
    align-items: center
    box-sizing: border-box
    height: 64px
    font-size: $font-size-medium
    .content
      flex: 1
      line-height: 20px
      overflow: hidden
      .name
        no-wrap()
        color: $color-text
      .desc
        no-wrap()
        margin-top: 4px
        color: $color-text-d
</style>
