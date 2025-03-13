<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  beforeDestroy () {
    // 清除订单id和订单金额
    // localStorage.removeItem('orderid')
    // localStorage.removeItem('amount')
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
<style>
@import url('~@/assets/clear_default.css');
@import url('~@/assets/type.css');
@import url('~@/assets/iconfont/iconfont.css');
</style>
