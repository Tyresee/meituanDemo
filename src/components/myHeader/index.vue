<template>
  <div class="ttc-header">
    <div class="nav-left-wrapper">
      <span class="nav-city">{{city}}</span>
      <img :src="pics.downarrow" alt="">
    </div>
    <search></search>
    <div class="nav-right-wrapper">
      <span class="nav-btn">
        <img :src="pics.mine" alt="">
        我的
      </span>
    </div>
  </div>
</template>
<script>
  import search from '../search/index.vue'

  export default {
    props: {
      city: {
        type: String,
        default: '南京'
      }
    },
    components: {
      search
    },
    data() {
      return {
        pics: {
          downarrow: require('@/assets/img/downarrow.png'),
          mine: require('@/assets/img/mine.png')

        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .ttc-header {
    .nav-left-wrapper {
      height: 1.01rem;
      line-height: 1.01rem;
      .nav-city {
        line-height: 1;
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        margin-right: .08rem;
        margin-left: .2rem;
        font-size: .32rem;
      }
      img{
        margin: 0 auto;
        margin-right: .08rem;
        width: .28rem;
        height: .4rem;

      }
    }
    height: 1.01rem;
    width: 100%;
    color: #fff;
    background: #06c1ae;
    border-bottom: 1px solid #21897d;
    display: -webkit-box;
    display: -ms-flexbox;
    position: relative;
  .nav-right-wrapper{
    text-align: center;
    width: .94rem;
    img {
      margin: 0 auto;
      margin-top: .2rem;
      width: .4rem;
      height: .4rem;
      display: block;
    }
  }

  }
</style>
