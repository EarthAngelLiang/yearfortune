<template>
    <div class="box-nav-bg">
        <div class="box-navs">
            <div class="box-nav">

            <div class="headss">
                <slot name="heads"></slot>
            </div>

            <div class="content-border">
                <slot name="exhibition"></slot>
            </div>
            <slot name="floother"></slot>
        </div>
        </div>

    </div>
</template>
<style lang="less" scoped>
.box-nav-bg{
    width: 90vw;
    background-color: #FFFBF3;
    margin:0 auto;
    border-radius: 1.5vw;
    border:1px solid #FEA671;
    margin-bottom: calc(3vw + 10px) ;
    .box-navs{
        min-height: 20vw;
        width: 86vw;
        border-radius: 1.5vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #FFFBF3;
        margin: -9px auto;
        padding: 8px 0;
        border:1px solid #FEA671;
        .box-nav {
        min-height: 20vw;
        width:  87vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #FFFBF3;
        .content-border {
            min-height: 20vw;
            width: calc(86vw - 20px);
            border-radius: 1vw;
            text-align: center;
            background-size: contain;

        }

    }
    }

}

</style>
