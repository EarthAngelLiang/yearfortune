<template>
    <div class="home">
        <ConfirmDate v-show="confirmDateShow" :brithDate="brithDate" @backDates="backDates"
            @cons="confirmDateShow = false" />
        <Tips />
        <div class="order-detail" @click="$router.push('/baby/check_order')"><span
                class=" iconfont icon-sousuoxiao"></span>
            订单查询
        </div>
        <div class="zixun-detail" @click="openService"><span class="iconfont icon-manager-fill"
                style="font-size:8vw;color:#d1420a; font-weight: 100; text-shadow:  1px 1px rgba(0, 0, 0, 0.5);"></span>
            咨询老师
        </div>
        <div class="container">
            <TopBg />
            <div class="report_baby">
                <div class="report_title">宝宝潜能报告书</div>
                <div class="report_tips">输入宝宝信息，查收宝宝专属报告书</div>
                <div class="baby_info" :style="{ background: baby_form.gender === '男' ? '#60BAEE' : 'rgb(162, 195, 251)'}">
                    <div class="baby_sex">
                        <div class="sex"
                            :style="{ background: baby_form.gender === '男' ? '#60BAEE' : '#60BAEE', 'border-top-left-radius': '4vw' }"
                            @click="baby_form.gender = '男'">
                            <span>男</span>
                            <span class="iconfont icon-nan" style="margin-left: 6px ;font-weight: 700; color:#006CF2;"></span>
                        </div>
                        <div class="sex"
                            style=" background: rgb(162, 195, 251);border-top-right-radius: 4vw"
                            @click="baby_form.gender = '女'">
                            <span>女</span>
                            <span class="iconfont icon-nv" style="margin-left: 6px ;font-weight: 700;color:#E31CAE;"></span>
                        </div>
                    </div>
                    <div class="inserts">
                        <input class="baby_info_input"  onkeyup="this.value=this.value.replace(/[^\u4e00-\u9fa5]/g,'')"  v-model="baby_form.name" placeholder="请输入宝宝姓名" />
                    </div>
                    <div class="inserts">
                        <div type="text" disabled class="baby_info_input">{{ brithDate.gLabel || '请选择出生日期' }}</div>
                        <input type="text" id="dates" ref="setdate" class="birth-date-input" data-toid-hour="hour1"
                            placeholder="请输选择出生日期" name="input_date">
                        <input type="hidden" id="hour1" name="hour">
                        <div class="iconfont rili icon-ic_calendar"></div>
                    </div>
                </div>
                <div class="recover_report" @click="action">领取报告书</div>
                <div class="check-pro">
                    <div class="check-box"><input type="checkbox" v-model="is_agremment">
                        查看 <span @click="$router.push('/baby/agreement_use')"
                            style="text-decoration: underline;">《用户协议》</span> 和 <span
                            @click="$router.push('/baby/privacy')" style="text-decoration: underline;">《隐私协议》</span>
                    </div>
                    <div class="away">三岁定八十，宝宝成长初期，父母的教育深深<br>影响着性格定性和人格塑造</div>
                </div>
            </div>
            <div class="report_tu">
                <div class="orange_heng"></div>
                <div class="tu_title">宝宝潜能挖掘</div>

                <div class="tu_box">
                    <div class="tu_left">
                        <div class="top_yuan"></div>
                        <div class="tu_bian"></div>
                    </div>
                    <div class="tu_icon_top">
                        <div class="iconss">
                            <img  v-lazy="require('@/assets/baby/i3.png')" class="item_lis" />
                            <img  v-lazy="require('@/assets/baby/i3.png')" class="item_lis" />
                        </div>
                        <div class="iconss">
                            <img  v-lazy="require('@/assets/baby/i3.png')" class="item_lis" />
                            <img  v-lazy="require('@/assets/baby/i3.png')" class="item_lis" />
                        </div>
                    </div>
                    <div class="tu_bg_pink"></div>
                    <div class="tu_nav_white">
                        <img  v-lazy="require('@/assets/baby/i9.png')" alt="powerImg" class="tu_power">
                        <div class="tu_introduction">
                            及时发现宝宝的潜能，更快地提高学习积极性，以免浪费不必要的金钱，少走弯路。
                        </div>
                    </div>
                </div>
            </div>
            <div class="report_baby"  style="margin-top:9vw;padding-bottom:8vw;">
                <div class="report_title">宝宝潜能报告书详情</div>
                <div class="row_box" style="padding:6vw 5vw 0 5vw; ">
                    <div class="row_left">
                        <div class="detail_yuan"></div>
                        <div class="detail_shu"></div>
                        <div class="detail_bottom"></div>
                    </div>
                    <div class="row_nav">
                        <div  class="row_img_box">
                            <img  v-lazy="require('@/assets/baby/i4.png')" alt="" class="row_img">
                        </div>
                        <div class="detail_box">
                            <div class="detail_title">性格特点分析</div>
                            <div class="detail_txt">孩子性格优点</div>
                            <div class="detail_txt">孩子性格缺点</div>
                        </div>
                    </div>
                    <div class="row_left">
                        <div class="detail_top"></div>
                        <div class="detail_shu"></div>
                        <div class="detail_yuan"></div>
                    </div>
                </div>
                <div class="row_box">
                    <div class="row_nav">
                        <div class="detail_box">
                            <div class="detail_title">先天健康分析</div>
                            <div class="detail_txt">孩子五行体质</div>
                            <div class="detail_txt">孩子生活保健</div>
                        </div>
                        <div  class="row_img_box">
                            <img  v-lazy="require('@/assets/baby/i5.png')" alt="" style="width: 18vw;" class="row_img">
                        </div>
                    </div>
                </div>
                <div class="row_box">
                    <div class="row_left">
                        <div class="detail_yuan"></div>
                        <div class="detail_shu"></div>
                        <div class="detail_bottom"></div>
                    </div>
                    <div class="row_nav">
                        <div  class="row_img_box">
                            <img  v-lazy="require('@/assets/baby/i6.png')" alt="" class="row_img">
                        </div>
                        <div class="detail_box">
                            <div class="detail_title">学业发展分析</div>
                            <div class="detail_txt">孩子潜能分析</div>
                            <div class="detail_txt">孩子发展方向</div>
                        </div>
                    </div>
                    <div class="row_left">
                        <div class="detail_top"></div>
                        <div class="detail_shu"></div>
                        <div class="detail_yuan"></div>
                    </div>
                </div>
                <div class="row_box">
                    <div class="row_nav">
                        <div class="detail_box">
                            <div class="detail_title">社交人缘情况</div>
                            <div class="detail_txt">孩子人缘分析</div>
                            <div class="detail_txt">人缘提升建议</div>
                        </div>
                        <div  class="row_img_box">
                            <img  v-lazy="require('@/assets/baby/i7.png')" alt="" style="width: 24vw;" class="row_img">
                        </div>
                    </div>
                </div>
                <div class="row_box">
                    <div class="row_left">
                        <div class="detail_yuan"></div>
                        <div class="detail_shu"></div>
                        <div class="detail_bottom"></div>
                    </div>
                    <div class="row_nav">
                        <div  class="row_img_box">
                            <img  v-lazy="require('@/assets/baby/i8.png')" alt="" class="row_img">
                        </div>
                        <div class="detail_box">
                            <div class="detail_title">潜力提升建议</div>
                            <div class="detail_txt">幸运数字、幸运颜色</div>
                            <div class="detail_txt">幸运方位、饮食建议</div>
                        </div>
                    </div>
                    <div class="row_left">
                        <div class="detail_top"></div>
                        <div class="detail_shu"></div>
                        <div class="detail_yuan"></div>
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
import ConfirmDate from '@/components/name/confirm/confirm_date.vue'
import Tips from '@/components/name/tips/tips.vue'
import TopBg from '@/components/baby/index_top_bg.vue'
import { openService } from '@/uitls/js/name_service'
import { RuiDatepicker } from '@/uitls/js/rui_date'
import { mapState, mapMutations } from 'vuex'
import { post } from '@/axios/axios'
export default {
  name: 'HomeView',
  components: { Tips, TopBg, ConfirmDate },
  data () {
    return {

      // 控制选择日期组件后的确认框
      confirmDateShow: false,
      is_agremment: false,
      baby_form: {
        name: '',
        gender: '男',
        birthday: '',
        hour: null,
        calender: ''
      }
    }
  },

  computed: {
    ...mapState(['brithDate', 'wxCode'])
  },
  watch: {
    brithDate (val) {
      console.log(val, 'valasfrawerfetewrhgrtyry')
      this.confirmDateShow = true
    }
  },
  async mounted () {
    new RuiDatepicker().init('#dates')

    if (this.$route.query.torderid) {
      this.checkIsHave()
    }
  },
  methods: {
    ...mapMutations(['setShowTips', 'setOrderIdBaby', 'setAmountBaby', 'setBabyInfo', 'setWxCode']),

    openService () {
      openService()
    },
    backDates () {
      this.$refs.setdate.click()
    },
    async action () {
      if (!this.is_agremment) return this.setShowTips('请仔细阅读并同意协议')
      if (!this.brithDate.gCalendar) return this.setShowTips('请选择出生日期')
      if (!this.baby_form.name) return this.setShowTips('请输入您的姓名字')
      let dateArr = []
      this.baby_form.calender = this.brithDate.usetype
      if (this.brithDate.usetype === '公历') {
        dateArr = this.brithDate.gCalendar.split('/')
        this.baby_form.birthday = dateArr[0]
        this.baby_form.hour = dateArr[1]
      } else if (this.brithDate.usetype === '农历') {
        dateArr = this.brithDate.nCalendar.split('/')
        this.baby_form.birthday = dateArr[0]
        this.baby_form.hour = dateArr[1]
      }
      const requestParams = JSON.parse(JSON.stringify(this.baby_form))
      if (requestParams.hour === '未知') {
        requestParams.hour = 99
      } else {
        requestParams.hour = parseInt(requestParams.hour)
      }
      console.log(this.is_agremment, this.baby_form, 'baby_form')

      if (this.$route.query.torderid) {
        requestParams.channel = this.$route.query.channel
        requestParams.torderid = this.$route.query.torderid
      }

      const res = await post('/baobao_potency/place_order', requestParams)
      if (res.Msg === '淘宝订单下单成功') {
        this.setOrderIdBaby(this.$route.query.torderid)
        this.$router.push({ path: '/baby/baby_loading' })
      } else if (res.result === 0) {
        if (res.order_id) {
          this.setOrderIdBaby(res.order_id)
          this.setAmountBaby(res.pay_amount)
          this.setBabyInfo(JSON.stringify(requestParams))
          localStorage.setItem('babyOvertime', new Date().getTime() + 7200000)
          this.$router.push({ path: '/baby/play' })
        } else {
          this.setShowTips('数据返回缺少orderid')
        }
      } else {
        this.setShowTips(res.errMsg)
      }
    },
    async checkIsHave () {
      const res = await post('/baobao_potency/tb_order_judge', { torderid: this.$route.query.torderid })
      if (res.Msg === '订单号已存在') {
        this.setOrderIdBaby(this.$route.query.torderid)
        this.$router.push({ path: '/baby/baby_loading' })
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
        min-height: 100vh;
        background: rgb(149, 209, 244);

        .report_baby {

            width: 84vw;
            background-color: #fff;
            border-radius: 4vw;
            padding: 4vw 0 2vw 0;
            text-align: center;
            margin: 104vw auto 0 auto;

            .report_title {
                font-size: 5.6vw;
                color: rgb(241, 123, 60);
            }

            .report_tips {
                font-size: 4.2vw;
                color: rgb(70, 170, 227);
                line-height: 12vw;
            }

            .baby_info {
                background: rgb(212, 236, 250);
                width: 70vw;
                margin: 1vw auto 0 auto;
                border-radius: 4vw;
                padding-bottom: 4vw;

                .baby_sex {
                    display: flex;

                    .sex {
                        flex: 1;
                        line-height: 11vw;
                        color: #fff;
                    }
                }

                .inserts {
                    padding: 2vw 2vw 2vw 4vw;
                    width: 62vw;
                    margin: 1vw auto;
                    border-bottom: 1px solid rgb(202, 197, 197);
                    position: relative;
                    display: flex;
                    justify-content: space-between;

                    .birth-date-input {
                        position: absolute;
                        top: 1vw;
                        left: 0;
                        width: 100%;
                        height: 7vw;
                        opacity: 0;
                    }

                    .rili {
                        font-size: 4vw;
                        color: #EB4B4B;
                    }

                    .baby_info_input {
                        text-align: left;
                        width: 54vw;
                        background-color: transparent;
                        // color: #46AAE3 !important;
                        color: #fff  !important;
                    }

                    input:-moz-placeholder,
                    textarea:-moz-placeholder {
                        // color: #46AAE3 !important;
                        color: #fff  !important;
                    }

                    input:-ms-input-placeholder,
                    textarea:-ms-input-placeholder {
                        // color: #46AAE3 !important;
                        color: #fff  !important;
                    }

                    input::-webkit-input-placeholder,
                    textarea::-webkit-input-placeholder {
                        // color: #46AAE3 !important;
                        color: #fff  !important;
                    }
                }
            }

            .recover_report {
                color: #fff;
                width: 44vw;
                background-color: #F8BABA;
                margin: 4vw auto 2vw auto;
                line-height: 8vw;
                border-radius: 2vw;
            }

            .check-pro {
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-content: center;
                align-items: center;
                line-height: 7vw;
                margin-bottom: 4vw;
                font-size: 3.6vw;

                span {
                    color: #EB4B4B;

                }

                .away {
                    font-weight: 500;
                    font-size: 3.6vw;
                    color: #F17C3E;
                }
            }

            .row_box{
                display: flex;
                padding: 1vw 5vw;
                .row_left{
                    position: relative;
                    .detail_yuan{
                        width: 2.4vw;
                        height: 2.4vw;
                        border-radius: 5vw;
                        border: 2.4px solid rgb(241, 123, 60);
                        background-color: #fff;
                    }
                    .detail_shu{
                        width: .5vw;
                        background-color: rgb(254, 217, 190);
                        height: calc(100% - 0vw);
                        margin-left: 1vw;
                    }
                    .detail_bottom{
                        position: absolute;
                        left: 1vw;
                        bottom: -2.4vw;
                        height: .4vw;
                        background-color: rgb(254, 217, 190);
                        width: 8vw;
                    }
                    .detail_top{
                        position: absolute;
                        left: -7vw;
                        top:0;
                        height: .4vw;
                        background-color: rgb(254, 217, 190);
                        width: 8vw;
                    }
                }
                .row_nav{
                    flex: 1;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 3vw 3vw 1vw 3vw;
                    .row_img_box{
                        flex: 2;
                    }
                    .row_img{
                        width: 13vw;
                    }
                    .detail_box{
                        flex: 3;
                        .detail_title{
                            font-size: 4.4vw;
                            font-weight: 700;
                            line-height: 7vw;
                            margin-bottom: 1vw;
                        }
                    }
                }

            }
        }

        .report_tu {
            width: 84vw;
            margin: 4vw auto 0 auto;
            border-right: .5vw solid rgb(254, 217, 190);

            .orange_heng {
                width: 5vw;
                height: .5vw;
                margin-top: 6vw;
                background-color: rgb(241, 124, 62);
            }

            .tu_title {
                line-height: 10vw;
                font-size: 4.2vw;
                font-weight: 700;

            }

            .tu_box {
                display: flex;
                position: relative;

                .tu_left {

                    .top_yuan {
                        width: 3.4vw;
                        height: 3.4vw;
                        border-radius: 5vw;
                        border: 3px solid rgb(241, 123, 60);
                        background-color: #fff;
                    }

                    .tu_bian {
                        width: .5vw;
                        background-color: rgb(254, 217, 190);
                        height: calc(100% - 3.4vw);
                        margin-left: 1.4vw;
                    }
                }
                .tu_icon_top {
                    padding-left: 10vw;
                    flex: 1;
                    display: flex;
                    height: 55vw;
                    justify-content: space-around;
                    .iconss {
                        display: flex;

                        .item_lis {
                            width: 3vw;
                            height: 7vw;
                            margin-left: 1vw;
                        }
                    }
                }

                .tu_bg_pink {
                    position: absolute;
                    top: 3vw;
                    right: 3vw;
                    width: 68vw;
                    height: 48vw;
                    border-radius: 2vw;
                    background-color: rgb(247, 181, 188);

                }

                .tu_nav_white {
                    position: absolute;
                    top: 6vw;
                    right: 7vw;
                    width: 68vw;
                    height: 48vw;
                    border-radius: 2vw;
                    background-color: #fff;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 0 4vw;
                    .tu_power {
                        width: 32vw;
                        margin: 2vw 0;
                    }
                    .tu_introduction{
                        border-top: 1px solid rgb(218, 216, 216);
                        padding-top: 1.4vw;
                        font-size: 3.2vw;
                        color:#5B5959;
                        line-height: 4.8vw;
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
