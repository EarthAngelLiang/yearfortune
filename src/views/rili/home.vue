<template>
    <div class="home">
        <div id="cover" v-if="showFlag==true">
            <ConfirmDate v-show="confirmDateShow" :brithDate="brithDate" @backDates="backDates"
            @cons="confirmDateShow = false" />
            <div class="order-win">
                <div class="order-title">
                    <span>输入你的生日</span>
                    <span style="margin-left:10vw;">掌握每天运程</span>
                </div>
                <div class="redItem" style="width:68vw;background-color:#FBF2E8;text-align:center">
                    <span style="font-size:4vw">请输入您的生辰信息</span>
                    <div class="daily_info">
                        <div class="inserts">
                            <span style="width:10vw;line-height:4vh;margin-right:3vw;">姓名：</span>
                            <input class="daily_form_item"  onkeyup="this.value=this.value.replace(/[^\u4e00-\u9fa5]/g,'')"  v-model="dailyForm.name" placeholder="请输入你的姓名" />
                        </div>
                        <div class="inserts">
                            <span style="width:10vw;line-height:4vh;margin-right:3vw;">性别：</span>
                            <input type="radio" name="gender" value="男" v-model="dailyForm.gender"><span style="margin-right:5vw;line-height:4vh;">男</span>
                            <input type="radio" name="gender" value="女" v-model="dailyForm.gender"><span style="line-height:4vh;">女</span>
                        </div>
                        <div class="inserts">
                            <span style="width:10vw;line-height:4vh;margin-right:3vw;">生日：</span>
                            <div type="text" disabled class="daily_form_item">{{ brithDate.gLabel || '请选择出生日期' }}</div>
                            <input type="text" id="dates" ref="setdate" class="birth-date-input" data-toid-hour="hour1"
                                placeholder="请输选择出生日期" name="input_date">
                            <input type="hidden" id="hour1" name="hour">
                            <div class="iconfont rili1 icon-ic_calendar"></div>
                        </div>
                        <div style="border-radius:2vw;margin:2vh auto 0 auto;width:35vw;height:4vh;background-color:#F47D7D;color:#FFF;">
                            <span style="line-height:4vh">领取每日一运</span>
                        </div>
                    </div>
                </div>
                <div style="text-align:left;margin:1vh auto 5vh auto">
                    <span style="font-size:3vw">说明:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每日一运(简版)为免费版，输入你的出生信息，可查看你个人每日运程情况。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另有运程日历详版，可查看全年运程详情（包含每日、每周、第月、当年运势详情)，可关注公众号</span>
                </div>
            </div>
            <div style="text-align:center">
                <img style="width:5vw" @click="closeWin()" v-lazy="require('@/assets/dailyyun/close.png')">
            </div>
        </div>
        <div class="zixun-detail" @click="openService"><span class="iconfont icon-manager-fill"
                style="font-size:8vw;color:#d1420a; font-weight: 100; text-shadow:  1px 1px rgba(0, 0, 0, 0.5);"></span>
            咨询老师
        </div>
        <div class="title">
            <img v-if="orderData.gender == '男'" v-lazy="require('@/assets/dailyyun/boy.png')" alt="" class="title_img">
            <img v-else v-lazy="require('@/assets/dailyyun/girl.png')" alt="" class="title_img">
            <div class="title_left">
                <div>
                    <span>{{ getHello() }}</span>
                    <span class="red" v-if="orderFlag == false"> （案例）</span>
                </div>
                <div>
                    <span>{{ getTime() }}</span>
                </div>
                <div v-if="orderFlag == false" style="margin:0 0 0 -10vw">
                    <span class="red_underline" @click="showWin()">点击获取自己专属运势日历</span>
                </div>
                <div v-else>
                    <span class="red_underline" @click="logout()">退出订单</span>
                </div>
            </div>
            <img v-lazy="getDayImageUrl()" style="width:8.5vw;height:8.5vw;margin:5vw 2vw 0 10vw;">
            <div class="title_right">
                <div>
                    <span style="font-size:3.3vw;">{{ getTime2() }}<br>{{ getWeekday() }}</span>
                </div>
            </div>
        </div>
        <div style="text-align:center;color:#F29350;font-size:3.3vw;margin-top:3vw;">
            <span>今日运程寄语:{{ getJiyu() }}</span>
        </div>
        <div class="redItem" style="margin-bottom:5vh">
            <div style="display:flex;text-align:center;width:100vw">
                <div @click="yunClick(0)" :class="yunIndex == 0 ? 'yunChecked radiusLeft' : 'yunUncheck'" >日运</div>
                <div @click="yunClick(1)" :class="yunIndex == 1 ? 'yunChecked' : 'yunUncheck'">月运</div>
                <div @click="yunClick(2)" :class="yunIndex == 2 ? 'yunChecked radiusRight' : 'yunUncheck'">年运</div>
            </div>
            <DayYun @showWin="showWin" v-show="yunIndex == 0" :orderFlag="orderFlag" :orderData="orderData" />
            <MonthYun @showWin="showWin" v-show="yunIndex == 1" :orderFlag="orderFlag" :orderData="orderData" />
            <YearYun @showWin="showWin" v-show="yunIndex == 2" :orderFlag="orderFlag" :orderData="orderData" />
        </div>
    </div>
