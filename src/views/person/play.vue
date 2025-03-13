<template>
    <div class="home">
        <Tips />
        <div class="order-detail" @click="$router.push('/person/order_check')"><span class=" iconfont icon-sousuoxiao"></span>
            订单查询
        </div>
        <div class="zixun-detail"   @click="openService"><span class=" iconfont icon-kefu1"
                style="font-size:8vw;color:#d1420a; font-weight: 100; text-shadow:  1px 1px rgba(0, 0, 0, 0.5);"></span>
            在线客服
        </div>
        <div class="container">
            <TopBg />
            <div class="order-info" style="margin-top: 44vw;">
                <BoxBg>
                    <template v-slot:exhibition>
                        <TopDecoration :name="'测试项目：姻缘分析'"></TopDecoration>
                        <div class="prices-box">
                            <div class="left">
                                <div class="nowprice">
                                    <span>优惠价格：</span>
                                    <span style="color:#F13E2D;font-size:4.5vw;font-weight:700;">{{amountPerson}} 元</span>
                                </div>
                                <div class="originprice" style="color:#A5A2A1;text-decoration:line-through">原价：129元</div>
                            </div>
                            <div class="rights">
                                <div class="originprice"  >距离优惠原价还有</div>
                                <div class="originprice" >{{times.shi}}：{{times.fen}}：{{ times.miao }}</div>
                            </div>
                        </div>
                        <div class="btn-box" @click="action">
                            <div class="txt" style="color: #fff;"><span class="iconfont icon-weixin"></span> 微信支付</div>
                        </div>
                        <div class="use-number bottom-text" style="margin:2vw auto ">
                            微信支付成功后，可立即查看结果！
                        </div>
                    </template>
                </BoxBg>
            </div>
            <div class="center-line">
                <div class="lines"></div>
                <div class="txts">支付后你将获得已选内容</div>
                <div class="lines"></div>
            </div>
            <div class="order-info" style="margin-top: 4vw;">
                <BoxBg>
                    <template v-slot:exhibition>
                        <TopDecoration :name="'姻缘报告详情'"></TopDecoration>
                        <div class="hongbao-di-bg">
                        <div class="hongbao-bg"></div>
                        <div class="tixing"></div>
                        <div class="tixing-tuwen"></div>
                        <div class="path" @click="backTop"></div>
                        <div class="youshi">个人生辰八字排盘</div>
                    </div>
                    <div class="hongbao-di-bg">
                        <div class="hongbao-bg"></div>
                        <div class="tixing"></div>
                        <div class="tixing-tuwen"></div>
                        <div class="path" @click="backTop"></div>
                        <div class="youshi">您的恋爱对象分析</div>
                    </div>
                    <div class="hongbao-di-bg">
                        <div class="hongbao-bg"></div>
                        <div class="tixing"></div>
                        <div class="tixing-tuwen"></div>
                        <div class="path" @click="backTop"></div>
                        <div class="youshi">桃花运好的年份</div>
                    </div>
                    <div class="hongbao-di-bg">
                        <div class="hongbao-bg"></div>
                        <div class="tixing"></div>
                        <div class="tixing-tuwen"></div>
                        <div class="path" @click="backTop"></div>
                        <div class="youshi">桃花劫的年份</div>
                    </div>
                    <div class="hongbao-di-bg">
                        <div class="hongbao-bg"></div>
                        <div class="tixing"></div>
                        <div class="tixing-tuwen"></div>
                        <div class="path" @click="backTop"></div>
                        <div class="youshi">感情容易生变年份</div>
                    </div>
                    <div class="hongbao-di-bg">
                        <div class="hongbao-bg"></div>
                        <div class="tixing"></div>
                        <div class="tixing-tuwen"></div>
                        <div class="path" @click="backTop"></div>
                        <div class="youshi">婚配建议及补救</div>
                    </div>
                    <div class="hongbao-di-bg" style="margin-bottom:3vw">
                        <div class="hongbao-bg"></div>
                        <div class="tixing"></div>
                        <div class="tixing-tuwen"></div>
                        <div class="path" @click="backTop"></div>
                        <div class="youshi">家居风水布局建议</div>
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
import { mapState, mapMutations } from 'vuex'
import Tips from '@/components/name/tips/tips.vue'
import TopBg from '@/components/person/top_bg.vue'
import BoxBg from '@/components/person/box_bg.vue'
import TopDecoration from '@/components/person/top_decoration.vue'
import { openService } from '@/uitls/js/name_service'
import { post } from '@/axios/axios.js'
export default {
  name: 'HomeView',
  components: { Tips, TopBg, TopDecoration, BoxBg },
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
    ...mapState(['orderidPerson', 'amountPerson', 'wxCode'])
  },
  async mounted () {
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
    },
    overTimeSetInter () {
      const that = this
      // 设置倒计时的目标时间
      const countdownDate = localStorage.getItem('personOvertime')
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
      console.log(window.location.hash, 'window.location.hash')
      const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
      const r = window.location.hash.substr(15).match(reg)
      if (r != null) return unescape(r[2])
      return null
    },
    get_weixin_code_login () {
      const backUrl = 'http://product.qiname.com.cn/person/play'
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
      const result = await post('/name_selfmarriage/grhyorder/wxpay', { orderid: this.orderidPerson, amount: this.amountPerson, code: playCode })
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
            that.$router.push({ path: '/person/loading' })
          },
          fail: function (res) {
            that.nowIsPlay = false
            // 支付失败的回调
            that.setShowTips('支付失败')
          }
        })
      })
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
        font-weight: 700 !important;
        padding: 2vw 0;
        border-top-right-radius: 1.4vw;
        border-bottom-right-radius: 1.4vw;
        display: flex;
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

        .prices-box{
            display: flex;
            justify-content: space-between;
            font-size: 4.2vw;
            line-height: 6.8vw;
            padding: 4vw 0;
            .left{
                text-align: left;
            }
            .originprice{
                color: #6A6666;
            }
            .rights{
                text-align: right;
            }
        }
        .order-info {
            display: flex;
            justify-content: center;
            margin-top: 4vw;

            .btn-box {
                margin: 0 auto;
                background-color: #00AE00;
                position: relative;
                width: 80vw;
                height: 9vw;
                border-radius: 10vw;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                color: rgba(255, 255, 255, .7);
                font-weight: 400;
                .iconfont {
                    font-size: 4vw;
                    font-weight: 100;
                }

                .txt {
                    font-size: 4vw;
                    font-weight: 700;
                    scale: .9;
                }

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
        .center-line{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 7vw;
            color: #995C66;
            .txts{
                margin: 0 2vw;
                font-weight: 700;
            }
            .lines{
                width: 12vw;
                height: 1px ;
                background-color: #995C66;
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
