import Vue from 'vue'
import Router from 'vue-router'
import classify from '../components/classify/classify.vue'
import myPet from '../components/myPet/myPet.vue'
import shoppingCart from '../components/shoppingCart/shoppingCart.vue'
import shouye from '../components/shouye/shouye.vue'
import home from '../components/home/home.vue'
import food from '../components/food/food.vue'
import sale from '../components/sale/sale.vue'
import can from '../components/can/can.vue'
import screen from '../components/screen/screen.vue'
import cat from '../components/cat/cat.vue'
import common from '../components/common/common.vue'
import dynamic from '../components/dynamic/dynamic.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass:"active",
  routes: [
    {
      path: '/shouye',
      component: shouye,
      name:shouye,
      redirect: '/home',
      children:[
        {
          path: '/home',
          component: home,
          name:home
        },
        {
          path: '/food',
          component: food,
          name:food
        },
        {
          path: '/sale',
          component: sale,
          name:sale
        },
        {
          path: '/can',
          component: can,
          name:can
        },
        {
          path: '/screen',
          component: screen,
          name:screen
        },
        {
          path: '/cat',
          component: cat,
          name:cat
        },
      ]
    },
    {
      path: '/classify',
      component: classify,
      name:classify
    },
    {
      path: '/myPet',
      component: myPet,
      name:myPet,
      redirect: '/common',
      children:[
        {
          path: '/dynamic',
          component: dynamic,
          name:dynamic
        },
        {
          path: '/common',
          component: common,
          name:common
        }
      ]
    },
    {
      path: '/shoppingCart',
      component: shoppingCart,
      name:shoppingCart
    },
    {
      path: '/',
      redirect: '/home'
    }
   /* {
      path: '/myPet',
      component:myPet,
      name:myPet,
      redirect: '/common',
      children:[
        {
          path: '/dynamic',
          component: dynamic,
          name:dynamic
        },
        {
          path: '/common',
          component: common,
          name:common
        }
      ]
    },
    {
      path: '/',
      redirect: '/shouye'
    }*/
  ]
})
