<template>
    <div class="home">
        <Tips />
        <TopBack/>
        <div class="zixun-detail"  @click="openService"><span class=" iconfont icon-kefu1" style="font-size:8vw;color:#d1420a; font-weight: 100; text-shadow:  1px 1px rgba(0, 0, 0, 0.5);"></span> 在线客服</div>
        <div class="container">
            <img   class="top-bg" src="@/assets/name/bg/index_bg.png" alt="">
            <div class="transprent"></div>
            <div class="jianbian"></div>
            <div>
                <TopYear :year="'2023癸卯年'"></TopYear>
            </div>
            <div class="text-name">
            </div>
            <div class="order-info">
                <BoxBg>
                    <template v-slot:exhibition>
                        <TopDecoration :name="'订单列表'"></TopDecoration>
                        <div class="nav-all" v-for="item in orderList" :key="item.order_id">
                            <div class="top-box">
                                <div class="number-status">
                                    <div class="order-number">
                                        订单号码： {{item.order_id}}
                                    </div>
                                    <div class="status" v-if="item.status==='未支付'"
                                        style="border:1px solid #ED0F0F;background-color: #FCD2D2; color:#ED0F0F;">未支付</div>
                                        <div class="status" v-else-if="item.status==='已退款'"
                                        style="border:1px solid #f59842;background-color: #fce2c2; color:#f59842;">已退款</div>
                                        <div class="status" v-else
                                        style="border:1px solid #2ABF2A;background-color: #CFF1CF; color:#2ABF2A;">已完成</div>
                                </div>
                                <div class="label">
                                    姓名： {{item.name}}
                                </div>
                                <div class="label">
                                    性别： {{item.gender}}
                                </div>
                                <div class="label">
                                    出生日期： （ {{ item.calender }} ）  {{ item.birthday }} {{ item.sx_hour }}
                                </div>
                            </div>
                            <div class="floother-box" >
                                <div class="btn-hong" v-if="item.status==='未支付'" @click="toPlay(item) ">立即支付</div>
                                <div class="txt" v-else-if="item.status==='已退款'"   style=" color: #aaa7a7;">已退款</div>
                                <div class="txt" v-else @click="toDetail(item)">点击查看报告</div>
                            </div>
                        </div>
                    </template>
                </BoxBg>
            </div>
            <div class="flooters-info">
                <div class="erweima">
                    <img  v-lazy="require('@/assets/name/ewm/ewm.png')" alt="" class="img-erweima">
                </div>
                <div class="call">如需帮助，请联系客服微信：S600007S</div>
            </div>

        </div>
    </div>
</template>
<script>
import TopYear from '@/components/name/text_ui/page_top_year.vue'
import Tips from '@/components/name/tips/tips.vue'
import BoxBg from '@/components/name/box_bg/box_bg.vue'
import TopDecoration from '@/components/name/text_ui/top_decoration.vue'
import TopBack from '@/components/name/text_ui/top_back.vue'
import { post, get } from '@/axios/axios'
import { mapMutations } from 'vuex'
import { openService } from '@/uitls/js/name_service'
export default {
  name: 'HomeView',
  components: {
    TopYear,
    BoxBg,
    TopDecoration,
    TopBack,
    Tips
  },
  data () {
    return {
      orderList: []
    }
  },
  mounted () {
    this.getOrderList()
  },
  methods: {

    ...mapMutations(['setShowTips', 'setOrderId', 'setAmount']),
    openService () {
      openService()
    },
    async getOrderList () {
      const result = await post('/name_examine/select_orderid', this.$route.query)
      console.log(result, 'resultresult')
      if (result.result === 0) {
        this.orderList = result.data
      } else {
        this.setShowTips(result.msg)
      }
    },
    async toDetail (item) {
      this.setOrderId(item.order_id)
      await this.getStatus(item.order_id)
    },
    async getStatus (orderid) {
      const result = await get('/name_examine/order_result', { order_id: orderid })
      if (result.result === 0) {
        localStorage.setItem('detailResult', JSON.stringify(result))
        console.log(result, '详情')
        this.$router.push({ path: '/name/detail' })
      } else {
        this.setShowTips(result.errMsg)
      }
    },
    toPlay (item) {
      this.setOrderId(item.order_id)
      this.setAmount(item.play_amount)
      this.$router.replace('/name/play')
    }
  }
}
</script>
<style lang="less" scoped>
.home {
    margin-top: 10vw;
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
        background-color: #D8C38C;

        .top-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            z-index: -1;
        }

        .transprent {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -2;
            background-image: url(@/assets/name/bg/bottom_xu.png);
            background-size: cover;
            opacity: .4;
        }

        .jianbian {
            position: absolute;
            top: 190vw;
            left: 0;
            width: 100%;
            height: calc(100% - 190vw);
            background-image: linear-gradient(to bottom, rgba(212, 195, 153, .2), rgba(212, 195, 153, 1));
            z-index: -1;
        }

        .text-name {
            padding-top: 7vw;
            height: 28vw;
        }

        .order-info {
            display: flex;
            justify-content: center;
            margin-top: 4vw;

            .nav-all {
                background-image: url('@/assets/name/ewm/order_bg.png');
                width: 82vw;
                margin: 4vw auto;
                height: 48vw;
                padding: 3vw;
                background-size: 100% 100%;

                .top-box {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    border-bottom: 1px dashed #EBE7E3;
                    height: 33vw;
                    padding-left: 3vw;
                    text-align: start;

                    .number-status {
                        font-size: 3.8vw;
                        display: flex;
                        justify-content: space-between;

                        .order-number {
                            font-weight: 700;
                        }

                        .status {
                            border-radius: .8vw;
                            padding: 0 1vw;
                        }
                    }

                    .label {
                        color: #6D6D6D;
                    }
                }

                .floother-box {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 12vw;

                    .btn-hong {
                        line-height: 8.4vw;
                        color: #fff;
                        font-size: 3.8vw;
                        font-weight: 700;
                        width: 74vw;
                        border-radius: 1.2vw;
                        height: 8.4vw;
                        background-image: linear-gradient(to bottom, rgb(255, 118, 82), rgb(184, 37, 37));

                    }

                    .txt {
                        font-size: 4vw;
                    }
                }
            }
        }

        .flooters-info {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;

            .erweima {
                background-color: #EEE2CA;
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

    }

}</style>