</template>
<script>
import { Lunar } from 'lunar-javascript'
import { openService } from '@/uitls/js/name_service'
import ConfirmDate from '@/components/name/confirm/confirm_date.vue'
import { RuiDatepicker } from '@/uitls/js/rui_date'
import DayYun from '@/components/rili/day.vue'
import MonthYun from '@/components/rili/month.vue'
import YearYun from '@/components/rili/year.vue'
import { mapState } from 'vuex'

export default ({
  components: { ConfirmDate, DayYun, MonthYun, YearYun },
  setup () {
  },
  mounted () {
    const timer = setInterval(function () {
      if (document.getElementById('dates')) {
        new RuiDatepicker().init('#dates')
        clearInterval(timer) // 清除定时监听
      }
    }, 100)
  },
  computed: {
    ...mapState(['brithDate', 'wxCode'])
  },
  watch: {
    brithDate (val) {
      console.log(val, 'valasfrawerfetewrhgrtyry')
      this.confirmDateShow = true
    }
  },
  data () {
    this.dt = new Date()
    this.progress = (this.dt.getHours() * 60 + this.dt.getMinutes()) / 1440 * 100
    // 标准化为15-80
    this.clockProgress = this.progress / 100 * (80 - 15) + 15
    this.lu = Lunar.fromDate(this.dt)
    this.yis = this.lu.getDayYi()
    this.jis = this.lu.getDayJi()
    return {
      orderFlag: false,
      yunIndex: 0,
      confirmDateShow: false,
      dailyForm: {
        name: '',
        gender: '男',
        birth: ''
      },
      showFlag: false,
      orderData: {
        day: {
          x: [
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3]
          ],
          y: [
            [1, 2, 3],
            [2, 3, 4],
            [3, 4, 5],
            [4, 5, 6],
            [6, 7, 8]
          ],
          dp: [23, 27, 65, 88, 99]
        },
        month: {
          x: [
            [3, 4, 5],
            [3, 4, 5],
            [3, 4, 5],
            [3, 4, 5],
            [3, 4, 5]
          ],
          y: [
            [6, 3, 8],
            [2, 3, 4],
            [3, 4, 5],
            [4, 5, 6],
            [6, 7, 8]
          ]
        },
        year: {
          x: [2020, 2021, 2022, 2023, 2024, 2025],
          y: [50, 30, 20, 80, 60, 70],
          // 九宫分析、个人调理建议、家居调理建议、男方/女方家居调理建议、已婚人士注意
          jiugong: [
            ['东南方', '三碧禄存星', '小人位', '主是非、官灾'],
            ['正南方', '八白左辅星', '正财位', '主财运、事业'],
            ['西南方', '一白贪狼星', '桃花位', '主感情、人缘'],
            ['正东方', '二黑病符星', '病符位', '主病疾、伤痛'],
            ['中宫', '四绿文曲星', '文昌位', '主事业、官贵'],
            ['正西方', '六白武曲星', '偏财位', '主横财、贵人'],
            ['东北方', '七亦破军星', '破财位', '主破财、血光'],
            ['正北方', '九紫右强星', '喜神位', '主姻缘、感情'],
            ['西北方', '五黄廉贞星', '五黄煞', '主凶灾、祸患']
          ],
          position: ['东南', '正南', '西南', '正东', '中宫', '正西', '东北', '正北', '西北'],
          positionNode: ['西北', '正北', '中宫'],
          jiaju: [
            [
              '[四绿] 入中宫',
              '代表规划性，四绿也是文昌星，2023将是一个科教兴国的年份，在科研科教方面投入大量资金、人力物力。与非科研科教行业相关的，工匠精神有所提升。'
            ],
            [
              '(进一步调理需要结合个人八字)',
              '黑曜石手链：黑曜石具有强大的消负能量作用，可以帮助清除负能量，保护穿戴者免受负面影响。适合那些需要净化思维、提升身体健康的人。',
              '绿松石手串：绿松石在风水中被认为能够吸引治愈和保护的能量，有助于缓解压力，提升整体健康。',
              '黄水晶摆件：黄水晶有助于增强消化系统的功能，适合放置在家中西方财位或餐厅，以增强其效果。',
              '紫水晶洞：紫水晶具有极强的净化和抗压能力，可以放在卧室或客厅来提升环境的宁静氛围，有助于缓解情绪压力。',
              '玫瑰石簇：玫瑰石（玫瑰水晶）被认为是爱情的石头，有助于提升人际关系和家庭和谐，可以放在卧室或东南方以增强其影响。',
              '蓝晶石：蓝晶石（如蓝纹石、蓝色玛瑙）有助于缓解睡眠问题，特别是对于那些容易焦虑的人。放置在卧室的床头柜上，可以帮助改善睡眠质量。',
              '熏衣草晶簇：熏衣草具有极好的放松和改善睡眠的作用，可以使用熏衣草香包或在卧室内放置熏衣草晶簇以增强睡眠质量。'
            ],
            [
              '2024年，八白财星位于西方，这是吸引和增加财富的最佳区域。在风水中，西方代表金属性，与财富紧密相关。将这一区域布置得当，可以帮助增强家庭的财运。',
              '颜色选择：在西方使用白色或金色来增强该区域的金属性。这些颜色可以通过墙面、窗帘、装饰品等方式加以应用。',
              '金属元素：在西方放置金属物品如金属雕塑、铜制风铃或金属框架的画作，可以激活财运。',
              '光源设置：确保西方区域光线充足，使用明亮的灯光或设置反射镜来增加区域的亮度和活力。',
              '财神像：在西方摆放财神像是一种常见的提升财运的方法。确保财神像面向室内，朝向房屋的中心。',
              '风水以水为财：虽然西方属金，水代表财富，如鱼缸，风水球也可以用来“生金”，促进财富增长。注意水的清洁和流动性，避免水体停滞。'
            ]
          ],
          yuns: [
            // 年运、生肖、财富、事业、感情、健康
            [
              '经济',
              '1、后疫情时代对于经济满怀憧憬，但2023年的发展压力和社消数据依然不理想，2024的情况比2023有所解压，属于慢速增长的现象，坚定发展目标和方向，出口有宽松的政策扶持，传统行业也看到了曙光。',
              '2、一二线城市的发展还是处在缓慢增长的过程，失业率依然高企；特别是命盘中出现辰、戌、丑、未，四个字中有三个字的，需要做好心理准备，失业的人往往就是你。',
              '3、中层人群的收入减缓，消费力不足',
              '4、房地产成交量不理想，三四线城市处在去库存周期，房价有下调的现象；',
              '5、科技相关行业，如论硬件还是软件有突破，数字经济的影响力越来越大；',
              '6、旅游、餐饮、文创、传媒、影视、教育培训、科创、AI、人工智能、中医药等行业发展不错；',
              '7、科技探索人类文明有突破的阶段；',
              '8、精神信仰受重视的一年，也越来越受年轻人的喜爱。',
              '金融',
              '过去的年份在辰戌丑未年都有明显的变化，而且基本是下行的状态，还好的是甲辰青龙开启了三元九运的新格局，东方之光借力九运离火，正式以木火的能量对抗西方的金水。',
              '在这过程中的浮动比较大，高低起伏多变的现象比较明显，特别需要注意的月份是阳历的4月5日至5月4日，7月7日至8月6日，10月7日至11月7日，1月5日至次年的2月4日，这四个月份的变化较大，需要谨慎面对，切勿追高追涨，往往套牢的是这几个月。',
              '健康',
              '1、年度高发的疾病是抑郁自闭，头晕头疼，通风，扭伤腰椎颈椎四肢，肠胃、肝胆等；',
              '2、水产、海鲜类得少吃，因此类引起中毒、急性肠胃炎等现象；',
              '3、中医影响力起到很好作用的一年；',
              '4、特别容易伤风感冒，出门在外多需注意防寒保暖。',
              '5、容易肥胖',
              '6、老人容易中风，摔跤扭伤；特别是农历的三、五、六、九。',
              '气候',
              '1、雨水较多的一年；',
              '2、特别是阳历的8月7日至9月6日前后，易有特大的台风；',
              '3、山洪倾泻泥石流；特别是东北、东南、东面的地区；',
              '4、地震较频繁，也因此引起生灵涂炭；',
              '5、农作物海产失收减量，水果、水稻、小麦、青菜等价格高攀，水产价格也高。',
              '6、小动物受灾难的一年。'
            ],
            [
              '注:属相是从每年的阴历1月初一至年末最后一天。为一个属相。',
              '(1)十二生肖中，非常脚踏实地的一个生肖，默默付出、默默耕耘、勤恳努力，这些 词都可以用来形容牛，所以和牛做朋友的人不怕吃亏，非常实在的一个生肖，就是有时候太固执，甚至是偏执，决定的事很难改变(即使知道有更好的解决办法，但就是赌一口气）',
              '(2)生于丑年丑月的人很容易抑郁， 因为太钻牛角尖了，有这样的小伙伴自己开解一 下，给点勇气自己很多时候问题讲开了就会发现其实根本不是个问题给自己一个豁然开 朗的机会，那你就是一头好牛了',
              '(3)牛跟兔子的关联，不是特别强，意味着 2023 对牛来说是喜忧参半的一年，可好可不好，具体要看出生在哪个月份;',
              '(4) 2023 年，是牛比较容易内观自己的一年，是一种压抑到极致后突然开窍了的感觉。'
            ],
            [
              '相对其它月份的牛来说，要弱一点，压力比较大，宜静不宜动，否则动则有悔，动即冲动创业/跳槽/扩张/开分公司/启动新项目/ 开发短期新产品，财运相对一般，不宜冒进。'
            ],
            [
              '丑月出生的人，事业上不会有太明显的改变或提升，70%-80%事业上相对一般，要做好财务规划，直不得志的人，可以开始计划新财路了，但是还不能动、不能求快。'
            ],
            [
              '肖属牛/丑月出生的小伙伴，感情(人缘) 方面都比较平平淡淡，节奏慢的一年，内心疲倦，有点社恐，即将快到下个阶段了，不要放弃。'
            ],
            [
              '(1) 丑月出生的人，身体很寒(手脚冰冷、怕寒)健康上要多多注意。女性要小心女性疾病，男性要多加保护心肺和脾胃',
              '(2)心理上容易有孤独、遗憾之感，实在难受的话可别钻牛角尖了，跟信任的人倾诉一下。',
              '(3) 水牛(73 年)-因为变化比较大，身心都会有不舒服的时候，自身要多加注意;木牛(85 年)要注意自己和家人的健康。'
            ]
          ]
        },
        name: '陈伟波',
        gender: '男',
        shengxiao: '猴',
        advice: '今天适合什么颜色衣服',
        best: '今天你的感情运还算不错，喜欢的人或许会主动联系你问你有没有时间出来一起吃个饭，虽然你表面上没有什么反应，其实内心早就乐开了花，让你期待与对方的相聚也可以趁这个机会去更近一步了解彼此，增进两人的关系。在这里灵妹妹建议你，可以提前准备一些小礼物送给对方，不需要太昂贵，如果是亲手做的将更有意义，关系也能更近一步。',
        notice: '今天你的事业运较差，做什么都不在状态，也没什么精气神，可能是昨晚熬夜赶任务，导致你今天整个人有点混乱，情绪不稳，这个时候可以先放下手中活，泡杯咖啡放松一下心情，不然再继续也是无用功;如果是找工作的状态，那么最好能找准领域，不要太分散，否则会更加迷茫。在这里灵妹妹提醒你，对待工作要全身心的投入，才能保证工作的质量，不断的提高自己的职能，才能让自己在当今社会立于不败之地。',
        allgo: '今天你的情绪有些过度兴奋，甚至会有出人意料的惊人之举，有很多新奇的想法和点子。在工作上你有许多创新的想法，不妨一一记录下来，不过在和同事、上司沟通时，你有些缺乏耐性，又急于表现自己，一些奇怪的言行容易让对方大跌眼镜。多些考虑后再决定是否要将自己的想法表露出来，不要过于心急。',
        positionDetail: ['6', '红色', '正南', '正北'],
        monthTezheng: ['从自然气场来看，我们又会迎来一个重要的节令: 小暑，从此进入类卯年的己未六月。此月是从公历7月7日始，至8月7日止。此月火炎土燥，个人情绪波动较大，虽然比较适合婚恋，但创业投资则需谨慎。', '本月你的综合运势整体算是平稳，波动不算大，基本上都是很稳定的发展，比较的顺遂，工作及生活方面都比较的稳定顺遂，没有特别大的阻碍，一些小问题能得到及时的解决:虽然相对平缓，但也不能太掉以轻心，可能有一段时间有些小起伏，虽然不会影响整体，但还是需要做好应对的计划。灵妹妹提醒你，在局势平稳的时候，最重要的是寻找发展的机遇，或是用来提高自己，学习更多的技能来让自己在未来社会发展中处于有利地位。'],
        ganqingScore: 3.5,
        monthYun: [
          ['丁未月虽然不是桃花月，但丁王淫合，故桃花气场也很浓厚，生于丁日千日的，异性缘比较旺盛单身的有利恋爱找对象。已婚的易有外遇，不一而足，故要妥善处理。'],
          ['事业上不会有太明显的改变或提升，70%-80%事业上相对一般，要做好财务规划，一直不得志的人，可以开始计划新财路了，但是还不能动、不能求快'],
          ['财运上不会有太明显的改变或提升，70%-80%事业上相对一般，要做好财务规划，一直不得志的人，可以开始计划新财路了，但是还不能动、不能求快。'],
          ['小暑之际，气候炎热，容易心烦气燥，还疲倦乏力遇事不够冷静，有时还容易冲动误事等。故在此月应该注意养生与锻炼，尤其要注意调养心境与情志。一是不要悲喜过度，如喜过则伤心，心伤则心跳袖荡精神涣散，思想不能集中，甚则精神失常等，心神受损又必涉及其他脏腑。二是在情志方面，避免高温酷暑下的急躁冲动，或情绪失控，重点突出“养心致静”，心静自然凉。此外还要注意防晒另外，此月火旺土燥，需水滋润，在确保安全的前提下，也可进行适度的游泳锻炼，或泡温泉等，多接触些水，也不失为避暑消夏的有效良方。']
        ],
        hangye: [
          ['癸水临丑土，水土相生，金融、保险及地产行业可能迎来稳定增长期。农业、环保行业也可能因水土的关系而有所发展。'],
          ['癸水临丑土，冬季湿寒，关注因寒湿导致的关节炎、风湿性疾病。'],
          ['癸水与丑土相遇，可能带来的意外包括水相关的灾害如洪水、泥石流等，尤其是在低洼或河流附近的地区。同时，农历腊月气温较低，需要注意与寒冷相关的健康问题，如滑倒、冻伤等。']
        ]
      }
    }
  },
  methods: {
    openService () {
      openService()
    },
    yunClick (ind) {
      this.yunIndex = ind
    },
    backDates () {
      this.$refs.setdate.click()
    },
    getDayImageUrl () {
      return require('@/assets/rili/numbers/' + (this.dt.getDate() + '').padStart(2, 0) + '.png')
    },
    getHello () {
      let word = '上午好'
      if (this.dt.getHours() >= 18) {
        word = '晚上好'
      } else if (this.dt.getHours() >= 12) {
        word = '下午好'
      }
      return word + '， ' + this.orderData.name
    },
    getTime () {
      const timeStr = this.$dateFormat(this.dt, false)
      const hours = (this.dt.getHours() + '').padStart(2, 0)
      const minutes = (this.dt.getMinutes() + '').padStart(2, 0)

      return timeStr + ' ' + hours + ':' + minutes + ' ' + this.$getShichen(this.dt.getHours()) + '时'
    },
    getTime2 () {
      const year = this.dt.getFullYear()
      const month = (this.dt.getMonth() + 1 + '').padStart(2, 0)

      return year + '年' + month + '月'
    },
    logout () {
      this.orderFlag = false
      this.showFlag = false
    },
    closeWin () {
      this.showFlag = false
      const timer = setInterval(function () {
        if (document.getElementById('dates')) {
          new RuiDatepicker().init('#dates')
          clearInterval(timer) // 清除定时监听
        }
      }, 100)
    },
    showWin () {
      this.$scrollToTop()
      this.showFlag = true
    },
    getSolor () {
      const month = this.dt.getMonth() + 1
      return month.toString() + '月' + this.dt.getDate().toString() + '日'
    },

    getJieqi () {
      if (!this.lu.getJieQi()) {
        return '--'
      } else {
        return this.lu.getJieQi()
      }
    },
    getWeekday () {
      return this.$store.state.weekArr[this.dt.getDay()]
    },
    getLunar () {
      return this.$store.state.mmArr[this.lu.getMonth() - 1] + this.$store.state.ddArr[this.lu.getDay() - 1]
    },
    getShengxiao () {
      return this.lu.getYearInGanZhi() + '·' + this.lu.getYearShengXiao()
    },
    getJiyu () {
      return '“状态在线的一天”'
    },
    allClick () {
      console.log('allclick')
    }
  }
})
</script>

