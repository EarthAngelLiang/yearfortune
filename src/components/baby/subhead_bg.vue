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
    width: 67vw;
    margin: 12vw auto 2vw auto;
    border: 1px solid rgb(186, 186, 186);
    text-align: center;
    padding-bottom: 4vw;
    .sub-title{
      background: linear-gradient(180.00deg, rgba(255, 0, 0, 0.2),rgba(255, 0, 0, 0) 100%),linear-gradient(180.00deg, rgba(249, 7, 7, 0) 4.444%,rgba(255, 3, 3, 0.2) 100%),rgb(248, 186, 186);
      line-height: 8vw;
      width: 56vw;
      position: absolute;
      top: -4vw;
      left: 50%;
      transform: translate(-50%,0);
      border-radius: 4vw;
      color: #B72F41;
      font-weight: 500;
      font-size: 4.2vw;
    }
  }
</style>
