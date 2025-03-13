<template>
    <div class="box-nav">
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
    background: rgb(253, 241, 218);
    border-radius: 1vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .content-border {
        min-height: 20vw;
        width: calc(92vw - 20px);
        border-radius: 1vw;
        border: 1px solid #E39651;
        text-align: center;
        margin: 10px 0;
        background-image: url('@/assets/name/bg/xu.png');
        background-size: contain;
    }
}
</style>
