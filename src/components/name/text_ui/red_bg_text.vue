<template>
    <div class="name-box">
        <div class="white-bg"></div>
        <div class="txt-bg"></div>
        <div class="txt-content font-white-type1">名字是人生中的财富，好的名字能增加自信，加持好运。根据传统易学原理，五行生克理论推算，评测姓名与命理匹配度。</div>
    </div>
</template>
<style lang="less" scoped>
.name-box{
    position: relative;
    height: 26vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .txt-bg{
        background-color: #A22F2A;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%,0);
        width: 78vw;
        border: 1px solid rgba(255, 255, 255, .5);
        height: 26vw;
        border-radius: 2vw;
    }
    .txt-content{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        background-color: #A22F2A;
        width: 87vw;
        border-radius: 2vw;
        height: 20vw;
        text-align: center;
        padding: 3vw 3vw 0vw  3vw ;
    }
    .white-bg{
        background-color: rgba(255, 255, 255, .5);
        width:calc( 87vw + 1px);
        height:calc( 20vw + 2px);
        border-radius: 2vw;

    }
}

</style>
