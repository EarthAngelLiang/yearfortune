<template>
  <div class="calendar-box">
    <div class="calendar-wrapper">
      <div class="calendar-week">
        <div
          class="week-item calendarBorder"
          v-for="item of weekList"
          :key="item"
        >
          {{ item }}
        </div>
      </div>
      <div class="calendar-inner">
        <div
          class="calendar-item calendarBorder"
          v-for="(item, index) of calendarList"
          :key="index"
          :class="{
            'calendar-item': true,
            calendarBorder: true,
            'calendar-item-hover': !item.disable,
            'calendar-item-disabled': item.disable,
            'calendar-item-checked':
              dayChecked && dayChecked.value == item.value,
          }"
        >
            <div>{{ item.date }}</div>
            <div v-if="item.jieqi" style="font-weight:normal;font-size:2.4vw;">{{ item.jieqi }}</div>
            <div v-else style="font-weight:normal;font-size:2.4vw;">{{ item.lunarDay }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { Lunar } from 'lunar-javascript'

export default {
  data () {
    return {
      showYearMonth: {}, // 显示的年月
      calendarList: [], // 用于遍历显示
      shareDate: new Date(), // 享元模式，用来做 日期数据转换 优化
      dayChecked: {}, // 当前选择的天
      weekList: ['一', '二', '三', '四', '五', '六', '日'] // 周
    }
  },
  created () {
    this.initDataFun() // 初始化数据
  },
  computed: {
    // 显示当前时间
    currentDateStr () {
      const { year, month } = this.showYearMonth
      return `${year}年${this.pad(month + 1)}月`
    }
  },
  methods: {
    // #region 计算日历数据
    // 初始化数据
    initDataFun () {
      // 初始化当前时间
      this.setCurrentYearMonth() // 设置日历显示的日期（年-月）
      this.createCalendar() // 创建当前月对应日历的日期数据
      this.getCurrentDay() // 获取今天
    },
    // 设置日历显示的日期（年-月）
    setCurrentYearMonth (d = new Date()) {
      const year = d.getFullYear()
      const month = d.getMonth()
      const date = d.getDate()
      this.showYearMonth = {
        year,
        month,
        date
      }
    },
    getCurrentDay (d = new Date()) {
      const year = d.getFullYear()
      const month = d.getMonth()
      const date = d.getDate()
      this.dayChecked = {
        year,
        month,
        date,
        value: this.stringify(year, month, date),
        disable: false
      }
    },
    // 创建当前月对应日历的日期数据
    createCalendar () {
      // 一天有多少毫秒
      const oneDayMS = 24 * 60 * 60 * 1000
      const list = []
      const { year, month } = this.showYearMonth

      // #region
      // ---------------仅仅只算某月的天---------------
      //   // 当前月，第一天和最后一天的毫秒数
      //   let begin = new Date(year, month, 1).getTime();
      //   let end = new Date(year, month + 1, 0).getTime();

      // ---------------计算某月前后需要填补的天---------------
      // 当前月份第一天是星期几, 0-6
      const firstDay = this.getFirstDayByMonths(year, month)
      // 填充多少天，因为我将星期日放到最后了，所以需要另外调整下
      const prefixDaysLen = firstDay === 0 ? 6 : firstDay - 1
      // 向前移动之后的毫秒数
      let begin = new Date(year, month, 1).getTime() - oneDayMS * prefixDaysLen
      // 当前月份最后一天是星期几, 0-6
      const lastDay = this.getLastDayByMonth(year, month)
      // 填充多少天，因为我将星期日放到最后了，所以需要另外调整下
      const suffixDaysLen = lastDay === 0 ? 0 : 7 - lastDay
      // 向后移动之后的毫秒数
      const end = new Date(year, month + 1, 0).getTime() + oneDayMS * suffixDaysLen
      // // 计算左侧时间段的循环数
      // let rowNum = Math.ceil((end - begin) / oneDayMS / 7);
      // let newPeriod = [];
      // for (let i = 0; i < rowNum; i++) {
      //   newPeriod.push({});
      // }
      // #endregion

      // 填充天
      while (begin <= end) {
        // 享元模式，避免重复 new Date
        this.shareDate.setTime(begin)
        const today = Lunar.fromDate(this.shareDate)
        const year = this.shareDate.getFullYear()
        const curMonth = this.shareDate.getMonth()
        const date = this.shareDate.getDate()
        const tmpObj = {
          year: year,
          month: curMonth + 1, // 月是从0开始的
          date: date,
          value: this.stringify(year, curMonth, date),
          disable: curMonth !== month
        }
        if (!today.getJieQi()) {
          tmpObj.jieqi = ''
        } else {
          tmpObj.jieqi = today.getJieQi()
        }
        tmpObj.lunarDay = this.$store.state.ddArr[today.getDay() - 1]

        list.push(tmpObj)
        begin += oneDayMS
      }

      this.calendarList = list
    },
    // 格式化时间
    stringify (year, month, date) {
      const str = [year, this.pad(month + 1), this.pad(date)].join('-')
      return str
    },
    // 对小于 10 的数字，前面补 0
    pad (str) {
      return str < 10 ? `0${str}` : str
    },
    // 点击上一月
    prevMonth () {
      this.showYearMonth.month--
      this.recalculateYearMonth() // 因为 month的变化 会超出 0-11 的范围， 所以需要重新计算
      this.createCalendar() // 创建当前月对应日历的日期数据
    },
    // 点击下一月
    nextMonth () {
      this.showYearMonth.month++
      this.recalculateYearMonth() // 因为 month的变化 会超出 0-11 的范围， 所以需要重新计算
      this.createCalendar() // 创建当前月对应日历的日期数据
    },
    // 重算：显示的某年某月
    recalculateYearMonth () {
      let { year, month, date } = this.showYearMonth

      const maxDate = this.getDaysByMonth(year, month)
      // 预防其他月跳转到2月，2月最多只有29天，没有30-31
      date = Math.min(maxDate, date)

      const instance = new Date(year, month, date)
      this.setCurrentYearMonth(instance)
    },
    // 判断当前月有多少天
    getDaysByMonth (year, month) {
      return new Date(year, month + 1, 0).getDate()
    },
    // 当前月的第一天是星期几
    getFirstDayByMonths (year, month) {
      return new Date(year, month, 1).getDay()
    },
    // 当前月的最后一天是星期几
    getLastDayByMonth (year, month) {
      return new Date(year, month + 1, 0).getDay()
    }
  }
}
</script>

<style lang="less" scoped>
@calendarWidth: 92vw;
.calendar-box {
  width: 100vw;
  display: flex;
  justify-content: center;
  .calendar-wrapper {
    margin-top: 5vw;
    font-weight: bold;
    .calendar-week {
      width: @calendarWidth;
      display: flex;
      flex-wrap: wrap;
      .week-item {
        width: 13vw;
        height: 5vh;
      }
    }
    .calendar-inner {
      width: @calendarWidth;
      display: flex;
      flex-wrap: wrap;
      .calendar-item {
        width: 13vw;
        height: 6vh;
        display:block;
        text-align:center;
      }
      .calendar-item-hover {
        cursor: pointer;
      }
      .calendar-item-disabled {
        color: #acacac;
        cursor: not-allowed;
      }
      .calendar-item-checked {
        color: #fff;
        background-color: #F44B54;
        border-radius: 2vw;
      }
    }
    .calendarBorder {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
