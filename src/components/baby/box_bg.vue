<template>
    <div class="box-nav-bg">

        <div class="content-border">
            <slot name="exhibition"></slot>
        </div>
        <slot name="floother"></slot>

    </div>
</template>
<style lang="less" scoped>
.box-nav-bg {
    width: 84vw;
    background-color: #fff;
    margin: 0 auto;
    border-radius: 6vw;
    // border: 1px solid #FEA671;
    margin-bottom: calc(3vw + 10px);
    .content-border {
        min-height: 20vw;
        width: calc(84vw);
        border-radius: 1vw;
        text-align: center;
        background-size: contain;

    }

}
</style>
