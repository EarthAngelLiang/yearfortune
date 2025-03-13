<template>
  <div>
    <DateRili />
    <div class="subItem">
      <span style="font-weight:bold;">全天运程指数</span>
      <span class="buy" v-if="orderFlag == false" @click="showWin()">点击获取自己专属运势日历</span>
      <div class="tabs">
          <div v-for="(item, i) in allTexts" :key="i" :style="{'background-color': showIndex == i?allColors[i][0]:'#FFF', 'color': showIndex == i? '#FFF':'#000'}" class="tab" @click="showTab(i)">
              <span>{{ item }}</span>
          </div>
      </div>
      <div id="allChart"></div>
    </div>
    <div v-show="orderFlag == false" class="yunshi_png"></div>
    <div class="subItem">
        <span style="font-weight:bold;">生活提运建议</span>
        <span class="buy" v-if="orderFlag == false" @click="showWin()">点击获取自己专属运势日历</span>
        <div class="nowwhat">
            <div style="display:inline-block;margin:3vw 0px 3vw 12vw;font-size:3.6vw">
                <span>时间：{{ getHourTime() }}</span>
                <br>
                <span>老师建议：{{ orderData.advice }}</span>
            </div>
        </div>
        <div class="gender" :style="{'background-image': orderData.gender=='男'? `url(${require('@/assets/dailyyun/boy1.png')})`: `url(${require('@/assets/dailyyun/girl1.png')})`}"></div>
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
    <div class="subItem">
        <span style="font-weight:bold;">大事宜忌<span v-show="orderFlag" style="font-size:2.3vw;color:#B5B2B2;margin-left:5vw;" @click="moreYiji()">（点击查看更多）</span></span>
        <div style="padding-top:4vw;line-height:2;">
            <img v-lazy="require('@/assets/dailyyun/yi.png')" alt="">
            <span v-for="(item, i) in yis" :key="i" style="margin-left:3vw;font-size:3vw">{{ item }}</span>
        </div>
        <div style="padding-top:2vw;line-height:2;margin-bottom:4vw">
            <img v-lazy="require('@/assets/dailyyun/ji.png')" alt="">
            <span v-for="(item, i) in jis" :key="i" style="margin-left:3vw;font-size:3vw">{{ item }}</span>
        </div>
        <span style="font-weight:bold;">幸运密码</span>
        <span class="buy" v-if="orderFlag == false" @click="showWin()">点击获取自己专属运势日历</span>

        <div style="text-align:center;margin-top:4vw">
            <div v-for="(item, i) in positions" :key="i" :style="{'text-align':'center', 'font-size': '3vw', 'margin-right': '3vw', 'width': '16vw', 'background-color': positionColors[i], 'color': '#FFF', 'display':'inline-block', 'border-radius': '1vw'}">
                <span style="line-height:3vh;">{{ item }}</span>
            </div>
        </div>
        <div style="text-align:center;margin-top:2vw">
            <div v-for="(item, i) in orderData.positionDetail" :key="i" :style="{'margin-right': '3vw', 'width': '16vw', 'display':'inline-block'}">
                <span>{{ item }}</span>
            </div>
        </div>
    </div>
    <div class="subItem">
        <span style="font-weight:bold;">今日运程点评</span>
        <span class="buy" v-if="orderFlag == false" @click="showWin()">点击获取自己专属运势日历</span>

        <div id="yunchengEchart"></div>
        <div style="padding:0 5vw 0 5vw;margin-bottom:5vh;">
            <div class="yunchengNode" style="background-color: #8883E2;">
                <span>今日最佳</span>
            </div>
            <span style="line-height:1.5;font-size:3.4vw;">{{ orderData.best }}</span>
            <div class="yunchengNode" style="background-color: #C23D3D;">
                <span>今日注意</span>
            </div>
            <span style="line-height:1.5;font-size:3.4vw;">{{ orderData.notice }}</span>
            <div class="yunchengNode" style="background-color: #FCCA66;">
                <span>综合点评</span>
            </div>
            <span style="line-height:1.5;font-size:3.4vw;">{{ orderData.allgo }}</span>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import * as echarts from 'echarts'
import { Lunar } from 'lunar-javascript'
import DateRili from '@/components/rili/date.vue'

