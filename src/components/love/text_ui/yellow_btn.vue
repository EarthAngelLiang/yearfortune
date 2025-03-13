<template>
    <div class="nav-box">
        <img  class="btn-img" src="@/assets/love/bg/bt.png')" alt="">
        <div class="btn-text">{{ btnTxt }}</div>
    </div>
</template>
<script>
export default {
  name: 'BtnTxt',
  props: ['btnTxt']
}

</script>
<style lang="less" scoped>
.nav-box {
    overflow: hidden;
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    .btn-img {
        width: 40vw;
    }
    .btn-text {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(0,-50%);
        text-align: center;
        color: #78362D;
        font-size: 4vw;
        font-weight: 700;
        width: 100%;
    }
}
</style>
