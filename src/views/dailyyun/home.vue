<template>
    <div class="home">
        <Tips />
        <div id="cover" v-if="showFlag==true">
            <ConfirmDate v-show="confirmDateShow" :brithDate="brithDate" @backDates="backDates" @cons="confirmDateShow = false" />
            <div class="order-win">
                <div class="order-title">
                    <span>输入你的生日</span>
                    <span style="margin-left:10vw;">掌握每天运程</span>
                </div>
                <div class="redItem" style="width:68vw;background-color:#FBF2E8;text-align:center">
                    <span style="font-size:4vw">请输入您的生辰信息</span>
                    <div class="daily_info">
                        <div class="inserts">
                            <span style="width:10vw;line-height:4vh;margin-right:3vw;">姓名：</span>
                            <input class="daily_form_item"  onkeyup="this.value=this.value.replace(/[^\u4e00-\u9fa5]/g,'')"  v-model="dailyForm.name" placeholder="请输入你的姓名" />
                        </div>
                        <div class="inserts">
                            <span style="width:10vw;line-height:4vh;margin-right:3vw;">性别：</span>
                            <input type="radio" name="gender" value="男" v-model="dailyForm.gender"><span style="margin-right:5vw;line-height:4vh;">男</span>
                            <input type="radio" name="gender" value="女" v-model="dailyForm.gender"><span style="line-height:4vh;">女</span>
                        </div>
                        <div class="inserts">
                            <span style="width:10vw;line-height:4vh;margin-right:3vw;">生日：</span>
                            <div type="text" disabled class="daily_form_item">{{ brithDate.gLabel || '请选择出生日期' }}</div>
                            <input type="text" id="dates" ref="setdate" class="birth-date-input" data-toid-hour="hour1"
                                placeholder="请输选择出生日期" name="input_date">
                            <input type="hidden" id="hour1" name="hour">
                            <div class="iconfont rili1 icon-ic_calendar"></div>
                        </div>
                        <div style="border-radius:2vw;margin:2vh auto 0 auto;width:35vw;height:4vh;background-color:#F47D7D;color:#FFF;" @click="action">
                            <span style="line-height:4vh">领取每日一运</span>
                        </div>
                    </div>
                </div>
                <div style="text-align:left;margin:1vh auto 5vh auto">
                    <span style="font-size:3vw">说明:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每日一运(简版)为免费版，输入你的出生信息，可查看你个人每日运程情况。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另有运程日历详版，可查看全年运程详情（包含每日、每周、第月、当年运势详情)，可关注公众号</span>
                </div>
            </div>
            <div style="text-align:center">
                <img style="width:5vw" @click="closeWin()" v-lazy="require('@/assets/dailyyun/close.png')">
            </div>
        </div>
        <div class="zixun-detail" @click="openService"><span class="iconfont icon-manager-fill"
                style="font-size:8vw;color:#d1420a; font-weight: 100; text-shadow:  1px 1px rgba(0, 0, 0, 0.5);"></span>
            咨询老师
        </div>
        <div class="title">
            <img v-if="gender == '男'" v-lazy="require('@/assets/dailyyun/boy.png')" alt="" class="title_img">
            <img v-else v-lazy="require('@/assets/dailyyun/girl.png')" alt="" class="title_img">
            <div class="title_right">
                <div>
                    <span>{{ getHello() }}</span>
                    <span class="red" v-if="orderFlag == true" @click="logout"> (退出)</span>
                    <span class="red" v-else> (案例)</span>
                </div>
                <div>
                    <span>{{ getTime() }}</span>
                </div>
                <div>
                    <span class="red_underline" @click="showWin()">点击修改信息，免费获取专属运势日历</span>
                </div>
            </div>
        </div>
        <div class="redItem">
            <div class="rili">
                <div class="solor">
                    <span>{{ getSolor() }}</span>
                </div>
                <div class="jieqi">
                    <span>{{ getJieqi() }}</span>
                </div>
                <div class="weekday">
                    <span>{{ getWeekday() }}</span>
                </div>
                <div class="lunar">
                    <div>
                        <span class="nongli-span">农历</span>
                    </div>
                    <span class="lunar-span">{{ getLunar() }}</span>
                </div>
                <div class="shengxiao">
                    <span>{{ getShengxiao() }}</span>
                </div>
            </div>
            <div style="text-align:center;color:#F29350;font-size:3.8vw">
                <span>今日运程寄语:{{ getJiyu() }}</span>
            </div>
            <div class="allday">
                <span style="font-weight:bold;">全天运程指数</span>
                <div class="tabs">
                    <div v-for="(item, i) in allTexts" :key="i" :style="{'background-color': showIndex == i?allColors[i][0]:'#FFF', 'color': showIndex == i? '#FFF':'#000'}" class="tab" @click="showTab(i)">
                        <span>{{ item }}</span>
                    </div>
                </div>
                <div id="all"></div>
            </div>
            <div class="live">
                <span style="font-weight:bold;">生活提运建议</span>
                <div class="nowwhat">
                    <div style="display:inline-block;margin:3vw 0px 3vw 12vw;font-size:3.6vw">
                        <span>时间：{{ getHourTime() }}</span>
                        <br>
                        <span>老师建议：{{ getAdvice() }}</span>
                    </div>
                </div>
                <div class="gender" :style="{'background-image': gender=='男'? `url(${require('@/assets/dailyyun/boy1.png')})`: `url(${require('@/assets/dailyyun/girl1.png')})`}"></div>
                <div class="progress-bar" :style="progressStyle">
                    <div :style="clockStyle"></div>
                    <div class="progress-bar-fill" :style="{'width': `${this.progress}%`, 'height': '3vh'}"></div>
                </div>
                <div class="hours">
                    <div style="display:inline-block;width:16vw;"> <span>0</span></div>
                    <div style="display:inline-block;width:16vw;"> <span>6</span></div>
                    <div style="display:inline-block;width:16vw;"> <span>12</span></div>
                    <div style="display:inline-block;width:16vw;"> <span>18</span></div>
                    <div style="display:inline-block;width:4vw;"> <span>24</span></div>
                </div>
            </div>
        </div>
        <div class="yunshi_png"></div>
        <div class="redItem">
            <span style="font-weight:bold;">大事宜忌</span>
            <div style="padding-top:4vw;line-height:2;">
                <img v-lazy="require('@/assets/dailyyun/yi.png')" alt="">
                <span v-for="(item, i) in yis" :key="i" style="margin-left:3vw;font-size:3vw">{{ item }}</span>
            </div>
            <div style="padding-top:2vw;line-height:2;margin-bottom:4vw">
                <img v-lazy="require('@/assets/dailyyun/ji.png')" alt="">
                <span v-for="(item, i) in jis" :key="i" style="margin-left:3vw;font-size:3vw">{{ item }}</span>
            </div>
            <span style="font-weight:bold;">幸运密码</span>
            <div style="text-align:center;margin-top:4vw">
                <div v-for="(item, i) in positions" :key="i" :style="{'text-align':'center', 'font-size': '3vw', 'margin-right': '3vw', 'width': '16vw', 'background-color': positionColors[i], 'color': '#FFF', 'display':'inline-block', 'border-radius': '1vw'}">
                    <span style="line-height:3vh;">{{ item }}</span>
                </div>
            </div>
            <div style="text-align:center;margin-top:2vw">
                <div v-for="(item, i) in positionDetail" :key="i" :style="{'margin-right': '3vw', 'width': '16vw', 'display':'inline-block'}">
                    <span>{{ item }}</span>
                </div>
            </div>
        </div>
        <div class="redItem">
            <span style="font-weight:bold;">今日运程点评</span>
            <div id="yunchengEchart"></div>
            <div style="padding:0 3vw;">
                <div class="yunchengNode" style="background-color: #8883E2;">
                    <span>今日最佳</span>
                </div>
                <span style="line-height:1.5;font-size:3.4vw;">{{ best }}</span>
                <div class="yunchengNode" style="background-color: #C23D3D;">
                    <span>今日注意</span>
                </div>
                <span style="line-height:1.5;font-size:3.4vw;">{{ notice }}</span>
                <div class="yunchengNode" style="background-color: #FCCA66;">
                    <span>综合点评</span>
                </div>
                <span style="line-height:1.5;font-size:3.4vw;">{{ allgo }}</span>
            </div>
        </div>
        <div class="redItem" style="text-align:center;padding:5vw 0;margin-bottom:20vw;">
            <span style="font-size:5vw;color:#FF4F4F">热门测算</span>
            <div style="width:95vw;text-align:left;margin-top:6vw;padding-left:2vw;">
                <div class="productItem" v-for="(item, i) in products" :key="i" @click="productClick(i)">
                    <img v-lazy="getProductUrl(i)">
                    <br>
                    {{ item[0] }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Cookies from 'js-cookie'
import { Lunar } from 'lunar-javascript'
import * as echarts from 'echarts'
import { openService } from '@/uitls/js/name_service'
import ConfirmDate from '@/components/name/confirm/confirm_date.vue'
import { mapState, mapMutations } from 'vuex'
import { RuiDatepicker } from '@/uitls/js/rui_date'
import { post } from '@/axios/axios'
import Tips from '@/components/name/tips/tips.vue'

export default ({
  components: { Tips, ConfirmDate },
  setup () {
  },
  async mounted () {
    if (Cookies.get('order') != null) {
      // 请求服务器获取订单结果
      this.orderFlag = true
      const res = await post('/name_dayluck/order_result', {
        order_id: Cookies.get('order')
      })
      if (res.result === 0) {
        this.name = res.name
        this.gender = res.gender

        this.showIndex = 0
        const all = echarts.init(document.getElementById('all'))
        this.option.xAxis.data = this.hour24
        this.allday_score_dic = res.allday_score_dic
        this.option.series[0].data = this.allday_score_dic[this.allTexts[this.showIndex]]

        all.setOption(this.option)

        const dianping = echarts.init(document.getElementById('yunchengEchart'))
        this.dianpingOption.series[0].data = []
        this.dianpingData = [res.today_score_dic['综合'], res.today_score_dic['感情'], res.today_score_dic['财运'], res.today_score_dic['事业'], res.today_score_dic['健康']]
        for (let i = 0; i < this.dianpingData.length; i++) {
          this.dianpingOption.series[0].data.push({
            value: this.dianpingData[i],
            itemStyle: {
              color: this.allColors[i][0]
            }
          })
        }
        dianping.setOption(this.dianpingOption)

        this.yis = res.day_yiji.yi
        this.jis = res.day_yiji.ji
        this.positionDetail = [res.luck_number, res.luck_color, res.caiyun_fangwei, res.taohuawei]
        this.best = res.today_best
        this.notice = res.today_notice
        this.allgo = res.synthetical_des
      } else {
        this.setShowTips(res.errMsg)

        // 展示案例
        const all = echarts.init(document.getElementById('all'))
        this.option.xAxis.data = this.hour24
        this.option.series[0].data = this.sample

        all.setOption(this.option)
        const dianping = echarts.init(document.getElementById('yunchengEchart'))
        this.dianpingOption.series[0].data = []
        this.dianpingData = [23, 27, 65, 88, 99]
        for (let i = 0; i < this.dianpingData.length; i++) {
          this.dianpingOption.series[0].data.push({
            value: this.dianpingData[i],
            itemStyle: {
              color: this.allColors[i][0]
            }
          })
        }
        dianping.setOption(this.dianpingOption)
      }
    } else {
      // 展示案例
      const all = echarts.init(document.getElementById('all'))
      this.option.xAxis.data = this.hour24
      this.option.series[0].data = this.sample

      all.setOption(this.option)
      const dianping = echarts.init(document.getElementById('yunchengEchart'))
      this.dianpingOption.series[0].data = []
      this.dianpingData = [23, 27, 65, 88, 99]
      for (let i = 0; i < this.dianpingData.length; i++) {
        this.dianpingOption.series[0].data.push({
          value: this.dianpingData[i],
          itemStyle: {
            color: this.allColors[i][0]
          }
        })
      }
      dianping.setOption(this.dianpingOption)
    }

    const timer = setInterval(function () {
      if (document.getElementById('dates')) {
        new RuiDatepicker().init('#dates')
        clearInterval(timer) // 清除定时监听
      }
    }, 100)
  },
  watch: {
    brithDate (val) {
      console.log(val, 'valasfrawerfetewrhgrtyry')
      this.confirmDateShow = true
    }
  },
  data () {
    this.dt = new Date()
    this.lu = Lunar.fromDate(this.dt)
    this.progress = (this.dt.getHours() * 60 + this.dt.getMinutes()) / 1440 * 100
    // 标准化为15-80
    this.clockProgress = this.progress / 100 * (80 - 15) + 15
    this.yis = this.lu.getDayYi()
    this.jis = this.lu.getDayJi()
    return {
      confirmDateShow: false,
      dailyForm: {
        name: '',
        gender: '男',
        birth: ''
      },
      showFlag: false,
      hour24: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
      sample: [10, 1, 42, 23, 4, 5, 67, 17, 58, 79, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
      products: [
        ['夫妻关系测评', '夫妻关系测评.png', '/love'],
        ['宝宝潜能挖掘', '宝宝潜能挖掘.png', '/baby'],
        ['龙年运程', '龙年运程.png', '/dailyyun'],
        ['个人姻缘', '个人姻缘.png', '/person'],
        ['姓名测试', '姓名测试.png', '/name'],
        ['运程日历', '运程日历.png', '/rili'],
        ['大师起名', '大师起名.png', '#']
      ],
      best: '今天你的感情运还算不错，喜欢的人或许会主动联系你问你有没有时间出来一起吃个饭，虽然你表面上没有什么反应，其实内心早就乐开了花，让你期待与对方的相聚也可以趁这个机会去更近一步了解彼此，增进两人的关系。在这里灵妹妹建议你，可以提前准备一些小礼物送给对方，不需要太昂贵，如果是亲手做的将更有意义，关系也能更近一步。',
      notice: '今天你的事业运较差，做什么都不在状态，也没什么精气神，可能是昨晚熬夜赶任务，导致你今天整个人有点混乱，情绪不稳，这个时候可以先放下手中活，泡杯咖啡放松一下心情，不然再继续也是无用功;如果是找工作的状态，那么最好能找准领域，不要太分散，否则会更加迷茫。在这里灵妹妹提醒你，对待工作要全身心的投入，才能保证工作的质量，不断的提高自己的职能，才能让自己在当今社会立于不败之地。',
      allgo: '今天你的情绪有些过度兴奋，甚至会有出人意料的惊人之举，有很多新奇的想法和点子。在工作上你有许多创新的想法，不妨一一记录下来，不过在和同事、上司沟通时，你有些缺乏耐性，又急于表现自己，一些奇怪的言行容易让对方大跌眼镜。多些考虑后再决定是否要将自己的想法表露出来，不要过于心急。',
      name: '陈伟波',
      gender: '男',
      orderFlag: false,
      showIndex: 0,
      positions: ['幸运数字', '幸运颜色', '财运位', '桃花位'],
      positionColors: ['#FFD580', '#E797CB', '#FD6363', '#DE6492'],
      positionDetail: ['6', '红色', '正南', '正北'],
      // 综合、感情、事业、财运、健康的颜色和echart属性
      allTexts: ['综合', '感情', '事业', '财运', '健康'],
      allColors: [
        ['#FDBE35', 'rgba(235,181,41, 0.5)', 'rgba(235,181,41, 0)'],
        ['#F94BF8', 'rgba(249,75,248, 0.5)', 'rgba(249,75,248, 0)'],
        ['#5665FF', 'rgba(86,101,255, 0.5)', 'rgba(86,101,255, 0)'],
        ['#FF5353', 'rgba(255,83,83, 0.5)', 'rgba(255,83,83, 0)'],
        ['#62B85A', 'rgba(98,184,90, 0.5)', 'rgba(98,184,90, 0)']
      ],
      option: {
        xAxis: {
          type: 'category',
          show: false
        },
        yAxis: {
          type: 'value',
          splitNumber: 2
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        grid: { // 指定图表在容器中的位置
          top: '10px',
          left: '30px',
          right: '0px',
          bottom: '10px'
        },
        series: [{
          symbol: 'none',
          type: 'line',
          // 线条样式
          itemStyle: {
            color: '#FDBE35'
          },
          // 区域填充样式
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: 'rgba(235,181,41, 0.5)' // 0% 处的颜色
              }, {
                offset: 1, color: 'rgba(235,181,41, 0)' // 100% 处的颜色
              }]
            }
          }
        }]
      },
      dianpingOption: {
        grid: { // 指定图表在容器中的位置
          top: '20px',
          left: '30px',
          right: '0px',
          bottom: '20px'
        },
        xAxis: {
          data: ['综合', '感情', '事业', '财运', '健康']
        },
        yAxis: {
          max: 100,
          min: 0,
          interval: 20,
          axisLabel: {
            formatter: function (value, index) {
              if (value === 100) {
                return '满'
              } else if (value === 80) {
                return '优'
              } else if (value === 60) {
                return '良'
              } else if (value === 40) {
                return '中'
              } else if (value === 20) {
                return '差'
              }
            }
          }
        },
        series: [
          {
            type: 'bar',
            barWidth: '25%',
            itemStyle: {
              normal: {
                // 这里设置柱形图圆角 [左上角，右上角，右下角，左下角]
                barBorderRadius: [8, 8, 0, 0]
              }
            }
          }
        ]
      }
    }
  },
  computed: {
    ...mapState(['brithDate', 'wxCode']),
    progressStyle () {
      return {
        margin: '0 auto 0 6vw',
        width: '68vw',
        height: '2vh',
        backgroundColor: '#6ED8D8'
      }
    },
    fillStyle () {
      return {
        width: `${this.progress}%`,
        height: '3vh'
      }
    },
    clockStyle () {
      return {
        position: 'absolute',
        left: `${this.clockProgress}%`,
        width: '5vw',
        height: '2.6vh',
        backgroundImage: `url(${require('@/assets/dailyyun/clock.png')})`,
        margin: '-6vw 0 0 0',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat'
      }
    }
  },
  methods: {
    ...mapMutations(['setShowTips']),
    async action () {
      if (!this.brithDate.gCalendar) return this.setShowTips('请选择出生日期')
      if (!this.dailyForm.name) return this.setShowTips('请输入您的名字')

      const requestParams = {
        name: this.dailyForm.name,
        gender: this.dailyForm.gender,
        calender: this.brithDate.usetype
      }
      let dateArr = []
      if (this.brithDate.usetype === '公历') {
        dateArr = this.brithDate.gCalendar.split('/')
        requestParams.birthday = dateArr[0]
        requestParams.hour = dateArr[1]
      } else if (this.brithDate.usetype === '农历') {
        dateArr = this.brithDate.nCalendar.split('/')
        requestParams.birthday = dateArr[0]
        requestParams.hour = dateArr[1]
      }
      const res = await post('/name_dayluck/place_order', requestParams)
      console.log('res=', res)
      if (res.result === 0) {
        // 存储订单到本地cookie
        Cookies.set('order', res.order_id)
        location.reload()
      } else {
        this.setShowTips(res.errMsg)
      }
    },
    openService () {
      openService()
    },
    backDates () {
      this.$refs.setdate.click()
    },
    getProductUrl (i) {
      return require('@/assets/dailyyun/' + this.products[i][1])
    },
    productClick (i) {
      this.$router.push(this.products[i][2])
    },
    getHello () {
      let word = '上午好'
      if (this.dt.getHours() >= 18) {
        word = '晚上好'
      } else if (this.dt.getHours() >= 12) {
        word = '下午好'
      }
      return word + '， ' + this.name
    },
    getHourTime () {
      let minHour, maxHour
      const hour = this.dt.getHours()
      if (hour < 1) {
        minHour = '00:00'
        maxHour = '01:00'
      } else if (hour > 22) {
        minHour = '23:00'
        maxHour = '00:00'
      } else if (hour % 2 === 0) {
        minHour = (hour < 10 ? '0' : '') + hour + ':00'
        maxHour = ((hour + 2) < 10 ? '0' : '') + (hour + 2) + ':00'
      } else {
        minHour = ((hour - 1) < 10 ? '0' : '') + (hour - 1) + ':00'
        maxHour = ((hour + 1) < 10 ? '0' : '') + (hour + 1) + ':00'
      }
      return minHour + ' - ' + maxHour
    },
    getAdvice () {
      return '今天适合什么颜色衣服'
    },
    getTime () {
      const timeStr = this.$dateFormat(this.dt, false)
      const hours = (this.dt.getHours() + '').padStart(2, 0)
      const minutes = (this.dt.getMinutes() + '').padStart(2, 0)

      return timeStr + ' ' + hours + ':' + minutes + ' ' + this.$getShichen(this.dt.getHours()) + '时'
    },
    logout () {
      this.orderFlag = false
      this.showFlag = false
      Cookies.remove('order')
      location.reload()
    },
    closeWin () {
      this.showFlag = false
      const timer = setInterval(function () {
        if (document.getElementById('dates')) {
          new RuiDatepicker().init('#dates')
          clearInterval(timer) // 清除定时监听
        }
      }, 100)
    },
    showWin () {
      this.showFlag = true
    },
    getSolor () {
      const month = this.dt.getMonth() + 1
      return month.toString() + '月' + this.dt.getDate().toString() + '日'
    },

    getJieqi () {
      if (!this.lu.getJieQi()) {
        return '--'
      } else {
        return this.lu.getJieQi()
      }
    },
    getWeekday () {
      return this.$store.state.weekArr[this.dt.getDay()]
    },
    getLunar () {
      return this.$store.state.mmArr[this.lu.getMonth() - 1] + this.$store.state.ddArr[this.lu.getDay() - 1]
    },
    getShengxiao () {
      return this.lu.getYearInGanZhi() + '·' + this.lu.getYearShengXiao()
    },
    getJiyu () {
      return '“状态在线的一天”'
    },
    allClick () {
      console.log('allclick')
    },
    showTab (ind) {
      this.showIndex = ind
      // 动态更新图表数据及颜色等属性
      const chart = echarts.getInstanceByDom(document.getElementById('all'))
      const option = chart.getOption()
      option.series[0].itemStyle.color = this.allColors[this.showIndex][0]
      option.series[0].areaStyle.color.colorStops[0].color = this.allColors[this.showIndex][1]
      option.series[0].areaStyle.color.colorStops[1].color = this.allColors[this.showIndex][2]
      option.xAxis.data = this.hour24
      if (this.orderFlag) {
        option.series[0].data = this.allday_score_dic[this.allTexts[this.showIndex]]
      } else {
        option.series[0].data = this.sample
      }
      chart.setOption(option)
    }
  }
})
</script>

