<template>
    <div class="label-heads">{{labelName}}</div>
</template>
<script>
export default {
  props: ['labelName']
}
</script>
<style lang="less" scoped>
.label-heads{
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%,-1px);
    width: 28vw;
    height: 6.8vw;
    text-align: center;
    background-image: url('@/assets/love/index/7.png');
    background-size: 100%;
    color:rgb(193, 61, 56) ;
    font-weight: 500;
    font-size: 4.2vw;
    line-height: 6.8vw;
    background-repeat: no-repeat;
}
</style>
