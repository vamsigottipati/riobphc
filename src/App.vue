<template>
  <div id="app" class="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  @import "sass/main";

  body {
    height: 100%;
    #app {
      height: 100%;
    //  background-color:#f64c72;
    // background-color:#cafafe;
   //  background: url('./assets/bgImg4.jpg');
     background-size:fit;
    }
  }
</style>
