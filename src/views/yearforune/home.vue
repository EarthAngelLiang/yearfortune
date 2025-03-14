<template>
    <div class="yearforune_warp">
        <div class="yearforune_order_tips" :style="{ height:closeCheck? '80rem':0 }">
            <div class="tips_left">
                <img src="@/assets/yearforune/index_tips.png" alt="" class="tips_img">
                <div class="already_tips">你已经有测试完成的报告哦～</div>
            </div>

            <div class="order-detail" @click="toCheckHistory"><span class=" iconfont icon-sousuoxiao"></span> 订单查询</div>
            <div class="tips_right">
                <div class="tips_check" @click="toCheckHistory">立即查看</div>
                <div class="tips_close" @click="closeCheck = false">关闭</div>
            </div>
        </div>
        <div class="yearforune_modal_mask" :style="{ height: showModal?'100vh':0 }">
            <div class="yearforune_modal_content" v-if="!isComfirm">
                <div class="yearforune_modal_trrigger">
                    <div class="yearforune_modal_trrigger_item trrigger_active">公历</div>
                    <div class="yearforune_modal_trrigger_item">农历</div>
                </div>
                <div class="yearforune_modal_info">
                </div>
                <div class="yearforune_modal_btn">
                    <div class="yearforune_modal_btn_item" @click="showModal = false">取消</div>
                    <div class="yearforune_modal_btn_item btn_active">确定</div>
                </div>
            </div>
            <div class="yearforune_modal_content" v-if="isComfirm">
                <div class="yearforune_modal_title">确定所选时间</div>
                <div class="yearforune_modal_small_title">请确认输入的时间是否正确</div>
                <div class="yearforune_modal_info" style="height: 412rem;">
                    <div class="yearforune_modal_info_item">
                        <div class="yearforune_modal_info_label">公(阳)历：</div>
                        <div class="yearforune_modal_info_time">1990年12月16日 15:00-15:59(申)时</div>
                    </div>
                    <div class="yearforune_modal_info_item">
                        <div class="yearforune_modal_info_label">公(阳)历：</div>
                        <div class="yearforune_modal_info_time">1990年12月16日 15:00-15:59(申)时</div>
                    </div>
                </div>
                <div class="yearforune_modal_btn">
                    <div class="yearforune_modal_btn_item" @click="showModal = false">取消</div>
                    <div class="yearforune_modal_btn_item btn_active">确定</div>
                </div>
            </div>
        </div>
        <div class="yearforune_top_introduction">
            <div class="header_title">2025全网首发</div>
            <div class="top_bg0"></div>
            <div class="top_bg1"></div>
            <div class="top_bg2"></div>
            <div class="top_bg3"></div>
        </div>
        <div class="yearforune_input_box">
            <div class="yearforune_input_kuan">
                <div class="input_row">
                    <div class="input_name">姓名：</div>
                    <input class="input_item" placeholder="请输入您的姓名(必须汉字)">
                </div>
                <div class="input_row">
                    <div class="input_name">性别：</div>
                    <div class="input_sex">
                        <div class="sex_type active_sex">男</div>
                        <div class="sex_type">女</div>
                    </div>
                </div>
                <div class="input_row">
                    <div class="input_name">姓名：</div>
                    <input class="input_item" placeholder="请输入您的姓名(必须汉字)">
                </div>

                <!-- 开始分析按钮 -->
                <div class="input_btn_submit"></div>、

                <div class="agreement_row">
                    <div class="agreement_check agreement_check_active"></div>
                    <div class="agreement_small_row">
                        <div class="agreement_small_item">同意</div>
                        <div class="agreement_small_item">《用户协议》</div>
                        <div class="agreement_small_item">和</div>
                        <div class="agreement_small_item">《隐私协议》</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="yearforune_already">
            <div class="already_left">
                <img class="already_img"
                    src="https://img0.baidu.com/it/u=2191392668,814349101&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1399"
                    alt="">
                <div class="already_bottom">
                    <div class="already_name">随遇而安</div>
                    <div class="already_name">16分钟前购买蛇年运程</div>
                </div>
            </div>
            <div class="already_center_line"></div>
            <div class="already_right">
                <div class="already_pay_number">
                    已有<span style="color: #FFD461; font-weight: bold;">2216139</span>人领取蛇年运程报告
                </div>
            </div>
        </div>

        <div class="yearforune_person_introduction"></div>
        <div class="yearforune_forune_introduction"></div>
        <div class="yearforune_guide_introduction"></div>
        <div class="yearforune_comments_introduction"></div>
        <div class="yearforune_solve_introduction"></div>
        <div class="yearforune_why_introduction"></div>

    </div>
