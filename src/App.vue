<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import "./assets/css/reset";
@import "./assets/css/app";

body {
  background-color: #f0efed;
}
</style>
