
<template>
    <div class="home">
        <Tips />
        <div class="zixun-detail" @click="openService"><span class=" iconfont icon-kefu1"
                style="font-size:8vw;color:#d1420a; font-weight: 100; text-shadow:  1px 1px rgba(0, 0, 0, 0.5);"></span>
            在线客服
        </div>
        <div class="container">
            <div class="bottom-bg">
            </div>
            <TopBg />
            <div class="order-info" style="margin-top:105vw;">
                <BoxBg>
                    <template v-slot:exhibition>
                        <div class="title-label"> 订单查询 </div>
                        <div class="info-box">
                            <div class="input-info">
                                <div class="iconfont label icon-sousuoxiao" style="font-size:5vw"></div>
                                <input type="text" class="info " v-model="order_id" placeholder="请输入手机号码或订单号码">
                            </div>
                        </div>
                        <div class="now-test">
                            <div class="test-btn" @click="getStatus">查询</div>
                        </div>
                        <div class="use-number ">温馨提示: 找不到订单或其它原因</div>
                        <div class="use-number " style="margin-bottom: 1vw;">请联系客服微信: S600007S</div>
                    </template>
                </BoxBg>

            </div>
            <div class="order-info">
                <BoxBg>
                    <template v-slot:exhibition>
                        <TopDecoration :name="'忘记或找不到订单号'"></TopDecoration>
                        <SubHead :subName="'微信支付用户'">
                            <template v-slot:content>
                                <img v-lazy="require('@/assets/name/ewm/wxcx.png')" alt="" class="wxcx">
                            </template>
                        </SubHead>

                    </template>
                </BoxBg>

            </div>
            <div class="flooters-info">
                <div class="erweima">
                    <img v-lazy="require('@/assets/name/ewm/ewm.png')" alt="" class="img-erweima">
                </div>
                <div class="call">如需帮助，请联系客服微信：S600007S</div>
            </div>
        </div>
    </div>
</template>
<script>
import TopBg from '@/components/love/bg/top_bg.vue'
import BoxBg from '@/components/love/bg/box_bg.vue'
import Tips from '@/components/name/tips/tips.vue'
import TopDecoration from '@/components/love/text_ui/top_decoration.vue'
import SubHead from '@/components/love/bg/subhead_bg.vue'
import { post } from '@/axios/axios'
import { mapMutations } from 'vuex'
import { openService } from '@/uitls/js/name_service'
export default {
  name: 'HomeView',
  components: {
    TopBg,
    // YellowBtn,
    // TxtContent,
    BoxBg,
    Tips,
    TopDecoration,
    SubHead
  },
  data () {
    return {
      order_id: ''
    }
  },
  async mounted () {

  },
  methods: {
    ...mapMutations(['setShowTips']),
    openService () {
      openService()
    },
    async getStatus () {
      console.log(this.order_id, 'orderss')
      const result = await post('/name_hehun/select_orderid', { order_id: this.order_id })
      console.log(result, '查询结果')
      if (result.result === 0) {
        localStorage.setItem('detailResultLove', JSON.stringify(result))
        console.log(result, '详情')
        this.$router.push({ path: '/love/order_detail' })
      } else {
        this.setShowTips(result.errMsg)
      }
    }
  }

}
</script>
<style lang="less" scoped>
.home {
    background-color: #fff;
    position: relative;
    width: 100vw;

    .zixun-detail {
        position: fixed;
        left: 0;
        bottom: 6vh;
        z-index: 9;
        width: 14vw;
        font-size: 3vw;
        color: #F07155;
        // background-color: rgba(0, 0, 0, 0.3);
        font-weight: 700 !important;
        padding: 2vw 0;
        border-top-right-radius: 1.4vw;
        border-bottom-right-radius: 1.4vw;
        display: flex;
        // justify-content: center;
        flex-direction: column;
        text-align: center;
        font-weight: 100;
    }

    .container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        z-index: 1;
        width: 100vw;
        overflow: hidden;

        .bottom-bg {
            width: 100vw;
            height: calc(100% - 164vw);
            background-image: linear-gradient(to bottom, #FF8799, #F1B2BB);
            position: absolute;
            top: calc(164vw - 1px);
            left: 0;
            z-index: -1;
        }

        .txt-content {
            margin-top: 77.6vw;
            position: relative;

            .yellow-btn {
                margin-top: -2.3vw;
                position: absolute;
                width: 100%;
                z-index: 3;
            }
        }

        .top-bg {
            position: absolute;
            top: -7.2vw;
            left: 0;
            width: 100vw;
            z-index: -1;
        }

        .order-info {
            display: flex;
            justify-content: center;
            margin-top: 8vw;

            .wxcx {
                width: 70vw;
                margin: 8vw 0 4vw 0;
                height: 82vw;
            }

            .info-box {
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;

                .input-info {
                    display: flex;
                    align-items: center;
                    width: 86%;
                    background-color: #fff;
                    border: 2px solid rgb(229, 174, 183);
                    border-radius: 1vw;
                    line-height: 10vw;
                    margin-bottom: 3vw;

                    .label {
                        width: 10vw;
                    }

                    .info {
                        // flex: 1;
                        width: calc(100% - 12vw);
                    }

                }
            }

            .now-test {
                display: flex;
                justify-content: center;
                margin: 4vw 0;

                .test-btn {
                    line-height: 10vw;
                    text-align: center;
                    border-radius: 2vw;
                    width: 50vw;
                    background-image: linear-gradient(to bottom, #F487B5, #B8325A);
                    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.5);
                    color: #fff;
                    font-size: 5.2vw;
                }
            }

            .title-label {
                line-height: 16vw;
                font-size: 5.2vw;
                font-weight: 700;
                margin: 3vw 0 0vw 0;
            }

        }

        .use-number {
            color: rgb(200, 76, 79);
            font-size: 4vw;
            text-align: center;
            font-weight: 400;
        }
    }

    .flooters-info {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        .erweima {
            background-color: rgb(238, 195, 202);
            padding: 1.5vw;
            border-radius: 1vw;
            margin-top: 10vw;

            .img-erweima {
                display: block;
                padding: 1vw;
                border: 1px solid #dac6b0;
                border-radius: 1vw;
                width: 30vw;
            }

        }

        .call {
            font-size: 4.4vw;
            font-weight: 700;
            margin: 4vw 0 8vw 0;
        }
    }
}</style>
