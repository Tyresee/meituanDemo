<template>
  <div class="ttc-toTopBtn" @click="backToTop()" v-show="showFlag">
    <img :src="toTopImg.src" alt="">
  </div>
</template>
<script>
  export default {
    data() {
      return {
        showFlag: 0,
        toTopImg: {
          name: 'toTopBtn',
          src: require('@/assets/img/toTop.png')
        }
      }
    },
    mounted() {
      window.addEventListener('scroll', this.toTopBtnShow)
    },
    methods: {
      toTopBtnShow() {
        this.scroll = document.documentElement.scrollTop
//        console.log(this.scroll)
        if (this.scroll < 500) {
          this.showFlag = false
        } else {
          this.showFlag = true
        }
      },
      backToTop() {
        document.documentElement.scrollTop = 0
      }
    }
  }
</script>
<style lang="scss">
  .ttc-toTopBtn {
    position: fixed;
    right: .3rem;
    bottom: 1.5rem;
    width: .95rem;
    height: .95rem;
    line-height: .86rem;
    z-index: 130;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
