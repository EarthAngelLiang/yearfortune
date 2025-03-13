<template>
  <div class="home">
    <Tips />
    <div class="zixun-detail" @click="openService"><span class=" iconfont icon-manager-fill"
        style="font-size:8vw;color:#d1420a; font-weight: 100; text-shadow:  1px 1px rgba(0, 0, 0, 0.5);"></span>
      咨询老师
    </div>
    <div class="container">
      <TopBg />
      <div class="order-info" style="margin-top:10vw;">
        <BoxBg>
          <template v-slot:exhibition>
            <TopDecoration :name="personDetail.name + '的姻缘分析报告'"></TopDecoration>
            <div class="list-box">
              <div class="lists">
                <div class="label">
                  <span>姓</span>
                  <span>名：</span>
                </div>
                <div class="txts">{{ personDetail.name }}</div>
              </div>
              <div class="lists">
                <div class="label">
                  <span>性</span>
                  <span>别：</span>
                </div>
                <div class="txts">{{ personDetail.gender }}</div>
              </div>
              <div class="lists">
                <div class="label">
                  <span>出</span>
                  <span>生</span>
                  <span>日</span>
                  <span>期：</span>
                </div>
                <div class="txts">公（阳）历 {{ personDetail.solar_birthday }} {{ personDetail.hour }}时 <br> 农（阴）历
                  {{ personDetail.lunar_birthday }} {{ personDetail.sx_hour }}</div>
              </div>
              <div class="lists">
                <div class="label">
                  <span>八</span>
                  <span>字：</span>
                </div>
                <div class="txts">
                  <span v-for="(item, index) in personDetail.bazi" :key="index">{{ item + ' ' }} </span>
                </div>
              </div>
              <div class="lists">
                <div class="label">
                  <span>喜</span>
                  <span>用</span>
                  <span>神：</span>
                </div>
                <div class="txts">{{ personDetail.xys }}</div>
              </div>
              <div class="lists">
                <div class="label">
                  <span>生</span>
                  <span>肖：</span>
                </div>
                <div class="txts">{{ personDetail.sx }}</div>
              </div>
            </div>
            <div class="center-line">
              <div class="lines"></div>
              <div class="txts">您的八字命盘</div>
              <div class="lines"></div>
            </div>
            <div class="name-detail-box">
              <div class="pan-box">
                <div class="title-row">
                  <div class="title-item">四柱</div>
                  <div class="title-item" v-for="(item, index) in personDetail.bazi_paipan.sizhu" :key="index">{{ item }}
                  </div>
                </div>
                <div class="nav-list">
                  <div class="nav-row">
                    <div class="nav-item">五行</div>
                    <div class="nav-item" v-for="(item, index) in personDetail.bazi_paipan.wuxing" :key="index">{{ item }}
                    </div>
                  </div>
                  <div class="nav-row" style="background-color: #F5EEE5;">
                    <div class="nav-item">十神</div>
                    <div class="nav-item" v-for="(item, index) in personDetail.bazi_paipan.shishen" :key="index">{{ item }}
                    </div>

                  </div>
                  <div class="nav-row">
                    <div class="nav-item">{{ personDetail.gender === '男' ? '乾造' : '坤造' }}</div>
                    <div class="nav-item" v-for="(item, index) in personDetail.bazi_paipan.qianzao" :key="index">{{ item }}
                    </div>
                  </div>
                  <div class="nav-row" style="background-color: #F5EEE5;">
                    <div class="nav-item">臧干</div>
                    <div class="nav-item" v-for="(item, index) in personDetail.bazi_paipan.zangang" :key="index">{{ item }}
                    </div>
                  </div>
                  <div class="nav-row">
                    <div class="nav-item">纳音</div>
                    <div class="nav-item" v-for="(item, index) in personDetail.bazi_paipan.nayin" :key="index">{{ item }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </BoxBg>
      </div>
      <div class="order-info" style="margin-top:10vw;">
        <BoxBg>
          <template v-slot:exhibition>
            <TopDecoration :name="'你的命局特点分析'"></TopDecoration>
            <div class="headers-row">
              <div id="wudirections" class="wu-direction"></div>
            </div>
            <div class="info-box">
              <div class="commont-info">
                <div class="info-item">
                  <div style="text-indent: 2em;" v-for="(item, index) in personDetail.mingju_analysis.des" :key="index">
                    <span :style="{ 'font-weight': index === 1 ? 700 : 400 }">{{ item }}</span> </div>
                </div>
                <div class="info-item">
                  <span style="color:#FF3D5D;">命局特点:</span>
                  {{ personDetail.mingju_analysis.mingju_tedian }}
                </div>
              </div>
            </div>
          </template>
        </BoxBg>
      </div>
      <div class="order-info" style="margin-top:10vw;">
        <BoxBg>
          <template v-slot:exhibition>
            <TopDecoration :name="'您的恋爱对象分析'"></TopDecoration>
            <div class="info-box">
              <div class="commont-info">
                <div class="label" style="margin-top:4vw;"><span style="color:#FF3D5D;">最优先对象：</span>
                  {{ personDetail.love_analysis.liuhe_sx }}</div>
                <div class="label"><span style="color:#FF3D5D;">次优先对象：</span> {{ personDetail.love_analysis.sanhe_sx }}
                </div>
                <div class="label"><span style="color:#FF3D5D;">比较好对象：</span> {{ personDetail.love_analysis.shengtong_sx }}
                </div>
                <div class="label"><span style="color:#FF3D5D;">不建议对象：</span> {{ personDetail.love_analysis.unsuggest_sx }}
                </div>
                <div class="label"><span style="color:#FF3D5D;">最不佳对象：</span> {{ personDetail.love_analysis.chongxing_sx }}
                </div>
                <div class="label">
                  <span style="color:#FF3D5D;">相貌:</span>
                  {{ personDetail.love_analysis.waimao_des }}
                </div>
                <div class="label">
                  <span style="color:#FF3D5D;">性格：</span>
                  {{ personDetail.love_analysis.xingge_des }}
                </div>
              </div>
            </div>
          </template>
        </BoxBg>
      </div>
      <div class="order-info" style="margin-top:10vw;">
        <BoxBg>
          <template v-slot:exhibition>
            <TopDecoration :name="'好的桃花运年份分析'"></TopDecoration>
            <div class="center-line">
              <div class="lines"></div>
              <div class="txts">未来一年内桃花指数分析</div>
              <div class="lines"></div>
            </div>
            <div class="headers-row">
              <div id="monthstime" class="monthstimes"></div>
            </div>
            <div class="info-box">
              <div class="label" style="text-align: left;text-indent: 2rem;"
                v-html="setColors(personDetail.taohua_ny_analysis.oneyear_des, '[0-9]{1,2}月', '#fb5567')"></div>
            </div>
            <div class="center-line">
              <div class="lines"></div>
              <div class="txts">未来五年桃花指数分析</div>
              <div class="lines"></div>
            </div>
            <div class="headers-row">
              <div id="yeartime" class="monthstimes"></div>
            </div>
            <div class="info-box">
              <div class="label" style="text-align: left;text-indent: 2rem;margin-bottom: 2vw;" v-for="(item,index) in personDetail.taohua_ny_analysis.fiveyear_des" :key="index">
                <span v-html="setColors(item, '[0-9]{4,4}年', '#fb5567')"></span>
              </div>
            </div>
          </template>
        </BoxBg>
      </div>
      <div class="order-info" style="margin-top:10vw;">
        <BoxBg>
          <template v-slot:exhibition>
            <TopDecoration :name="'需要注意桃花劫的年份'"></TopDecoration>
            <div class="info-box">
              <div class="label" style="margin:4vw 0 2vw 0;text-align:left;">
                <div v-for="(item, index) in personDetail.taohuajie_year"  :key="index" style="text-indent: 2rem;"
                  > <span  v-html="setColors(item, '[0-9]{4,4}年', '#fb5567')" ></span></div>
              </div>
            </div>
          </template>
        </BoxBg>
      </div>
      <div class="order-info" style="margin-top:10vw;">
        <BoxBg>
          <template v-slot:exhibition>
            <TopDecoration :name="'感情易发生变化年份'"></TopDecoration>
            <div class="info-box">
              <div class="label" style="margin:4vw 0 2vw 0;text-align:left;">
                <div v-for="(item, index) in personDetail.emo_change_year" :key="index" style="text-indent: 2rem;"
                  v-html="setColors(item, '年份：[0-9].*', '#fb5567')"> </div>

              </div>
            </div>
          </template>
        </BoxBg>
      </div>
      <div class="order-info" style="margin-top:10vw;">
        <BoxBg>
          <template v-slot:exhibition>
            <TopDecoration :name="'感情婚姻总评'"></TopDecoration>
            <div class="info-box">
              <div class="label" style="margin:4vw 0 2vw 0;text-align:left;">
                <div v-for="(item, index) in personDetail.emo_marry_alldes" :key="index" style="text-indent: 2rem;"
                  v-html="setColors(item, '鼠|牛|虎|兔|龙|蛇|马|羊|猴|鸡|狗|猪', '#fb5567')"> </div>

              </div>
            </div>
          </template>
        </BoxBg>
      </div>
      <div class="order-info" style="margin-top:10vw;">
        <BoxBg>
          <template v-slot:exhibition>
            <TopDecoration :name="'八字姻缘改运风水布局建议'"></TopDecoration>
            <div class="center-line">
              <div class="lines"></div>
              <div class="txts">个人调理建议</div>
              <div class="lines"></div>
            </div>
            <div class="info-box">
              <div class="label" style="margin:4vw 0 2vw 0;text-align:left;">
                <div class="info-box">
                  <div class="label" style="margin:4vw 0 2vw 0;text-align:left;">佩戴装饰品，可以买一个<span
                      style="color:#fb5567">白色的水晶饰品</span>，放置在长居的卧室或者常呆的办工作里放置 <span style="color:#fb5567">水晶球</span>。
                  </div>
                </div>
              </div>
            </div>
            <div class="center-line">
              <div class="lines"></div>
              <div class="txts" style="color:#fb5567">家居调理建议</div>
              <div class="lines"></div>
            </div>
            <div class="jiu-direction">
              <div class="item-direction" v-for="(item, index) in direction" :key="item"
                :style="{ 'border-right': (index + 1) % 3 === 0 ? 'none' : '1px solid #FF8B9E', 'border-bottom': index === 6 || index === 7 || index === 8 ? 'none' : '1px solid #FF8B9E' }">
                <div class="text-contents">{{ item }}</div>
                <!-- <div v-for="(items, indexs) in personDetail.marry_fengshui_layout.household_jy" :key="indexs">
                  <div class="level-number" v-if="items[0] === item">{{ indexs }}</div>

                </div> -->
                <div class="level-number"
                  v-if="item === personDetail.marry_fengshui_layout.household_jy['1'][0] || item === personDetail.marry_fengshui_layout.household_jy['2'][0] || item === personDetail.marry_fengshui_layout.household_jy['3'][0]">
                  <span v-if="item === personDetail.marry_fengshui_layout.household_jy['1'][0]">1{{
                    personDetail.marry_fengshui_layout.household_jy['1'][0] ===
                    personDetail.marry_fengshui_layout.household_jy['2'][0] ||
                    personDetail.marry_fengshui_layout.household_jy['1'][0]
                    ===personDetail.marry_fengshui_layout.household_jy['3'][0] ? '、' : ''
                  }}</span>
                  <span v-if="item === personDetail.marry_fengshui_layout.household_jy['2'][0]">2{{
                    personDetail.marry_fengshui_layout.household_jy['2'][0] ===
                    personDetail.marry_fengshui_layout.household_jy['3'][0] ? '、' : ''
                  }}</span>
                  <span v-if="item === personDetail.marry_fengshui_layout.household_jy['3'][0]">3</span>
                </div>
              </div>
            </div>
            <div class="info-box" style="margin:4vw 0 2vw 0;text-align:left;">
              <div class="label">什么是家居调理：通过易学風水调节家居气场环境，催旺您的桃花星和正缘星，以达到增强和调节桃花运的目的。</div>
            </div>
            <div class="info-box" style="margin:4vw 0 2vw 0;text-align:left;">
              <div class="label"> <span style="color:#FF3D5D">家居调理建议：</span> </div>
              <div class="label" style="text-indent: 1rem;"
                v-for="(item, index) in personDetail.marry_fengshui_layout.household_jy" :key="index"
                v-html="setColors(index + '、' + item[1], '东南方|正南方|西南方|正东方|中宫方|正西方|东北方|正北方|西北方|(摆设：.*等)', '#fb5567')"> </div>
            </div>
            <div class="info-box" style="margin:4vw 0 2vw 0;text-align:left;">
              <div class="label"> <span style="color:#FF3D5D">已婚人士注意避忌：</span> </div>
              <div class="label" style="text-indent: 1rem;"
                v-for="(item, index) in personDetail.marry_fengshui_layout.zhuyishixiang" :key="index"> {{ item }}</div>
            </div>
          </template>
        </BoxBg>
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
import TopBg from '@/components/person/top_bg.vue'
import BoxBg from '@/components/person/box_bg.vue'
import TopDecoration from '@/components/person/top_decoration.vue'
import * as echarts from 'echarts'
import { openService } from '@/uitls/js/name_service'
export default {
  components: { Tips, TopBg, TopDecoration, BoxBg },
  data () {
    return {
      direction: ['东南', '正南', '西南', '正东', '中宫', '正西', '东北', '正北', '西北'],
      ecahrtsWu: {
        tooltip: {
          trigger: 'axis'
        },
        radar: [
          {
            radius: 80, // 缩放
            center: ['50%', '56%'], // 位置
            axisName: {
              color: '#000',
              fontSize: 12,
              fontWeight: 400
            },
            axisLine: {
              show: true,
              type: 'dashed'
            },
            splitArea: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(212, 182, 161, 0.78)'
              }
            },

            indicator: [
              { text: '贵人', max: 100 },
              { text: '承受能力', max: 100 },
              { text: '事业', max: 100 },
              { text: '财运', max: 100 },
              { text: '名利', max: 100 }
            ]
          }
        ],
        series: [
          {
            type: 'radar',
            tooltip: {
              trigger: 'item'
            },
            label: {
              show: false
            },
            name: '男方',
            data: [
              {
                value: [60, 73, 65, 85, 40]
              }
            ],
            areaStyle: {
              color: 'rgba(255, 61, 93, 0.52)'
            },
            itemStyle: {
              normal: {
                color: 'rgba(255, 61, 93, 0.42)'
              }
            }
          }
        ]
      },
      months: {
        tooltip: {
          formatter: '<div style="text-aline:left;"><div>{b}</div><div style="display:flex;justify-content:space-between;width: 60px;"><div>数值</div><div>{c}</div></div></div>',
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          },
          // eslint-disable-next-line no-dupe-keys
          axisPointer: {
            type: 'shadow',
            show: false,
            shadowStyle: {
              color: 'rgb(255, 61, 93,.3)'
            }
          }
        },
        xAxis: {
          type: 'category',
          axisLabel: {
            fontSize: 10
          },
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisLine: {
            show: true,
            lineStyle: {
              color: 'red'
            }
          }
        },
        yAxis: {
          axisLabel: {
            fontSize: 14
          },
          type: 'value'
        },
        grid: {
          top: '4%',
          left: '0%',
          right: '4%',
          bottom: '6%',
          containLabel: true
        },
        series: [
          {
            data: [0.6, 1.2, 3, 1.2, 4.2, 2, 1.3, 0.6, 1.2, 3, 1.2, 4],
            type: 'line',
            symbol: 'circle',
            symbolSize: 10,
            itemStyle: {
              normal: {
                color: 'rgba(255, 61, 93, 0.42)'
              },
              backgroundColor: '#fff'
            }
          }
        ]
      },
      yeartime: {
        tooltip: {
          formatter: '<div style="text-aline:left;"><div>{b}</div><div style="display:flex;justify-content:space-between;width: 60px;"><div>数值</div><div>{c}</div></div></div>',
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          },
          // eslint-disable-next-line no-dupe-keys
          axisPointer: {
            type: 'shadow',
            show: false,
            shadowStyle: {
              color: 'rgb(255, 61, 93,.3)'
            }
          }
        },
        xAxis: {
          type: 'category',
          axisLabel: {
            fontSize: 10
          },
          data: ['2023', '2024', '2025', '2026', '2021'],
          axisLine: {
            show: true,
            lineStyle: {
              color: 'red'
            }
          }
        },
        yAxis: {
          axisLabel: {
            fontSize: 14
          },
          type: 'value'
        },
        grid: {
          top: '4%',
          left: '0%',
          right: '4%',
          bottom: '6%',
          containLabel: true
        },
        series: [
          {
            data: [0.6, 1.2, 3, 1.2, 4.2],
            type: 'line',
            symbol: 'circle',
            symbolSize: 10,
            itemStyle: {
              normal: {
                color: 'rgba(255, 61, 93, 0.42)'
              },
              backgroundColor: '#fff'
            }
          }
        ]
      },
      personDetail: {
        name: '',
        gender: '',
        solar_birthday: '',
        lunar_birthday: '',
        sx_hour: '',
        hour: '',
        bazi: [],
        xys: '',
        bazi_paipan: {
          sizhu: [],
          wuxing: [],
          shishen: [],
          qianzao: [],
          zangang: [],
          nayin: []
        },
        mingju_analysis: {
          guiren: null,
          chengshouri: null,
          sikaoli: null,
          chuangzaoli: null,
          zizhili: null,
          mingju_tedian: '',
          des: []
        },
        love_analysis: {
          sanhe_sx: '',
          liuhe_sx: '',
          shengtong_sx: '',

          uunsuggestsx: '',
          chongxing_sx: '',
          xingge_des: '',
          waimao_des: ''

        },
        taohua_ny_analysis: {
          oneyear_analysis: [],
          oneyear_des: '',
          fiveyear_analysis: [],
          fiveyear_des: '',
          weilai_five_year: []
        },
        taohuajie_year: [''],
        emo_change_year: [''],
        emo_marry_alldes: [''],
        marry_fengshui_layout: {
          household_jy: {
            1: ['', ''],
            2: ['', ''],
            3: ['', '']
          },
          zhuyishixiang: []
        }

      }

    }
  },
  computed: {
  },
  mounted () {
    this.personDetail = JSON.parse(localStorage.getItem('personDetailResult'))
    console.log(this.personDetail, this.personDetail.solar_birthday, this.personDetail.lunar_birthday)
    this.setEchartParams()
    this.drawEcharts()
  },
  methods: {
    openService () {
      openService()
    },
    setColors (str, regStr, regColor) {
      // const reg = /20..年/g
      if (!str.length || str.length === 0) return
      const reg = new RegExp(regStr, 'g')
      const newList = Array.from(new Set(str.match(reg)))
      let tempstr = str
      newList.forEach(item => {
        const regStrs = RegExp(item, 'g')
        tempstr = tempstr.replace(regStrs, `<span style="color:${regColor}";>${item}</span>`)
      })
      return tempstr
    },
    setEchartParams () {
      this.ecahrtsWu.series[0].data[0].value[0] = this.personDetail.mingju_analysis.guiren * 0.7 + 30
      this.ecahrtsWu.series[0].data[0].value[1] = this.personDetail.mingju_analysis.chengshouri * 0.7 + 30
      this.ecahrtsWu.series[0].data[0].value[2] = this.personDetail.mingju_analysis.sikaoli * 0.7 + 30
      this.ecahrtsWu.series[0].data[0].value[3] = this.personDetail.mingju_analysis.chuangzaoli * 0.7 + 30
      this.ecahrtsWu.series[0].data[0].value[4] = this.personDetail.mingju_analysis.zizhili * 0.7 + 30
      const tempArr = []
      for (const key in this.ecahrtsWu.series[0].data[0].value) {
        tempArr.push(this.ecahrtsWu.series[0].data[0].value[key])
      }
      const shuMax = Math.ceil(Math.max.apply(null, tempArr) / 10) * 10
      this.ecahrtsWu.radar[0].indicator[0].max = shuMax
      this.ecahrtsWu.radar[0].indicator[1].max = shuMax
      this.ecahrtsWu.radar[0].indicator[2].max = shuMax
      this.ecahrtsWu.radar[0].indicator[3].max = shuMax
      this.ecahrtsWu.radar[0].indicator[4].max = shuMax

      // 桃花月份
      const firstMonth = new Date().getMonth()
      let thisMonth = firstMonth + 1
      for (let i = 0; i < 12; i++) {
        if (thisMonth > 12) {
          thisMonth = 1
        }
        this.months.xAxis.data[i] = thisMonth + '月'
        thisMonth++
      }
      const monthIndex = firstMonth === 11 ? 0 : firstMonth
      const tempFonts = this.personDetail.taohua_ny_analysis.oneyear_analysis.slice(monthIndex)
      const tempFinal = this.personDetail.taohua_ny_analysis.oneyear_analysis.slice(0, monthIndex)
      console.log(tempFonts, tempFinal, 'tempFonts_tempFonts')

      this.months.series[0].data = [...tempFonts, ...tempFinal]
      // 桃花年份
      const nowYear = new Date().getFullYear()
      this.yeartime.xAxis.data = [nowYear, nowYear + 1, nowYear + 2, nowYear + 3, nowYear + 4]
      this.yeartime.series[0].data = this.personDetail.taohua_ny_analysis.fiveyear_analysis
    },
    drawEcharts () {
      const wudirectionChart = echarts.init(document.getElementById('wudirections'))
      wudirectionChart.setOption(
        this.ecahrtsWu
      )
      const monthsChart = echarts.init(document.getElementById('monthstime'))
      monthsChart.setOption(
        this.months
      )
      const yearsChart = echarts.init(document.getElementById('yeartime'))
      yearsChart.setOption(
        this.yeartime
      )
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
    // border: 1px dashed;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 1;
    width: 100vw;
    background: linear-gradient(180.00deg, rgb(255, 180, 186), rgb(255, 180, 187) 23.418%, rgb(255, 203, 206) 99.237%);

    .order-info {
      display: flex;
      justify-content: center;

      .list-box {
        margin: 4vw 0;

        .lists {
          display: flex;

          .label {
            width: 18vw;
            font-size: 3.8vw;
            display: flex;
            justify-content: space-between;
          }

          .txts {
            text-align: left;
            flex: 1;
            padding: 0 1vw;
            font-size: 3.8vw;
          }
        }
      }

      .center-line {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2vw;
        color: #FF3D5D;
        font-size: 4.4vw;

        .txts {

          margin: 0 2vw;
          font-weight: 700;
        }

        .lines {
          width: 10vw;
          height: 1px;
          background-color: #FF3D5D;
        }
      }

      .name-detail-box {

        .pan-box {
          overflow: hidden;
          line-height: 7vw;
          margin-top: 6vw;
          font-size: 3.6vw;
          margin-bottom: 4vw;

          .title-row {
            display: flex;
            background-color: #EB4B4B;
            color: #fff;
            justify-content: center;

            .title-item {
              width: 20%;
            }
          }

          .nav-list {
            .nav-row {
              display: flex;
              border-radius: 2px;
              background-color: #fff;
              border-top-left-radius: 2px;
              border-top-right-radius: 2px;
              // border-top: 1px solid #D9D1C6;

              .nav-item {
                width: 20%;
              }
            }

            .zi-jiexi {
              background-color: #FAF5EC;
              width: 25%;
              font-weight: 700;
              border-right: 1px solid #DDD6CD;
              border-bottom: 1px solid #DDD6CD;
            }

            .zi-du {
              flex: 1;
              border-bottom: 1px solid #DDD6CD;
            }

            .zi-details {
              text-align: start;
              width: 75%;
              padding: 1vw 3vw;
              line-height: 5vw;
              box-sizing: border-box;
            }
          }
        }
      }

      .headers-row {
        display: flex;
        justify-content: center;
        position: relative;
        margin: 4vw 0 0vw 0;

        .wu-direction {
          width: 70vw;
          height: 66vw;
          padding-bottom: 0;
        }

        .monthstimes {
          width: 80vw;
          height: 50vw;
          padding-bottom: 0;
        }
      }

      .jiu-direction {
        display: flex;
        justify-content: center;
        width: calc(54vw + 6px);
        border: 3px solid #FF8B9E;
        flex-wrap: wrap;
        margin: 4vw auto 0 auto;

        .item-direction {
          width: 18vw;
          height: 18vw;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;

          .text-contents {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .level-number {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0;
            width: 100%;
            height: 100%;
            display: flex;
            font-size: 11vw;
            font-weight: 700;
            color: #FF8899;
            background-color: #FFD4D5;
            align-items: center;
            justify-content: center;
          }
        }
      }

      .info-box {
        padding: 0vw;

        .commont-info {
          width: 100%;
          text-align: left;

          .info-item {
            text-indent: 1.5em;
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
