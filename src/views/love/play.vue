
<template>
    <div class="home">
        <Tips />
        <div class="order-detail" @click="$router.push('/love/check_order')"><span class=" iconfont icon-sousuoxiao"></span>
            订单查询
        </div>
        <div class="zixun-detail" @click="openService"><span class=" iconfont icon-kefu1"
                style="font-size:8vw;color:#d1420a; font-weight: 100; text-shadow:  1px 1px rgba(0, 0, 0, 0.5);"></span>
            在线客服
        </div>
        <div class="container">
            <div class="bottom-bg">
            </div>
            <TopBg />
            <div class="order-info" style="margin-top:106vw;">
                <BoxBg>
                    <template v-slot:exhibition>
                        <!-- <div>
                {{playData.timestamp||'空'}}打印
            </div>
            <div>
                {{playData.nonceStr||'空'}}打印
            </div>
            <div>
                {{playData.package||'空'}}打印
            </div>
            <div>
                {{playData.signType||'空'}}打印
            </div>
            <div>
                {{playData.paySign||'空'}}打印
            </div>
            <div>
                {{playData.signature||'空'}}打印
            </div>
            <div>
                {{playData.jsApiList||'空'}}打印
            </div> -->
                        <div class="title-label">
                            付费项目：八字合婚
                        </div>
                        <div class="play-box">
                            <div class="preferential">优惠价格</div>
                            <div class="play-number"> {{ amountLove }} 元</div>
                            <div class="origin-number">原价： {{ originalAmountLove }} 元</div>
                        </div>

                    </template>
                </BoxBg>

            </div>
            <div class="btn-box" @click="action">
                <div class="txt" style="color: #fff;"><span class="iconfont icon-weixin"></span> 微信支付</div>
                <div class="txx">距离恢复原价还有：{{ times.shi }}：{{ times.fen }}：{{ times.miao }}</div>
                <div class="icon-box">
                    <div class="icont-img0"></div>
                    <div class="icont-img1"></div>
                </div>
            </div>
            <div class="use-number ">
                微信支付成功后，可立即查看结果！
            </div>
            <div class="play-over">
                支付后你将获得以下内容
            </div>
            <div class="order-info">
                <BoxBg>
                    <template v-slot:exhibition>
                        <TopDecoration :name="'合婚报告内容介绍'"></TopDecoration>
                        <div class="top-small-title">因每个人出生八字不同，合婚结果也不相同老师针对你们的八字合盘，<span
                                style="color:rgb(170, 42, 44);">全面鉴定婚姻走向。</span> </div>
                        <SubHead :subName="'两人合婚配对指数'">
                            <template v-slot:content>
                                <SmallSuo :list="1">
                                    <template v-slot:suo>
                                        <div>你们的最终合婚指数:?</div>
                                        <div>你们的婚姻属于:?</div>
                                        <div>你们的最终合婚解析:?</div>
                                    </template>
                                </SmallSuo>
                            </template>
                        </SubHead>
                        <SubHead :subName="'八字适配度'">
                            <template v-slot:content>
                                <SmallSuo>
                                    <template v-slot:suo>
                                        <div>你们的生辰八字相合吗？</div>
                                    </template>
                                </SmallSuo>
                            </template>
                        </SubHead>
                        <SubHead :subName="'五行适配度分析'">
                            <template v-slot:content>
                                <SmallSuo>
                                    <template v-slot:suo>
                                        <div>你们的五行相合吗？</div>
                                    </template>
                                </SmallSuo>
                            </template>
                        </SubHead>
                        <SubHead :subName="'生肖适配度分析'">
                            <template v-slot:content>
                                <SmallSuo>
                                    <template v-slot:suo>
                                        <div>你们的生肖相合吗？</div>
                                    </template>
                                </SmallSuo>
                            </template>
                        </SubHead>
                        <SubHead :subName="'婚姻宫适配度分析'">
                            <template v-slot:content>
                                <SmallSuo>
                                    <template v-slot:suo>
                                        <div>你们的婚姻宫相合吗？</div>
                                    </template>
                                </SmallSuo>
                            </template>
                        </SubHead>
                        <SubHead :subName="'格局运势适配度分析'">
                            <template v-slot:content>
                                <SmallSuo>
                                    <template v-slot:suo>
                                        <div>你们的格局运势相合吗？</div>
                                    </template>
                                </SmallSuo>
                            </template>
                        </SubHead>
                        <SubHead :subName="'两人旺夫旺妻分析'">
                            <template v-slot:content>
                                <SmallSuo>
                                    <template v-slot:suo>
                                        <div>你们两人的旺夫旺妻程度？</div>
                                    </template>
                                </SmallSuo>
                            </template>
                        </SubHead>
                        <SubHead :subName="'2023年婚姻家居布局指南'">
                            <template v-slot:content>
                                <SmallSuo>
                                    <template v-slot:suo>
                                        <div>专属于你们的家居布局指南</div>
                                    </template>
                                </SmallSuo>
                            </template>
                        </SubHead>
                        <SubHead :subName="'您的2023年结婚黄道吉日'">
                            <template v-slot:content>
                                <SmallSuo>
                                    <template v-slot:suo>
                                        <div>专属于你们的2023年结婚黄道吉日</div>
                                    </template>
                                </SmallSuo>
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
import { mapState, mapMutations } from 'vuex'
import TopDecoration from '@/components/love/text_ui/top_decoration.vue'
import SubHead from '@/components/love/bg/subhead_bg.vue'
import SmallSuo from '@/components/love/bg/small_suo.vue'
import { post } from '@/axios/axios'
import { openService } from '@/uitls/js/name_service'
export default {
  name: 'HomeView',
  components: {
    TopBg,
    BoxBg,
    Tips,
    TopDecoration,
    SubHead,
    SmallSuo
  },
  data () {
    return {
      playData: {
        timestamp: '',
        nonceStr: '',
        package: '',
        signType: '',
        paySign: '',
        signature: '',
        jsApiList: ['chooseWXPay']
      },
      originalAmountLove: 0,
      amountLove: 0,
      orderidLove: '',
      times: {
        shi: '02',
        fen: '00',
        miao: '00'
      },
      timers: null,
      nowIsPlay: false
    }
  },
  computed: {
    ...mapState(['wxCode'])
  },
  beforeDestroy () {
    clearInterval(this.timers)
  },
  async mounted () {
    this.originalAmountLove = localStorage.getItem('originalAmountLove')
    this.amountLove = localStorage.getItem('amountLove')
    this.orderidLove = localStorage.getItem('orderidLove')
    this.overTimeSetInter()

    // 兼容调整
    const code = this.getUrlParam('code') // 截取url中的code
    if (code) {
      if (code) {
        this.setWxCode(code)
      }
    }
    console.log(code, 'codesss')
    if (this.wxCode) {
      this.getPlayInfo()
    }
  },
  methods: {
    ...mapMutations(['setShowTips', 'setWxCode']),
    // 判断 移动环境 PC环境 微信环境
    judgePcOrAppOrWx () {
      let environment
      let flag = true
      const userAgentInfo = navigator.userAgent
      const userAgentInfoLower = navigator.userAgent.toLowerCase()

      const agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
      for (let i = 0; i < agents.length; i++) {
        if (userAgentInfo.indexOf(agents[i]) > -1) {
          flag = false
          break
        }
      }

      if (flag === true) {
        environment = 'PC'
      } else if (userAgentInfoLower.match(/MicroMessenger/i) !== 'micromessenger') {
        environment = 'APP'
      } else {
        environment = 'WX'
      }
      return environment
    },
    openService () {
      openService()
    },
    // getUrlParam方法就是使用正则截取地址栏里的code
    getUrlParam (name) {
      const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
      const r = window.location.hash.substr(13).match(reg)
      if (r != null) return unescape(r[2])
      return null
    },
    async action () {
      const typeDevice = this.judgePcOrAppOrWx()
      if (typeDevice === 'PC') return this.setShowTips('支付失败，请在手机上完成支付')
      if (this.nowIsPlay) return
      const that = this
      setTimeout(() => {
        that.nowIsPlay = false
      }, 3000)
      this.get_weixin_code_login()
      //   this.$router.push('/love/loading')
    },
    overTimeSetInter () {
      const that = this
      // 设置倒计时的目标时间
      const countdownDate = localStorage.getItem('overtimeLove')
      // 每一秒更新倒计时
      this.timers = setInterval(function () {
        // 获取当前时间
        const now = new Date().getTime()
        // 计算剩余时间
        const distance = countdownDate - now
        if (distance > 0) {
          // 计算倒计时的小时、分钟和秒数
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) > 10 ? that.times.shi = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) : that.times.shi = '0' + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) > 10 ? that.times.fen = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) : that.times.fen = '0' + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
          Math.floor((distance % (1000 * 60)) / 1000) > 10 ? that.times.miao = Math.floor((distance % (1000 * 60)) / 1000) : that.times.miao = '0' + Math.floor((distance % (1000 * 60)) / 1000)
        } else {
          this.times = {
            shi: '00',
            fen: '00',
            miao: '00'
          }
        }
        // 当倒计时结束时，清除计时器
        if (distance < 0) {
          clearInterval(that.timers)
          console.log('倒计时结束！')
        }
      }, 1000)
    },
    async getPlayInfo () {
      this.nowIsPlay = true
      const that = this
      setTimeout(() => {
        that.nowIsPlay = false
      }, 3000)
      const playCode = this.wxCode
      this.setWxCode('')
      const result = await post('/name_hehun/hhorder/wxpay', { orderid: this.orderidLove, amount: this.amountLove, code: playCode })
      if (result.errMsg) {
        this.nowIsPlay = false
        this.setShowTips('支付失败，请重新尝试')
      } else if (result.message) {
        this.nowIsPlay = false
        this.setShowTips(result.message)
      } else {
        this.playData.timestamp = result.timeStamp
        this.playData.nonceStr = result.nonceStr
        this.playData.package = result.package
        this.playData.signType = result.signType
        this.playData.paySign = result.paySign
        this.playData.signature = result.paySign
        this.toPlay()
      }
    },
    toPlay () {
      const that = this
      this.$wx.config({
        debug: false,
        appId: 'wxf33c0e3213a40c99',
        timestamp: this.playData.timestamp,
        nonceStr: this.playData.nonceStr,
        signature: this.playData.signature,
        jsApiList: this.playData.jsApiList
      })
      this.$wx.ready(() => {
        // 微信支付配置完成后，调用支付函数
        this.$wx.chooseWXPay({
          timestamp: this.playData.timestamp,
          nonceStr: this.playData.nonceStr,
          package: this.playData.package,
          signType: this.playData.signType,
          paySign: this.playData.paySign,
          success: function (res) {
            that.nowIsPlay = false
            that.setWxCode('')
            // 支付成功的回调
            console.log(res, '支付结果')
            that.$router.push({ path: '/love/loading' })
          },
          fail: function (res) {
            that.nowIsPlay = false
            // 支付失败的回调
            this.setShowTips('支付失败')
          }
        })
      })
    },
    get_weixin_code_login () {
      const backUrl = 'http://product.qiname.com.cn/love/play'
      const appid = 'wxf33c0e3213a40c99'
      //   window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid + '&redirect_uri=' + backUrl + '%2Foauth_response.php&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect'
      window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid + '&redirect_uri=' + backUrl + '%2Foauth_response.php&response_type=code&scope=snsapi_base&state=STATE&connect_redirect=1#wechat_redirect'
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

            .title-label {
                line-height: 16vw;
                font-size: 5.2vw;
                font-weight: 700;
                margin: 3vw 0 0vw 0;
            }

            .play-box {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin: 0 auto;
                width: 72vw;
                height: 45vw;
                background-size: contain;
                background-image: url('@/assets/name/bg/huajuan.png');

                // background-repeat: no-repeat;
                .preferential {
                    font-size: 4.4vw;

                }

                .play-number {
                    color: #F13E2D;
                    font-size: 8vw;
                    font-weight: 700;
                    margin: 2vw 0;
                    line-height: 10vw;
                }

                .origin-number {
                    font-size: 4.6vw;
                    color: #B6B3B2;
                    text-decoration: line-through;
                }
            }

        }

        .play-over {
            background-image: url('@/assets/love/other/pl.png');
            background-size: 100%;
            width: 82vw;
            height: 16vw;
            margin: 0 auto;
            line-height: 16vw;
            text-align: center;
            color: #fff;
            font-size: 5.4vw;
        }

        .btn-box {
            margin: 6vw auto 2vw auto;
            background-image: linear-gradient(to bottom, rgb(144, 228, 67), rgb(51, 109, 14));
            position: relative;
            width: 62vw;
            height: 12vw;
            border-radius: 3vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: rgba(255, 255, 255, .7);
            font-weight: 400;
            box-shadow: 0 -1px 2px 1px rgba(144, 228, 67);

            .iconfont {
                font-size: 4.2vw;
                font-weight: 100;
                line-height: 5vw;
            }

            .txt {
                font-size: 4.2vw;
                font-weight: 700;
                scale: .9;
                line-height: 5vw;
            }

            .txx {
                font-size: 3.4vw;
            }

        }

        .use-number {
            color: rgb(156, 70, 9, .8);
            font-size: 4vw;
            margin: 4vw 0;
            text-align: center;
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
}
</style>