export default {
  props: ['orderFlag', 'orderData'],
  components: { DateRili },
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
  mounted () {
    const allChart = echarts.init(document.getElementById('allChart'))
    this.allOption.xAxis.data = this.orderData.day.x[this.showIndex]
    this.allOption.series[0].data = this.orderData.day.y[this.showIndex]

    allChart.setOption(this.allOption)
    const dianping = echarts.init(document.getElementById('yunchengEchart'))
    this.dianpingOption.series[0].data = []
    for (let i = 0; i < this.orderData.day.dp.length; i++) {
      this.dianpingOption.series[0].data.push({
        value: this.orderData.day.dp[i],
        itemStyle: {
          color: this.allColors[i][0]
        }
      })
    }
    dianping.setOption(this.dianpingOption)
  },
  data () {
    this.dt = new Date()
    this.progress = (this.dt.getHours() * 60 + this.dt.getMinutes()) / 1440 * 100
    // 标准化为15-80
    this.clockProgress = this.progress / 100 * (80 - 15) + 15
    this.lu = Lunar.fromDate(this.dt)
    this.yis = this.lu.getDayYi()
    this.jis = this.lu.getDayJi()
    return {
      positions: ['幸运数字', '幸运颜色', '财运位', '桃花位'],
      positionColors: ['#FFD580', '#E797CB', '#FD6363', '#DE6492'],
      showIndex: 0,
      // 综合、感情、事业、财运、健康的颜色和echart属性
      allTexts: ['综合', '感情', '事业', '财运', '健康'],
      allColors: [
        ['#FDBE35', 'rgba(235,181,41, 0.5)', 'rgba(235,181,41, 0)'],
        ['#F94BF8', 'rgba(249,75,248, 0.5)', 'rgba(249,75,248, 0)'],
        ['#5665FF', 'rgba(86,101,255, 0.5)', 'rgba(86,101,255, 0)'],
        ['#FF5353', 'rgba(255,83,83, 0.5)', 'rgba(255,83,83, 0)'],
        ['#62B85A', 'rgba(98,184,90, 0.5)', 'rgba(98,184,90, 0)']
      ],
      allOption: {
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
          top: '10vh',
          left: '20vw',
          right: '0',
          bottom: '20vh'
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
  methods: {
    showWin () {
      this.$emit('showWin')
    },
    moreYiji () {
      this.$router.push({ path: '/rili/jiri' })
    },
    showTab (ind) {
      this.showIndex = ind
      // 动态更新图表数据及颜色等属性
      const chart = echarts.getInstanceByDom(document.getElementById('allChart'))
      const allOption = chart.getOption()
      allOption.series[0].itemStyle.color = this.allColors[this.showIndex][0]
      allOption.series[0].areaStyle.color.colorStops[0].color = this.allColors[this.showIndex][1]
      allOption.series[0].areaStyle.color.colorStops[1].color = this.allColors[this.showIndex][2]
      allOption.xAxis.data = this.orderData.day.x[this.showIndex]
      allOption.series[0].data = this.orderData.day.y[this.showIndex]
      chart.setOption(allOption)
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
    }
  }
}
</script>
<style lang="less" scoped>
.subItem{
    width: 80vw;
    margin: 8vw auto 0 auto;
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

    #allChart{
        width: 80vw;
        height: 15vh;
        // margin: 0 auto 0 auto;
    }
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
    width: 97vw;
    height: 30vw;
    margin: 10vw auto 0 auto;
    background-size: 100%;
    background-repeat: no-repeat;
}

.redItem{
    width: 90vw;
    margin: 6vw auto 0 auto;
    border: 1px solid #F13846;
    border-radius: 4vw;
    min-height: 30vh;
    padding: 0 0 5vw 0;
}

#yunchengEchart{
    width: 75vw;
    height: 25vh;
    margin: 3vh auto 0 auto;
}
.yunchengNode{
    color: #FFF;
    height: 5vh;
    width: 20vw;
    margin: 3vh 0 2vh 0;
    text-align: center;
    border-radius: 2vw 2vw 2vw 0;
    font-size: 3.5vw;

    span{
        line-height: 5vh;
        font-size: 3.5vw;
    }
}
.buy{
  margin-left:5vw;
  font-size:3.3vw;
  color: #F44B54;
  text-decoration: underline;
}
</style>
