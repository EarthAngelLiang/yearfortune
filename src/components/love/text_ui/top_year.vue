<template>
    <div class="nav-box">
        <!-- <img  class="top-img" src="@/assets/love/bg/pt.png')" alt=""> -->
        <div class="year_number">{{ year }}</div>
    </div>
</template>
<script>
export default {
  name: 'TopYear',
  props: ['year']
}

</script>
<style lang="less" scoped>
.nav-box {
    overflow: hidden;
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    height: 80vw;
    .top-img {
        width: 40vw;
    }
    .year_number {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
        color: rgb(61, 63, 72);
        font-size: 3.8vw;
        // text-shadow: 0px 2px 1px #614c4c;
    }
}
</style>
