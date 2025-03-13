<template>
    <div class="home">
        <Tips />
        <TopBack :notback="true" />
        <div class="order-detail" @click="$router.push('/name/order')"><span class=" iconfont icon-sousuoxiao"></span> 订单查询
        </div>
        <div class="container">
            <img    class="top-bg" src="@/assets/name/bg/index_bg.png" alt="">
            <div class="transprent"></div>
            <div class="jianbian"></div>
            <div>
                <TopYear :year="'2023癸卯年'"></TopYear>
            </div>
            <div class="text-name">
            </div>
            <div class="yellow-btn">
                <YellowBtn :btnTxt="'揭晓姓名命理   助你择取吉名'"></YellowBtn>
            </div>
            <div class="txt-content">
                <TxtContent></TxtContent>
            </div>
            <div class="order-info">
                <BoxBg>
                    <template v-slot:exhibition>
                        <div class="title-label font-info-type">
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
                            付费项目：姓名测试
                        </div>
                        <div class="play-box">
                            <div class="preferential">优惠价格</div>
                            <div class="play-number"> {{ amount }} 元</div>
                            <div class="origin-number">原价： 129 元</div>
                        </div>
                        <div class="btn-box" @click="action">
                            <div class="txt" style="color: #fff;"><span class="iconfont icon-weixin"></span> 微信支付</div>
                            <div class="txx">距离恢复原价还有：{{times.shi}}：{{times.fen}}：{{ times.miao }}</div>
                            <div class="icon-box">
                                <div class="icont-img0"></div>
                                <div class="icont-img1"></div>
                            </div>
                        </div>
                        <div class="use-number bottom-text">
                            微信支付成功后，可立即查看结果！
                        </div>
                    </template>
                </BoxBg>
            </div>
            <div class="show-detail">
                <div class="kuang-box">
                    <TopDecoration :name="'你的名字测试报告'"></TopDecoration>
                    <div class="hongbao-di-bg">
                        <div class="hongbao-bg"></div>
                        <div class="tixing"></div>
                        <div class="tixing-tuwen"></div>
                        <div class="path" @click="backTop"></div>
                        <div class="youshi">老师点评及评分</div>
                    </div>
                    <div class="hongbao-di-bg">
                        <div class="hongbao-bg"></div>
                        <div class="tixing"></div>
                        <div class="tixing-tuwen"></div>
                        <div class="path" @click="backTop"></div>
                        <div class="youshi">姓名详批</div>
                    </div>
                    <div class="hongbao-di-bg">
                        <div class="hongbao-bg"></div>
                        <div class="tixing"></div>
                        <div class="tixing-tuwen"></div>
                        <div class="path" @click="backTop"></div>
                        <div class="youshi">您的人生格局</div>
                    </div>
                    <div class="hongbao-di-bg">
                        <div class="hongbao-bg"></div>
                        <div class="tixing"></div>
                        <div class="tixing-tuwen"></div>
                        <div class="path" @click="backTop"></div>
                        <div class="youshi">您的性格特征分析</div>
                    </div>
                    <div class="hongbao-di-bg">
                        <div class="hongbao-bg"></div>
                        <div class="tixing"></div>
                        <div class="tixing-tuwen"></div>
                        <div class="path" @click="backTop"></div>
                        <div class="youshi">您的健康趋势分析</div>
                    </div>
                    <div class="hongbao-di-bg">
                        <div class="hongbao-bg"></div>
                        <div class="tixing"></div>
                        <div class="tixing-tuwen"></div>
                        <div class="path" @click="backTop"></div>
                        <div class="youshi">您的事业趋势分析</div>
                    </div>
                    <div class="hongbao-di-bg">
                        <div class="hongbao-bg"></div>
                        <div class="tixing"></div>
                        <div class="tixing-tuwen"></div>
                        <div class="path" @click="backTop"></div>
                        <div class="youshi">您的婚姻趋势分析</div>
                    </div>
                </div>

            </div>
            <div class="flooters-info">
                <div class="erweima">
                    <img  v-lazy="require('@/assets/name/ewm/ewm.png')" alt="" class="img-erweima">
                </div>
                <div class="call">如需帮助，请联系客服微信：S600007S </div>
            </div>

        </div>
    </div>