<style lang="less" scoped>
.home {
    background-color: #fff;
    position: relative;
    width: 100vw;

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

    .title{
        padding-top: 3vh;
        width: 84vw;
        display: flex;

        .title_img{
            height: 12vh;
        }
        .title_right{
            margin: 3vw 0 auto -5vw;
            div{
                margin-bottom: 1.5vw;
                span{
                    font-size: 3.3vw;
                }
            }

            .red{
                color: #F44B54;
            }
            .red_underline{
                color: #F44B54;
                text-decoration: underline;
            }
        }
    }

    .rili{
        background-image: url('@/assets/dailyyun/rili.png');
        width: 45vw;
        height: 60vw;
        margin: 3vw auto;
        background-size: 100%;
        background-repeat: no-repeat;
        text-align:center;

        .solor{
            font-size: 6vw;
            padding-top: 10vw;
            color: #6ED8D8;
            span{
                font-family: 'zzqxmt';
            }
        }
        .jieqi{
            color: #F99E2F;
            padding-top: 3vw;
            font-size: 4vw;
        }
        .weekday{
            color: #6ED8D8;
            padding-top: 3vw;
            font-weight: bold;
            font-size: 4vw;
        }
        .lunar{
            padding-top: 3vw;
            display:flex;

            div{
                margin: 0 4vw 0 4vw;
                width: 10vw;
                background-color: #6ED8D8;
                border-radius: 1vw;
                .nongli-span{
                    font-size: 4vw;
                    color: #fff;
                    font-weight: bold;
                }
            }

            .lunar-span{
                color: #6ED8D8;
                font-size: 5vw;
                font-family: 'zzqxmt';
            }
        }
        .shengxiao{
            color: #6ED8D8;
            padding-top: 3vw;
            font-size: 4vw;
            span{
                font-family: 'zzqxmt';
            }
        }
    }

    .allday{
        width: 80vw;
        margin: 8vw auto 3vw auto;
        .tabs{
            margin: 3vw auto 8vw auto;
            text-align: center;
            .tab{
                border-radius: 1vw;
                width: 15vw;
                height: 3vh;
                display: inline-block;
            }
        }

        #all{
            width: 80vw;
            height: 15vh;
            // margin: 0 auto 0 auto;
        }
    }

    .live{
        width: 80vw;
        margin: 8vw auto 3vw auto;
        .nowwhat{
            background-image: url('@/assets/dailyyun/now.png');
            width: 68vw;
            height: 27vw;
            margin: 3vw auto;
            background-size: 100%;
            background-repeat: no-repeat;
        }
        .gender{
            width: 11vw;
            height: 16vw;
            background-size: 100%;
            background-repeat: no-repeat;
            margin: -12vw 0 0 6vw;
        }
        .progress-bar{
            display: inline-block;
            border-radius: 1vw;
            overflow: hidden;
        }
        .progress-bar-fill{
            display: inline-block;
            transition: width 0.5s;
            background:-webkit-repeating-linear-gradient(-45deg, #6ED8D8 0px, #6ED8D8 3px, #28B5B5 3px, #28B5B5 5px);
        }
        .hours{
            width: 68vw;
            height: 5vw;
            margin: 0vw auto;
            text-align: left;
        }
    }

    .yunshi_png{
        background-image: url('@/assets/dailyyun/yunshi.png');
        width: 98vw;
        height: 30vw;
        margin: 10vw auto 0 5vw;
        background-size: 100%;
        background-repeat: no-repeat;
    }

    .redItem{
        width: 90vw;
        margin: 6vw auto 0 auto;
        border: 1px solid #F13846;
        border-radius: 4vw;
        min-height: 30vh;
        padding: 5vw;
    }

    #yunchengEchart{
        width: 80vw;
        height: 30vh;
        // margin: 0 auto 0 auto;
    }
    .yunchengNode{
        color: #FFF;
        height: 5vh;
        width: 20vw;
        margin: 3vh 0;
        text-align: center;
        border-radius: 3vw 3vw 3vw 0;

        span{
            line-height: 5vh;
        }
    }
    .productItem{
        display: inline-block;
        text-align: center;
        height: 15vh;
        font-size: 3vw;
        margin: 0 2vw 3vw 0;
        img{
            width:20vw;
            height:13vh;
            margin-bottom: -1vh;
        }
    }
}
#cover {
    position: absolute;
    left: 0px;
    top: 0px;
    background: rgba(0, 0, 0, 0.5);
    width: 100vw; /*宽度设置为100%，这样才能使隐藏背景层覆盖原页面*/
    height: 100vh;
    filter: alpha(opacity=100); /*设置透明度为100%*/
    opacity: 1; /*非IE浏览器下设置透明度为100%*/
    display: block;
    z-Index: 999;

    .order-win{
        margin:45vw auto 0 auto;
        width: 78vw;
        z-index:10;
        height:63vh;
        background-color: #FFF;
        padding: 5vw;

        .order-title{
            line-height:6vh;
            font-weight:bold;
            background-color:#F47D7D;
            color:#FFF;
            width:68vw;
            height:6vh;
            text-align:center;
            margin:0 auto;
        }
    }
    .daily_info {
        width: 58vw;
        margin: 4vw auto 0 auto;
        font-size: 3vw;
        .inserts {
            width: 60vw;
            margin: 1vw auto;
            position: relative;
            display: flex;

            .birth-date-input {
                position: absolute;
                left: 13vw;
                width: 43vw;
                height: 4vh;
                padding-left: 2vw;
                font-size:3vw;
            }

            .rili1 {
                z-index:10;
                font-size: 4vw;
                color: #EB4B4B;
                margin: 2vw 0 0 -5vw;
                //使得点击事件可以穿透到下层元素，但自身无法接收点击事件
                pointer-events: none;
            }

            .daily_form_item {
                text-align: left;
                width: 43vw;
                height: 4vh;
                font-size: 3vw;
                padding-left:2vw;
            }

            input:-moz-placeholder,
            textarea:-moz-placeholder {
                font-size: 3vw;
            }

            input:-ms-input-placeholder,
            textarea:-ms-input-placeholder {
                font-size: 3vw;
            }

            input::-webkit-input-placeholder,
            textarea::-webkit-input-placeholder {
                font-size: 3vw;
            }
        }
    }
}
</style>
