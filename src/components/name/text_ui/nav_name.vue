<template>
    <div class="name-box">
        <img  class="content-img" src="@/assets/name/all_name.png')" alt="">
        <img  v-lazy="require('@/assets/name/shanguang.png')" alt="" class="shanguang1">
        <img  v-lazy="require('@/assets/name/shanguang.png')" alt="" class="shanguang2">
        <img  v-lazy="require('@/assets/name/shanguang.png')" alt="" class="shanguang3">
        <img  v-lazy="require('@/assets/name/shanguang.png')" alt="" class="shanguang4">
        <img  v-lazy="require('@/assets/name/xing.png')" alt="" class="xing">
    </div>
</template>
<script>
export default {
  name: 'NavName'
}

</script>
<style lang="less" scoped>
.name-box {
    width: 100%;
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    .content-img {
        width: 74%;
    }
    // .content-img {

    //     width: 100%;
    // }
    .shanguang1{
        position: absolute;
        top: -3vw;
        left: 6vw;
        width: 40vw;
        opacity: .4;

    }
    .shanguang2{
        position: absolute;
        top: -6vw;
        left: 22vw;
        width: 40vw;
        opacity: .4;
    }
    .shanguang3{
        position: absolute;
        top: -6vw;
        left: 40vw;
        width: 40vw;
        opacity: .4;
    }
    .shanguang4{
        position: absolute;
        top: -4vw;
        left: 59vw;
        width: 40vw;
        opacity: .4;
    }
    .xing{
        position: absolute;
        top: -15vw;
        left: 62vw;
        width: 38vw;
        opacity: .6;
    }

}
</style>
