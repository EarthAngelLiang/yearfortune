<template>
  <div class="home">
    <ConfirmDate v-show="confirmDateShow" :brithDate="is_numbers === 1 ? brithDate : brithDate2" @backDates="backDates"
      @cons="confirmDateShow = false" />
    <Tips />
    <div class="order-detail" @click="$router.push('/love/check_order')"><span class=" iconfont icon-sousuoxiao"></span>
      订单查询
    </div>
    <div class="zixun-detail"><span class=" iconfont icon-kefu1" @click="openService"
        style="font-size:8vw;color:#d1420a; font-weight: 100; text-shadow:  1px 1px rgba(0, 0, 0, 0.5);"></span> 在线客服
    </div>
    <div class="container">
      <div class="bottom-bg"> </div>
      <TopBg />

      <div class="order-info" style="margin-top:105vw;">
        <BoxBg>
          <template v-slot:exhibition>
            <div class="title-label font-info-type">
              输入信息，查看你的婚姻匹配度
            </div>
            <div class="info-box">
              <div class="person">
                <div class="avatar">
                  <img  v-lazy="require('@/assets/love/index/1.png')" alt="" class="ren">
                </div>
                <div class="inputss">
                  <div class="input-info" style="border-bottom: 1px solid #000;">
                    <div class="label  ">姓名</div>
                    <input type="text" v-model="orderParams.malename"  onkeyup="this.value=this.value.replace(/[^\u4e00-\u9fa5]/g,'')" style="font-size: 4vw;" class="info-in"
                      placeholder="请输入男方姓名" />
                  </div>
                  <div class="input-info" @click="is_numbers = 1">
                    <div class="label  ">生日</div>
                    <div type="text" disabled class="birth-date">{{ brithDate.gLabel || '请选择出生日期' }}
                    </div>
                    <input type="text" style="font-size: 4vw;" id="dates" ref="setdate" class="birth-date-input"
                      data-toid-hour="hour1" placeholder="请输选择出生日期" name="input_date">
                    <input type="hidden" id="hour1" name="hour">
                    <div class="iconfont rili icon-ic_calendar"></div>
                  </div>
                </div>
              </div>
              <!-- {{ brithDate.nLabel || '' }} -->
              <div style="margin: 1vw 0; height: 4vw;line-height: 4vw;"></div>
              <div class="person">
                <div class="avatar">
                  <img  v-lazy="require('@/assets/love/index/2.png')" alt="" class="ren">
                </div>
                <div class="inputss">
                  <div class="input-info" style="border-bottom: 1px solid #000;">
                    <div class="label  ">姓名</div>
                    <input type="text" v-model="orderParams.femalename" onkeyup="this.value=this.value.replace(/[^\u4e00-\u9fa5]/g,'')" class="info-in" placeholder="请输入女方姓名" />
                  </div>
                  <div class="input-info" @click="is_numbers = 2">
                    <div class="label ">生日</div>
                    <div type="text" disabled class="birth-date">{{ brithDate2.gLabel || '请选择出生日期' }}
                    </div>
                    <input type="text" id="dates2" ref="setdate2" class="birth-date-input" data-toid-hour="hour2"
                      placeholder="请输选择出生日期" name="input_date2">
                    <input type="hidden" id="hour2" name="hour2">
                    <div class="iconfont rili icon-ic_calendar"></div>
                  </div>
                </div>
              </div>
              <!-- {{ brithDate2.nLabel || '' }} -->
              <div style="margin: 1vw 0; height: 4vw;line-height: 4vw;"></div>
            </div>
          </template>
        </BoxBg>
      </div>

      <div class="now-test">
        <div class="test-btn" @click="action">立即合婚</div>
      </div>
      <div class="check-pro">
        <div class="check-box"><input type="checkbox" v-model="is_agremment"> 查看 <span
            @click="$router.push('/love/agreement_use')">《用户协议》</span>
          和 <span @click="$router.push('/love/privacy')">《隐私协议》</span> </div>
        <div class="away">已为5910088人生成报告，满意率98.7%</div>
      </div>
      <div class="order-info">
        <BoxBg>
          <template v-slot:exhibition>
            <TopDecoration :name="'为什么要合婚'"></TopDecoration>
            <div class="card">
              <div class="card-item">
                <img  v-lazy="require('@/assets/love/index/3.png')" alt="" class="card-img">
                <div class="marri-problem">恐婚,怕婚</div>
                <div class="marri-problem">婚前焦虑</div>
              </div>
              <div class="card-item">
                <img  v-lazy="require('@/assets/love/index/4.png')" alt="" class="card-img">
                <div class="marri-problem">婚姻是否顺利是否</div>
                <div class="marri-problem">能白头偕老</div>
              </div>

              <div class="card-item">
                <img  v-lazy="require('@/assets/love/index/5.png')" alt="" class="card-img">
                <div class="marri-problem">未来婚姻生活是否和谐?</div>
                <div class="marri-problem">如何化解婚姻生活困难?</div>
              </div>
              <div class="card-item">
                <img  v-lazy="require('@/assets/love/index/6.png')" alt="" class="card-img">
                <div class="marri-problem">我们的婚姻会幸福吗?</div>
                <div class="marri-problem">婚姻危机? 婚外情?</div>
              </div>
            </div>
          </template>
        </BoxBg>
      </div>
      <div class="order-info">
        <BoxBg>
          <template v-slot:exhibition>
            <TopDecoration :name="'什么人必测八字合婚'"></TopDecoration>
            <div class="card">
              <div class="card-item">
                <LabelHeads :label-name="'备婚人士'" />
                <img  v-lazy="require('@/assets/love/index/21.png')" alt="" class="card-img1">
                <div class="introduction"><span style="color:rgb(193, 61, 56);">2023</span> 考虑结婚却面临阻碍，对未来婚姻感到<span
                    style="color:rgb(193, 61, 56);">迷茫</span>的人</div>
              </div>
              <div class="card-item">
                <LabelHeads :label-name="'新婚夫妻'" />
                <img  v-lazy="require('@/assets/love/index/22.png')" alt="" class="card-img1">
                <div class="introduction">新婚尴尬期，想了解双方<span style="color:rgb(193, 61, 56);">八字相宜</span>程度，想提升<span
                    style="color:rgb(193, 61, 56);">未来幸福</span>度的夫妻</div>
              </div>

              <div class="card-item">
                <LabelHeads :label-name="'婚姻临危者'" />
                <img  v-lazy="require('@/assets/love/index/23.png')" alt="" class="card-img1">
                <div class="introduction">婚姻关系中存在<span style="color:rgb(193, 61, 56);">矛盾</span>,有<span
                    style="color:rgb(193, 61, 56);">分离</span>的风险，需要寻找挽救方法的夫妻</div>
              </div>
              <div class="card-item">
                <LabelHeads :label-name="'家庭守卫者'" />
                <img  v-lazy="require('@/assets/love/index/24.png')" alt="" class="card-img1">
                <div class="introduction">想学会如何<span style="color:rgb(193, 61, 56);">经营婚姻</span>、<span
                    style="color:rgb(193, 61, 56);">维稳家庭</span>、保持和睦的人</div>
              </div>
            </div>
          </template>
        </BoxBg>
      </div>

      <div class="order-info">
        <BoxBg>
          <template v-slot:exhibition>
            <TopDecoration :name="'八字合婚合什么'"></TopDecoration>
            <div class="img-lovers">
              <div class="lovers">
                <img  v-lazy="require('@/assets/love/index/31.png')" alt="" class="ren-love">
              </div>
              <div class="red-line">合婚</div>
              <div class="lovers">
                <img  v-lazy="require('@/assets/love/index/32.png')" alt="" class="ren-love">
              </div>
            </div>
            <div class="lovers-introduction">
              <span style="color:rgb(193, 61, 56) ;">合婚 :</span>
              把男女二人的出生时间进行八字排盘通过传统八字学术，把二人有利、不利因素结合分析，对不利的方面及婚姻情况指出，并给予合理可行的情感修复、感情相处建议。
            </div>
            <div class="red-comment">使二人婚姻顺利、白头偕老、成就美好婚姻组建幸福家庭。</div>
          </template>
        </BoxBg>
      </div>

      <div class="order-info">
        <BoxBg>
          <template v-slot:exhibition>
            <TopDecoration :name="'八字合婚是从哪几个方面测评'"></TopDecoration>
            <SubHead :subName="'五大维度'">
              <template v-slot:content>
                <div class="distribution">
                  <img  v-lazy="require('@/assets/name/index_img/wbx.png')" alt="" class="content-img">
                  <div class="t1">
                    <div class=" elements1"></div>
                  </div>
                  <div class="t2">
                    <div class=" elements2"></div>
                  </div>
                  <div class="t3">
                    <div class=" elements3"></div>
                  </div>
                  <div class="t4">
                    <div class=" elements4"></div>
                  </div>
                  <div class="t5">
                    <div class=" elements5"></div>
                  </div>
                </div>
                <div class="wuwei-txt">
                  <div class="wu-one">贵人、承受力、事业、财运、名利角度来了解双方是否相合</div>
                  <div class="wu-two">长期相处角度来了解双方是否相合</div>
                  <div class="wu-three">金、木、水、火、土五行角度来了解双方是否相合</div>
                  <div class="wu-four">生肖关系来了解双方是否相合</div>
                  <div class="wu-five">格局运势趋势来了解双方是否相合</div>
                </div>
              </template>
            </SubHead>

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
import TopBg from '@/components/love/bg/top_bg.vue'
import ConfirmDate from '@/components/name/confirm/confirm_date.vue'
import LabelHeads from '@/components/love/text_ui/label_heads.vue'
// import YellowBtn from '@/components/love/text_ui/yellow_btn.vue'
// import TxtContent from '@/components/love/text_ui/text_content.vue'
import SubHead from '@/components/love/bg/subhead_bg.vue'
import BoxBg from '@/components/love/bg/box_bg.vue'
import TopDecoration from '@/components/love/text_ui/top_decoration.vue'
import { RuiDatepicker } from '@/uitls/js/rui_date'
import Tips from '@/components/name/tips/tips.vue'
import { mapState, mapMutations } from 'vuex'
import { openService } from '@/uitls/js/name_service'
import { post } from '@/axios/axios'

