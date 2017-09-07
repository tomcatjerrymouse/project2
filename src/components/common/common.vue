<template>
  <div>
    <form action="">
      <input type="text" placeholder="手机号/邮箱/用户名">
      <div class="line"></div>
      <input type="text" placeholder="输入密码">
      <div class="line"></div>
    </form>
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
  .line
    width 100%
    height 1px
    background #DBDBDB
</style>
