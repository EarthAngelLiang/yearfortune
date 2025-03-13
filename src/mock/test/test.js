export const test = [
  {
    url: RegExp('/index?' + '.*'),
    methods: 'get',
    func: function () {
      return {
        code: 0,
        data: {
          data: [{
            config_id: 1,
            key: 22,
            value: 68,
            description: '可见度发挥就斯蒂芬是靠近对方开具收费'
          }]
        }
      }
    }
  },
  {
    url: '/info',
    methods: 'get',
    func: {
      code: 0,
      data: { 'list|1-10': [{ 'id|+1': 1, name: '我是小老虎' }] },
      msg: ''
    }
  }
]
