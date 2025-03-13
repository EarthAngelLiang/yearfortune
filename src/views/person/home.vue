<template>
    <div class="home">
        <ConfirmDate v-show="confirmDateShow" :brithDate="brithDate" @backDates="backDates" @cons="confirmDateShow = false" />
        <Tips />
        <div class="order-detail" @click="$router.push('/person/order_check')"><span
                class=" iconfont icon-sousuoxiao"></span>
            订单查询
        </div>
        <div class="zixun-detail"  @click="openService"><span class=" iconfont icon-kefu1"
                style="font-size:8vw;color:#d1420a; font-weight: 100; text-shadow:  1px 1px rgba(0, 0, 0, 0.5);"></span>
            在线客服
        </div>
        <div class="container">
            <TopBg />
            <div class="one-banner">
                <div class="titles">桃花、脱单、恋爱经营全方位解析</div>
                <div class="title-label font-info-type">
                    输入信息，查看你的桃花姻缘
                </div>
                <div class="info-box">
                    <div class="input-info">
                        <div class="label ">您的姓名</div>
                        <input type="text" onkeyup="this.value=this.value.replace(/[^\u4e00-\u9fa5]/g,'')" class="info "
                            v-model="orderParams.name" placeholder="请输入您的姓名">
                    </div>
                    <div class="input-info">
                        <div class="label ">您的性别</div>

                        <div class="radio-class " @click="orderParams.gender = '男'"
                            :class="orderParams.gender === '男' ? 'active-r' : ''">男</div>
                        <div class="radio-class " @click="orderParams.gender = '女'"
                            :class="orderParams.gender === '女' ? 'active-r' : ''">女</div>
                    </div>
                    <div class="input-info">
                        <div class="label ">出生日期</div>
                        <div type="text" disabled class="birth-date" >{{ brithDate.gLabel || '请选择出生日期' }}
                        </div>
                        <input type="text" id="dates" ref="setdate" class="birth-date-input" data-toid-hour="hour1"
                            placeholder="请输选择出生日期" name="input_date">
                        <input type="hidden" id="hour1" name="hour">
                        <div class="iconfont rili icon-ic_calendar"></div>
                    </div>
                    <!-- <div class="input-info">
                        <div class="label font-info-type">出生日期</div>
                        <div type="text" disabled class="birth-date">{{ orderParams.gLabel || '请选择出生日期' }}</div>
                        <input type="text" id="dates" ref="setdate" class="birth-date-input" data-toid-hour="hour1"
                            placeholder="请输选择出生日期" name="input_date">
                        <input type="hidden" id="hour1" name="hour">
                        <div class="iconfont rili icon-ic_calendar"></div>
                    </div> -->
                    <div class="now-test" @click="action">立即测试</div>
                    <div class="check-pro">
                        <div class="check-box"><input type="checkbox" v-model="is_agremment">
                            查看 <span @click="$router.push('/person/agreement_use')"
                                style="text-decoration: underline;">《用户协议》</span> 和 <span
                                @click="$router.push('/person/privacy')" style="text-decoration: underline;">《隐私协议》</span>
                        </div>
                        <div class="away">已为<span style="color:#EB4B4B">5910088</span> 人生成报告，满意率 <span
                                style="color:#EB4B4B">98.7%</span></div>
                        <div class="away"><span style="color:#EB4B4B;text-decoration: underline;">《查询历史订单》</span> </div>
                    </div>
                </div>
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
            <div class="two-banner">
                <div class="conentss">
                    <div class="rows-txt" style="margin-top:7vw">
                        <img  v-lazy="require('@/assets/person/1.png')" alt="" class="double-ren">
                        <div class="txts">
                            <div>
                                · 单身的你<span style="color:#FF3D5D">何</span>时能<span style="color:#FF3D5D">脱单？</span>
                            </div>
                            <div>
                                · 你的<span style="color:#FF3D5D">正缘</span>是什么样子的？
                            </div>

                        </div>
                    </div>
                    <div class="rows-txt">
                        <div class="txts">
                            <div>
                                · 单身的你<span style="color:#FF3D5D">何</span>时能<span style="color:#FF3D5D">脱单？</span>
                            </div>
                            <div>
                                · 你的<span style="color:#FF3D5D">正缘</span>是什么样子的？
                            </div>
                        </div>
                        <img  v-lazy="require('@/assets/person/2.png')" alt="" class="double-ren">
                    </div>
                    <div class="taohua-bg">
                        <div class="bg-t t1">
                            <div class="zi s1"></div>
                        </div>
                        <div class="bg-t t2">
                            <div class="zi s2"></div>
                        </div>
                        <div class="bg-t t3">
                            <div class="zi s3"></div>
                        </div>
                        <div class="bg-t t4">
                            <div class="zi s4"></div>
                        </div>
                    </div>
                </div>
                <div class="bg-btm"></div>
            </div>
            <div class="order-info" style="margin-top:8vw;">
                <BoxBg>
                    <template v-slot:exhibition>
                        <TopDecoration :name="'哪些人需要测算'"></TopDecoration>
                        <div class="list-boxs">
                            <div class="list-txt">
                                <img  v-lazy="require('@/assets/person/21.png')" alt="" class="img-gou">
                                <div class="txt">想要谈恋爱的你</div>
                            </div>
                            <div class="list-txt">
                                <img  v-lazy="require('@/assets/person/21.png')" alt="" class="img-gou">
                                <div class="txt">想增强异性缘的你</div>
                            </div>
                            <div class="list-txt">
                                <img  v-lazy="require('@/assets/person/21.png')" alt="" class="img-gou">
                                <div class="txt">想要斩断烂桃花的你</div>
                            </div>
                        </div>
                        <div class="rows-txt">
                            <div class="txts">
                                <div>
                                    确认过眼神，遇上对的人
                                </div>
                                <div class="samll-txt">
                                    揭秘你的桃花旺弱、命中正缘、未来的姻缘情况。
                                </div>
                            </div>
                            <img  v-lazy="require('@/assets/person/22.png')" alt="" class="double-ren">
                        </div>
                    </template>
                </BoxBg>
            </div>
            <div class="order-info">
                <BoxBg>
                    <template v-slot:exhibition>
                        <TopDecoration :name="'老师详解你的先天感情'"></TopDecoration>
                        <div class="analysis">
                            <div class="analysis-items" style="background: #FFE6E6;">
                                <img  v-lazy="require('@/assets/person/31.png')" alt="" class="avatars">
                                <div class="label-biaoqian" style="background-color: #F17373;">先天桃花</div>
                                <div class="analysis-txt">分析<span style="color:#FF3D5D">先天桃花</span>情况，看一生情缘</div>
                            </div>
                            <div class="analysis-items" style="background: #FFE6E6;">
                                <img  v-lazy="require('@/assets/person/32.png')" alt="" class="avatars">
                                <div class="label-biaoqian" style="background-color: #F17373;">对象特征</div>
                                <div class="analysis-txt">了解<span style="color:#FF3D5D">正缘特征和性格</span>，找到真爱</div>
                            </div>
                            <div class="analysis-items" style="background: #FFE6E6;">
                                <img  v-lazy="require('@/assets/person/33.png')" alt="" class="avatars">
                                <div class="label-biaoqian" style="background-color: #F17373;">先天姻缘</div>
                                <div class="analysis-txt">解析先天<span style="color:#FF3D5D">姻缘强弱</span>，看婚后情况</div>
                            </div>
                        </div>
                    </template>
                </BoxBg>
            </div>
            <div class="order-info">
                <BoxBg>
                    <template v-slot:exhibition>
                        <TopDecoration :name="'老师为你点拨姻缘发展'"></TopDecoration>
                        <div class="analysis">
                            <div class="analysis-items" style="background: #FDF6CC;">
                                <img  v-lazy="require('@/assets/person/41.png')" alt="" class="avatars">
                                <div class="label-biaoqian" style="background-color: #3A3C35;">脱单结婚</div>
                                <div class="analysis-txt">有利<span style="color:#FF3D5D">脱单结婚</span>年份助你把握婚姻</div>
                            </div>
                            <div class="analysis-items" style="background: #FDF6CC;">
                                <img  v-lazy="require('@/assets/person/42.png')" alt="" class="avatars">
                                <div class="label-biaoqian" style="background-color: #3A3C35;">不利年份</div>
                                <div class="analysis-txt">点出<span style="color:#FF3D5D">不利感情</span>年份采取措施避开</div>
                            </div>
                            <div class="analysis-items" style="background: #FDF6CC;">
                                <img  v-lazy="require('@/assets/person/43.png')" alt="" class="avatars">
                                <div class="label-biaoqian" style="background-color: #3A3C35;">感情危机</div>
                                <div class="analysis-txt">分析<span style="color:#FF3D5D">感情不稳</span>年份提前预防风险</div>
                            </div>
                        </div>
                    </template>
                </BoxBg>
            </div>
            <div class="order-info">
                <BoxBg>
                    <template v-slot:exhibition>
                        <TopDecoration :name="'老师支招献策'"></TopDecoration>
                        <div class="analysis">
                            <div class="analysis-items" style="background: #FFE6E6;">
                                <img  v-lazy="require('@/assets/person/44.png')" alt="" class="avatars">
                                <div class="txt" style="margin-top:2vw">恋爱攻略</div>
                                <div class="txt">收获爱情</div>
                                <div class="biaoqian" style="background-color: #FF3D5D;">咨询老师</div>
                            </div>
                            <div class="analysis-items" style="background: #FFE6E6;">
                                <img  v-lazy="require('@/assets/person/45.png')" alt="" class="avatars">
                                <div class="txt" style="margin-top:2vw">旺桃花</div>
                                <div class="txt">家居布局</div>
                                <div class="biaoqian" style="background-color: #FF3D5D;">咨询老师</div>
                            </div>
                            <div class="analysis-items" style="background: #FFE6E6;">
                                <img  v-lazy="require('@/assets/person/46.png')" alt="" class="avatars">
                                <div class="txt" style="margin-top:2vw">解运推荐</div>
                                <div class="txt">守正催缘</div>
                                <div class="biaoqian" style="background-color: #FF3D5D;">咨询老师</div>
                            </div>
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
import ConfirmDate from '@/components/name/confirm/confirm_date.vue'
import { mapState, mapMutations } from 'vuex'
import Tips from '@/components/name/tips/tips.vue'
import { post } from '@/axios/axios'
import TopBg from '@/components/person/top_bg.vue'
import BoxBg from '@/components/person/box_bg.vue'
import TopDecoration from '@/components/person/top_decoration.vue'
import { RuiDatepicker } from '@/uitls/js/rui_date'
import { openService } from '@/uitls/js/name_service'
export default {
  name: 'HomeView',
  components: { Tips, TopBg, TopDecoration, BoxBg, ConfirmDate },
  data () {
    return {
      // 控制选择日期组件后的确认框
      confirmDateShow: false,
      // 是否同意协议
      is_agremment: false,
      // 没有点击同意协议时提示文字
      showTips: '',
      // 支付信息
      orderParams: {
        name: '',
        gender: '男',
        birthday: '',
        hour: null,
        calender: ''
      }
    }
  },
  computed: {
    ...mapState(['brithDate', 'orderid', 'amount', 'wxCode'])
  },
  watch: {
    brithDate (val) {
      console.log(val, 'valasfrawerfetewrhgrtyry')
      this.confirmDateShow = true
    }
  },
  mounted () {
    new RuiDatepicker().init('#dates')
    if (this.$route.query.torderid) {
      this.checkIsHave()
    }
  },
  methods: {
    ...mapMutations(['setShowTips', 'setOrderIdPerson', 'setAmountPerson', 'setWxCode']),
    openService () {
      openService()
    },
    backDates () {
      this.$refs.setdate.click()
    },
    async action () {
      if (!this.is_agremment) return this.setShowTips('请仔细阅读并同意协议')
      if (!this.brithDate.gCalendar) return this.setShowTips('请选择出生日期')
      if (!this.orderParams.name) return this.setShowTips('请输入您的姓名字')
      let dateArr = []
      this.orderParams.calender = this.brithDate.usetype
      if (this.brithDate.usetype === '公历') {
        dateArr = this.brithDate.gCalendar.split('/')
        this.orderParams.birthday = dateArr[0]
        this.orderParams.hour = dateArr[1]
      } else if (this.brithDate.usetype === '农历') {
        dateArr = this.brithDate.nCalendar.split('/')
        this.orderParams.birthday = dateArr[0]
        this.orderParams.hour = dateArr[1]
      }
      const requestParams = JSON.parse(JSON.stringify(this.orderParams))
      if (requestParams.hour === '未知') {
        requestParams.hour = 99
      } else {
        requestParams.hour = parseInt(requestParams.hour)
      }
      console.log(this.is_agremment, this.orderParams, 'orderParams')
      if (this.$route.query.torderid) {
        requestParams.channel = this.$route.query.channel
        requestParams.torderid = this.$route.query.torderid
      }

      const res = await post('/name_selfmarriage/place_order', requestParams)
      if (res.Msg === '淘宝订单下单成功') {
        this.setOrderIdPerson(this.$route.query.torderid)
        this.$router.push({ path: '/person/loading' })
      } else if (res.result === 0) {
        if (res.order_id) {
          this.setOrderIdPerson(res.order_id)
          this.setAmountPerson(res.pay_amount)
          localStorage.setItem('personOvertime', new Date().getTime() + 7200000)
          this.$router.push({ path: '/person/play' })
        } else {
          this.setShowTips('数据返回缺少orderid')
        }
      } else {
        this.setShowTips(res.msg)
      }
    },
    async checkIsHave () {
      const res = await post('/name_selfmarriage/tb_order_judge', { torderid: this.$route.query.torderid })
      if (res.Msg === '订单号已存在') {
        this.setOrderIdPerson(this.$route.query.torderid)
        this.$router.push({ path: '/person/loading' })
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

        .one-banner {
            width: 90vw;
            margin: 0 auto;
            background-image: url('@/assets/person/huangbj.png');
            background-size: 100%;
            margin-top: 44vw;
            position: relative;

            .titles {
                position: absolute;
                left: 50%;
                top: 0;
                transform: translate(-50%, -50%);
                width: 86%;
                text-align: center;
                background-image: url('@/assets/person/ht.png');
                background-size: 100%;
                line-height: 15vw;
            }

            .title-label {
                text-align: center;
                padding-top: 10vw;
                margin-bottom: 4vw;
            }

            .info-box {
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;

                .input-info {
                    display: flex;
                    align-items: center;
                    width: 86%;
                    background-color: #fff;
                    border: 2px solid rgb(254, 184, 170);
                    border-radius: 1vw;
                    line-height: 10vw;
                    margin-bottom: 4vw;
                    position: relative;

                    .rili {
                        position: absolute;
                        right: 3vw;
                        font-size: 5vw;
                        color: #C12F2B;
                    }

                    .label {
                        width: 24vw;
                        text-align: center;
                        font-size: 4.2vw;
                        font-weight: 700;
                    }

                    .info {
                        font-size: 4vw;
                        width: calc(100% - 24vw);
                    }

                    .radio-class {
                        border-radius: 600px;
                        width: 8vw;
                        height: 8vw;
                        line-height: 8vw;
                        margin-right: 6vw;
                        font-size: 4.2vw;
                        text-align: center;
                    }

                    .active-r {
                        background-color: #FADA91;
                    }

                    .birth-date {
                        color: #A5A2A1;
                        font-size: 4.6vw;
                    }

                    .birth-date-input {
                        position: absolute;
                        right: 0;
                        top: 50%;
                        height: 8vw;
                        transform: translate(0, -50%);
                        z-index: 2;
                        opacity: 0;
                    }
                }
            }

            .now-test {
                width: 84%;
                text-align: center;
                border-radius: 10vw;
                line-height: 9vw;
                font-size: 4.4vw;
                font-weight: 700;
                color: #fff;
                background-color: #FF3D5D;
                margin-bottom: 3vw;
            }

            .check-pro {
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-content: center;
                align-items: center;
                line-height: 7vw;
                margin-bottom: 4vw;

                span {
                    color: #EB4B4B;

                }

                .away {
                    font-weight: 500;
                }
            }
        }

        .guajian-box {
            position: absolute;
            top: 191vw;
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

        .two-banner {
            width: 90vw;
            margin: 1.4vw auto 0 auto;
            background-image: url('@/assets/person/huangbj.png');
            background-size: 100%;
            position: relative;
            height: 102.8vw;

            .conentss {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;

                .rows-txt {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 4vw auto;
                    font-weight: 700;
                    color: #945D28;

                    .double-ren {
                        width: 26vw;

                    }

                    .txts {
                        background: linear-gradient(270.00deg, rgba(255, 234, 220, 0) 12.214%, rgba(253, 234, 202, 0.74) 68.702%, rgba(255, 236, 220, 0.14) 100%);
                        padding: 3vw 3vw;
                    }
                }

                .taohua-bg {

                    .bg-t {
                        width: 23vw;
                        height: 23vw;
                        background-image: url('@/assets/person/3.png');
                        background-size: 100%;
                        color: white;
                        font-size: 3.4vw;
                        -webkit-text-stroke: 1px red;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                    }

                    .s1 {
                        background-image: url('@/assets/person/11.png');
                        background-size: 100%;
                        background-repeat: no-repeat;
                    }

                    .s2 {
                        background-image: url('@/assets/person/12.png');
                        background-size: 100%;
                        background-repeat: no-repeat;
                    }

                    .s3 {
                        background-image: url('@/assets/person/13.png');
                        background-size: 100%;
                        background-repeat: no-repeat;
                    }

                    .s4 {
                        background-image: url('@/assets/person/14.png');
                        background-size: 100%;
                        background-repeat: no-repeat;
                    }

                    .t1 {
                        position: absolute;
                        top: 59vw;
                        left: 2%;

                        .zi {
                            width: 18vw;
                            height: 8.4vw;
                        }
                    }

                    .t2 {
                        position: absolute;
                        top: 71.4vw;
                        left: 24%;

                        .zi {
                            width: 13vw;
                            height: 8vw;
                        }
                    }

                    .t3 {
                        position: absolute;
                        top: 59vw;
                        right: 25%;

                        .zi {
                            width: 13vw;
                            height: 8vw;
                        }
                    }

                    .t4 {
                        position: absolute;
                        top: 71.4vw;
                        right: 2%;

                        .zi {
                            width: 13vw;
                            height: 8vw;
                        }
                    }

                }
            }

            .bg-btm {
                width: 100%;
                height: 92%;
                position: absolute;
                bottom: 0;
                left: 0;
                background-image: url('@/assets/person/4.png');
                background-size: contain;
                background-repeat: no-repeat;
            }
        }

        .order-info {
            display: flex;
            justify-content: center;
            margin-top: 4vw;

            .list-boxs {
                margin-top: 6vw;
                padding: 0 2vw;

                .list-txt {
                    display: flex;
                    align-items: center;
                    border-bottom: 1px dashed transparent;
                    background: linear-gradient(#FFFBF3, #FFFBF3) padding-box, repeating-linear-gradient(-45deg, #945D28 0, #945D28 6px, #FFFBF3 0, #FFFBF3 12px);
                    line-height: 10.6vw;
                    font-weight: 700;
                    color: #945D28;

                    .img-gou {
                        width: 5vw;
                        height: 5vw;
                        margin-right: 3vw;
                    }
                }
            }

            .rows-txt {
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 4vw auto;
                font-weight: 700;
                color: #945D28;
                padding: 3vw 3vw 0 3vw;

                .double-ren {
                    width: 24vw;
                }

                .txts {
                    background: linear-gradient(270.00deg, rgba(255, 234, 220, 0) 12.214%, rgba(253, 234, 202, 0.74) 68.702%, rgba(255, 236, 220, 0.14) 100%);
                    padding: 3vw 2vw;
                    text-align: left;

                    .samll-txt {
                        color: #969696;
                        font-weight: 400;
                        font-size: 3.6vw;
                    }
                }

            }

            .analysis {
                display: flex;
                justify-content: space-around;
                margin: 5vw 0 3vw 0;
                width: 100%;

                .analysis-items {
                    padding: 3vw 0 1.6vw 0;
                    font-size: 3.3vw;
                    border-radius: .8vw;
                    width: 31%;

                    position: relative;

                    .avatars {
                        width: 80%;
                    }

                    .analysis-txt {
                        margin-top: 4vw;
                    }

                    .txt {
                        font-size: 4vw;
                        color: #711E2C;
                    }

                    .label-biaoqian {
                        position: absolute;
                        left: 50%;
                        top: 60%;
                        border-radius: 10vw;
                        line-height: 6vw;
                        color: #fff;
                        transform: translate(-50%, -50%);
                        width: 80%;

                    }

                    .biaoqian {
                        border-radius: 10vw;
                        line-height: 6vw;
                        color: #fff;
                        width: 80%;
                        margin: 2vw auto 1vw auto;
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
