<template>
    <div class="home">
        <TopBack />
        <div class="zixun-detail"  @click="openService"><span class=" iconfont icon-kefu1"
                style="font-size:8vw;color:#d1420a; font-weight: 100; text-shadow:  1px 1px rgba(0, 0, 0, 0.5);"></span>
            在线客服</div>
        <div class="container">
            <TopBg />
                <div class="nav-all" v-for="item in orderList" :key="item.order_id">
                    <div class="top-box">
                        <div class="number-status">
                            <div class="order-number">
                                订单号码： {{ item.order_id }}
                            </div>
                            <div class="status" v-if="item.status === '未支付'"
                                style="border:1px solid #ED0F0F;background-color: #FCD2D2; color:#ED0F0F;">未支付</div>
                            <div class="status" v-else-if="item.status === '已退款'"
                                style="border:1px solid #f59842;background-color: #fce2c2; color:#f59842;">已退款</div>
                            <div class="status" v-else
                                style="border:1px solid #2ABF2A;background-color: #CFF1CF; color:#2ABF2A;">已完成</div>
                        </div>
                        <div class="label">
                            姓名： {{ item.name }}
                        </div>
                        <div class="label">
                            性别： {{ item.gender }}
                        </div>
                        <div class="label">
                            出生日期： （ {{ item.calender }} ） {{ item.birthday }} {{ item.sx_hour }}
                        </div>
                    </div>
                    <div class="floother-box">
                        <!-- <div class="btn-hong" v-if="item.status === '未支付'" @click="toDetail(item)">立即支付</div>
                        <div class="txt" v-else-if="item.status === '已退款'" style=" color: #aaa7a7;">已退款</div> -->
                        <div class="txt" @click="toDetail(item)">点击查看报告</div>
                    </div>
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
import TopBg from '@/components/person/top_bg.vue'
import TopBack from '@/components/name/text_ui/top_back.vue'
import { post } from '@/axios/axios'
import { mapMutations } from 'vuex'
import { openService } from '@/uitls/js/name_service'
export default {
  components: {
    TopBg,
    TopBack
  },
  data () {
    return {
      orderList: []
    }
  },
  mounted () {
    this.orderList = [JSON.parse(localStorage.getItem('personList'))]
    console.log(this.orderList)
  },
  methods: {

    ...mapMutations(['setShowTips', 'setOrderIdPerson', 'setAmountPerson']),
    openService () {
      openService()
    },
    async toDetail (item) {
      this.setOrderIdPerson(item.order_id)
      await this.getStatus(item.order_id)
    },
    async getStatus (orderid) {
      const result = await post('/name_selfmarriage/order_result', { order_id: orderid })
      console.log(result, 'result_result')
      if (result.result === 0) {
        localStorage.setItem('personDetailResult', JSON.stringify(result))
        this.$router.push('/person/order_detail')
      } else {
        this.setShowTips(result.msg)
      }
    },
    toPlay (item) {
      this.setOrderIdPerson(item.order_id)
      //   this.setAmountPerson(item.play_amount)
      this.$router.replace('/person/play')
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
        min-height: 100vh - 4.6vw;
        background: linear-gradient(180.00deg, rgb(255, 180, 186), rgb(255, 180, 187) 23.418%, rgb(255, 203, 206) 99.237%);

            .nav-all {
                background-image: url('@/assets/person/rl.png');
                width: 90vw;
                margin: 4vw auto;
                height: 45vw;
                padding: 3vw;
                background-size: 100% 100%;

                .top-box {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    border-bottom: 1px dashed #EBE7E3;
                    height: 28vw;
                    padding: 1vw 1vw  3vw 1vw;
                    text-align: start;
                    font-size: 3.4vw;
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
                        text-align: center;
                        font-size: 3.8vw;
                        font-weight: 700;
                        width: 94%;
                        border-radius:8vw;
                        height: 8.4vw;
                        background-color: #FF3D5D;

                    }

                    .txt {
                        font-size: 4vw;
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
