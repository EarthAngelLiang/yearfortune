<template>
    <div class="title"></div>
</template>
<script>
export default ({
  setup () {

  },
  mounted () {
    this.ind = 0
    var that = this
    const timer = setInterval(function () {
      console.log('that.ind=', that.ind)
      that.ind = that.ind + 1
      if (that.ind > 3) {
        clearInterval(timer) // 清除定时监听
        that.$router.push({ path: '/rili/home', query: {} })
      }
    }, 1000)
  }
})
</script>
<style lang="less" scoped>
.title{
    background-image: url('@/assets/rili/startup.png');
    width: 100vw;
    height: 100vh;
    background-size: 100%;
    background-repeat: no-repeat;
    text-align:center;
}
</style>
