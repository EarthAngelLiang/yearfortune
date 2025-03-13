<template>
    <div class="home">
        <Tips />
        <div class="zixun-detail" @click="openService"><span class=" iconfont icon-kefu1"
                style="font-size:8vw;color:#d1420a; font-weight: 100; text-shadow:  1px 1px rgba(0, 0, 0, 0.5);"></span>
            在线客服
        </div>
        <div class="container">
            <TopBg />
            <img v-lazy="require('@/assets/baby/c1.png')" alt="" class="baby_play_title">
            <div v-show="!resultShow">
                <div class="info-box">
                    <div class="input-info">
                        <div class="iconfont label icon-sousuoxiao" style="font-size:4vw"></div>
                        <input type="text" v-model="orderid" class="info " placeholder="请输入手机号码或订单号码">
                    </div>
                </div>
                <div class="baby_result" @click="getCheckOrder">查询</div>

            </div>
            <BoxBg  v-show="!resultShow" style="padding-bottom: 3vw;">
                <template v-slot:exhibition>
                    <TopDecoration :name="'忘记或找不到订单号'"></TopDecoration>
                    <SubHead :subName="'微信支付用户'">
                        <template v-slot:content>
                            <img   v-lazy="require('@/assets/name/ewm/wxcx.png')" alt="" class="wxcx">
                        </template>
                    </SubHead>

                </template>
            </BoxBg>

            <BoxBg v-show="resultShow">
                <template v-slot:exhibition>
                    <div class="nav_play">
                        <TopDecoration :name="'测算结果'"></TopDecoration>
                        <div class="baby_checks">

                            <div class="baby_checks_li">感谢亲对我们的肯定，这是您的订单信息</div>
                            <div class="baby_checks_li">服务内容: 在线付费-宝宝潜能挖掘</div>
                            <div class="baby_checks_li">订单号: {{ orderCheck.order_id }}</div>
                            <div class="baby_checks_li">支付日期: {{ dateArr }}</div>
                            <div class="baby_checks_li">宝宝姓名:{{ orderCheck.name }}</div>
                        </div>
                        <div class="baby_status_result" @click="getStatus">查看测算结果</div>
                    </div>
                </template>
            </BoxBg>
            <div class="flooters-info">
                <div class="erweima">
                    <img v-lazy="require('@/assets/name/ewm/ewm.png')" alt="" class="img-erweima">
                </div>
                <div class="call" style="margin-bottom:0;">温馨提示：找不到订单或其他原因</div>
                <div class="call" style="margin-top:1vw;">请联系客服微信：S600007S</div>
            </div>
        </div>
    </div>
</template>
<script>
import Tips from '@/components/name/tips/tips.vue'
import TopBg from '@/components/baby/other_top_bg.vue'
import SubHead from '@/components/love/bg/subhead_bg.vue'
import { openService } from '@/uitls/js/name_service'
import BoxBg from '@/components/baby/box_bg.vue'
import TopDecoration from '@/components/baby/top_decoration.vue'
import { mapState, mapMutations } from 'vuex'
import { post } from '@/axios/axios'

export default {
  name: 'HomeView',
  components: { Tips, TopBg, BoxBg, TopDecoration, SubHead },
  data () {
    return {
      resultShow: false,
      orderid: '',
      orderCheck: {
        birthday: '',
        calender: '',
        gender: '',
        name: '',
        order_id: '',
        pay_time: '',
        phone: '',
        status: '',
        sx_hour: ''
      },
      dateArr: ''
    }
  },
  computed: {
    ...mapState(['orderidBaby'])
  },
  methods: {
    ...mapMutations(['setShowTips', 'setOrderIdBaby']),
    openService () {
      openService()
    },

    async getCheckOrder () {
      if (this.orderid === '') return this.setShowTips('订单号或手机号码不能为空，')
      if (this.orderid.length < 11) return this.setShowTips('订单号或输入手机号不合法')

      const params = {}
      this.orderid.length === 11 ? params.phone = this.orderid : params.order_id = this.orderid
      const result = await post('/baobao_potency/select_orderid', params)
      if (result.result === 0) {
        console.log(result, 'result_result')
        this.orderCheck = result.data[0]
        this.dateArr = result.data[0].pay_time.replace('-', '年').replace('-', '月').replace('T', '日')
        this.resultShow = true
        this.setOrderIdBaby(result.data[0].order_id)
        console.log(this.orderCheck)
      } else {
        this.setShowTips(result.errMsg)
      }
    },
    async getStatus () {
      const result = await post('/baobao_potency/order_result', { order_id: this.orderidBaby })
      if (result.result === 0) {
        localStorage.setItem('babyDetailResult', JSON.stringify(result))
        console.log(result, '详情')
        this.$router.push({ path: '/baby/baby_detail' })
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
        min-height: 100vh;
        background: rgb(149, 209, 244);
        .wxcx {
                width: 70vw;
                margin: 8vw 0 4vw 0;
                height: 82vw;
            }
        .baby_play_title {
            width: 62vw;
            display: block;
            margin: 7vw auto 10vw auto;
        }

        .baby_result {
            background: linear-gradient(180.00deg, rgba(255, 255, 255, 0.2), rgba(247, 3, 3, 0.2) 100%), linear-gradient(180.00deg, rgba(247, 3, 3, 0.2) 10.687%, rgba(243, 5, 5, 0) 100%), rgb(248, 186, 186);
            width: 34vw;
            text-align: center;
            color: #fff;
            margin: 8vw auto;
            line-height: 11vw;
            border-radius: 3vw;
            font-size: 4.4vw;
        }

        .info-box {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;

            .input-info {
                display: flex;
                align-items: center;
                width: 70%;
                background-color: #fff;
                border: 1px solid rgb(204, 204, 204);
                border-radius: 2vw;
                padding-left: 3vw;
                line-height: 10vw;
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

        .nav_play {
            padding: 0 4vw;
            padding-bottom: 3vw;
            text-align: start;
            line-height: 7vw;

            .baby_checks {
                margin: 8vw 0;
                line-height: 8vw;
                padding: 4vw;
                border-radius: 4vw;
                border: 1px solid rgb(186, 186, 186);
            }

            .baby_status_result {
                width: 56vw;
                background: linear-gradient(180.00deg, rgba(255, 255, 255, 0.2), rgba(247, 3, 3, 0.2) 100%), linear-gradient(180.00deg, rgba(247, 3, 3, 0.2) 10.687%, rgba(243, 5, 5, 0) 100%), rgb(248, 186, 186);
                text-align: center;
                color: #fff;
                border-radius: 3vw;
                font-size: 4.2vw;
                line-height: 10vw;
                margin: 3vw auto;
            }

        }

    }

    .flooters-info {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-top: 14vw;

        .erweima {
            background: rgb(56, 171, 227);
            padding: .6vw;
            border-radius: 1vw;

            .img-erweima {
                display: block;
                padding: .6vw;
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
</style>
