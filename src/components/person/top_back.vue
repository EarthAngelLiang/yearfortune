<template>
    <div class="top-rows">
        <div class="iconfont icon-fanhui" @click="$router.back()"></div>
        <div class="txtname">个人姻缘</div>
        <div  class="box-icon">
          <div class="iconfont icon-home" v-show="!notback" @click="$router.replace('/')"></div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['notback'],
  methods: {
    backs () {
      this.$router.forward()
    }

  }
}
</script>

<style lang="less" scoped>
.top-rows{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 10000;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    line-height: 10vw;
    height: 10vw;
    text-align: center;
    padding: 0 5vw;
    .txtname{
      color:#F07155;
      font-size:4.6vw;
    }
    .box-icon{
      width: 8vw;
      height: 8vw;
    }
    .iconfont{
      width: 8vw;
      height: 8vw;
        font-size: 5.6vw;
        color: #000;
    }
}
</style>
