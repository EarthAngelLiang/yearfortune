<template>
  <div>
    <div id="yunChart">
    </div>
    <div v-show="orderFlag == false" class="yunshi_png"></div>
    <div class="subItem">
      <img v-lazy="require('@/assets/rili/start.png')" class="title_img">
      <span class="title_text">开始时间</span>
      <div class="rectNode">
        <span>{{ getBeginText() }}</span>
      </div>
    </div>
    <!-- 事业和财运分开，去掉表格，贵人和其他删掉 -->
    <div v-for="(item, index) in orderData.year.yuns" :key="index" class="subItem">
      <img v-lazy="require('@/assets/rili/' + yunImg[index])" class="title_img" :style="{'width': yunImgWidth[index], 'height': yunImgHeight[index]}">
      <span class="title_text" :style="{'color': yunColor[index], 'line-height': yunImgHeight[index]}">{{ yunTitle[index] }}</span>
      <div v-if="yunTitle[index] === '外部环境年运分析' || yunTitle[index] === '个人运势年运分析'" style="margin:3vw 0 0 2vw;">
        <span style="font-weight:bold;font-size:3.3vw;">{{ yunSubTitle[index] }}</span>
        <span class="buy" v-if="orderFlag == false" @click="showWin()">点击获取自己专属运势日历</span>
      </div>
      <div class="rectNode">
        <div style="text-align:center;margin-bottom:3vw;">
          <img v-if="yunTitle[index] === '个人运势年运分析'" v-lazy="require('@/assets/love/12/' + orderData.shengxiao + '.png')" style="width:15vw;height:15vw;">
        </div>
        <div v-for="(subItem, subInd) in item" :key="subInd">
          <span>{{ subItem }}</span>
        </div>
      </div>
    </div>
    <div class="subItem">
      <img v-lazy="require('@/assets/rili/house.png')" class="title_img">
      <span class="title_text" style="color: #4C4C4C;">家居提运建议</span>
      <div style="margin:3vw 0 0 2vw;">
        <span style="font-weight:bold;font-size:3.3vw;">家居建议</span>
        <span class="buy" v-if="orderFlag == false" @click="showWin()">点击获取自己专属运势日历</span>
      </div>
      <div class="rectNode">
        <div class="jiajuNode">
          <span>九宫飞星分析</span>
        </div>
        <div v-for="(subItem, subInd) in orderData.year.jiaju[0]" :key="subInd">
          <span>{{ subItem }}</span>
        </div>
        <div class="jiugong">
          <div class="title">
            <span>2024年九宫飞星</span>
          </div>
          <div class="area">
            <div class="areaNode" v-for="(item, index) in orderData.year.jiugong" :key="index">
              <div style="height: 3.3vw;">
                <span style="background-color:#F3B488;line-height:3vw;">{{ item[0] }}</span>
              </div>
              <div style="height: 3.3vw;">
                <span>{{ item[1] }}</span>
              </div>
              <div style="height: 4vw;">
                <span style="font-size:2.8vw;color:#BF2D2D;font-weight:bold;">{{ item[2] }}</span>
              </div>
              <div style="height: 6vw;">
                <span>{{ item[3] }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="jiajuNode">
          <span>个人调理建议</span>
        </div>
        <div style="padding:0 1vw 0 1vw;margin-bottom:5vw;" v-for="(subItem) in orderData.year.jiaju[1]" :key="subItem">
          <span>{{ subItem }}</span>
        </div>
        <!-- <div class="jiajuNode">
          <span>家居调理建议</span>
        </div>
        <div class="position">
          <div class="positionNode" v-for="(item, index) in orderData.year.position" :key="index">
            <span style="line-height:12vw">{{ item }}</span>
          </div>
        </div> -->
        <div class="jiajuNode">
          <span>开运布局</span>
        </div>
        <div style="padding:0 1vw 0 1vw;margin-bottom:5vw;" v-for="(subItem) in orderData.year.jiaju[2]" :key="subItem">
          <span>{{ subItem }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import * as echarts from 'echarts'

export default {
  props: ['orderFlag', 'orderData'],
  mounted () {
    const yunChart = echarts.init(document.getElementById('yunChart'))
    this.yunOption.xAxis.data = this.orderData.year.x
    this.yunOption.series[0].data = this.orderData.year.y

    yunChart.setOption(this.yunOption)
  },
  data () {
    return {
      yunOption: {
        xAxis: {
          type: 'category',
          axisLine: {
            symbol: ['none', 'arrow'],
            lineStyle: {
              color: '#C53A3A'
            }
          },
          axisLabel: { // x轴文字的配置
            show: true,
            textStyle: {
              color: '#000'
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: true,
            symbol: ['none', 'arrow'],
            lineStyle: {
              color: '#C53A3A'
            }
          },
          max: 100,
          min: 0,
          interval: 20,
          axisLabel: {
            textStyle: {
              color: '#000'
            },
            formatter: function (value, index) {
              if (value === 100) {
                return '大吉'
              } else if (value === 80) {
                return '吉'
              } else if (value === 60) {
                return '平'
              } else if (value === 40) {
                return '差'
              } else if (value === 20) {
                return '很差'
              }
            }
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        grid: { // 指定图表在容器中的位置
          top: '10vh',
          left: '33vw',
          right: '0',
          bottom: '20vh'
        },
        series: [{
          type: 'line',
          smooth: true,
          markPoint: {
            data: [
              {
                type: 'max',
                name: '最大值',
                symbol: 'rect',
                symbolSize: [56, 20],
                symbolOffset: [0, -15],
                itemStyle: {
                  color: '#F44B54'
                },
                label: {
                  formatter: function (params) {
                    return '运势高峰'
                  }
                }
              },
              {
                type: 'min',
                name: '最小值',
                symbol: 'rect',
                symbolSize: [56, 20],
                symbolOffset: [0, 15],
                itemStyle: {
                  color: '#FDCA5D'
                },
                label: {
                  color: '#7A7B7B',
                  formatter: function (params) {
                    return '运势低谷'
                  }
                }
              }
            ]

          },
          // 线条样式
          itemStyle: {
            color: '#C53A3A'
          }
        }]
      },
      yunSubTitle: ['年运分析', '你的生肖分析'],
      yunTitle: ['外部环境年运分析', '个人运势年运分析', '财富运势', '事业运势', '感情（人缘）运势', '健康运势'],
      yunImg: ['enviroment.png', 'yunshi.png', 'treasure.png', 'treasure.png', 'renyuan.png', 'health.png', 't.png'],
      yunImgWidth: ['8vw', '7vw', '6vw', '6vw', '8vw', '12vw', '8vw'],
      yunImgHeight: ['8vw', '9vw', '6vw', '6vw', '8vw', '12vw', '8vw'],
      yunColor: ['#73B07F', '#D55198', '#9A7649', '#9A7649', '#D55198', '#69AC45', '#956F49']
    }
  },
  methods: {
    showWin () {
      this.$emit('showWin')
    },
    getBeginText () {
      return '从2024年2月4日星期日 (农历2023年腊月廿五)开始，正式进入甲辰龙年，立春前出生的生肖为兔 (上一年)，立春后出生的生肖为龙 (本年)。'
    }
  }
}
</script>
<style lang="less" scoped>
.subItem{
  width: 75vw;
  margin: 5vw auto 0 auto;

  .title_img{
    width:6vw;
    height:6vw;
    margin-right:3vw;
  }

  .title_text{
   font-weight:bold;
   color:#E67037;
   line-height:6vw;
  }

  .rectNode{
    border: solid 2px #E879A3;
    border-radius: 3vw;
    margin: 2vh 0 3vh 0;
    padding: 2vw;
    align-items:center;
    span{
      font-size: 3.2vw;
    }

    .jiugong{
      background-color: #EBBABA;
      border-radius: 1vw;
      margin: 5vw 0 8vw 0;
      text-align: center;
      padding: 3vw 0 0 0;

      .title{
        color: #FFF;
        text-align:center;
        margin-top: 2vw;

        span{
          font-size: 5vw;
        }
      }

      .area{
        width: 70vw;
        padding: 4vw 0vw 8vw 6.5vw;
        display: flex;
        flex-wrap: wrap;
        text-align: center;

        .areaNode{
          width: 19vw;
          background-color: #FFF;

          span{
            font-size: 2.4vw;
            // line-height: 3vw;
          }
        }
      }
    }
  }

  .jiajuNode{
    color: #FFF;
    text-align: center;
    height: 3.7vh;
    width: 27vw;
    margin: 0 auto 5vw auto;
    border-radius: 3vw;
    background: linear-gradient(180.00deg, rgba(242, 41, 41, 0),rgba(246, 48, 48, 0.2) 100%),linear-gradient(180.00deg, rgba(235, 58, 58, 0.2),rgba(240, 23, 23, 0) 100%),rgb(235, 164, 164);
    span{
      line-height: 3.7vh;
    }
  }

  .position{
    width:50vw;
    padding: 4vw 0vw 8vw 6.5vw;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    margin: 0 auto;

    .positionNode{
      border: 1px solid #E0A2AC;
      width: 12vw;
      height: 12vw;
    }
  }
}

.buy{
  margin-left:5vw;
  font-size:3.3vw;
  color: #F44B54;
  text-decoration: underline;
}

#yunChart{
    width: 75vw;
    height: 27vh;
    margin: 5vw auto 0 auto;
}
</style>