</template>
<script>
export default {
  data () {
    return {
      closeCheck: true,
      showModal: true,
      isComfirm: true
    }
  },
  methods: {
    toCheckHistory () {
      // this.$router
      console.log(this.$router, 'this.$router')
      this.$router.push('check_history')
    }
  }
}

</script>

<style lang="less" scoped>

  .order-detail {
      position: fixed;
      right: 0;
      top: 24vh;
      z-index: 9;
      width: 7vw;

      background-color: rgba(0, 0, 0, 0.5);
      font-size: 4vw;
      color: rgba(255, 255, 255, .8);
      padding: 2vw 0;
      border-top-left-radius: 1.4vw;
      border-bottom-left-radius: 1.4vw;
      display: flex;
      text-align: center;
      flex-direction: column;
      .iconfont {
          margin-bottom: .5vw;
      }
  }
  .yearforune_modal_mask{
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 600;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.4);
    transition: all 1s;
    overflow: hidden;
    .yearforune_modal_content{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 710rem;
        background-image: url('@/assets/yearforune/modal_bg.png');
        background-size: 100% 100%;
        .yearforune_modal_trrigger{
            display: flex;
            // justify-content: center;
            // align-items: center;
            border: 1rem solid #E74B1E;
            border-radius: 8rem;
            height: 82rem;
            width: 456rem;
            margin: 56rem auto 0 auto;
            box-sizing: border-box;
            .yearforune_modal_trrigger_item{
                flex: 1;
                color: #E74B1E;
                text-align: center;
                height: 82rem;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 34rem;
                font-weight: 700;
            }
            .trrigger_active{
                background-color: #E74B1E;
                color: #fff !important;
                height: 82rem;
            }
        }
        .yearforune_modal_info{
            width: 100vw;
            height: 422rem;
            background-color: greenyellow;

            .yearforune_modal_info_item{
                margin:27rem 0;
            }

        }
        .yearforune_modal_title{
            margin-top: 40rem;
            text-align: center;
            font-size: 40rem;
            font-weight: 700;
            height: 58rem;
            color: #333;
            line-height: 58rem;

        }
        .yearforune_modal_small_title{
            margin-top: 10rem;
                text-align: center;
                font-size: 30rem;
                color: #333;
                line-height: 44rem;
                height: 44rem;
        }

        .yearforune_modal_btn{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 30rem;
            .yearforune_modal_btn_item{
                width: 316rem;
                height: 96rem;
                background-image: url('@/assets/yearforune/qx_bg.png');
                background-size: 100% 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #666;
                font-size: 34rem;
                font-weight: 700;
            }
            .btn_active{
                color: #fff !important;
                background-image: url('@/assets/yearforune/qd_bg.png');
            }
        }

    }
  }

