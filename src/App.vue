<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <!-- 缓存dom -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script type="text/ecmascript-6">
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'
import Player from 'components/player/player'



export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    MHeader,
    Tab,
    Player
  }
}
</script>
<style scoped lang="stylus"></style>
