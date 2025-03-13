import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mmArr: ['正月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    ddArr: ['初一', '初二', '初三', '初四', '初五', '初六', '初七', '初八', '初九', '初十', '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十', '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九', '三十', '三十一'],
    weekArr: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    brithDate: {
      gCalendar: '',
      nCalendar: '',
      gLabel: '',
      nLabel: '',
      usetype: ''
    },
    brithDate2: {
      gCalendar: '',
      nCalendar: '',
      gLabel: '',
      nLabel: '',
      usetype: ''
    },

    showTips: '',
    // 价格和订单id
    get orderid () {
      return localStorage.getItem('orderid')
    },
    set orderid (val) {
      localStorage.setItem('orderid', val)
    },
    get amount () {
      return localStorage.getItem('amount')
    },
    set amount (val) {
      localStorage.setItem('amount', val)
    },
    set orderidLove (val) {
      localStorage.setItem('orderidLove', val)
    },
    get orderidLove () {
      return localStorage.getItem('orderidLove')
    },
    set amountLove (val) {
      localStorage.setItem('amountLove', val)
    },
    get amountLove () {
      return localStorage.getItem('amountLove')
    },
    set orderidPerson (val) {
      localStorage.setItem('orderidPerson', val)
    },
    get orderidPerson () {
      return localStorage.getItem('orderidPerson')
    },
    set amountPerson (val) {
      localStorage.setItem('amountPerson', val)
    },
    get amountPerson () {
      return localStorage.getItem('amountPerson')
    },

    set orderidBaby (val) {
      localStorage.setItem('orderidBaby', val)
    },
    get orderidBaby () {
      return localStorage.getItem('orderidBaby')
    },
    set amountBaby (val) {
      localStorage.setItem('amountBaby', val)
    },
    get amountBaby () {
      return localStorage.getItem('amountBaby')
    },
    set babyInfo (val) {
      localStorage.setItem('babyInfo', val)
    },
    get babyInfo () {
      return JSON.parse(localStorage.getItem('babyInfo'))
    },
    // 微信授权code
    get wxCode () {
      return localStorage.getItem('wuguancode')
    },
    set wxCode (val) {
      localStorage.setItem('wuguancode', val)
    }
  },
  getters: {
  },
  mutations: {
    setBrith (state, step) {
      state.brithDate = step
    },
    setBrith2 (state, step) {
      state.brithDate2 = step
    },
    setShowTips (state, step) {
      state.showTips = step
    },
    setOrderId (state, step) {
      state.orderid = step
    },

    setAmount (state, step) {
      state.amount = step
    },
    setOrderIdLove (state, step) {
      state.orderidLove = step
    },
    setAmountLove (state, step) {
      state.amountLove = step
    },
    setOrderIdPerson (state, step) {
      state.orderidPerson = step
    },
    setAmountPerson (state, step) {
      state.amountPerson = step
    },

    setOrderIdBaby (state, step) {
      state.orderidBaby = step
    },
    setAmountBaby (state, step) {
      state.amountBaby = step
    },
    setBabyInfo (state, step) {
      state.babyInfo = step
    },
    setWxCode (state, step) {
      state.wxCode = step
    }
  },
  actions: {
  },
  modules: {
  }
})
