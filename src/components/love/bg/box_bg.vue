<template>
    <div class="box-nav">
        <div class="headss">
            <slot name="heads"></slot>
        </div>
        <div class="content-border">
            <slot name="exhibition"></slot>
        </div>
        <slot name="floother"></slot>
    </div>
</template>
<style lang="less" scoped>
.box-nav {
    min-height: 20vw;
    width: 92vw;
    background: #FDE4E7;
    border-radius: 1vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180.00deg, rgba(247, 141, 141, 0.2),rgba(247, 141, 141, 0) 100%),rgb(254, 236, 239);
    .content-border {
        min-height: 20vw;
        width: calc(92vw - 20px);
        border-radius: 1vw;
        border: 1px solid rgb(221, 154, 165);
        text-align: center;
        margin: 10px 0;
        // background-image: url('@/assets/name/bg/xu.png');
        background-size: contain;
    }

}
</style>
