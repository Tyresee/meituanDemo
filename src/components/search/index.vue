<template>
  <div class="ttc-search">
    <i class="iconfont icon-search"></i>
    <input type="text" :value="contentInBox" >
  </div>
</template>

<script>
  export default {
    data () {
      return {
        contentInBox: '输入商家/品类/商圈'
      }
    }
  }
</script>

<style lang="scss">
  .ttc-search {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    border-radius: .06rem;
    background: rgba(0,0,0,.15);
    height: .64rem;
    line-height: .64rem;
    -webkit-box-sizing: border-box;
    position: relative;
    margin-top: .2rem;
    .icon-search{
      position: absolute;
      left: .2rem;
      font-size: .26rem;
      color: #fff;
    }
    input {
      position: absolute;
      left: .4rem;
      background: transparent;
      display: inline-block;
      height: 100%;
      text-align: center;
      font-size: .26rem;
      color: #68dbce;
      box-sizing: border-box;
    }
  }
</style>
