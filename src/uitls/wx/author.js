import { get } from '@/axios/axios'
const wxData = {
  appid: 'wx4db20b101e13ccf3',
  redirect: window.location.href,
  screcte: '4f7c3f55b5a037ef9a335969fff77a1a'
}
export function getAuthorize () {
  // 此方法用来判断是不是在微信中打开
  const isWechat = () => {
    const ua = window.navigator.userAgent.toLowerCase()
    return ua.match(/MicroMessenger/i) === 'micromessenger'
  }
  // 是微信中打开，则进行一下操作
  if (isWechat) {
    // 先判断有没有授权(判断地址栏code，有就-用户同意了授权，没有-没授权或者拒绝授权)
    const str = getUrlParam('code') // 此处使用的是history路由模式，hash这么拿不到。this.getUrlParam()方法在下面
    console.log('获取到了 ', str)

    if (str) {
      // 走后端接口(把code传给后台，让后台根据code获取openID与用户信息)
      // console.log('str',str);
      //  通过code 获取openid
      get('你的url' + '/api/code',
        {
          params: {
            code: str,
            state: '123'
          }
        }
      ).then(response => {
        console.log('response', response.data)
        localStorage.setItem('openid', response.data.openid) // 此处我将openid 进行了存储
      })
    } else {
      const appid = 'wx4db20b101e13ccf3'
      const redirectUri = 'http://localhost:8081'
      const newRedirect = encodeURIComponent(redirectUri) // 此处需要将你的回调页面进行转码，此方法直接使用
      window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid + '&redirect_uri=' + newRedirect + '&response_type=code&scope=snsapi_base&state=123#wechat_redirect'
    }
  }
}
// 获取url中的参数
function getUrlParam (name) {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)') // 构造一个含有目标参数的正则表达式对象
  const r = window.location.search.substr(1).match(reg) // 匹配目标参数
  if (r != null) {
    return unescape(r[2])
  }
  return null // 返回参数值
}
