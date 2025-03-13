<template>
    <div class="home">
        <Tips />
        <div class="zixun-detail"  @click="openService"><span class=" iconfont icon-kefu1"
                style="font-size:8vw;color:#d1420a; font-weight: 100; text-shadow:  1px 1px rgba(0, 0, 0, 0.5);"></span>
            在线客服
        </div>
        <div class="container">
            <TopBg />
            <div class="order-info" style="margin-top: 7vw;">
                <BoxBg>
                    <template v-slot:exhibition>
                        <div class="title-label font-info-type"  >
                            订单查询
                        </div>
                        <div class="info-box">
                            <div class="input-info">
                                <div class="iconfont label icon-sousuoxiao" style="font-size:5vw"></div>
                                <input type="text" class="info " v-model="order_id" placeholder="请输入手机号码或订单号码">
                            </div>
                        </div>
                        <div class="now-test">
                            <div class="test-btn" @click="action">查询</div>
                        </div>
                        <div class="use-number bottom-text"> 温馨提示：找不到订单或其他原因请联系客服微信：S600007S5</div>
                    </template>
                </BoxBg>
            </div>
            <div class="guajian-box">
                <div class="guajian">
                    <div class="quan"></div>
                    <div class="baitao"></div>
                    <div class="quan"></div>
                </div>
                <div class="guajian">
                    <div class="quan"></div>
                    <div class="baitao"></div>
                    <div class="quan"></div>
                </div>
            </div>
            <div class="order-info" style="margin-top: 2vw;">
                <BoxBg>
                    <template v-slot:exhibition>
                        <div class="center-line">
                            <div class="lines"></div>
                            <div class="txts">微信用户</div>
                            <div class="lines"></div>
                        </div>
                        <div class="use-number bottom-text" style="margin:1vw auto"> 忘记或找不到订单号？ </div>
                        <img  v-lazy="require('@/assets/name/ewm/wxcx.png')" alt="" class="wxcx">
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
import Tips from '@/components/name/tips/tips.vue'
import TopBg from '@/components/person/top_bg.vue'
import BoxBg from '@/components/person/box_bg.vue'
import { post } from '@/axios/axios.js'
import { mapMutations } from 'vuex'
import { openService } from '@/uitls/js/name_service'
export default {
  name: 'HomeView',
  components: { Tips, TopBg, BoxBg },
  data () {
    return {
      order_id: ''
    }
  },
  watch: {
  },
  async mounted () {
  },
  methods: {
    ...mapMutations(['setShowTips']),
    openService () {
      openService()
    },
    action () {
      if (!this.order_id) return this.setShowTips('请输入查询的订单号')
      this.getOrderList()
    //   this.$router.push({ path: '/person/order_list', query: { order_id: this.order_id } })
    },
    async getOrderList () {
      const result = await post('/name_selfmarriage/select_orderid', { order_id: this.order_id })
      console.log(result, 'resultresult')
      if (result.result === 0) {
        this.orderList = result.data
        localStorage.setItem('personList', JSON.stringify(result.data))
        this.$router.push({ path: '/person/order_list' })
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
        // justify-content: center;
        text-align: center;

        flex-direction: column;

        .iconfont {
            margin-bottom: .5vw;
        }
    }

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
        background: linear-gradient(180.00deg, rgb(255, 180, 186), rgb(255, 180, 187) 23.418%, rgb(255, 203, 206) 99.237%);

        .guajian-box {
            position: absolute;
            top: 106vw;
            display: flex;
            justify-content: space-between;
            width: 80vw;
            left: 50%;
            transform: translate(-50%, 0);
            z-index: 1;

            .guajian {
                display: flex;
                flex-direction: column;
                align-items: center;
                align-content: center;

                .baitao {
                    width: 3vw;
                    height: 12vw;
                    background-color: #fff;
                    border-radius: 8vw;
                    margin: -3vw 0;
                    z-index: 1;
                    margin-left: .1vw;
                }

                .quan {
                    width: 4vw;
                    height: 4vw;
                    border-radius: 8vw;
                    border: .5vw solid rgb(254, 166, 113);
                    background-color: rgb(255, 221, 220);
                }
            }
        }

        .order-info {
            .title-label {
                margin: 4vw 0;
            }

            .info-box {
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;

                .input-info {
                    display: flex;
                    align-items: center;
                    width: 94%;
                    background-color: #fff;
                    border: 2px solid #FEB8AA;
                    border-radius: 1vw;
                    line-height: 9vw;
                    margin-bottom: 3vw;

                    .label {
                        width: 10vw;
                        font-weight: 700;
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
                    line-height: 9vw;
                    text-align: center;
                    border-radius: 8vw;
                    width: 94%;
                    background-color: #FF3D5D;
                    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.5);
                    color: #fff;
                    font-size: 4.4vw;
                }
            }

            .use-number {
                width: 50vw;
                margin: 4vw auto;
            }

            .center-line {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 6vw;
                color: #FF3D5D;
                font-size: 4.8vw;

                .txts {
                    margin: 0 2vw;
                    font-weight: 700;
                }

                .lines {
                    width: 10vw;
                    height: 1px;
                    background-color: #FF3D5D;
                }
            }

            .wxcx {
                width: 80vw;
                margin: 3vw 0;
            }
        }
    }

    .flooters-info {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-top: 4vw;

        .erweima {
            background-color: rgb(238, 195, 202);
            padding: 1.5vw;
            border-radius: 1vw;

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