</template>
<script>
import TopYear from '@/components/name/text_ui/page_top_year.vue'
import YellowBtn from '@/components/name/text_ui/yellow_btn_text.vue'
import TxtContent from '@/components/name/text_ui/red_bg_text.vue'
import BoxBg from '@/components/name/box_bg/box_bg.vue'
import TopDecoration from '@/components/name/text_ui/top_decoration.vue'
import TopBack from '@/components/name/text_ui/top_back.vue'
import { post } from '@/axios/axios'
import { mapMutations, mapState } from 'vuex'
import Tips from '@/components/name/tips/tips.vue'
export default {
  name: 'HomeView',
  components: {
    TopYear,
    YellowBtn,
    TxtContent,
    BoxBg,
    TopDecoration,
    TopBack,
    Tips
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
      nowIsPlay: false, // 正在触发支付中禁止点击支付
      times: {
        shi: '02',
        fen: '00',
        miao: '00'
      },
      timers: null
    }
  },
  computed: {
    ...mapState(['orderid', 'amount', 'wxCode'])
  },
  beforeDestroy () {
    clearInterval(this.timers)
  },
  mounted () {
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
    overTimeSetInter () {
      const that = this
      // 设置倒计时的目标时间
      const countdownDate = localStorage.getItem('overtime')
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
    // getUrlParam方法就是使用正则截取地址栏里的code
    getUrlParam (name) {
      const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
      const r = window.location.hash.substr(13).match(reg)
      if (r != null) return unescape(r[2])
      return null
    },
    get_weixin_code_login () {
      const backUrl = 'http://product.qiname.com.cn/name/play'
      const appid = 'wxf33c0e3213a40c99'
      //   window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid + '&redirect_uri=' + backUrl + '%2Foauth_response.php&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect'
      window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid + '&redirect_uri=' + backUrl + '%2Foauth_response.php&response_type=code&scope=snsapi_base&state=STATE&connect_redirect=1#wechat_redirect'
    },
    async getPlayInfo () {
      this.nowIsPlay = true
      const that = this
      setTimeout(() => {
        that.nowIsPlay = false
      }, 3000)

      const playCode = this.wxCode
      this.setWxCode('')
      const result = await post('/name_examine/test/wxpay', { orderid: this.orderid, amount: this.amount, code: playCode })
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
    action () {
      const typeDevice = this.judgePcOrAppOrWx()
      if (typeDevice === 'PC') return this.setShowTips('支付失败，请在手机上完成支付')
      const that = this
      if (this.nowIsPlay) return
      setTimeout(() => {
        that.nowIsPlay = false
      }, 3000)
      this.get_weixin_code_login()
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
            that.$router.push({ path: '/name/loading' })
          },
          fail: function (res) {
            that.nowIsPlay = false
            // 支付失败的回调
            that.setShowTips('支付失败')
          }
        })
      })
    },
    backTop () {
      let scrollTop = window.pageYOffset
      console.log(window.pageYOffset, 'scrollTop')
      const timer = setInterval(() => {
        scrollTop -= 40
        // 为负数，浏览器会不处理得
        window.scrollTo(0, scrollTop)
        if (scrollTop <= 0) {
          clearInterval(timer)
        }
      }, 10)
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

        .yellow-btn {
            margin-top: 5vw;
            position: absolute;
            width: 100%;
            z-index: 3;
        }

        .txt-content {
            margin-top: 10.5vw;
        }

        .order-info {
            display: flex;
            justify-content: center;
            margin-top: 4vw;

            .btn-box {
                margin: 2vw auto;

                background-image: linear-gradient(to bottom, rgb(144, 228, 67), rgb(51, 109, 14));
                position: relative;
                width: 70vw;
                height: 14vw;
                border-radius: 4vw;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                color: rgba(255, 255, 255, .7);
                font-weight: 400;
                box-shadow: 0 -1px 2px 1px rgba(144, 228, 67);

                .iconfont {
                    font-size: 5vw;
                    font-weight: 100;
                }

                .txt {
                    font-size: 5vw;
                    font-weight: 700;
                    scale: .9;
                }

            }

            .icon-box {
                position: absolute;
                left: -3vw;
                top: 7.6vw;
                display: flex;
                width: 76vw;
                justify-content: space-between;

                .icont-img0 {
                    width: 11.4vw;
                    height: 7vw;
                    background-image: url('@/assets/name/icon_img/left.png');
                    background-size: contain;
                }

                .icont-img1 {
                    width: 11.4vw;
                    height: 7vw;
                    background-image: url('@/assets/name/icon_img/right.png');
                    background-size: contain;
                }
            }

            .title-label {
                margin: 6vw 0 3vw 0;
            }

            .play-box {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin: 0 auto;
                width: 76vw;
                height: 47vw;
                background-size: contain;
                background-image: url('@/assets/name/bg/huajuan.png');

                .preferential {
                    font-size: 4.6vw;

                }

                .play-number {
                    color: #F13E2D;
                    font-size: 8vw;
                    font-weight: 700;
                    margin: 2vw 0;
                }

                .origin-number {
                    font-size: 4.6vw;
                    color: #B6B3B2;
                    text-decoration: line-through;
                }
            }

            .sub-test {
                margin-top: 2vw;
            }

            .use-number {}
        }

        .show-detail {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            background-color: #FDF1DA;
            width: 92vw;
            margin: 8vw auto 0 auto;
            border-radius: 1.2vw;

            .kuang-box {
                margin: 10px;
                padding-bottom: 2vw;
            }

            .hongbao-di-bg {
                position: relative;
                width: 80vw;
                height: 33vw;
                background-color: #D9403C;
                margin-top: 5vw;
                border-radius: 1.2vw;
                display: flex;
                justify-content: center;
                align-items: center;

                .youshi {
                    position: absolute;
                    top: 21vw;
                    font-size: 4vw;
                    color: #F3CE93;
                }

                .hongbao-bg {
                    width: 78.6vw;
                    height: 31vw;
                    background-color: #D9403C;
                    // border: 1px solid  rgba(245, 208, 141, .4);
                    // border-radius: 1.2vw;
                    background-image: url('@/assets/name/bg/tuwen.png');
                    opacity: .3;
                    background-size: contain;
                }

                .tixing {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 80vw;
                    height: 17vw;
                    background-image: url('@/assets/name/bg/tixing.png');
                    background-size: cover;

                }

                .tixing-tuwen {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 80vw;
                    height: 15vw;
                    background-image: url('@/assets/name/bg/tixing_tuwen.png');
                    opacity: .4;
                    background-size: cover;

                }

                .path {
                    position: absolute;
                    top: 46%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 10;
                    width: 10vw;
                    height: 10vw;
                    background-image: url('@/assets/name/icon_img/paths.png');
                    background-size: contain;
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
