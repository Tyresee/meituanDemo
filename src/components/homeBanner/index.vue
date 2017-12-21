<template>
    <div class="ttc-banner" v-show="bannerImg">
      <img :src="bannerImg" >
    </div>
</template>
<script>
  export default {
    props: {
      bannerImg: {
        type: String,
        default: ''
      }
    }
  }
</script>
<style lang="scss">
  .ttc-banner{
    img{
      width: 6.4rem;
    }
  }
</style>
