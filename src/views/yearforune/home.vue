<template>
    <div class="yearforune_warp">
        <div class="yearforune_order_tips">
            <div class="tips_left">
                <img src="@/assets/yearforune/index_tips.png" alt="" class="tips_img">
                <div class="already_tips">你已经有测试完成的报告哦～</div>
            </div>
            <div class="tips_right">
                <div class="tips_check">立即查看</div>
                <div class="tips_close">关闭</div>
            </div>
        </div>
        <div class="yearforune_top_introduction">
            <div class="header_title">2025全网首发</div>

            <div class="top_bg0"></div>
            <div class="top_bg1"></div>
            <div class="top_bg2"></div>

        </div>

    </div>
</template>

<style lang="less" scoped>
.yearforune_warp {
    width: 100vw;
    height: 100vh;
    overflow: auto;

    .yearforune_order_tips {
        padding: 0 12px;
        width: 100vw;
        height: 80rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: rgb(248, 223, 141);

        .tips_left {
            display: flex;
            align-items: center;

            .tips_img {
                width: 28rem;
                height: 28rem;
                margin-right: 6rem;
            }
        }

        .tips_right {
            display: flex;
            align-items: center;

            .tips_check {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 150rem;
                height: 56rem;
                background-color: #E74B1E;
                border-radius: 28rem;
                font-size: 26rem;
                margin-right: 24rem;
                color: #fff;
            }

            .tips_close {
                color: #A0A0A0;
                font-size: 26rem;
            }
        }
    }

    .yearforune_top_introduction {
        width: 100vw;
        height: 1334rem;
        background-image: url('@/assets/yearforune/index_bg.png');
        background-size: 100% 100%;
        position: relative;

        .header_title {
            position: absolute;
            top: 12rem;
            left: 50%;
            transform: translate(-50%, 0);
            line-height: 54rem;

            background: linear-gradient(180.00deg, rgb(255, 231, 89), rgb(255, 246, 227));
            -webkit-background-clip:
                text;
            -webkit-text-fill-color:
                transparent;
            background-clip:
                text;
            text-fill-color:
                transparent;
            text-align: left;
            -webkit-text-stroke: .5px #A92B08;
            // font-weight: 700;
            font-size: 38rem;
            color: transparent;
            line-height: 60rem;
        }
        .top_bg0 {
            position: absolute;
            top: 100rem;
            left: 0;
            z-index: 2;
            width: 100vw;
            height: 797rem;
            background-image: url('@/assets/yearforune/top_2025.png');
            background-size: 100% 100%;
        }
        .top_bg1 {
            position: absolute;
            top: 100rem;
            left: 0;
            z-index: 1;
            width: 100vw;
            height: 797rem;
            background-image: url('@/assets/yearforune/top1.png');
            background-size: 100% 100%;
        }
        .top_bg2{
            position: absolute;
            top: 100rem;
            left: 0;
            z-index: 0;
            width: 100vw;
            height: 797rem;
            background-image: url('@/assets/yearforune/top_ren.png');
            background-size: 100% 100%;
        }

    }

}
</style>