.yearforune_warp {
    width: 100vw;
    height: 100vh;
    overflow: auto;
    background-color: rgb(228, 90, 43);
    padding-bottom: 400rem;
    .yearforune_order_tips {
        padding: 0 12px;
        width: 100vw;

        transition: all .5s;
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
    .yearforune_input_box{
        margin-top: -304rem;
        position: relative;
        width: 100vw;
        height: 767rem;
        .yearforune_input_kuan{
            position: absolute;
            top: 0;
            left: 50%;
            width: 701rem;
            height: 767rem;
            transform: translate(-50%,0);
            background-image: url('@/assets/yearforune/input_kuan.png');
            background-size: 100% 100%;
            z-index: 2;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-top: 160rem;
            .input_row{
                display: flex;
                align-items: center;
                width: 590rem;
                height: 98rem;
                background-color: #fff;
                border-radius: 49rem;
                border: 1rem solid rgb(249, 192, 74);
                margin-bottom: 30rem;
                .input_name{
                    width: 120rem;
                    font-size: 32rem;
                    text-align: center;
                }
                .input_sex{
                    height: 70rem;
                    display: flex;
                    align-items: center;

                    .active_sex{
                        background: rgb(227, 85, 49) !important;
                        border: 1rem solid rgb(227, 85, 49) !important;
                        color: #fff !important;
                    }
                    .sex_type{
                        width: 70rem;
                        height: 70rem;
                        border-radius: 50%;
                        border: 1rem solid rgb(51, 51, 51);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background-color: #fff;
                        margin-right: 30rem;
                        font-size: 32rem;
                        color: #333;
                    }
                }
                .input_item{
                    width: 420rem !important;
                }
            }
            .input_btn_submit{
                width: 610rem;
                height: 121rem;
                background-image: url('@/assets/yearforune/sub_button.png');
                background-size: 100% 100%;
            }
            .agreement_row{
                display: flex;
                justify-content: center;
                align-items: center;
                .agreement_check{
                    width: 36rem;
                    height: 36rem;
                    border-radius: 50%;
                    border: 1rem solid #333;
                    box-sizing: border-box;
                    margin-right: 10rem;
                }
                .agreement_check_active{
                    border: 1rem solid #E35531 !important;
                    background-image: url('@/assets/yearforune/agreement_check.png');
                    background-size: 100% 100%;
                }

                .agreement_small_row{
                    display: flex;
                    align-items: center;
                    .agreement_small_item{
                        line-height: 34rem;
                        font-size: 28rem;
                        margin-right: 12rem;
                        color: #AD885B;
                    }
                }
            }
        }

    }

    .yearforune_already{
        margin-top: 39rem;
        display: flex;
        align-items: center;
        justify-content: center;
        .already_left{
            width: 432rem;
            height: 96rem;
            display: flex;
            align-items: center;
            .already_img{
                width: 96rem;
                height: 96rem;
                border-radius:50% ;
                margin-right: 10rem;
                object-fit: cover;
                object-position: center; /* 调整为中间部分 */
            }
            .already_bottom{
                .already_name{
                    font-size: 26rem;
                    color: #fff;
                    line-height: 38rem;
                }
            }
        }
        .already_center_line{
            width: 1px;
            height: 74rem;
            background-color: #fff;
        }
        .already_right{
            width: 259rem;
            height: 96rem;
            padding-left: 30rem;
            font-size: 26rem;
            color: #fff;
            line-height: 38rem;
            display: flex;
            align-items: center;
        }
    }
    .yearforune_person_introduction{
        margin-top: 80rem;
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
    .yearforune_guide_introduction{
        width: 100vw;
        height: 1480rem;
        background-image: url('@/assets/yearforune/guide_1.png');
        background-size: 100% 100%;
    }
    .yearforune_comments_introduction{

        width: 100vw;
        height: 1530rem;
        background-image: url('@/assets/yearforune/comments_1.png');
        background-size: 100% 100%;
    }
    .yearforune_solve_introduction{
        width: 100vw;
        height: 1258rem;
        background-image: url('@/assets/yearforune/solve_1.png');
        background-size: 100% 100%;
    }
    .yearforune_why_introduction{
        width: 100vw;
        height: 1092rem;
        background-image: url('@/assets/yearforune/why_1.png');
        background-size: 100% 100%;
    }

}
</style>
