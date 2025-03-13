<template>
  <div class="home">
    <ConfirmDate v-show="confirmDateShow" :brithDate="brithDate" @backDates="backDates" @cons="confirmDateShow = false" />
    <Tips />
    <div class="order-detail" @click="$router.push('/name/order')"><span class=" iconfont icon-sousuoxiao"></span> 订单查询</div>
    <div class="zixun-detail" @click="openService"><span class=" iconfont icon-kefu1"
        style="font-size:8vw;color:#d1420a; font-weight: 100; text-shadow:  1px 1px rgba(0, 0, 0, 0.5);"></span> 在线客服
    </div>
    <div class="container">
      <img  v-lazy="require('@/assets/name/bg/index_bg.png')" alt="" class="top-bg">
      <div class="transprent"></div>
      <div class="jianbian"></div>
      <div>
        <TopYear :year="'2023癸卯年'"></TopYear>
      </div>
      <div class="text-name">
      </div>
      <div class="yellow-btn">
        <YellowBtn :btnTxt="'揭晓姓名命理  助你择取吉名'"></YellowBtn>
      </div>
      <div class="txt-content">
        <TxtContent></TxtContent>
      </div>
      <div class="order-info">
        <BoxBg>
          <template v-slot:exhibition>
            <div class="title-label font-info-type">
              输入信息，查看你的姓名匹配度
            </div>
            <div class="info-box">
              <div class="input-info">
                <div class="label font-info-type">您的姓氏</div>
                <input type="text"  onkeyup="this.value=this.value.replace(/[^\u4e00-\u9fa5]/g,'')" class="info "  v-model="orderParams.lastname" placeholder="请输入您的姓氏">
              </div>
              <div class="input-info">
                <div class="label font-info-type">您的名字</div>
                <input type="text"  onkeyup="this.value=this.value.replace(/[^\u4e00-\u9fa5]/g,'')"  class="info  " v-model="orderParams.name" placeholder="请输入名字（不含姓氏）">
              </div>
              <div class="input-info">
                <div class="label font-info-type">您的性别</div>

                <div class="radio-class font-info-type" @click="orderParams.gender = '男'"
                  :class="orderParams.gender === '男' ? 'active-r' : ''">男</div>
                <div class="radio-class font-info-type" @click="orderParams.gender = '女'"
                  :class="orderParams.gender === '女' ? 'active-r' : ''">女</div>
              </div>
              <div class="input-info">
                <div class="label font-info-type">出生日期</div>
                <div type="text" disabled class="birth-date" >{{ brithDate.gLabel || '请选择出生日期' }}</div>
                <input type="text" id="dates" ref="setdate" class="birth-date-input" data-toid-hour="hour1"
                  placeholder="请输选择出生日期" name="input_date">
                <input type="hidden" id="hour1" name="hour">
                <div class="iconfont rili icon-ic_calendar" ></div>
              </div>
              <div class="nong-txt" style="height: 6vw;margin-top:-1vw; color: rgb(156, 70, 9,.8);">{{ brithDate.nLabel }}
              </div>
              <div class="sub-test">
                <BtnAction @action="action" :name="'立即测试'"></BtnAction>
              </div>
              <div class="use-number bottom-text">
                已为5910088人生成报告，满意率98.7%
              </div>
            </div>
          </template>
          <template v-slot:floother>
            <div class="bottom-introduction">
              <div class="agremment-box" @click="is_agremment = !is_agremment"
                :class="is_agremment ? 'is_agremment' : ''">
                <div class="agremment" v-show="is_agremment"></div>
              </div>
              <div>查看 <span class="oranges" @click="$router.push('/name/agreement_use')">《用户协议》</span> 和<span class="oranges"
                  @click="$router.push('/name/privacy')">《隐私协议》</span> </div>
            </div>
          </template>
        </BoxBg>
      </div>
      <div class="show-detail">
        <BoxBg>
          <template v-slot:exhibition>
            <TopDecoration :name="'姓名对人生有哪些影响'"></TopDecoration>
            <div class="card">
              <div class="card-item">
                <img  v-lazy="require('@/assets/name/index_img/1.png')" alt="" class="card-img">
                <div class="titile-label font-white-type2">个人运程</div>
                <div class="font-white-type3">八字和姓名</div>
                <div class="font-white-type3">影响命理荣枯</div>
              </div>
              <div class="card-item">
                <img  v-lazy="require('@/assets/name/index_img/2.png')" alt="" class="card-img">
                <div class="titile-label font-white-type2">个人姻缘</div>
                <div class="font-white-type3">八字和姓名</div>
                <div class="font-white-type3">影响情感姻缘</div>
              </div>
              <div class="card-item">
                <img  v-lazy="require('@/assets/name/index_img/3.png')" alt="" class="card-img">
                <div class="titile-label font-white-type2">个人性格</div>
                <div class="font-white-type3">八字和姓名</div>
                <div class="font-white-type3">体现性格强弱</div>
              </div>
              <div class="card-item">
                <img  v-lazy="require('@/assets/name/index_img/4.png')" alt="" class="card-img">
                <div class="titile-label font-white-type2">个人事业</div>
                <div class="font-white-type3">八字和姓名</div>
                <div class="font-white-type3">影响工作趋向</div>
              </div>
            </div>
          </template>
          <template v-slot:floother>
            <div class="bottom-introduction">
              <img  v-lazy="require('@/assets/name/icon_img/luopan.png')" alt="" class="introduction-img">
              <div class="introduction">了解姓名命理影响，把握自己人生脉络</div>
            </div>
          </template>
        </BoxBg>
      </div>
      <div class="show-detail">
        <BoxBg>
          <template v-slot:exhibition>
            <TopDecoration :name="'谁需要看姓名测试'"></TopDecoration>
            <div class="list-box">
              <div class="list-item">
                <img  v-lazy="require('@/assets/name/index_img/11.png')" alt="" class="left-img">
                <div class="test-txt"><span>新名字， <span style="color:red;">宝宝姓名与生辰八字匹配</span> 吗</span> </div>
              </div>
              <div class="list-item">
                <img  v-lazy="require('@/assets/name/index_img/12.png')" alt="" class="right-img">
                <div class="test-txt1"><span>旧名字，<span style="color:red;">已用名与生辰八字匹配</span>吗</span> </div>
              </div>
              <div class="list-item">
                <img  v-lazy="require('@/assets/name/index_img/13.png')" alt="" class="left-img">
                <div class="test-txt"><span>运程不佳，想换新名字<span style="color:red;">增强运势</span></span> </div>
              </div>
              <div class="list-item">
                <img  v-lazy="require('@/assets/name/index_img/14.png')" alt="" class="right-img">
                <div class="test-txt1"><span>关系不顺，想换新名字<span style="color:red;">增强人缘</span></span> </div>
              </div>
            </div>
          </template>
        </BoxBg>
      </div>
      <div class="show-detail">
        <BoxBg>
          <template v-slot:exhibition>
            <TopDecoration :name="'姓名评价标准'"></TopDecoration>
            <div class="nav-box">
              <NavText :name="'五大维度    专业剖析'"></NavText>
            </div>
            <div class="distribution">
              <img  v-lazy="require('@/assets/name/index_img/wbx.png')" alt="" class="content-img">
              <div class="t1">
                <div class=" elements1">五行喜用</div>
              </div>
              <div class="t2">
                <div class=" elements2">生肖</div>
              </div>
              <div class="t3">
                <div class=" elements3">字形</div>
              </div>
              <div class="t4">
                <div class=" elements4">字性</div>
              </div>
              <div class="t5">
                <div class=" elements5">音律</div>
              </div>
            </div>
          </template>
        </BoxBg>
      </div>
      <div class="show-detail">
        <BoxBg>
          <template v-slot:exhibition>
            <TopDecoration :name="'赠送内容'"></TopDecoration>
            <div class="type-list-item">
              <img  v-lazy="require('@/assets/name/index_img/rs.png')" alt="" class="label-type">
              <div class="introduction-type">了解高度和发展方向</div>
              <img  v-lazy="require('@/assets/name/index_img/21.png')" alt="" class="type-img">
            </div>
            <div class="type-list-item">
              <img  v-lazy="require('@/assets/name/index_img/xg.png')" alt="" class="label-type">
              <div class="introduction-type">了解你的性格修点、缺点</div>
              <img  v-lazy="require('@/assets/name/index_img/22.png')" alt="" class="type-img">
            </div>
            <div class="type-list-item">
              <img  v-lazy="require('@/assets/name/index_img/hy.png')" alt="" class="label-type">
              <div class="introduction-type">了解个人的未来恋爱婚姻情况</div>
              <img  v-lazy="require('@/assets/name/index_img/23.png')" alt="" class="type-img">
            </div>
            <div class="type-list-item">
              <img  v-lazy="require('@/assets/name/index_img/jk.png')" alt="" class="label-type">
              <div class="introduction-type">了解你的个人健康趋势情况</div>
              <img  v-lazy="require('@/assets/name/index_img/24.png')" alt="" class="type-img">
            </div>
            <div class="type-list-item" style="margin-bottom: 4vw;">
              <img  v-lazy="require('@/assets/name/index_img/sy.png')" alt="" class="label-type">
              <div class="introduction-type">了解适合你的工作及趋势</div>
              <img  v-lazy="require('@/assets/name/index_img/25.png')" alt="" class="type-img">
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
import TopYear from '@/components/name/text_ui/page_top_year.vue'
import YellowBtn from '@/components/name/text_ui/yellow_btn_text.vue'
import TxtContent from '@/components/name/text_ui/red_bg_text.vue'

