<template>
  <div>
    <div class="months">
      <span :class="currMonth == index ? 'monthCheck' : 'monthUncheck'" v-for="index of 12" :key="index">{{ index }}月</span>
    </div>
    <div class="subItem">
      <span style="font-weight:bold;">本月运程</span>
      <span class="buy" v-if="orderFlag == false" @click="showWin()">点击获取自己专属运势日历</span>
      <div class="tabs">
          <div v-for="(item, i) in allTexts" :key="i" :style="{'background-color': showIndex == i?allColors[i][0]:'#FFF', 'color': showIndex == i? '#FFF':'#000'}" class="tab" @click="showTab(i)">
              <span>{{ item }}</span>
          </div>
      </div>
      <div id="monthChart"></div>
    </div>
    <div v-show="orderFlag == false" class="yunshi_png"></div>
    <div class="subItem" style="margin-top:0">
      <div class="title">
        <span style="font-weight:bold;font-size:3.6vw;">本月特征</span>
        <span class="buy" v-if="orderFlag == false" @click="showWin()">点击获取自己专属运势日历</span>
      </div>
      <div style="margin:0 auto;" v-for="(item, index) in orderData.monthTezheng" :key="index">
        <span style="line-height:1.8;font-size:3vw;">{{ item }}</span>
      </div>
    </div>
    <div class="subItem">
      <div class="title">
        <span style="font-weight:bold;font-size:3.6vw;">月运特点</span>
        <span class="buy" v-if="orderFlag == false" @click="showWin()">点击获取自己专属运势日历</span>
      </div>
      <div v-for="(item, index) in yunTitle" :key="index">
        <div class="yunchengNode" :style="{'background-color': yunColor[index]}">
          <span>{{ item }}</span>
        </div>
        <div style="display:flex;" v-if="item == '感情'">
          <div style="width:15vw;font-size:3.3vw;text-align:center;margin:1vw 0 0 10vw;">
            <span style="line-height:4vh;">桃花指数</span>
          </div>
          <div class="star-box">
            <div class="star-bg">
                <img  v-lazy="require('@/assets/rili/star_empty.png')" alt="" class="bg">
                <img  v-lazy="require('@/assets/rili/star_empty.png')" alt="" class="bg">
                <img  v-lazy="require('@/assets/rili/star_empty.png')" alt="" class="bg">
                <img  v-lazy="require('@/assets/rili/star_empty.png')" alt="" class="bg">
                <img  v-lazy="require('@/assets/rili/star_empty.png')" alt="" class="bg">
            </div>
            <div class="star"
                :style="{ 'width': (Math.ceil(((orderData.ganqingScore + (orderData.ganqingScore !== Math.floor(orderData.ganqingScore) ? 0.5 - orderData.ganqingScore + Math.floor(orderData.ganqingScore) : 0) * 0.4) / 5) * 100)) + '%' }">
                <img  v-lazy="require('@/assets/rili/star_full.png')" alt="" class="bg">
                <img  v-lazy="require('@/assets/rili/star_full.png')" alt="" class="bg">
                <img  v-lazy="require('@/assets/rili/star_full.png')" alt="" class="bg">
                <img  v-lazy="require('@/assets/rili/star_full.png')" alt="" class="bg">
                <img  v-lazy="require('@/assets/rili/star_full.png')" alt="" class="bg">
            </div>

        </div>
        </div>
        <div style="margin:0 auto;" v-for="(subItem, subInd) in orderData.monthYun[index]" :key="subInd">
          <span style="line-height:1.8;font-size:3vw;">{{ subItem }}</span>
        </div>
      </div>
    </div>
    <div class="subItem" style="margin-bottom:10vh;">
      <div class="title">
        <span style="font-weight:bold;font-size:3.6vw;">本月行业态势</span>
        <span class="buy" v-if="orderFlag == false" @click="showWin()">点击获取自己专属运势日历</span>
      </div>
      <div class="hangyeNode" v-for="(item, index) in orderData.hangye" :key="index">
        <img v-lazy="require('@/assets/rili/wx/' + hangyeImg[index])" alt="">
        <div style="margin:0 auto;" v-for="(subItem, subInd) in item" :key="subInd">
          <span style="line-height:1.8;font-size:3vw;">{{ subItem }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  props: ['orderFlag', 'orderData'],
  data () {
    this.dt = new Date()
    return {
      currMonth: this.dt.getMonth() + 1,
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
      yunTitle: ['感情', '事业', '财运', '健康'],
      yunColor: ['#E879A3', '#C23D3D', '#FCCA66', '#71B672'],
      hangyeImg: ['h.png', 'm.png', 't.png', 'j.png', 's.png']
    }
  },
  mounted () {
    const monthChart = echarts.init(document.getElementById('monthChart'))
    this.allOption.xAxis.data = this.orderData.month.x[this.showIndex]
    this.allOption.series[0].data = this.orderData.month.y[this.showIndex]

    monthChart.setOption(this.allOption)
  },
  methods: {
    showWin () {
      this.$emit('showWin')
    },
    showTab (ind) {
      this.showIndex = ind
      // 动态更新图表数据及颜色等属性
      const chart = echarts.getInstanceByDom(document.getElementById('monthChart'))
      const allOption = chart.getOption()
      allOption.series[0].itemStyle.color = this.allColors[this.showIndex][0]
      allOption.series[0].areaStyle.color.colorStops[0].color = this.allColors[this.showIndex][1]
      allOption.series[0].areaStyle.color.colorStops[1].color = this.allColors[this.showIndex][2]
      allOption.xAxis.data = this.orderData.month.x[this.showIndex]
      allOption.series[0].data = this.orderData.month.y[this.showIndex]
      chart.setOption(allOption)
    }
  }
}
</script>
<style lang="less" scoped>
.months{
  display:flex;
  text-align: center;
  width: 90vw;
  font-size: 2.5vw;
  margin-top: 1vh;
  span{
    width: 7.5vw;
    height: 4vh;
    line-height: 4vh;
  }
  .monthCheck{
    background-color: #FDCA5D;
    color: #FFF;
  }
  .monthUncheck{
    background-color: #E4AAA5;
    font-weight: bold;
  }
}

