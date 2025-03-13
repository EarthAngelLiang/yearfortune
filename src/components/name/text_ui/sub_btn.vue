<template>
    <div class="btn-box" @click="action">
        <div class="txt">{{name}}</div>
        <div class="icon-box">
            <div class="icont-img0"></div>
            <div class="icont-img1"></div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['name'],
  methods: {
    action () {
      this.$emit('action')
    }
  }
}
</script>

<style lang="less" scoped>
.btn-box{
    background-image: linear-gradient(to bottom ,rgb(255, 118, 82),rgb(184, 37, 37));
    position:relative;
    width: 70vw;
    height: 10vw;
    border-radius: 4vw;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    .txt{
        font-size: 5vw;
        font-weight: 700;
        scale: .9;
    }

}
.icon-box{
    position: absolute;
    left: -3vw;
    top: 3.6vw;
    display: flex;
    width: 75vw;
    justify-content: space-between;
    .icont-img0{
        width: 11.4vw;
        height: 7vw;
        background-image: url('@/assets/name/icon_img/left.png');
        background-size: contain;
    }
    .icont-img1{
        width: 11.4vw;
        height: 7vw;
        background-image: url('@/assets/name/icon_img/right.png');
        background-size: contain;
    }
}

</style>
