<template>
    <div class="nav-box">
        <img  class="top-img" src="@/assets/name/btn/top_year.png" alt="">
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
    .top-img {
        width: 50vw;
        margin-top: -7vw;
    }
    .year_number {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
        color: #FFF2D3;
        font-size: 3.8vw;
        text-shadow: 0px 2px 1px #614c4c;
    }
}
</style>
