import axios from 'axios'
// 导入vuex使用vuex的数据
import store from '@/store/index'
import router from '@/router'

let baseURL = ''
if (process.env.NODE_ENV === 'production') {
  baseURL = process.env.VUE_APP_BASE_API
}

console.log(process.env, 'process.env')
console.log(baseURL, 'baseURL')
const instance = axios.create({
  baseURL,
  timeout: 30000
  // withCredentials: true
})
// 使用了axios.create 就不能使用axios的一些方法，所以把原型指回axios的原型就可以调用axios原型上的方法
// instance.__proto__ = axios

// 环境的切换 不同环境使用不同域名
// if (process.env.NODE_ENV == 'development') {
//     instance.defaults.baseURL = 'https://www.baidu.com';}
// else if (process.env.NODE_ENV == 'debug') {
//     instance.defaults.baseURL = 'https://www.ceshi.com';
// }
// else if (process.env.NODE_ENV == 'production') {
//     instance.defaults.baseURL = 'https://www.production.com';
// }
// 请求拦截器
instance.interceptors.request.use(

  config => {
    // config.headers['Content-Type'] ='application/json;charset=UTF-8'
    // config.headers['Access-Control-Allow-Origin'] = '*'
    // 不需要axios请求头里手动设置cookie,浏览器自动携带
    // if(localStorage.getItem('cookie')){
    //     config.headers['cookie'] = localStorage.getItem('cookie')
    // }
    // 每次发送请求之前判断vuex中是否存在token
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    // const token = store.state.token;
    // token && (config.headers.Authorization = token);
    // config.headers['Content-Type'] = 'text/plain'
    return config
  },
  error => {
    return Promise.error(error)
  }
)
instance.interceptors.response.use(config => {
  return config
})
const toLogin = () => {
  router.replace({
    path: '/login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  })
}

// 响应的拦截
instance.interceptors.response.use(

  response => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.status === 200) {
      if (response.data.msg === '未登录') {
        store.commit('setCookie', undefined)
        setTimeout(() => {
          toLogin()
        }, 1000)
        return Promise.reject(response)
      }
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  // 服务器状态码不是2开头的的情况
  // 这里可以跟你们的后台开发人员协商好统一的错误状态码
  // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
  // 下面列举几个常见的操作，其他需求可自行扩展
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
          toLogin()
          break
        // 403 cookie过期
        // 登录过期对用户进行提示
        // 清除本地cookie和清空vuex中cookie对象
        // 跳转登录页面
        case 403:
          console.log('登录过期，请重新登录')
          // 清除token
          store.commit('setCookie', undefined)
          // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          setTimeout(() => {
            toLogin()
          }, 1000)
          break

        // 404请求不存在
        case 404:
          console.log('网络请求不存在')
          break
        // 其他错误，直接抛出错误提示
        default:
          console.log(error.response.data.message)
      }
      return Promise.reject(error.response)
    }
  }
)
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
// 封装get请求
export function get (url, params) {
  return new Promise((resolve, reject) => {
    instance.get(url, {
      params: params
      // params: params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}
export function post (url, params) {
  return new Promise((resolve, reject) => {
    instance.post(url, params)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
// 图片上传到服务器，一个一个地上传
export async function AllRequest (ArrParams) {
  const result = []
  for (let i = 0; i < ArrParams.length; i++) {
    const { data: res } = await instance.post(ArrParams[i].url, ArrParams[i].params)
    result.push(res)
  }
  return result
}
// 单个大文件上传
export async function BigFileUpload (ArrParams) {
  return await instance.post(ArrParams.url, ArrParams.formData, ArrParams.config)
}
export default instance
