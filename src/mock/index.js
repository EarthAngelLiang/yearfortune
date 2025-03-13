import { test } from './test/test.js'
import { order } from './use/order.js'
const Mock = require('mockjs')
const arrRequest = [...test, ...order]
// const arrMock = arrRequest.map(item => {
//   return Mock.mock(item.url, item.methods, item.func)
// })
const arrMock = []
export default arrMock
