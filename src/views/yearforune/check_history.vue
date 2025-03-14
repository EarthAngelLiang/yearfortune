<template>
    <div class="yearforune_warp">
        <div class="yearforune_top_introduction">
            <div class="header_title">2025全网首发</div>
            <div class="top_bg0"></div>
            <div class="top_bg1"></div>
            <div class="top_bg2"></div>
            <div class="top_bg3"></div>
        </div>
        <div class="yearforune_history" :style="{height:orderList.length>0?orderList.length*144.5+104+48 +'rem': 1*144.5+104+48 +'rem'}">
            <div class="yearforune_history_list">
                <!-- 背景结构 -->
                <div class="yearforune_history_top"></div>
                <div class="yearforune_history_center" :style="{height:orderList.length>0?orderList.length*144.5 +'rem': 1*144.5 +'rem'}">
                    <div class="yearforune_history_item" v-for=" (item,index) in orderList" :key="index" :style="{'border-top':index === 1?'none':'1rem solid #DCC1AC'}">
                        <div class="yearforune_history_item_left">
                            <div class="yearforune_history_time">
                                <span style="color: #999;margin-right: 24rem;">订单日期</span>
                                <span>20250301 15:12</span>
                            </div>
                            <div class="yearforune_history_time" >
                                <span style="color: #999;margin-right: 24rem;">订单号码</span>
                                <span>SNYS303120535124270827</span>
                            </div>
                        </div>
                        <div class="yearforune_history_item_right">查看</div>
                    </div>
                    <div class="yearforune_history_empty_box" v-show="orderList.length === 0">
                        <div class="yearforune_history_empty">没有查询到您的历史订单，请返回首页</div>
                        <div class="yearforune_history_empty">进行运程分析</div>
                    </div>
                </div>
                <div class="yearforune_history_bottom"></div>
                <!-- 订单展示 -->
            </div>
        </div>

         <div class="yearforune_reback_btn">
            <div class="yearforune_reback_bg">
            </div>
            <div class="yearforune_reback_zi"></div>
            <!-- reback_sy_bg -->
         </div>




        <div class="yearforune_person_introduction"></div>
        <div class="yearforune_forune_introduction"></div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            orderList:[]
        }
    }
}


</script>

<style lang="less" scoped>
.yearforune_warp {
    width: 100vw;
    height: 100vh;
    overflow: auto;
    background-color: rgb(228, 90, 43);

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
            top: 106rem;
            left: 0;
            z-index: 0;
            width: 100vw;
            height: 96vw;
            background-image: url('@/assets/yearforune/top4.png'); 
            background-size: 100% 100%;
        }
        .top_bg1 {
            position: absolute; 
            top: 100rem;
            left: 0;
            z-index: 2;
            width: 100vw;
            height: 797rem;
            background-image: url('@/assets/yearforune/top_2025.png');
            background-size: 100% 100%;
        }
        .top_bg2 {
            position: absolute;
            top: 100rem;
            left: 0;
            z-index: 1;
            width: 100vw;
            height: 797rem;
            background-image: url('@/assets/yearforune/top1.png');
            background-size: 100% 100%;
        }
        .top_bg3{
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
    .yearforune_history{
        margin-top: -304rem;
        position: relative;
        width: 100vw;
        // height: 288rem;
        .yearforune_history_list{
            position: absolute;
            top: 0;
            left: 50%;
            width: 701rem;
            // height: 288rem;
            transform: translate(-50%,0);
            .yearforune_history_top{
                width: 701rem;
                height: 104rem;
                background-image: url('@/assets/yearforune/history_1.png');
                background-size: 100% 100%;
                
                z-index: 2;
            }
            .yearforune_history_center{
                width: 701rem;
                background-image: url('@/assets/yearforune/history_2.png');
                background-size: 100% 100%;
                margin-top: -1px;
                z-index: 1;
                padding: 0 40rem;
                box-sizing: border-box;


                .yearforune_history_item{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 24rem 0;
                    line-height: 48rem;
                    font-size: 28rem;
                    color: #333;
                    .yearforune_history_item_left{
                        height: 96rem;
                    }
                    .yearforune_history_item_right{
                        width: 100rem;
                        height: 56rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: #fff;
                        font-size: 26rem;
                        background-color: #E74B1E;
                        border-radius: 28rem;
                    }
                }


                .yearforune_history_empty_box{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    .yearforune_history_empty{
                    font-size: 28rem;
                    text-align: center;
                    line-height: 40rem;
                    color: #333;
                }
                }
               
            }
            .yearforune_history_bottom{
                width: 701rem;
                height: 48rem;
                background-image: url('@/assets/yearforune/history_3.png');
                background-size: 100% 100%;
                margin-top: -1px;
                z-index: 2;
            }
        }
    }

    .yearforune_reback_btn{
        margin: 35rem auto 0 auto;
        width: 610rem;
        height: 123rem;
        background-image: url('@/assets/yearforune/sub_button.png');
        background-size: 100% 100%;
        position: relative;
        .yearforune_reback_bg{
            position: absolute;
            top: 40%;
            left: 50%;
            width: 195rem;
            height: 49rem;
            z-index: 4;
            transform: translate(-50%,-50%);
            background-image: url('@/assets/yearforune/reback_sy_bg.png');
            background-size: 100% 100%;
        }
        .yearforune_reback_zi{
            position: absolute;
            top: 40%;
            left: 50%;
            width: 195rem;
            height: 49rem;
            z-index: 4;
            transform: translate(-50%,-50%);
            background-image: url('@/assets/yearforune/reback_sy.png');
            background-size: 100% 100%;
        }

    }
    .yearforune_person_introduction{
        margin-top: 9rem;
        width: 100vw;
        height: 100vw;
        background-image: url('@/assets/yearforune/introduction_1.png');
        background-size: 100% 100%;
    }
    .yearforune_forune_introduction{
        width: 100vw;
        height: 1113rem;
        background-image: url('@/assets/yearforune/forune_1.png');
        background-size: 100% 100%;
    }
}
</style>
