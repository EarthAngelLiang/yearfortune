<template>
    <div class="name-box">
        <div class="white-bg"></div>
        <div class="txt-bg"></div>
        <div class="txt-content font-white-type1">“八字合婚”是中国传统习俗,男女在订婚前互换庚帖，鉴定二人是否相配，能否结婚，以及婚姻是否顺利。</div>
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
        background-color: #FF8799;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%,0);
        width: 72vw;
        border: 1px solid rgba(#A22F2A, .5);
        height: 26vw;
        border-radius: 2vw;
    }
    .txt-content{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        background-color: #FF8799 ;
        width: 81vw;
        border-radius: 2vw;
        height: 22vw;
        text-align: center;
        padding: 3vw 3vw 0vw  5vw;
        color: #fff;
        font-weight: 100;
        text-align: left;
        font-size: 4.2vw;
    }
    .white-bg{
        background-color: rgba(#A22F2A, .5);
        width:calc( 81vw + 1px);
        height:calc( 22vw + 2px);
        border-radius: 2vw;
    }
}

</style>
