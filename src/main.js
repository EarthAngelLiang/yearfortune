import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './mock'
import wx from 'weixin-js-sdk'
import VueLazyload from 'vue-lazyload'
Vue.prototype.$wx = wx
Vue.config.productionTip = false
// 定义懒加载图片或者文件等，自定义指令
// 指令形式  缺点首次加载窗口的视图不加载，需要在滑动时才可以加载
// Vue.directive('lazy', (el, binding) => {
//   const oldSrc = el.src // 保存旧的src，方便后期渲染时候赋值src真实路径
//   el.src = '' // 将渲染的src赋为空，则不会渲染图片出来
//   const observer = new IntersectionObserver((isIntersecting) => { // 调用方法得到该elDOM元素是否处于可视区域
//     console.log(oldSrc, isIntersecting[0])
//     if (isIntersecting[0].isIntersecting) { // 回调是否处于可视区域，true or false
//       el.src = oldSrc // 如果处于可视区域额，将最开始保存的真实路径赋予DOM元素渲染
//       observer.unobserve(el) // 只需要监听一次即可，第二次滑动到可视区域时候不在监听
//     }
//   })
//   observer.observe(el) // 调用方法
// })
Vue.use(VueLazyload)

// 获取小时对应的时辰
Vue.prototype.$getShichen = function (hour) {
  const hhArr = ['子', '丑', '丑', '寅', '寅', '卯', '卯', '辰', '辰', '巳', '巳', '午', '午', '未', '未', '申', '申', '酉', '酉', '戌', '戌', '亥', '亥', '子']
  let itemH = ''
  for (let i = 0; i < 24; i++) {
    if (i === hour) {
      itemH = hhArr[i]
    }
  }
  return itemH
}

Vue.prototype.$dateFormat = function (dt, isdatetime) {
  if (dt === null) {
    return ''
  }
  if (typeof dt === 'string') {
    return dt
  }
  const year = dt.getFullYear()
  const month = (dt.getMonth() + 1 + '').padStart(2, 0)
  const day = (dt.getDate() + '').padStart(2, 0)
  if (isdatetime === false) {
    return year + '-' + month + '-' + day
  } else {
    const hours = (dt.getHours() + '').padStart(2, 0)
    const minutes = (dt.getMinutes() + '').padStart(2, 0)
    const seconds = (dt.getSeconds() + '').padStart(2, 0)
    return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
  }
}

Vue.prototype.$scrollToTop = function () {
  const sTop = document.documentElement.scrollTop || document.body.scrollTop
  if (sTop > 0) {
    window.requestAnimationFrame(Vue.prototype.$scrollToTop)
    window.scrollTo(0, sTop - sTop / 8)
  }
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
