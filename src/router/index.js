import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
Vue.use(VueRouter)
const routes = [

  {
    path: '/name',
    redirect: '/name/home',
    component: () => import(/* webpackChunkName: "about" */ '../views/name/index.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/name/HomeView.vue')
      },
      {
        path: 'play',
        name: 'play',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/name/play.vue')
      },
      {
        path: 'order',
        name: 'order',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/name/order.vue')
      },
      {
        path: 'order_result',
        name: 'order_result',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/name/order_result.vue')
      },
      {
        path: 'detail',
        name: 'detail',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/name/detail.vue')
      },
      {
        path: 'agreement_use',
        name: 'agreement_use',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/name/agreement_use.vue')
      },
      {
        path: 'privacy',
        name: 'privacy',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/name/privacy.vue')
      },
      {
        path: 'loading',
        name: 'loading',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/name/loading.vue')
      }
    ]
  },
  {
    path: '/love',
    redirect: '/love/home',
    component: () => import(/* webpackChunkName: "about" */ '../views/love/index.vue'),
    children: [
      {
        path: 'home',
        name: 'love_home',
        component: () => import(/* webpackChunkName: "about" */ '../views/love/home.vue')
      },
      {
        path: 'play',
        name: 'love_play',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/love/play.vue')
      },
      {
        path: 'loading',
        name: 'love_loading',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/love/loading.vue')
      },
      {
        path: 'check_order',
        name: 'love_check_order',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/love/check_order.vue')
      },
      {
        path: 'order_detail',
        name: 'love_order_detail',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/love/order_detail.vue')
      },
      {
        path: 'agreement_use',
        name: 'love_agreement_use',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/love/agreement_use.vue')
      },
      {
        path: 'privacy',
        name: 'love_privacy',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/love/privacy.vue')
      }
    ]
  },
  {
    path: '/person',
    redirect: '/person/home',
    component: () => import(/* webpackChunkName: "about" */ '../views/person/index.vue'),
    children: [
      {
        path: 'home',
        name: 'person_home',
        component: () => import(/* webpackChunkName: "about" */ '../views/person/home.vue')
      },
      {
        path: 'play',
        name: 'person_play',
        component: () => import(/* webpackChunkName: "about" */ '../views/person/play.vue')
      },
      {
        path: 'order_check',
        name: 'person_order_check',
        component: () => import(/* webpackChunkName: "about" */ '../views/person/order_check.vue')
      },
      {
        path: 'order_list',
        name: 'person_order_list',
        component: () => import(/* webpackChunkName: "about" */ '../views/person/order_list.vue')
      },
      {
        path: 'loading',
        name: 'person_loading',
        component: () => import(/* webpackChunkName: "about" */ '../views/person/loading.vue')
      },
      {
        path: 'order_detail',
        name: 'person_order_detail',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/person/order_detail.vue')
      },
      {
        path: 'agreement_use',
        name: 'person_agreement_use',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/person/agreement_use.vue')
      },
      {
        path: 'privacy',
        name: 'person_privacy',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/person/privacy.vue')
      }
    ]
  },
  {
    path: '/baby',
    redirect: '/baby/home',
    component: () => import(/* webpackChunkName: "about" */ '../views/baby/index.vue'),
    children: [
      {
        path: 'home',
        name: 'baby_home',
        component: () => import(/* webpackChunkName: "about" */ '../views/baby/home.vue')
      },
      {
        path: 'agreement_use',
        name: 'baby_agreement_use',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/baby/agreement_use.vue')
      },
      {
        path: 'privacy',
        name: 'baby_privacy',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/baby/privacy.vue')
      },
      {
        path: 'play',
        name: 'baby_play',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/baby/play.vue')
      },
      {
        path: 'baby_loading',
        name: 'baby_loading',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/baby/loading.vue')
      },
      {
        path: 'order_status',
        name: 'baby_order_status',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/baby/order_status.vue')
      },
      {
        path: 'check_order',
        name: 'baby_check_order',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/baby/check_order.vue')
      },
      {
        path: 'baby_detail',
        name: 'baby_detail',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/baby/baby_detail.vue')
      }
    ]
  },
  {
    path: '/dailyyun',
    redirect: '/dailyyun/home',
    component: () => import(/* webpackChunkName: "about" */ '../views/dailyyun/index.vue'),
    children: [
      {
        path: 'home',
        name: 'dailyyun_home',
        component: () => import(/* webpackChunkName: "about" */ '../views/dailyyun/home.vue')
      }
    ]
  },
  {
    path: '/rili',
    redirect: '/rili/startup',
    component: () => import(/* webpackChunkName: "about" */ '../views/rili/index.vue'),
    children: [
      {
        path: 'home',
        name: 'rili_home',
        component: () => import(/* webpackChunkName: "about" */ '../views/rili/home.vue')
      },
      {
        path: 'startup',
        name: 'rili_startup',
        component: () => import('../views/rili/startup.vue')
      },
      {
        path: 'date',
        name: 'rili_date',
        component: () => import('../views/rili/date.vue')
      },
      {
        path: 'jiri',
        name: 'rili_jiri',
        component: () => import('../views/rili/jiri.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})
// getUrlParam方法就是使用正则截取地址栏里的code
function getUrlParam (name) {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  const r = window.location.search.substr(1).match(reg)
  // const r = window.location.hash.substr(13).match(reg)
  if (r != null) return unescape(r[2])
  return null
}

const regs = [/name/, /love/, /person/, /baby/, /dailyyun/, /rili/, /yearforune/]
const titles = ['姓名测试', '八字合婚', '个人姻缘', '宝宝潜能', '每日一运', '运程日历', '年运']
// 跳转回支付页面
router.beforeEach((to, form, next) => {
  for (let i = 0; i < regs.length; i++) {
    if (regs[i].test(to.path)) {
      document.title = titles[i]
      break
    }
  }
  const code = getUrlParam('code') // 截取url中的code
  // console.log(code, '44444')
  if (code) {
    if (code) {
      store.state.wxCode = code
      // const rout = window.location.pathname.split('/')
      const rout = window.location.hash.split('/')
      window.location.href = '/#/' + rout[1] + '/' + rout[2]
      // next({ path: `/${rout[1]}'/'${rout[2]} ` })
      // window.location.href = '/#/' + rout[1] + '/' + rout[2]
    }
  } else {
    next()
  }
})
export default router
