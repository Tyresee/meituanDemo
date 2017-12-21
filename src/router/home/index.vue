<template>
  <div class="home">
    <myHeader :city="home.city"></myHeader>
    <homeBanner :bannerImg="home.banner"></homeBanner>
    <swiper :shortcut="home.shortcut"></swiper>

    <shoppingGuide></shoppingGuide>
    <guessLike :likeList="home.guessLike"></guessLike>
    <navBread></navBread>
    <partOfFooter></partOfFooter>
    <toTopBtn></toTopBtn>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import swiper from '@/components/swiper'
  import myHeader from '@/components/myHeader'
  import homeBanner from '@/components/homeBanner'
  import shoppingGuide from '@/components/shoppingGuide'
  import guessLike from '@/components/guessLike'
  import partOfFooter from '@/components/partOfFooter'
  import navBread from '@/components/navBread'
  import toTopBtn from '@/components/toTopBtn'

  export default {
    components: {
      swiper,
      myHeader,
      homeBanner,
      shoppingGuide,
      guessLike,
      partOfFooter,
      navBread,
      toTopBtn
    },
    data () {
      return {
        name: 'TTC'
      }
    },
    computed: {
      ...mapState(['home'])
    },
    methods: {
      ...mapActions(['getHome'])
    },
    beforeMount () {
      this.getHome()
    },
    mounted () {
      this.name = this.$$cookie('uid')
      console.log(this.$$getTime())
      console.log(this.name)
    }
  }
</script>

<style lang="scss" scoped>
  div{
    text-align: center;
  }
  p {
    color: red;
  }
</style>

<style lang="scss">
  .home {
    h1 {
      color: blue;
    }
  }
</style>