<style lang="less" scoped>
.home {
    background-color: #fff;
    position: relative;
    width: 100vw;

    .zixun-detail {
        position: fixed;
        left: 0;
        bottom: 6vh;
        z-index: 9;
        width: 14vw;
        font-size: 3vw;
        color: #F07155;
        font-weight: 700 !important;
        padding: 2vw 0;
        border-top-right-radius: 1.4vw;
        border-bottom-right-radius: 1.4vw;
        display: flex;
        flex-direction: column;
        text-align: center;
        font-weight: 100;

    }

    .title{
        padding-top: 3vh;
        width: 100vw;
        display: flex;

        .title_img{
            height: 12vh;
        }
        .title_left{
            margin: 3vw 0 auto -5vw;
            div{
                margin-bottom: 1.5vw;
                span{
                    font-size: 3.3vw;
                }
            }

            .red{
                color: #F44B54;
            }
            .red_underline{
                color: #F44B54;
                text-decoration: underline;
            }
        }

        .title_right{
            margin: 3vw 0 auto 0;
        }
    }

    .rili{
        background-image: url('@/assets/dailyyun/rili.png');
        width: 45vw;
        height: 60vw;
        margin: 3vw auto;
        background-size: 100%;
        background-repeat: no-repeat;
        text-align:center;

        .solor{
            font-size: 6vw;
            padding-top: 10vw;
            color: #6ED8D8;
            span{
                font-family: 'zzqxmt';
            }
        }
        .jieqi{
            color: #F99E2F;
            padding-top: 3vw;
            font-size: 4vw;
        }
        .weekday{
            color: #6ED8D8;
            padding-top: 3vw;
            font-weight: bold;
            font-size: 4vw;
        }
        .lunar{
            padding-top: 3vw;
            display:flex;

            div{
                margin: 0 4vw 0 4vw;
                width: 10vw;
                background-color: #6ED8D8;
                border-radius: 1vw;
                .nongli-span{
                    font-size: 4vw;
                    color: #fff;
                    font-weight: bold;
                }
            }

            .lunar-span{
                color: #6ED8D8;
                font-size: 5vw;
                font-family: 'zzqxmt';
            }
        }
        .shengxiao{
            color: #6ED8D8;
            padding-top: 3vw;
            font-size: 4vw;
            span{
                font-family: 'zzqxmt';
            }
        }
    }

    .redItem{
        width: 90vw;
        margin: 6vw auto 0 auto;
        border: 1px solid #F13846;
        border-radius: 4vw;
        min-height: 30vh;
        padding: 0 5vw 5vw 5vw 5vw;

        .yunChecked{
            width:30vw;
            background-color:#F44B54;
            color:#FFF;
            border: 1px solid #F13846;
        }

        .radiusLeft{
            border-radius: 4vw 0 0 0;
        }
        .radiusRight{
            border-radius: 0 4vw 0 0;
        }

        .yunUncheck{
            width:30vw;
        }
    }
}
#cover {
    position: absolute;
    left: 0px;
    top: 0px;
    background: rgba(0, 0, 0, 0.5);
    width: 100vw; /*宽度设置为100%，这样才能使隐藏背景层覆盖原页面*/
    height: 100vh;
    filter: alpha(opacity=100); /*设置透明度为100%*/
    opacity: 1; /*非IE浏览器下设置透明度为100%*/
    display: block;
    z-Index: 999;

    .order-win{
        margin:45vw auto 0 auto;
        width: 78vw;
        z-index:10;
        height:63vh;
        background-color: #FFF;
        padding: 5vw;

        .order-title{
            line-height:6vh;
            font-weight:bold;
            background-color:#F47D7D;
            color:#FFF;
            width:68vw;
            height:6vh;
            text-align:center;
            margin:0 auto;
        }
    }
    .daily_info {
        width: 58vw;
        margin: 4vw auto 0 auto;
        font-size: 3vw;
        .inserts {
            width: 60vw;
            margin: 1vw auto;
            position: relative;
            display: flex;

            .birth-date-input {
                position: absolute;
                left: 13vw;
                width: 43vw;
                height: 4vh;
                padding-left: 2vw;
                font-size:3vw;
            }

            .rili1 {
                z-index:10;
                font-size: 4vw;
                color: #EB4B4B;
                margin: 2vw 0 0 -5vw;
                //使得点击事件可以穿透到下层元素，但自身无法接收点击事件
                pointer-events: none;
            }

            .daily_form_item {
                text-align: left;
                width: 43vw;
                height: 4vh;
                font-size: 3vw;
                padding-left:2vw;
            }

            input:-moz-placeholder,
            textarea:-moz-placeholder {
                font-size: 3vw;
            }

            input:-ms-input-placeholder,
            textarea:-ms-input-placeholder {
                font-size: 3vw;
            }

            input::-webkit-input-placeholder,
            textarea::-webkit-input-placeholder {
                font-size: 3vw;
            }
        }
    }
}
</style>
