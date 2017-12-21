<template>
  <div class="ttc-swiper" v-if="shortcut.length">
    <swipe :auto = "0">
      <!--<swipeItem v-for="(pic, index) in pics" :key="index">-->
        <!--<img :src="pic">-->
      <!--</swipeItem>-->
      <swipeItem v-for="(list, index) in shortcut" :key="index">
        <iconList :list="list"></iconList>
      </swipeItem>


    </swipe>
  </div>
</template>

<script>
  import swipe from 'mint-ui/lib/swipe'
  import swipeItem from 'mint-ui/lib/swipe-item'
  import 'mint-ui/lib/swipe/style.css'
  import 'mint-ui/lib/swipe-item/style.css'

  import iconList from '../iconList/index.vue'

  export default {
    props: {
      shortcut: {
        type: Array,
        default () {
          return []
        }
      }
    },
    components: {
      swipe,
      swipeItem,
      iconList
    }
  }
</script>

<style lang="scss">
  .ttc-swiper {
    height: 3.2rem;
    background-color: #fff;
    padding-top: .2rem;
    border-bottom: 1px solid #DDD8CE;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
