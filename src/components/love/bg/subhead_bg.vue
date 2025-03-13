<template>
    <div class="sub-head " :class="$route.path==='/love/home'?'is-home':''">
        <div class="sub-title">{{ subName }}</div>
        <slot name="content" />
    </div>
</template>
<script>
export default {
  props: ['subName']
}
</script>
<style lang="less" scoped>
  .is-home{
    background: linear-gradient(180.00deg, rgba(247, 141, 141, 0.2) 30.534%,rgba(255, 255, 255, 0) 100%),rgb(241, 219, 222);

  }
  .sub-head{
    position: relative;
    border-radius: 2vw;
    width: 76vw;
    margin: 12vw auto 5vw auto;
    border: 1px solid rgb(209, 154, 163);
    .sub-title{
      background-image: linear-gradient(to bottom, #F6CACA, #E38883 );
      line-height: 8vw;
      width: 48vw;
      position: absolute;
      top: -4vw;
      left: 50%;
      transform: translate(-50%,0);
      border-radius: 4vw;
      color: rgb(170, 42, 44);
      font-weight: 500;
      font-size: 4.2vw;
    }
  }
</style>
