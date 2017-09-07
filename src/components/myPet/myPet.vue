<template>
  <div>
    <div class="bg">
      <div class="logo"></div>
      <div class="backAndRegister">
        <div class="back"></div>
        <div class="register">注册</div>
      </div>
      <div class="login">
        <ul class="loginUl">
          <li class="loginItem active">
            <router-link to="/common">普通登陆</router-link>
          </li>
          <li class="loginItem">
            <router-link to="/dynamic">手机动态密码登陆</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    props: {},
    data() {
      return {
        selected:true
      }
    },
    methods: {},
    computed: {},
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  rem=750rem/16
  .bg
    position relative
    width 16rem
    height (345/rem)
    background url("bg.png")
    background-size 100% 100%
    .logo
      position absolute
      top 0
      bottom 0
      left 0
      right 0
      margin auto
      width (130/rem)
      height (83/rem)
      background url("logo.png")
      background-size 100% 100%
    .backAndRegister
      position relative
      width 100%
      height (100/rem)
      .back
        position absolute
        bottom 0
        top 0
        left (23/rem)
        margin auto
        width (23/rem)
        height (39/rem)
        background url("personal-bico3.png") no-repeat
        background-size 100% 100%
      .register
        position absolute
        right (23/rem)
        height 100%
        margin auto
        color white
        font-size (37/rem)
        line-height (100/rem)
    .login
      width 100%
      position absolute
      bottom 0
      .loginUl
        display flex
        width 100%
        height (88/rem)
        background rgba(255,255,255,0.2)
        .loginItem
          flex 1
          width 0
          text-align center
          color white
          font-size (32/rem)
          line-height (88/rem)
          & > a
            display block
            color rgb(77,85,93)
          .active
            color rgb(138,43,226)
</style>
