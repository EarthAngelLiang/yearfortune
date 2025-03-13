<template>
    <div class="home">
        <Tips />
        <TopBack :notback="true"/>
        <div class="zixun-detail" @click="openService"><span class=" iconfont icon-kefu1" style="font-size:8vw;color:#d1420a; font-weight: 100; text-shadow:  1px 1px rgba(0, 0, 0, 0.5);"></span> 在线客服</div>
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
                        <div class="title-label font-info-type">
                            订单查询
                        </div>
                        <div class="info-box">
                            <div class="input-info">
                                <div class="iconfont label icon-sousuoxiao" style="font-size:5vw"></div>
                                <input type="text" class="info " v-model="order_id" placeholder="请输入手机号码或订单号码">
                            </div>
                        </div>
                        <div class="sub-test">
                            <BtnAction @action="action" :name="'查询'"></BtnAction>
                        </div>
                        <div class="use-number bottom-text"> 温馨提示：找不到订单或其他原因请联系客服微信：S600007S5</div>
                    </template>
                </BoxBg>
            </div>
            <div class="show-detail">
                <BoxBg>
                    <template v-slot:exhibition>
                        <TopDecoration :name="'忘记或找不到订单号？'"></TopDecoration>
                        <div class="nav-box">
                            <NavText :name="'微信支付用户'"></NavText>
                        </div>
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
import { mapMutations } from 'vuex'
import TopBack from '@/components/name/text_ui/top_back.vue'
import TopYear from '@/components/name/text_ui/page_top_year.vue'
import BoxBg from '@/components/name/box_bg/box_bg.vue'
import TopDecoration from '@/components/name/text_ui/top_decoration.vue'
import BtnAction from '@/components/name/text_ui/sub_btn.vue'
import NavText from '@/components/name/text_ui/nav_text.vue'
import { openService } from '@/uitls/js/name_service'
export default {
  name: 'HomeView',
  components: {
    TopYear,
    BoxBg,
    TopDecoration,
    BtnAction,
    NavText,
    TopBack,
    Tips
  },
  data () {
    return {
      order_id: ''
    }
  },
  methods: {
    ...mapMutations(['setShowTips']),
    openService () {
      openService()
    },
    action () {
      if (!this.order_id) return this.setShowTips('请输入查询的订单号')
      this.$router.push({ path: '/name/order_result', query: { order_id: this.order_id } })
    }
  }
}
</script>
<style lang="less" scoped>
.home {
    background-color: #fff;
    position: relative;
    width: 100vw;
    margin-top: 10vw;
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
        .jianbian{
        position: absolute;
        top: 190vw;
        left: 0;
        width: 100%;
        height: calc(100% - 190vw);
        background-image: linear-gradient(to bottom , rgba(212,195,153,.2),rgba(212,195,153,1));
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
                    width: 90%;
                    background-color: #fff;
                    border: 2px solid #FADA91;
                    border-radius: 1vw;
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

            .sub-test {
                margin-top: 3vw;
                display: flex;
                justify-content: center;
            }

            .use-number {
                width: 50vw;
                margin: 4vw auto;
            }

        }

        .show-detail {
            display: flex;
            justify-content: center;
            flex-direction: column;
            margin-top: 8vw;
            align-items: center;

            .nav-box {
                display: flex;
                justify-content: center;
                margin-top: 4vw;
            }

            .wxcx {
                width: 80vw;
                margin: 3vw 0;
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
