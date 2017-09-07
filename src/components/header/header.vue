<template xmlns="http://www.w3.org/1999/html">
  <div class="wrap">
    <div class="newPerson" v-show="Switch">
      <div class="closeNewPerson" @click="closeNewPerson"></div>
    </div>
    <div class="headerMiddle">
      <div class="petSpecies">
        <span>猫站</span>
        <span>|</span>
        <a href="#">上海
          <span></span>
        </a>
      </div>
      <form action="#">
        <input type="text" placeholder="搜索商品和品牌">
        <span class="submit"></span>
      </form>
      <div class="message"><a href="#"><span></span></a></div>
    </div>
    <div class="wrapper" ref="wrapper">
      <ul class="router">
        <li class="router-item">
          <router-link to="/home">首页</router-link>
        </li>
        <li class="router-item">
          <router-link to="/food">猫粮</router-link>
        </li>
        <li class="router-item">
          <router-link to="/sale">特卖</router-link>
        </li>
        <li class="router-item">
         <router-link to="/can">罐头超市</router-link>
        </li>
        <li class="router-item">
         <router-link to="/screen">潮品视频</router-link>
        </li>
        <li class="router-item">
         <router-link to="/cat">新喵课堂</router-link>
        </li>
      </ul>
    </div>
    <div class="routerWrap">
      <scroller>
        <router-view></router-view>
      </scroller>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
        props: {},
        data() {
            return {
              Switch:true
            }
        },
        created(){
          //将回调延迟到下次 DOM 更新循环之后执行
          this.$nextTick(() => {
            // 初始化scroll
            this._initScroll()
          })
        },
        methods: {
          _initScroll () {
            // 创建右侧的食物列表Scroll
            this.routerScroll = new BScroll(this.$refs.wrapper, {
              click: true,
              scrollX:true  // 接收scroll事件
            })
          },

          closeNewPerson(){
            this.Switch=false;
          }
        },
        computed: {},
        components: {}
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  rem=750rem/16
  .wrap
    position fixed
    z-index 1000
    top 0
    left 0
    width 100%
    height 100%
    background #fff
    .routerWrap
      position fixed
      z-index 1000
      top  (320/rem)
      left 0
      width 100%
      height (895/rem)
    .newPerson
      position relative
      width 16rem
      height (110/rem)
      background url("./211547bb51dd23758f74fb86e9d7aae5.png") no-repeat
      background-size 100% 100%
      .closeNewPerson
        position absolute
        top 25%
        left 2%
        width (39/rem)
        height (39/rem)
        background url("closebtn_03.png") no-repeat
        background-size 100% 100%
    .headerMiddle
      position relative
      margin-top (40/rem)
      margin-left (20/rem)
      margin-bottom (40/rem)
      .petSpecies
        font-size .68rem
        a
          span
            display inline-block
            width (18/rem)
            height (18/rem)
            margin-left (8/rem)
            background url("index_icon_comment_sanjiao_爱奇艺.png") no-repeat
            background-size 100% 100%
      form
        position absolute
        display inline-block
        width 100%
        height 100%
        top (-10/rem)
        left 28%
        input
          position absolute
          top (6/rem)
          height (40/rem)
          width 58%
          padding (6/rem) 0
          background #f6f6f6
          font (28/rem) Arial
        span
          position: absolute;
          top:65%;
          left:53%;
          height: (22/rem);
          width: (22/rem);
          background: url("search.png") no-repeat;
          background-size:100% 100% ;
      .message
        a
          span
            position: absolute;
            top:0;
            right: 5%;
            width: (48/rem);
            height: (48/rem);
            background: url("mydope.png") no-repeat;
            background-size:100% 100% ;
    .wrapper
      position relative
      margin  (30/rem) 0
      .router
        display flex
        height (73/rem)
        width 500px
        line-height (73/rem)
        font-size 14px
        .router-item
          width 0
          flex 1
          text-align center
          font-size 16px
          & > a
            display block
            color rgb(77,85,93)
          .active
            color rgb(138,43,226)
</style>