export default {
  name: 'HomeS',
  components: {
    TopBg,
    // YellowBtn,
    // TxtContent,
    BoxBg,
    ConfirmDate,
    Tips,
    TopDecoration,
    LabelHeads,
    SubHead
  },
  data () {
    return {
      is_numbers: 1,
      // 控制选择日期组件后的确认框
      confirmDateShow: false,
      // 是否同意协议
      is_agremment: false,
      // 没有点击同意协议时提示文字
      orderParams: {
        malename: '',
        malebirthday: '',
        malehour: '',
        malecalender: '阳历',
        femalename: '',
        femalebirthday: '',
        femalehour: '',
        femalecalender: '阳历'
      },
      sData: {

      }
    }
  },
  computed: {
    ...mapState(['brithDate', 'brithDate2', 'orderid', 'amount', 'wxCode'])
  },
  watch: {
    brithDate (val) {
      console.log(val, 'valssss')
      let dateArr = []
      val.usetype === '公历' ? this.orderParams.malecalender = '阳历' : this.orderParams.malecalender = this.brithDate.usetype
      if (val.usetype === '公历') {
        dateArr = val.gCalendar.split('/')
        this.orderParams.malebirthday = dateArr[0]
        this.orderParams.malehour = dateArr[1]
      } else if (val.usetype === '农历') {
        dateArr = val.nCalendar.split('/')
        this.orderParams.malebirthday = dateArr[0]
        this.orderParams.malehour = dateArr[1]
      }
      this.confirmDateShow = true
    },
    brithDate2 (val) {
      let dateArr = []
      val.usetype === '公历' ? this.orderParams.femalecalender = '阳历' : this.orderParams.femalecalender = this.brithDate.usetype
      if (val.usetype === '公历') {
        dateArr = val.gCalendar.split('/')
        this.orderParams.femalebirthday = dateArr[0]
        this.orderParams.femalehour = dateArr[1]
        this.confirmDateShow = true
      } else if (val.usetype === '农历') {
        dateArr = val.nCalendar.split('/')
        this.orderParams.femalebirthday = dateArr[0]
        this.orderParams.femalehour = dateArr[1]
        this.confirmDateShow = true
      }
    }
  },
  mounted () {
    new RuiDatepicker().init('#dates')
    new RuiDatepicker().init('#dates2')
    if (this.$route.query.torderid) {
      this.checkIsHave()
    }
  },
  methods: {
    ...mapMutations(['setShowTips', 'setOrderIdLove', 'setAmountLove', 'setWxCode']),
    openService () {
      openService()
    },
    backDates () {
      this.$refs.setdate.click()
      this.$refs.setdate2.click()
    },
    async action () {
      if (!this.is_agremment) return this.setShowTips('请仔细阅读并同意协议')
      if (!this.orderParams.malename) return this.setShowTips('请输入男方姓名')
      if (!this.orderParams.malebirthday) return this.setShowTips('请输选择男方生日')
      if (!this.orderParams.femalename) return this.setShowTips('请输入女方姓名')
      if (!this.orderParams.femalebirthday) return this.setShowTips('请输选择女方生日')
      const requestParams = JSON.parse(JSON.stringify(this.orderParams))
      requestParams.malehour === '未知' ? requestParams.malehour = 99 : requestParams.malehour = parseInt(requestParams.malehour)
      requestParams.femalehour === '未知' ? requestParams.femalehour = 99 : requestParams.femalehour = parseInt(requestParams.femalehour)
      if (this.$route.query.torderid) {
        requestParams.channel = this.$route.query.channel
        requestParams.torderid = this.$route.query.torderid
      }

      const res = await post('/name_hehun/place_order', requestParams)
      console.log(res, '结果')
      if (res.Msg === '淘宝订单下单成功') {
        this.setOrderIdLove(this.$route.query.torderid)
        this.$router.push({ path: '/love/loading' })
      } else if (res.result === 0) {
        if (res.order_id) {
          this.setOrderIdLove(res.order_id)
          this.setAmountLove(res.pay_amount)
          localStorage.setItem('originalAmountLove', res.original_amount)
          localStorage.setItem('overtimeLove', new Date().getTime() + 7200000)
          this.$router.push({ path: '/love/play' })
        } else {
          this.setShowTips('数据返回缺少orderid')
        }
      } else {
        this.setShowTips(res.msg)
      }
    },
    async checkIsHave () {
      const res = await post('/name_hehun/tb_order_judge', { torderid: this.$route.query.torderid })
      if (res.Msg === '订单号已存在') {
        this.setOrderIdLove(this.$route.query.torderid)
        this.$router.push({ path: '/love/loading' })
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

    .bottom-bg {
      width: 100vw;
      height: calc(100% - 164vw);
      background-image: linear-gradient(to bottom, #FF8799, #F1B2BB);
      position: absolute;
      top: 164vw;
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
      margin-top: 4vw;

      .title-label {
        line-height: 16vw;
      }

      .info-box {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        .person {
          display: flex;
          justify-content: space-between;
          border: 1px solid rgb(221, 154, 165);
          border-radius: 2.2vw;
          padding: 2vw 0;

          .avatar {
            width: 20vw;

            .ren {
              height: 15vw;
              border-radius: 20vw;
            }
          }

          .label {
            font-size: 4.2vw;
          }

          .input-info {
            display: flex;
            align-items: center;
            width: 56vw;
            line-height: 8vw;
            position: relative;

            .info-in {
              width: 40vw;
              padding-left: 3vw;
              background-color: transparent;
              line-height: 8vw;
              font-size: 4vw;
            }

            .info-in::-webkit-input-placeholder {
              /* placeholder字体大小 */
              font-size: 4vw;
            }

            .rili {
              position: absolute;
              right: 1vw;
              font-size: 5vw;
              color: #C12F2B;
            }

            .birth-date {
              color: #A5A2A1;
              font-size: 4vw;
              padding-left: 3vw;
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
      }

      .card {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        padding: 2vw 1vw;

        .card-item {
          border: 1px solid rgb(202, 142, 152);
          padding: 1vw;
          border-radius: 1.2vw;
          margin-top: 4vw;
          padding-bottom: 2vw;
          font-size: 3.4vw;
          width: 38vw;
          position: relative;

          .introduction {
            text-align: left;
          }

          .card-img {
            width: 34vw;
            margin-bottom: 1vw;
          }

          .card-img1 {
            margin-top: 9vw;
            width: 20vw;
            margin-bottom: 3vw;
          }
        }

      }

      .lovers-introduction {
        padding: 0 3vw;
        font-weight: 500;
        text-align: left;
      }

      .red-comment {
        padding: 0 3vw;
        font-weight: 500;
        text-align: left;
        font-size: 4.4vw;
        color: rgb(193, 61, 56);
        margin: 2vw 0;
      }

      .distribution {
        position: relative;

        .content-img {
          width: 40vw;
          height: 40vw;
          margin-top: 24.4vw;
          margin-bottom: 34vw;
          transform: rotateY(180deg);
        }

        .elements1 {
          height: 100%;
          width: 100%;
          border-radius: 14vw;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1vw;
          color: #FFFFE5;
          font-size: 3.6vw;
          background-image: url('@/assets/love/index/51.png');
          background-size: 100%;
        }

        .elements2 {
          height: 100%;
          width: 100%;
          border-radius: 14vw;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1vw;
          color: #FFFFE5;
          font-size: 3.6vw;
          background-image: url('@/assets/love/index/55.png');
          background-size: 100%;
        }

        .elements3 {
          height: 100%;
          width: 100%;
          border-radius: 14vw;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1vw;
          color: #FFFFE5;
          font-size: 3.6vw;
          background-image: url('@/assets/love/index/52.png');
          background-size: 100%;
        }

        .elements4 {
          height: 100%;
          width: 100%;
          border-radius: 14vw;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1vw;
          color: #FFFFE5;
          background-image: url('@/assets/love/index/54.png');
          background-size: 100%;
        }

        .elements5 {
          height: 100%;
          width: 100%;
          border-radius: 14vw;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1vw;
          color: #FFFFE5;
          background-image: url('@/assets/love/index/53.png');
          background-size: 100%;
        }

        .t1 {
          position: absolute;
          top: 12vw;
          left: 50%;
          width: 12vw;
          height: 12vw;
          border-radius: 14vw;
          transform: translate(-50%, 0);
          background-image: url('@/assets/name/icon_img/bl.png');
          background-size: cover;
        }

        .t2 {
          position: absolute;
          top: 30vw;
          left: 15.5%;
          width: 12vw;
          height: 12vw;
          border-radius: 14vw;
          transform: translate(-50%, 0);
          background-image: url('@/assets/name/icon_img/bl.png');
          background-size: cover;
        }

        .t3 {
          position: absolute;
          top: 30vw;
          left: 85%;
          width: 12vw;
          height: 12vw;
          border-radius: 14vw;
          transform: translate(-50%, 0);
          background-image: url('@/assets/name/icon_img/bl.png');
          background-size: cover;

        }

        .t4 {
          position: absolute;
          top: 61vw;
          left: 29%;
          width: 12vw;
          height: 12vw;
          border-radius: 14vw;
          transform: translate(-50%, 0);
          background-image: url('@/assets/name/icon_img/bl.png');
          background-size: cover;

        }

        .t5 {
          position: absolute;
          top: 61vw;
          left: 69%;
          width: 12vw;
          height: 12vw;
          border-radius: 14vw;
          transform: translate(-50%, 0);
          background-image: url('@/assets/name/icon_img/bl.png');
          background-size: cover;

        }
      }

      .wuwei-txt {
        font-size: 3.4vw;
        text-align: left;

        .wu-one {
          position: absolute;
          top: 4vw;
          left: 60%;
          width: 25vw;
        }

        .wu-two {
          position: absolute;
          top: 42vw;
          left: 3%;
          width: 18vw;
        }

        .wu-three {
          position: absolute;
          top: 42vw;
          left: 73%;
          width: 20vw;
        }

        .wu-four {
          position: absolute;
          top: 75vw;
          left: 16%;
          width: 20vw;
        }

        .wu-five {
          position: absolute;
          top: 75vw;
          left: 57%;
          width: 20vw;
        }
      }

      .img-lovers {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0 4vw;
        margin-top: 12vw;
        margin-bottom: 5vw;

        .red-line {
          height: 6vw;
          color: #fff;
          padding: 0 4vw;
          border-radius: 10vw;
          background: linear-gradient(180.00deg, rgb(236, 85, 79) 39.695%, rgba(236, 85, 79, 0) 100%);
        }

        .ren-love {
          width: 24vw;
        }

      }
    }

  }

  .now-test {
    display: flex;
    justify-content: center;
    margin: 4vw 0;

    .test-btn {
      line-height: 10vw;
      text-align: center;
      border-radius: 2vw;
      width: 50vw;
      background-image: linear-gradient(to bottom, #F487B5, #B8325A);
      box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.5);
      color: #fff;
      font-size: 5.2vw;
      font-weight: 700;
    }
  }

  .check-pro {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    align-items: center;
    line-height: 7vw;

    span {
      color: rgb(159, 30, 30);
    }

    .away {
      font-weight: 500;
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
}</style>
