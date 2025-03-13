export const order = [
  {
    url: RegExp('/index?' + '.*'),
    methods: 'get',
    func: function () {
      return {
        result: 0,
        data: [{
          config_id: 1,
          key: 22,
          value: 68,
          description: '可见度发挥就斯蒂芬是靠近对方开具收费'
        }]
      }
    }
  },
  {
    url: '/name_examine/place_order',
    methods: 'post',
    func: {
      result: 0,
      data: { order_id: '123564656', pay_amount: 13, original_amount: 64 },
      msg: '',
      errMsg: ''
    }
  },
  {
    url: '/name_examine/select_orderid',
    methods: 'post',
    func: {
      result: 0,
      'data|1-10': [{ 'order_id|+1': 1, name: '小老虎', gender: '女', birthday: '2023-01-03', sx_hour: '子', calender: '公历', status: '已支付' }],
      msg: '',
      errMsg: ''
    }
  },
  {
    url: '/name_examine/order_result',
    methods: 'post',
    func: {
      result: 0,
      data: {
        order_id: '121302566323',
        score: 92,
        jy_desc: '再测一遍，老师还没想好',
        name: '张小凡',
        gender: '男',
        solar_birthday: '2023-03-06',
        lunar_birthday: '2023-06-02',
        sx_hour: '子',
        hour: 6,
        calender: '2023-02-03',
        name_pinyin: ['zhang', 'xiao', 'fang'],
        name_wuxing: ['火', '火', '火'],
        bazi_paipan: {
          sizhu: ['年柱', '月柱', '日柱', '时柱'],
          wuxing: ['金木', '水火', '土金', '木水'],
          shishen: ['偏印', '伤官', '日主', '七杀'],
          qianzao: ['偏印', '伤官', '日主', '七杀'],
          zangang: ['甲乙', '丙丁', '戊戌', '已'],
          nayin: ['偏印', '伤官', '日主', '七杀']
        },
        wuxing_analysis: {
          jin: 30,
          mu: 15,
          shui: 10,
          huo: 15,
          tu: 30
        },
        xiyongshen_analysis: {
          xishen: '金',
          yongshen: '木',
          xianshen: '水',
          choushen: '火',
          jishen: '土',
          xys_desc: '喜用神描述'
        },
        name_analysis: [{
          zi: '小',
          zi_pinyin: 'xiao',
          zi_wuxing: '火',
          zi_yuyi: '用作人名寓言前程似锦'
        }, {
          zi: '凡',
          zi_pinyin: 'fan',
          zi_wuxing: '木',
          zi_yuyi: '用作人名寓言前程似锦'
        }],
        // {} 暂时是空的
        name_tone_list: {},
        name_accent_list: {},
        all_desc: '音律总评感觉不错',
        name_struct_list: [],
        name_wuxing_xys_list: [],
        name_shengxiao_list: [],
        name_rensheng_analysis: {
          guiren: 20,
          chengshouli: 3,
          zizhili: 11,
          chuangzaoli: 41,
          sikaoli: 25,
          ping_desc: '比较平衡，承受能力需要加强'
        },
        xingge_struct_analysis: {
          wai: '字体帅气好看，笔画不多不少适中',
          nei: '寓意好，有内涵'
        },
        health_analysis: {
          xin: 14,
          gan: 2,
          pi: 20,
          fei: 10,
          shen: 54,
          desc: '健康一般，需要注意调理、养生'
        },
        love_analysis: {
          zhishu: 3.2,
          desc: '幸运星强，运程顺利'
        },
        career_analysis: {
          tezhi: '聪明智慧型，身体一般，性格开朗',
          gongzuo: '推荐直播主持、服务类岗位'
        }
      },
      msg: '',
      errMsg: ''
    }
  }
]
