<template>

  <div class="footerWrap">
    <ul class="footerUl">

      <li class="footerItem">
        <router-link to="/shouye">
          <img src="./main_tab_1_sel.png" width="55" alt="">
        </router-link>
      </li>
      <li class="footerItem">
        <router-link to="/classify">
          <img src="./main_tab_2.png" width="55" alt="">
        </router-link>
      </li>
      <li class="footerItem">
        <router-link to="/shoppingCart">
          <img src="./main_tab_3.png" width="55" alt="">
        </router-link>
      </li>
      <li class="footerItem">
        <router-link to="/myPet">
          <img src="./main_tab_4.png" width="55" alt="">
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        props: {},
        data() {
            return {}
        },
        methods: {},
        computed: {},
        components: {}
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  rem=750rem/16
  .footerWrap
    position fixed
    z-index 1000
    bottom  0
    left 0
    width 100%
    height (110/rem)
    line-height (110/rem)
    border-top 1px solid gainsboro
    background #fff
    .footerUl
      width 100%
      height 100%
      display flex
      .footerItem
        flex 1
        width 0
        text-align center
</style>
