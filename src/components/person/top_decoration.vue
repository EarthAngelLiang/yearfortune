<template>
    <div class="big-box">
        <div class="top-icons"></div>
        <div class="btn-box">
            <div class="font-white-type2">{{ name }}</div>
            <div class="icon-box">
                <div class="icont-img0"></div>
                <div class="icont-img1"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['name']
}
</script>
<style lang="less" scoped>
.big-box {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    .top-icons{
        position: absolute;
        top:calc(-2vw - 8px);
        width: 71vw;
        height: 2vw;
        background-color:#BA2827;
        border-top-left-radius: 2vw;
        border-top-right-radius: 2vw;
    }
    .btn-box {
        background-image: linear-gradient(to bottom, rgb(255, 61, 93),#C53343);
        position: relative;
        width: 68vw;
        height: 10vw;
        border-bottom-left-radius: 4vw;
        border-bottom-right-radius: 4vw;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: calc(-2vw - 8px);
    }

    .icon-box {
        position: absolute;
        left: -3vw;
        top: 3.6vw;
        display: flex;
        width: 74vw;
        justify-content: space-between;

    }
}
</style>