.subItem{
    width: 70vw;
    margin: 5vw auto 0 auto;

    .title{
      margin:0 auto 2vw auto;
    }
    .tabs{
        margin: 3vw auto 8vw auto;
        text-align: center;
        .tab{
            border-radius: 1vw;
            width: 13vw;
            height: 3vh;
            display: inline-block;
        }
    }

    #monthChart{
        width: 80vw;
        height: 15vh;
    }

    .star-box {
      width: 32vw;
      height: 4vh;
      // background-color: red;
      overflow: hidden;
      margin: 0 auto;
      position: relative;
      margin-top: 2vw;
      margin-left: -1vw;

      .star-bg {
          display: flex;
      }

      .bg {
          margin: 0 1vw;
          width: 4.4vw;
          height: 4.4vw;
      }

      .star {
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          overflow: hidden;
      }
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

.yunchengNode{
    color: #FFF;
    height: 4vh;
    width: 20vw;
    margin: 5vh 0 2vh 0;
    text-align: center;
    border-radius: 2vw 2vw 2vw 0;
    font-size: 3.5vw;

    span{
        line-height: 4vh;
        font-size: 3.5vw;
    }
}

.buy{
  margin-left:5vw;
  font-size:3.3vw;
  color: #F44B54;
  text-decoration: underline;
}

.hangyeNode{
  border: solid 2px #E879A3;
  border-radius: 1vw;
  display: flex;
  margin: 0 0 3vh 0;
  align-items:center;

  img{
    width: 19vw;
    height: 19vw;
  }
}
</style>
