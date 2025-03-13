<template>
    <div class="home">
        <Tips />
        <div class="order-detail" @click="$router.push('/baby/check_order')"><span
                class=" iconfont icon-sousuoxiao"></span>
            订单查询
        </div>
        <div class="zixun-detail" @click="openService"><span class=" iconfont icon-kefu1"
                style="font-size:8vw;color:#d1420a; font-weight: 100; text-shadow:  1px 1px rgba(0, 0, 0, 0.5);"></span>
            在线客服
        </div>
        <div class="container">
            <TopBg />
            <img  v-lazy="require('@/assets/baby/c1.png')" alt="" class="baby_play_title">
            <div class="baby_order_in">
                <div class="order_info">订单号: {{orderidBaby}}</div>
                <div class="order_info">2023-09-08 10:22:23</div>
                <div class="order_info">订单状态:已支付</div>
            </div>
            <BoxBg>
                <template v-slot:exhibition>
                    <div class="nav_play">
                        <TopDecoration :name="'将结果发送至手机'"></TopDecoration>
                        <div v-show="!sendInfo">
                            <div class="baby_status_title">请验证您的手机号码，我们会将结果内容，通过短信的形式发送到您的手机</div>
                            <input type="text" placeholder="手机号码" class="baby_phone">
                            <div class="baby_yzm_box">

                                <input type="text" placeholder="验证码" class="baby_yzm">
                                <div class="baby_yzm_btn">获取验证码</div>
                            </div>
                            <div class="baby_status_txt">结果短信仅发送1次，请谨慎填写</div>
                            <div class="baby_status_result" @click="sendInfo = true">发送结果</div>
                        </div>
                        <div style="text-align:center;" v-show="sendInfo">
                            <div class="iconfont icon-kefu1"></div>
                            <div class="baby_success_txt">结果内容已发送至手机号码</div>
                                <div class="baby_success_phone">133 4444 3333</div>
                                <div class="baby_success_txt">如果接收不到短信，请联系客服咨询</div>
                                <div class="baby_success_txt">客服微信: 131566787</div>
                                <div class="baby_success_txt" style="margin-bottom:3vw;">你可以关注公众号，输入手机号码进行查询</div>
                        </div>

                    </div>
                </template>
            </BoxBg>
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
import Tips from '@/components/name/tips/tips.vue'
import TopBg from '@/components/baby/other_top_bg.vue'
import { openService } from '@/uitls/js/name_service'
import BoxBg from '@/components/baby/box_bg.vue'
import TopDecoration from '@/components/baby/top_decoration.vue'
// import { post } from '@/axios/axios'
import { mapState } from 'vuex'
export default {
  name: 'HomeView',
  components: { Tips, TopBg, BoxBg, TopDecoration },
  data () {
    return {
      sendInfo: false,
      sendParams: {
        order_id: '',
        phone: '',
        is_send: 1
      }
    }
  },
  computed: {
    ...mapState(['orderidBaby'])
  },
  mounted () {

  },
  methods: {
    openService () {
      openService()
    }
    // async  sendLetter () {
    //   const result = await post('/baobao_potency/send_sms', this.sendParams)
    // }

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
        min-height: 100vh;
        background: rgb(149, 209, 244);

        .baby_play_title {
            width: 62vw;
            display: block;
            margin: 7vw auto 6vw auto;
        }

        .baby_order_in {
            width: 84vw;
            background-color: #0D95CD;
            margin: 0 auto;
            border-radius: 4vw;
            padding: 2.4vw 3vw 2.4vw 10vw;
            color: #fff;
            margin-bottom: 10vw;

            .order_info {
                line-height: 6.4vw;
            }
        }

        .nav_play {
            padding: 0 4vw;
            padding-bottom: 3vw;
            text-align: start;
            line-height: 7vw;

            .baby_status_title {
                padding-top: 6vw;
                font-size: 4.2vw;
            }

            .baby_phone {
                margin-top: 3.4vw;
                background-color: transparent;
                border: 1px solid rgb(194, 194, 194);
                border-radius: 1vw;
                width: 100%;
                line-height: 9vw;
                padding-left: 4vw;
            }

            .baby_yzm_box {
                display: flex;
                justify-content: space-between;
                align-items: center;
                .baby_yzm {
                    margin-top: 5vw;
                    background-color: transparent;
                    border: 1px solid rgb(194, 194, 194);
                    border-radius: 1vw;
                    width: 46%;
                    line-height: 9vw;
                    padding-left: 4vw;
                }
                .baby_yzm_btn{
                    margin-top: 5vw;
                    border-radius: 1vw;
                    width: 36%;
                    line-height: 9vw;
                    height: 9vw;
                    background-color: #0D95CD;
                    text-align: center;
                    color:#fff;
                    margin-right: 5vw;
                }

            }
            .baby_status_result{
                    width: 56vw;
                    background: linear-gradient(180.00deg, rgba(255, 255, 255, 0.2),rgba(247, 3, 3, 0.2) 100%),linear-gradient(180.00deg, rgba(247, 3, 3, 0.2) 10.687%,rgba(243, 5, 5, 0) 100%),rgb(248, 186, 186);
                    text-align: center;
                    color: #fff;
                    border-radius: 3vw;
                    font-size: 4.2vw;
                    line-height: 10vw;
                    margin:3vw auto ;
                }
            .baby_status_txt{
                font-size: 3.6vw;
                text-align: center;
                margin: 4vw 0;
            }
            .iconfont{
                margin: 6vw 0 4vw 0;
                line-height: 20vw;
                font-size: 20vw;
                color: #28B149;
            }
            .baby_success_phone{
                font-weight: 700;
                font-size: 4.6vw;
            }
            .baby_success_txt{
                font-size: 4vw;
                line-height: 8.6vw;
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
}</style>
