<template>
  <div id="app">
      <router-view></router-view>
      <my-footer></my-footer>
  </div>
</template>

<script>
  import below from './components/below/below.vue'
export default {
  name: 'app',
  components: {
    'my-footer':below
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  rem=750rem/16
  /*#app
    position relative
    width 100%
    height 100%

    .routerWrap
      position fixed
      z-index 1000
      top  (320/rem)
      left 0
      width 100%
      height (895/rem)*/
</style>
