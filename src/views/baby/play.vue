<template>
    <div class="home">
        <Tips />
        <div class="order-detail" @click="$router.push('/baby/check_order')"><span class=" iconfont icon-sousuoxiao"></span>
            订单查询
        </div>
        <div class="zixun-detail" @click="openService"><span class=" iconfont icon-kefu1"
                style="font-size:8vw;color:#d1420a; font-weight: 100; text-shadow:  1px 1px rgba(0, 0, 0, 0.5);"></span>
            在线客服
        </div>
        <div class="container">
            <TopBg />
            <img  v-lazy="require('@/assets/baby/i2.png')" alt="" class="baby_play_title">
            <BoxBg>
                <template v-slot:exhibition>
                    <div class="nav_play">
                        <TopDecoration :name="'解锁所有内容'"></TopDecoration>
                        <div class="baby_info">
                            <img v-if="babyInfo.gender == '男'" v-lazy="require('@/assets/baby/p1.png')" class="sex_baby_img" alt="">
                            <img v-else v-lazy="require('@/assets/baby/pv.png')" class="sex_baby_img" style="width: 13vw;" alt="">
                            <div class="baby_name_brith">
                                <div class="info_text">
                                    <span>{{babyInfo.name}}</span>
                                    <span v-if="babyInfo.gender==='男'" class="iconfont icon-nan" style="margin-left: 6px ;font-weight: 700; color:#006CF2;"></span>
                                    <span v-if="babyInfo.gender==='女'" class="iconfont icon-nv" style="margin-left: 6px ;font-weight: 700;color:#E31CAE;"></span>
                                </div>
                                <div class="info_text">出生日期：{{ dateArr[0] }}年{{ dateArr[1]  }}月{{ dateArr[2] }}日{{babyInfo.hour}}时</div>
                            </div>
                        </div>
                        <div class="baby_price_box">
                            <div class="baby_price">
                                <div class="baby_price_num"> <span>现价 ：</span> <span class="baby_num"> ￥ {{amountBaby}} 元</span> </div>
                                <div class="baby_origin"> 原价 ：88 元 </div>
                            </div>
                        </div>
                        <div class="report_tips">报告生成只有自己能查看，请放心领取！</div>
                        <div class="btn-box" @click="action">
                            <div class="txt" style="color: #fff;"><span class="iconfont icon-weixin"></span> 微信支付</div>
                            <div class="txx">限时优惠：{{ times.shi }}：{{ times.fen }}：{{ times.miao }}</div>
                            <div class="icon-box">
                                <div class="icont-img0"></div>
                                <div class="icont-img1"></div>
                            </div>
                        </div>
                    </div>
                </template>
            </BoxBg>

            <div class="banner_titles">支付完成可见报告详细内容</div>

            <div class="unlock_box">
                <img  v-lazy="require('@/assets/baby/p3.png')" alt="" class="bg_yuan">
                <img  v-lazy="require('@/assets/baby/p3.png')" alt="" class="bg_yuan_b">
                <div class="unlock_box_item">

                    <div class="unlock_box_nav">
                        <img  v-lazy="require('@/assets/baby/p2.png')" alt="" class="top_left_b">
                        <div class="unlock_txt">宝宝的性格优点</div>
                        <div class="unlock_txt">宝宝的性格缺点</div>
                        <div class="unlock_txt">如何发挥其特点，修正其缺点</div>
                        <div class="unlock_btn" @click="backTop">付费解锁</div>
                    </div>

                </div>
            </div>
            <div class="unlock_box" style="height: 55vw;">
                <img  v-lazy="require('@/assets/baby/p3.png')" alt="" class="bg_yuan">
                <img  v-lazy="require('@/assets/baby/p3.png')" alt="" class="bg_yuan_b">
                <div class="unlock_box_item">
                    <div class="unlock_box_nav">
                        <img  v-lazy="require('@/assets/baby/p2.png')" alt="" class="top_left_b">
                        <div class="unlock_txt">宝宝的潜能及特长</div>
                        <div class="unlock_txt">学业情况分析</div>
                        <div class="unlock_txt">提高学习积极性的方法</div>
                        <div class="unlock_txt">未来职业发展方向</div>
                        <div class="unlock_btn" @click="backTop">付费解锁</div>
                    </div>

                </div>
            </div>
            <div class="unlock_box" style="height: 47vw;">
                <img  v-lazy="require('@/assets/baby/p3.png')" alt="" class="bg_yuan">
                <img  v-lazy="require('@/assets/baby/p3.png')" alt="" class="bg_yuan_b">
                <div class="unlock_box_item">

                    <div class="unlock_box_nav">
                        <img  v-lazy="require('@/assets/baby/p2.png')" alt="" class="top_left_b">
                        <div class="unlock_txt" style="line-height:12vw;">改善宝宝人缘关系的方法</div>
                        <div class="unlock_btn" @click="backTop">付费解锁</div>
                    </div>

                </div>
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
import Tips from '@/components/name/tips/tips.vue'
import TopBg from '@/components/baby/other_top_bg.vue'
import { openService } from '@/uitls/js/name_service'
import BoxBg from '@/components/baby/box_bg.vue'
import TopDecoration from '@/components/baby/top_decoration.vue'
import { mapState, mapMutations } from 'vuex'
import { post } from '@/axios/axios.js'
export default {
  name: 'HomeView',
  components: { Tips, TopBg, BoxBg, TopDecoration },
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
    ...mapState(['orderidBaby', 'amountBaby', 'babyInfo', 'wxCode']),
    dateArr () {
      return this.babyInfo.birthday.split('-')
    }
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
      const countdownDate = localStorage.getItem('babyOvertime')
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
      const backUrl = 'http://product.qiname.com.cn/baby/play'
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
      const result = await post('/baobao_potency/bbqnorder/wxpay', { orderid: this.orderidBaby, amount: this.amountBaby, code: playCode })
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
            that.$router.push({ path: '/baby/baby_loading' })
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
        min-height: 100vh;
        background: rgb(149, 209, 244);

        .baby_play_title {
            width: 70vw;
            display: block;
            margin: 8vw auto;
        }

        .nav_play {
            padding-bottom: 3vw;

            .sex_baby_img {
                width: 10vw;
            }

            .baby_info {
                margin-top: 6vw;
                display: flex;
                padding-left: 8vw;

                .baby_name_brith {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    text-align: start;
                    font-size: 4vw;
                    margin-left: 4vw;
                    font-weight: 500;
                }

            }

            .baby_price_box {
                background-color: #F8BABA;
                width: 64vw;
                margin: 3vw auto 0 auto;
                border-radius: 2vw;
                padding: 3vw 0;

                .baby_price {
                    width: 58vw;
                    margin: 0 auto;
                    background-color: #fff;
                    border-radius: 2vw;
                    text-align: start;
                    padding-left: 7vw;
                    padding-bottom: 5vw;
                    padding-top: 1vw;

                    .baby_price_num {
                        line-height: 14vw;
                        font-size: 5.2vw;
                        font-weight: 600;

                        .baby_num {
                            font-weight: 100;
                            color: rgb(251, 129, 82);
                            font-size: 6vw;
                        }
                    }

                    .baby_origin {
                        font-size: 4.6vw;
                        text-decoration: line-through;
                    }
                }

            }

            .report_tips {
                font-size: 3.2vw;
                margin: 4vw auto;
            }

            .btn-box {
                margin: 2vw auto;

                background-image: linear-gradient(to bottom, rgb(149, 224, 79), rgb(68, 150, 17));
                position: relative;
                width: 62vw;
                height: 12vw;
                border-radius: 3.6vw;
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
                }

                .txt {
                    font-size: 4vw;
                    font-weight: 600;
                }

                .txx {
                    font-size: 3.6vw;
                }

            }
        }

        .banner_titles {
            font-size: 5.2vw;
            text-align: center;
            font-weight: 500;
        }

        .unlock_box {
            background-color: #fff;
            width: 76vw;
            margin: 7vw auto 0 auto;
            border-radius: 3vw;
            padding: 6vw;
            height: 50vw;
            position: relative;

            .bg_yuan {
                position: absolute;
                top: 3vw;
                left: 4vw;
                width: 12vw;
            }

            .bg_yuan_b {
                position: absolute;
                bottom: 3vw;
                right: 4vw;
                width: 12vw;
            }

            .unlock_box_item {
                background-color: rgb(222, 220, 220);
                width: 60vw;
                margin: 0 auto;
                border-radius: 3vw;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                padding: 1vw 0;

                .unlock_box_nav {
                    width: 58vw;
                    background-color: #fff;
                    border-radius: 3vw;
                    margin: 0 auto;
                    position: relative;
                    text-align: center;
                    padding-top: 4vw;
                    padding-bottom: 3vw;
                    font-size: 3.6vw;

                    .top_left_b {
                        position: absolute;
                        top: 0px;
                        left: 0px;
                        width: 9vw;
                    }

                    .unlock_btn {
                        background-color: #F8BABA;
                        color: #AF3100;
                        width: 36vw;
                        margin: 0 auto;
                        margin-top: 3vw;
                        border-radius: 3vw;
                        line-height: 7vw;
                    }
                }
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
