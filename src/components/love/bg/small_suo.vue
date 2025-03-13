<template>
    <div class="sub-heads">
        <div class="considerations">
            <div class="bottom-jie" :style="{'bottom':list===1?'-11vw':''}">
                <div class="suo"></div>
                <div class="suo-txt">解锁内容</div>
            </div>
            <slot name="suo" />
        </div>
    </div>
</template>
<script>
export default {
  props: ['list']
}
</script>

<style lang="less" scoped>
.sub-heads {
    padding: 9vw 0 4vw 0;

    .considerations {
        border-radius: 2vw ;
        border: 1px solid rgb(221, 154, 165);
        width: 56vw;
        margin: 0 auto 3vw auto;
        padding: 3vw 4vw 6vw 5vw;
        text-align: left;
        background: rgb(238, 195, 202);
        color: rgba(170, 42, 44);
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 24vw;
        .bottom-jie{
            position: absolute;
            bottom: -3.4vw;
            left: 50%;
            display: flex;
            align-items: center;
            transform: translate(-50%,0);
            background: linear-gradient(180.00deg, rgb(244, 142, 142),rgb(178, 41, 80) 100%);
            width: 34vw;
            justify-content: center;
            border-radius: 10vw;
            line-height: 6.4vw;
            .suo{
                width: 4.6vw;
                height: 4.6vw;
                background-image: url('@/assets/love/other/sz.png');
                background-size: cover;
            }
            .suo-txt{
                color: rgba(241, 188, 52);
                margin-left: 1vw;
                font-size: 4.2vw;
            }
        }
    }
}
</style>
