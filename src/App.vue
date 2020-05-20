<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
// import MHeader from '/Users/eminem/Documents/VueMusic/vue-music/src/components/m-header/m-header.vue'
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'


export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    MHeader,
    Tab
  }
}
</script>
<style scoped lang="stylus"></style>