import BoxBg from '@/components/name/box_bg/box_bg.vue'
import BtnAction from '@/components/name/text_ui/sub_btn.vue'

import TopDecoration from '@/components/name/text_ui/top_decoration.vue'

import NavText from '@/components/name/text_ui/nav_text.vue'
import { RuiDatepicker } from '@/uitls/js/rui_date'
import Tips from '@/components/name/tips/tips.vue'
import { mapState, mapMutations } from 'vuex'

import { post } from '@/axios/axios'
import { openService } from '@/uitls/js/name_service'
export default {
  name: 'HomeView',
  components: {
    TopYear,
    YellowBtn,
    TxtContent,
    BoxBg,
    BtnAction,
    TopDecoration,
    NavText,
    ConfirmDate,
    Tips
  },
  data () {
    return {
      // 控制选择日期组件后的确认框
      confirmDateShow: false,
      // 是否同意协议
      is_agremment: false,
      // 没有点击同意协议时提示文字
      // 支付信息
      orderParams: {
        lastname: '',
        name: '',
        gender: '男',
        birthday: '',
        hour: null,
        calender: ''
      },
      sData: {

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
    ...mapMutations(['setShowTips', 'setOrderId', 'setAmount', 'setWxCode']),
    openService () {
      openService()
    },
    backDates () {
      this.$refs.setdate.click()
    },
    async action () {
      if (!this.is_agremment) return this.setShowTips('请仔细阅读并同意协议')
      if (!this.brithDate.gCalendar) return this.setShowTips('请选择出生日期')
      if (!this.orderParams.lastname) return this.setShowTips('请输入您的姓氏')
      if (!this.orderParams.name) return this.setShowTips('请输入您的名字')
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
      if (this.$route.query.torderid) {
        requestParams.channel = this.$route.query.channel
        requestParams.torderid = this.$route.query.torderid
      }
      console.log(requestParams, 'requestParamsrequestParamsrequestParams')
      const res = await post('/name_examine/place_order', requestParams)
      if (res.Msg === '淘宝订单下单成功') {
        this.setOrderId(this.$route.query.torderid)
        this.$router.push({ path: '/name/loading' })
      } else if (res.result === 0) {
        if (res.order_id) {
          this.setOrderId(res.order_id)
          this.setAmount(res.pay_amount)
          localStorage.setItem('overtime', new Date().getTime() + 7200000)
          this.$router.push({ path: '/name/play' })
        } else {
          this.setShowTips('数据返回缺少orderid')
        }
      } else {
        this.setShowTips(res.errMsg)
      }
    },
    async checkIsHave () {
      const res = await post('/name_examine/tb_order_judge', { torderid: this.$route.query.torderid })
      if (res.Msg === '订单号已存在') {
        this.setOrderId(this.$route.query.torderid)
        this.$router.replace({ path: '/name/loading' })
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

      .title-label {
        line-height: 16vw;
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
          line-height: 11vw;
          margin-bottom: 3vw;
          position: relative;

          .rili {
            position: absolute;
            right: 3vw;
            font-size: 5vw;
            color: #C12F2B;
          }

          .label {
            width: 28vw;
          }

          .info {
            // flex: 1;
            width: calc(100% - 28vw);
          }

          .radio-class {
            border-radius: 600px;
            width: 8vw;
            height: 8vw;
            line-height: 8vw;
            margin-right: 6vw;
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

      .sub-test {
        margin-top: 2vw;
      }

      .bottom-introduction {
        margin: 1vw 0 4vw 0;
        display: flex;
        justify-content: center;
        align-items: center;

        .agremment-box {
          width: 4vw;
          height: 4vw;
          border: 1px solid #000;
          border-radius: 4vw;
          margin-right: 1vw;
          display: flex;
          justify-content: center;
          align-items: center;

          .agremment {
            background-color: #fff;
            width: 1.4vw;
            height: 1.4vw;
            border-radius: 2vw;
          }
        }

        .is_agremment {
          border: 1px solid #2E9CFE !important;
          background-color: #2E9CFE;
        }

        .oranges {
          color: rgb(255, 118, 82);
          text-decoration: underline;
        }
      }

      .use-number {}
    }

    .show-detail {
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin-top: 8vw;
      align-items: center;

      .card {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        padding: 2vw 1vw;

        .card-item {
          background-color: #C12F2B;
          border: 1px solid #C4705E;
          padding: 1vw;
          border-radius: 1.2vw;
          margin-top: 3vw;
          padding-bottom: 2vw;

          .card-img {
            width: 38vw;
            margin-bottom: 1vw;
          }
        }

      }

      .list-box {
        padding: 7vw 0 4vw 0;

        .list-item {
          background-color: #DFCCAA;
          width: 82vw;
          margin: auto;
          position: relative;
          margin-top: 7vw;
          height: 14vw;
          border-radius: 1.2vw;
          padding: 1vw 0;

          .left-img {
            position: absolute;
            top: -4vw;
            left: 2vw;
            width: 20vw;
          }

          .right-img {
            position: absolute;
            top: -4vw;
            right: 2vw;
            width: 20vw;
          }

          .test-txt {
            width: 54vw;
            margin-left: 24vw;
            text-align: start;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            font-size: 4vw;
            height: 100%;
          }

          .test-txt1 {
            width: 54vw;
            margin-left: 5vw;
            text-align: start;
            font-size: 4vw;
            display: flex;
            align-items: center;
            height: 100%;
          }
        }
      }

      .nav-box {
        display: flex;
        justify-content: center;
        margin-top: 4vw;
      }

      .distribution {
        position: relative;

        .content-img {
          width: 50vw;
          height: 50vw;
          margin-top: 21.4vw;
          margin-bottom: 16vw;
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
          background-color: rgba(85, 106, 132, 0.7);
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
          background-color: rgba(210, 95, 46, 0.7);
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
          background-color: rgba(55, 146, 63, 0.7);
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
          font-size: 3.6vw;
          background-color: rgba(209, 135, 56, 0.7);
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
          font-size: 3.6vw;
          background-color: rgba(20, 83, 96, 0.7);
        }

        .t1 {
          position: absolute;
          top: 6vw;
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
          top: 31vw;
          left: 12.5%;
          width: 12vw;
          height: 12vw;
          border-radius: 14vw;
          transform: translate(-50%, 0);
          background-image: url('@/assets/name/icon_img/bl.png');
          background-size: cover;
        }

        .t3 {
          position: absolute;
          top: 31vw;
          left: 87%;
          width: 12vw;
          height: 12vw;
          border-radius: 14vw;
          transform: translate(-50%, 0);
          background-image: url('@/assets/name/icon_img/bl.png');
          background-size: cover;

        }

        .t4 {
          position: absolute;
          top: 68vw;
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
          top: 68vw;
          left: 75%;
          width: 12vw;
          height: 12vw;
          border-radius: 14vw;
          transform: translate(-50%, 0);
          background-image: url('@/assets/name/icon_img/bl.png');
          background-size: cover;

        }
      }

      .type-list-item {
        .label-type {
          margin-top: 4vw;
          width: 20vw;
        }

        .introduction-type {
          line-height: 12vw;
          font-size: 4vw;
        }

        .type-img {
          width: 80vw;
        }
      }

      .bottom-introduction {
        background-color: #B69882;
        position: relative;
        height: 9vw;
        line-height: 9vw;
        padding-left: 10vw;
        border-radius: 6vw;
        color: #fff;
        font-weight: 700;
        font-family: Source Han Serif CN;
        font-size: 3.8vw;
        width: 82vw;
        margin: 2vw 0 6vw 4vw;

        .introduction-img {
          position: absolute;
          top: -.5vw;
          left: -4vw;
          width: 14vw;
          height: 10vw;
        }
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
</style>
