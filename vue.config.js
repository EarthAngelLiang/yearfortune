const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const defaultSettings = require('./src/settings.js')

const name = defaultSettings.title || '智汇图' // page title
module.exports = {
  transpileDependencies: true,

  lintOnSave: false,
  // resolve: {
  //   fallback: { crypto: require.resolve('crypto-browserify'), querystring: require.resolve('querystring-es3') }
  // },
  // 配置别名
  configureWebpack: {
    name: name,
    plugins: [new NodePolyfillPlugin()]
  },
  devServer: {
    allowedHosts: 'all',
    proxy: {
      '/name_examine': {
        target: process.env.VUE_APP_BASE_API, // 本地后端地址
        changeOrigin: true, // 允许跨域
        // ws: false,
        '^/name_examine': '/name_examine'
      },
      '/name_hehun': {
        target: process.env.VUE_APP_BASE_API, // 本地后端地址
        changeOrigin: true, // 允许跨域
        // ws: false,
        '^/name_hehun': '/name_hehun'
      },
      '/name_selfmarriage': {
        target: process.env.VUE_APP_BASE_API, // 本地后端地址
        changeOrigin: true, // 允许跨域
        // ws: false,
        '^/name_selfmarriage': '/name_selfmarriage'
      },
      '/baobao_potency': {
        target: process.env.VUE_APP_BASE_API, // 本地后端地址
        changeOrigin: true, // 允许跨域
        // ws: false,
        '^/baobao_potency': '/baobao_potency'
      },
      '/sns': {
        target: process.env.VUE_APP_BASE_API, // 本地后端地址
        changeOrigin: true, // 允许跨域
        // ws: false,
        '^/sns': '/sns'
      },
      '/name_dayluck': {
        target: process.env.VUE_APP_BASE_API, // 本地后端地址
        changeOrigin: true, // 允许跨域
        // ws: false,
        '^/name_dayluck': '/name_dayluck'
      }

    }
  }
}
