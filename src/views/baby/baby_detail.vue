<template>
    <div class="home">
        <Tips />
        <div class="zixun-detail" @click="openService"><span class=" iconfont icon-kefu1"
                style="font-size:8vw;color:#d1420a; font-weight: 100; text-shadow:  1px 1px rgba(0, 0, 0, 0.5);"></span>
            在线客服
        </div>
        <div class="container">
            <TopBg />

            <div class="top-tops"  :style="{height:!tempShow?'0px':'8vw'}">以下是您的在线测算结果，请查看您的专属报告</div>

            <BoxBg>
                <template v-slot:exhibition>
                    <div class="nav_play" style="margin-top:20vw;">
                        <TopDecoration :name="babyDetail.name+'的测算报告'" style="z-index: 10;"></TopDecoration>
                        <img v-lazy="require('@/assets/baby/d1.png')" alt="" class="icon_img1">
                        <div class="baby_kuan">

                            <div class="baby_checks">
                                <div class="baby_checks_li">你的姓名: {{ babyDetail.name }}</div>
                                <div class="baby_checks_li">你的性别: {{ babyDetail.gender }}</div>
                                <div class="baby_checks_li">出生日期: (阳历) {{ babyDetail.solar_birthday + ' '
                                    + babyDetail.hour + '点' }}</div>
                                <div class="baby_checks_li" style="text-align:center;">  (农历) {{ babyDetail.lunar_birthday
                                    + ' ' + babyDetail.sx_hour }}</div>
                            </div>
                        </div>
                        <img v-lazy="require('@/assets/baby/d2.png')" alt="" class="icon_img">

                    </div>
                </template>
            </BoxBg>

            <BoxBg>
                <template v-slot:exhibition>
                    <div class="nav_play" style="margin-top:10vw;">
                        <TopDecoration :name="'孩子生辰信息分析'" style="z-index: 10;"></TopDecoration>
                        <img v-lazy="require('@/assets/baby/d1.png')" alt="" class="icon_img1">
                        <div class="baby_kuan">

                            <div class="baby_checks">

                                <div class="name-detail-box">
                                    <div class="pan-box">
                                        <div class="title-row">
                                            <div class="title-item">四柱</div>
                                            <div class="title-item" v-for="(item, index ) in babyDetail.baobaoscxx.sizhu"
                                                :key="index">{{ item }}</div>
                                        </div>
                                        <div class="nav-list">
                                            <div class="nav-row">
                                                <div class="nav-item" style="color: #9D1414;font-weight: 700;">五行</div>
                                                <div class="nav-item" v-for="(item, index ) in babyDetail.baobaoscxx.wuxing"
                                                    :key="index">{{ item }}</div>
                                            </div>
                                            <div class="nav-row" style="background-color: #FCE7E7;">
                                                <div class="nav-item" style="color: #9D1414;font-weight: 700;">天干</div>
                                                <div class="nav-item"
                                                    v-for="(item, index ) in babyDetail.baobaoscxx.tiangan" :key="index">{{
                                                        item }}</div>
                                            </div>
                                            <div class="nav-row">
                                                <div class="nav-item" style="color: #9D1414;font-weight: 700;">地支</div>
                                                <div class="nav-item" v-for="(item, index ) in babyDetail.baobaoscxx.dizhi"
                                                    :key="index">{{ item }}</div>
                                            </div>
                                            <div class="nav-row" style="background-color: #FCE7E7;">
                                                <div class="nav-item" style="color: #9D1414;font-weight: 700;">臧干</div>
                                                <div class="nav-item"
                                                    v-for="(item, index ) in babyDetail.baobaoscxx.zanggan" :key="index">
                                                    <div class="nav-item_lis">{{ item }}</div>
                                                </div>
                                                <!-- <div class="nav-item">
                                                    <div class="nav-item_lis">火水</div>
                                                    <div class="nav-item_lis">火水</div>
                                                    <div class="nav-item_lis">火水</div>
                                                </div>
                                                <div class="nav-item">
                                                    <div class="nav-item_lis">火水</div>
                                                    <div class="nav-item_lis">火水</div>
                                                    <div class="nav-item_lis">火水</div>
                                                </div>
                                                <div class="nav-item">
                                                    <div class="nav-item_lis">火水</div>
                                                    <div class="nav-item_lis">火水</div>
                                                    <div class="nav-item_lis">火水</div>
                                                </div> -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="baby_checks_li">喜用神:
                                    喜神为{{ babyDetail.baobaoscxx.xiyongshen[0] }}，用神为{{ babyDetail.baobaoscxx.xiyongshen[1]
                                    }}
                                </div>
                                <div class="baby_checks_li">忌神:忌神为{{ babyDetail.baobaoscxx.jishen }}</div>
                            </div>

                        </div>
                        <img v-lazy="require('@/assets/baby/d2.png')" alt="" class="icon_img">

                    </div>
                </template>
            </BoxBg>

            <BoxBg>
                <template v-slot:exhibition>
                    <div class="nav_play" style="margin-top:10vw;">
                        <TopDecoration :name="'性格特点分析'" style="z-index: 10;"></TopDecoration>
                        <img v-lazy="require('@/assets/baby/d2.png')" alt="" class="icon_img1">
                        <div class="baby_kuan">

                            <div class="baby_checks">
                                <SubHead :subName="'孩子的性格优点'">
                                    <template v-slot:content>
                                        <div class="headers-row">
                                            <div class="charts-wuxings">
                                                <div id="wuxings" class="xing-charts"></div>
                                                <div class="labels1">
                                                    <div class="name">承受力</div>
                                                    <div class="name">组织能力</div>
                                                    <div class="percent">{{ babyDetail.xinggetedian_analysis.chengshouri }}
                                                        %</div>
                                                </div>
                                                <div class="labels2">
                                                    <div class="name">贵人</div>
                                                    <div class="name">依赖性</div>
                                                    <div class="percent"> {{ babyDetail.xinggetedian_analysis.guiren }} %
                                                    </div>
                                                </div>
                                                <div class="labels3">
                                                    <div class="name">思考力</div>
                                                    <div class="name">创意</div>
                                                    <div class="percent"> {{ babyDetail.xinggetedian_analysis.sikaoli }} %
                                                    </div>
                                                </div>
                                                <div class="labels4">
                                                    <div class="name">财富</div>
                                                    <div class="name">创造力</div>
                                                    <div class="percent"> {{ babyDetail.xinggetedian_analysis.chuangzaoli }}
                                                        %</div>
                                                </div>
                                                <div class="labels5">
                                                    <div class="name">自制力</div>
                                                    <div class="name">学业</div>
                                                    <div class="percent"> {{ babyDetail.xinggetedian_analysis.zizhili }} %
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="baby_sub_small_title">
                                            <div class="iconfont icon-wujiaoxing"></div>
                                            <div class="small_title">先天性格能力比重图</div>
                                            <div class="iconfont icon-wujiaoxing"></div>
                                        </div>
                                        <div class="baby_txt_detail" :style="{ 'padding-top': index === 0 ? '3vw' : '0vw' }"
                                            v-for="(item, index) in babyDetail.xinggetedian_analysis.xgtd_des" :key="index">
                                            {{ item }}
                                        </div>
                                    </template>
                                </SubHead>
                                <SubHead :subName="'如何发挥孩子的性格优点'">
                                    <template v-slot:content>
                                        <div class="baby_txt_detail" :style="{ 'padding-top': index === 0 ? '8vw' : '0vw' }"
                                            v-for="(item, index) in babyDetail.xinggetedian_analysis.rh_xingge_youdian"
                                            :key="index">
                                            {{ item }}
                                        </div>
                                    </template>
                                </SubHead>
                                <SubHead :subName="'孩子的性格缺点'">
                                    <template v-slot:content>
                                        <div class="baby_txt_detail" :style="{ 'padding-top': index === 0 ? '8vw' : '0vw' }"
                                            v-for="(item, index) in babyDetail.xinggetedian_analysis.xingge_quedian"
                                            :key="index">
                                            {{ item }}
                                        </div>
                                    </template>
                                </SubHead>
                                <SubHead :subName="'如何修正孩子的性格缺点'">
                                    <template v-slot:content>
                                        <div class="baby_txt_detail" :style="{ 'padding-top': index === 0 ? '8vw' : '0vw' }"
                                            v-for="(item, index) in babyDetail.xinggetedian_analysis.rh_xingge_quedian"
                                            :key="index">
                                            {{ item }}
                                        </div>
                                    </template>
                                </SubHead>
                            </div>

                        </div>
                        <img v-lazy="require('@/assets/baby/d1.png')" alt="" class="icon_imgl" style="top:26%">

                        <img v-lazy="require('@/assets/baby/d2.png')" alt="" class="icon_imgr" style="top:48%">
                        <img v-lazy="require('@/assets/baby/d2.png')" alt="" class="icon_imgl" style="top:64%">
                        <img v-lazy="require('@/assets/baby/d1.png')" alt="" class="icon_imgr" style="top:80%">
                        <img v-lazy="require('@/assets/baby/d2.png')" alt="" class="icon_img">

                    </div>
                </template>
            </BoxBg>
            <BoxBg>
                <template v-slot:exhibition>
                    <div class="nav_play" style="margin-top:10vw;">
                        <TopDecoration :name="'先天健康情况'" style="z-index: 10;"></TopDecoration>
                        <img v-lazy="require('@/assets/baby/d2.png')" alt="" class="icon_img1">
                        <div class="baby_kuan">
                            <div class="baby_checks">
                                <SubHead :subName="'孩子的五行体质及健康问题'">
                                    <template v-slot:content>
                                        <div class="headers-row">
                                            <div class="charts-wuxings">
                                                <div id="jiankan" class="xing-charts"></div>
                                                <div class="labels1">
                                                    <div class="name">肺、骨</div>
                                                    <div class="name">骼</div>
                                                    <div class="percent">{{ babyDetail.health_analysis.fei_guge }} %</div>
                                                </div>
                                                <div class="labels2" style="right: -9vw;">
                                                    <div class="name">肾</div>
                                                    <div class="name">（寒湿体质）</div>
                                                    <div class="percent"> {{ babyDetail.health_analysis.shen }} %</div>
                                                </div>
                                                <div class="labels3">
                                                    <div class="name">肝胆</div>
                                                    <div class="name">精神</div>
                                                    <div class="percent"> {{ babyDetail.health_analysis.gandan }} %</div>
                                                </div>
                                                <div class="labels4" style="left: -9vw;">
                                                    <div class="name">心</div>
                                                    <div class="name">（燥热体质）</div>
                                                    <div class="percent"> {{ babyDetail.health_analysis.xin }} %</div>
                                                </div>
                                                <div class="labels5">
                                                    <div class="name">脾胃</div>
                                                    <div class="name">消化系统</div>
                                                    <div class="percent"> {{ babyDetail.health_analysis.piwei }} %</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="baby_sub_small_title">
                                            <div class="iconfont icon-wujiaoxing"></div>
                                            <div class="small_title">先天健康能量</div>
                                            <div class="iconfont icon-wujiaoxing"></div>
                                        </div>
                                        <div class="baby_txt_detail" :style="{ 'padding-top': index === 0 ? '3vw' : '0vw' }"
                                            v-for="(item, index) in babyDetail.health_analysis.xtnl_des" :key="index">
                                            {{ item }}
                                        </div>

                                        <div class="baby_hui">
                                            *以上这些健康问题仅代表孩子潜在的健康隐患，旨在让父母提前为孩子做好预防保健工作，而不代表孩子必定会患上以上疾病，父母无需过分担忧。</div>
                                    </template>
                                </SubHead>

                                <SubHead :subName="'如何做好孩子的保健工作'">
                                    <template v-slot:content>
                                        <div class="baby_txt_detail" :style="{ 'padding-top': index === 0 ? '8vw' : '0vw' }"
                                            v-for="(item, index) in babyDetail.health_analysis.baojian_des" :key="index">
                                            {{ item }}

                                        </div>

                                    </template>
                                </SubHead>
                            </div>

                        </div>
                        <img v-lazy="require('@/assets/baby/d1.png')" alt="" class="icon_imgl" style="top:36%">

                        <img v-lazy="require('@/assets/baby/d1.png')" alt="" class="icon_imgr" style="top:78%">
                        <img v-lazy="require('@/assets/baby/d2.png')" alt="" class="icon_img">

                    </div>
                </template>
            </BoxBg>
            <BoxBg>
                <template v-slot:exhibition>
                    <div class="nav_play" style="margin-top:10vw;">
                        <TopDecoration :name="'学业发展分析'" style="z-index: 10;"></TopDecoration>
                        <img v-lazy="require('@/assets/baby/d2.png')" alt="" class="icon_img1">
                        <div class="baby_kuan">

                            <div class="baby_checks">
                                <SubHead :subName="'孩子的学业情况'">
                                    <template v-slot:content>
                                        <div class="baby_txt_detail" :style="{ 'padding-top': index === 0 ? '8vw' : '0vw' }"
                                            v-for="(item, index) in babyDetail.xueyefazhan_analysis.study_analysis"
                                            :key="index">
                                            {{ item }}
                                        </div>

                                    </template>
                                </SubHead>
                                <SubHead :subName="'孩子的潜能特长'">
                                    <template v-slot:content>
                                        <div class="baby_sub_small_title" style="margin-top:8vw;">
                                            <div class="iconfont icon-wujiaoxing"></div>
                                            <div class="small_title">潜在能力</div>
                                            <div class="iconfont icon-wujiaoxing"></div>
                                        </div>
                                        <div class="baby_txt_detail"
                                            v-for="(item, index) in babyDetail.xueyefazhan_analysis.potency_analysis[0]"
                                            :key="index">
                                            {{ index !== 0 ? item : '' }}
                                        </div>
                                        <div class="baby_sub_small_title">
                                            <div class="iconfont icon-wujiaoxing"></div>
                                            <div class="small_title">学科特长</div>
                                            <div class="iconfont icon-wujiaoxing"></div>
                                        </div>
                                        <span style="text-align: left; text-indent: 1.4em;"
                                            v-for="(item, index) in babyDetail.xueyefazhan_analysis.potency_analysis[1]"
                                            :key="index + babyDetail.xueyefazhan_analysis.potency_analysis[0].length">
                                            <span> {{ index !== 0 ? item : '' }} </span>
                                            <br v-if="index > 1" />
                                        </span>
                                    </template>
                                </SubHead>
                                <SubHead :subName="'适合孩子的发展方向'">
                                    <template v-slot:content>
                                        <div class="baby_txt_detail" style="margin-top:8vw;margin-bottom:0;">
                                            <div v-for="(item, index) in babyDetail.xueyefazhan_analysis.progress_des"
                                                :key="index">{{ item }}</div>
                                        </div>
                                    </template>
                                </SubHead>
                            </div>

                        </div><img v-lazy="require('@/assets/baby/d1.png')" alt="" class="icon_imgl" style="top:26%">
                        <img v-lazy="require('@/assets/baby/d1.png')" alt="" class="icon_imgr" style="top:48%">
                        <img v-lazy="require('@/assets/baby/d2.png')" alt="" class="icon_imgl" style="top:64%">
                        <img v-lazy="require('@/assets/baby/d2.png')" alt="" class="icon_imgr" style="top:80%">
                        <img v-lazy="require('@/assets/baby/d1.png')" alt="" class="icon_img">

                    </div>
                </template>
            </BoxBg>

            <BoxBg>
                <template v-slot:exhibition>
                    <div class="nav_play" style="margin-top:10vw;">
                        <TopDecoration :name="'社交人缘情况'" style="z-index: 10;"></TopDecoration>
                        <img v-lazy="require('@/assets/baby/d2.png')" alt="" class="icon_img1">
                        <div class="baby_kuan">
                            <div class="baby_checks">
                                <SubHead :subName="'孩子与父母的缘分'">

                                    <template v-slot:content>
                                        <div class="baby_sub_small_title" style="margin-top:8vw;">
                                            <div class="iconfont icon-wujiaoxing"></div>
                                            <div class="small_title">与父亲的关系</div>
                                            <div class="iconfont icon-wujiaoxing"></div>
                                        </div>
                                        <div class="baby_txt_detail"
                                            v-for="(item, index) in babyDetail.shejiao_renyuan.with_parent[0]" :key="index">
                                            {{ item }}
                                        </div>
                                        <div class="baby_sub_small_title">
                                            <div class="iconfont icon-wujiaoxing"></div>
                                            <div class="small_title">与母亲的关系</div>
                                            <div class="iconfont icon-wujiaoxing"></div>
                                        </div>
                                        <div class="baby_txt_detail"
                                            v-for="(item, index) in babyDetail.shejiao_renyuan.with_parent[1]"
                                            :key="index + babyDetail.shejiao_renyuan.with_parent[0].length">
                                            {{ item }}
                                        </div>
                                    </template>
                                </SubHead>
                                <SubHead :subName="'孩子与老师的缘分'">

                                    <template v-slot:content>
                                        <div class="baby_txt_detail" :style="{ 'padding-top': index === 0 ? '8vw' : '0vw' }"
                                            v-for="(item, index) in babyDetail.shejiao_renyuan.with_teacher" :key="index">
                                            {{ item }}

                                        </div>
                                    </template>
                                </SubHead>
                                <SubHead :subName="'如何提升孩子师长缘'">

                                    <template v-slot:content>
                                        <div class="baby_txt_detail" :style="{ 'padding-top': index === 0 ? '8vw' : '0vw' }"
                                            v-for="(item, index) in babyDetail.shejiao_renyuan.tishen_shizhangyuan"
                                            :key="index">
                                            {{ item }}

                                        </div>
                                    </template>
                                </SubHead>
                                <SubHead :subName="'孩子与同辈的缘分'">

                                    <template v-slot:content>
                                        <div class="baby_txt_detail" :style="{ 'padding-top': index === 0 ? '8vw' : '0vw' }"
                                            v-for="(item, index) in babyDetail.shejiao_renyuan.with_fellow" :key="index">
                                            {{ item }}

                                        </div>
                                    </template>
                                </SubHead>
                                <SubHead :subName="'如何提升孩子的人缘'">

                                    <template v-slot:content>
                                        <div class="baby_txt_detail" :style="{ 'padding-top': index === 0 ? '8vw' : '0vw' }"
                                            v-for="(item, index) in babyDetail.shejiao_renyuan.tishen_renyuan" :key="index">
                                            {{ item }}
                                        </div>
                                    </template>
                                </SubHead>

                            </div>
                        </div>
                        <img v-lazy="require('@/assets/baby/d2.png')" alt="" class="icon_imgl" style="top:15%">
                        <img v-lazy="require('@/assets/baby/d1.png')" alt="" class="icon_imgr" style="top:28%">
                        <img v-lazy="require('@/assets/baby/d2.png')" alt="" class="icon_imgl" style="top:43%">
                        <img v-lazy="require('@/assets/baby/d2.png')" alt="" class="icon_imgr" style="top:57%">
                        <img v-lazy="require('@/assets/baby/d1.png')" alt="" class="icon_imgl" style="top:72%">
                        <img v-lazy="require('@/assets/baby/d2.png')" alt="" class="icon_imgr" style="top:86%">
                        <img v-lazy="require('@/assets/baby/d2.png')" alt="" class="icon_img">
                    </div>
                </template>
            </BoxBg>

            <BoxBg>
                <template v-slot:exhibition>
                    <div class="nav_play" style="margin-top:10vw;">
                        <TopDecoration :name="'生活开运方法'" style="z-index: 10;"></TopDecoration>
                        <img v-lazy="require('@/assets/baby/d2.png')" alt="" class="icon_img1">
                        <div class="baby_kuan">
                            <div class="baby_checks">
                                <SubHead :subName="'对孩子有利的方位'">

                                    <template v-slot:content>
                                        <div class="baby_txt_detail" :style="{ 'padding-top': index === 0 ? '8vw' : '0vw' }"
                                            v-for="(item, index) in babyDetail.shenghuo_kaiyun.youli_fangwei" :key="index">
                                            {{ item }}
                                        </div>
                                    </template>
                                </SubHead>
                                <SubHead :subName="'对孩子有利的颜色'">

                                    <template v-slot:content>
                                        <div class="baby_txt_detail" :style="{ 'padding-top': index === 0 ? '8vw' : '0vw' }"
                                            v-for="(item, index) in babyDetail.shenghuo_kaiyun.youli_yanse" :key="index">
                                            {{ item }}

                                        </div>
                                    </template>
                                </SubHead>
                                <SubHead :subName="'对孩子有利的数字'">

                                    <template v-slot:content>
                                        <div class="baby_txt_detail" :style="{ 'padding-top': index === 0 ? '8vw' : '0vw' }"
                                            v-for="(item, index) in babyDetail.shenghuo_kaiyun.youli_shuzi" :key="index">
                                            {{ item }}

                                        </div>
                                    </template>
                                </SubHead>
                                <SubHead :subName="'对孩子有利的时间'">

                                    <template v-slot:content>
                                        <div class="baby_txt_detail" :style="{ 'padding-top': index === 0 ? '8vw' : '0vw' }"
                                            v-for="(item, index) in babyDetail.shenghuo_kaiyun.youli_shijian" :key="index">
                                            {{ item }}

                                        </div>
                                    </template>
                                </SubHead>
                            </div>
                        </div>
                        <img v-lazy="require('@/assets/baby/d2.png')" alt="" class="icon_imgl" style="top:36%">
                        <img v-lazy="require('@/assets/baby/d1.png')" alt="" class="icon_imgr" style="top:72%">
                        <img v-lazy="require('@/assets/baby/d2.png')" alt="" class="icon_img">
                    </div>
                </template>
            </BoxBg>

            <div class="flooters-info">
                <div class="erweima">
                    <img v-lazy="require('@/assets/name/ewm/ewm.png')" alt="" class="img-erweima">
                </div>
                <div class="call" style="margin-bottom:0;">温馨提示：找不到订单或其他原因</div>
                <div class="call" style="margin-top:1vw;">请联系客服微信：S600007S</div>
            </div>
        </div>
    </div>
</template>
<script>
import Tips from '@/components/name/tips/tips.vue'
import TopBg from '@/components/baby/other_top_bg.vue'
import { openService } from '@/uitls/js/name_service'
import BoxBg from '@/components/baby/box_bg.vue'
import TopDecoration from '@/components/baby/top_decoration.vue'
import SubHead from '@/components/baby/subhead_bg.vue'
import { mapState } from 'vuex'
import * as echarts from 'echarts'
export default {
  name: 'HomeView',
  components: { Tips, TopBg, BoxBg, TopDecoration, SubHead },
  data () {
    return {
      tempShow: true,
      babyDetail: {
        name: '',
        gender: '',
        solar_birthday: '',
        lunar_birthday: '',
        hour: '',
        sx_hour: '',
        baobaoscxx: {
          sizhu: [],
          wuxing: [],
          tiangan: [],
          dizhi: [],
          zangang: [],
          xiyongshen: ['', ''],
          jishen: ''
        },
        xinggetedian_analysis: {
          chengshouri: 0,
          guiren: 0,
          sikaoli: 0,
          chuangzaoli: 0,
          zizhili: 0,
          xgtd_des: [],
          rh_xingge_youdian: [],
          xingge_quedian: [],
          rh_xingge_quedian: []

        },
        health_analysis: {
          piwei: 0,
          fei_guge: 0,
          shen: 0,
          xin: 0,
          gandan: 0,
          xtnl_des: [],
          baojian_des: []
        },
        xueyefazhan_analysis: {
          study_analysis: [],
          potency_analysis: [],
          progress_des: []
        },
        shejiao_renyuan: {
          with_parent: [],
          leave_home: [],
          with_teacher: [],
          tishen_shizhangyuan: [],
          with_fellow: [],
          tishen_renyuan: []
        },
        shenghuo_kaiyun: {
          youli_fangwei: [],
          youli_yanse: [],
          youli_shuzi: [],
          youli_shijian: []
        }

      },

      wuxings: {

        legend: {
          show: false
        },
        series: [
          {
            type: 'pie',
            radius: '98%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            roseType: 'area',
            silent: true,
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                },
                borderType: 'dashed',
                borderDashOffset: 5,
                borderColor: '#CEA783',
                color: 'transparent'
              }
            },

            data: [
              { value: 100, name: 'rose 1' },
              { value: 100, name: 'rose 2' },
              { value: 100, name: 'rose 3' },
              { value: 100, name: 'rose 4' },
              { value: 100, name: 'rose 5' }
            ]
          },
          {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: ['3%', '90%'],
            center: ['50%', '50%'],
            roseType: 'area',

            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                },
                color: function (colors) {
                  const colorList = [
                    '#F29301',
                    '#557BBA',
                    '#80AD72',
                    '#DE533C',
                    '#E4BF7B'
                  ]
                  return colorList[colors.dataIndex]
                }
              }
            },

            data: [
              { value: 15, name: 'rose 1' },
              { value: 21, name: 'rose 2' },
              { value: 24, name: 'rose 3' },
              { value: 2, name: 'rose 4' },
              { value: 40, name: 'rose 5' }
            ]
          }
        ]

      },
      jiankan: {

        legend: {
          show: false
        },
        series: [
          {
            type: 'pie',
            radius: '98%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            roseType: 'area',
            silent: true,
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                },
                borderType: 'dashed',
                borderDashOffset: 5,
                borderColor: '#CEA783',
                color: 'transparent'
              }
            },

            data: [
              { value: 100, name: 'rose 1' },
              { value: 100, name: 'rose 2' },
              { value: 100, name: 'rose 3' },
              { value: 100, name: 'rose 4' },
              { value: 100, name: 'rose 5' }
            ]
          },
          {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: ['3%', '90%'],
            center: ['50%', '50%'],
            roseType: 'area',

            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                },
                color: function (colors) {
                  const colorList = [
                    '#F29301',
                    '#557BBA',
                    '#80AD72',
                    '#DE533C',
                    '#E4BF7B'
                  ]
                  return colorList[colors.dataIndex]
                }
              }
            },

            data: [
              { value: 15, name: 'rose 1' },
              { value: 21, name: 'rose 2' },
              { value: 24, name: 'rose 3' },
              { value: 2, name: 'rose 4' },
              { value: 40, name: 'rose 5' }
            ]
          }
        ]

      }
    }
  },
  computed: {
    ...mapState(['orderidBaby'])
  },
  async mounted () {
    this.babyDetail = JSON.parse(localStorage.getItem('babyDetailResult'))
    const that = this
    setTimeout(() => {
      that.tempShow = false
    }, 5000)
    this.drawEcharts()
  },
  methods: {
    openService () {
      openService()
    },
    drawEcharts () {
      this.wuxings.series[1].data[0].value = this.babyDetail.xinggetedian_analysis.chengshouri
      this.wuxings.series[1].data[1].value = this.babyDetail.xinggetedian_analysis.guiren
      this.wuxings.series[1].data[2].value = this.babyDetail.xinggetedian_analysis.sikaoli
      this.wuxings.series[1].data[3].value = this.babyDetail.xinggetedian_analysis.chuangzaoli
      this.wuxings.series[1].data[4].value = this.babyDetail.xinggetedian_analysis.zizhili

      // echart使用
      const wuxingsChart = echarts.init(document.getElementById('wuxings'))
      wuxingsChart.setOption(
        this.wuxings
      )
      this.jiankan.series[1].data[0].value = this.babyDetail.health_analysis.fei_guge
      this.jiankan.series[1].data[1].value = this.babyDetail.health_analysis.shen
      this.jiankan.series[1].data[2].value = this.babyDetail.health_analysis.gandan
      this.jiankan.series[1].data[3].value = this.babyDetail.health_analysis.xin
      this.jiankan.series[1].data[4].value = this.babyDetail.health_analysis.piwei
      const jiankanChart = echarts.init(document.getElementById('jiankan'))
      jiankanChart.setOption(
        this.jiankan
      )
    }
  }
}
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
        // background-color: rgba(0, 0, 0, 0.3);
        font-weight: 700 !important;
        padding: 2vw 0;
        border-top-right-radius: 1.4vw;
        border-bottom-right-radius: 1.4vw;
        display: flex;
        // justify-content: center;
        flex-direction: column;
        text-align: center;
        font-weight: 100;

    }

    .container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        z-index: 1;
        width: 100vw;
        min-height: 100vh;
        background: rgb(149, 209, 244);

        .top-tops {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            background-color: rgba(13, 149, 205, .8);
            color: #fff;
            text-align: center;
            font-size: 3.6vw;
            font-weight: 100;
            line-height: 8vw;
            transition: height .5s;
            overflow: hidden;
        }

        .baby_result {
            background: linear-gradient(180.00deg, rgba(255, 255, 255, 0.2), rgba(247, 3, 3, 0.2) 100%), linear-gradient(180.00deg, rgba(247, 3, 3, 0.2) 10.687%, rgba(243, 5, 5, 0) 100%), rgb(248, 186, 186);
            width: 34vw;
            text-align: center;
            color: #fff;
            margin: 8vw auto;
            line-height: 11vw;
            border-radius: 3vw;
            font-size: 4.4vw;
        }

        .info-box {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;

            .input-info {
                display: flex;
                align-items: center;
                width: 70%;
                background-color: #fff;
                border: 1px solid rgb(204, 204, 204);
                border-radius: 2vw;
                padding-left: 3vw;
                line-height: 10vw;
                margin-bottom: 3vw;

                .label {
                    width: 10vw;
                    font-weight: 700;
                }

                .info {
                    // flex: 1;
                    width: calc(100% - 12vw);
                }

            }
        }

        .nav_play {
            padding: 0;
            text-align: start;
            position: relative;

            // line-height: 7vw;
            .icon_img {
                // position: absolute;
                width: 12vw;
                left: 0;
                bottom: 0;
                margin-top: -9vw;
                z-index: -1;
                display: block;
            }

            .icon_imgl {
                position: absolute;
                width: 12vw;
                left: 0;
                top: 30%;
                z-index: 0;
            }

            .icon_imgr {
                position: absolute;
                width: 12vw;
                right: 0;
                z-index: 0;
            }

            .icon_img1 {
                // position: absolute;
                float: right;
                width: 12vw;
                margin-left: -8vw;
                display: block;
            }

            .baby_kuan {
                position: relative;
                overflow: hidden;
                margin: -4.4vw 4vw 1vw 4vw;
                z-index: 1;

                .baby_checks {
                    // position: absolute;
                    top: 3vw;
                    // margin-top:-4vw ;
                    line-height: 8vw;
                    padding: 4vw;
                    border-radius: 4vw;
                    border: 1px solid rgb(186, 186, 186);
                    background-color: #fff;

                    .name-detail-box {

                        .pan-box {
                            overflow: hidden;
                            line-height: 7vw;
                            margin-top: 7vw;
                            font-size: 3.6vw;
                            margin-bottom: 2vw;
                            text-align: center;
                            border: 1px solid rgb(177, 68, 27);

                            .title-row {
                                display: flex;
                                background-color: #FCE7E7;
                                color: #9D1414;
                                justify-content: center;
                                font-weight: 700;

                                .title-item {
                                    width: 20%;
                                }
                            }

                            .nav-list {
                                .nav-row {
                                    display: flex;
                                    align-items: center;
                                    border-radius: 2px;
                                    background-color: #fff;
                                    border-top-left-radius: 2px;
                                    border-top-right-radius: 2px;
                                    // border-top: 1px solid #D9D1C6;

                                    .nav-item {
                                        width: 20%;
                                    }
                                }

                                .zi-jiexi {
                                    background-color: #FAF5EC;
                                    width: 25%;
                                    font-weight: 700;
                                    border-right: 1px solid #DDD6CD;
                                    border-bottom: 1px solid #DDD6CD;
                                }

                                .zi-du {
                                    flex: 1;
                                    border-bottom: 1px solid #DDD6CD;
                                }

                                .zi-details {
                                    text-align: start;
                                    width: 75%;
                                    padding: 1vw 3vw;
                                    line-height: 5vw;
                                    box-sizing: border-box;
                                }
                            }
                        }
                    }

                    .headers-row {
                        display: flex;
                        justify-content: center;
                        position: relative;

                        .wu-direction {
                            width: 80vw;
                            height: 60vw;
                            padding-bottom: 0;
                        }

                        .tus {
                            display: flex;
                            flex-direction: column;
                            justify-content: flex-end;
                            padding-bottom: 6vw;

                            .img-ren-tu {
                                width: 12vw;
                            }
                        }

                        .gejus {
                            margin-top: 8vw;
                            padding-bottom: 0;
                            position: relative;
                            font-size: 3.4vw;

                            .geju-charts {
                                width: 72vw;
                                height: 50vw;
                            }
                        }

                        .nan-colors1 {
                            position: absolute;
                            top: 6vw;
                            right: 26vw;
                            display: flex;
                            align-items: center;

                            .colors-box {
                                width: 7vw;
                                height: 1.6vw;
                                background-color: rgb(239, 155, 54);
                                margin-right: 2vw;
                            }
                        }

                        .nan-colors2 {
                            position: absolute;
                            top: 6vw;
                            right: 8vw;
                            display: flex;
                            align-items: center;

                            .colors-box {
                                width: 7vw;
                                height: 1.6vw;
                                background-color: rgb(219, 115, 115);
                                margin-right: 2vw;
                            }
                        }

                        .charts-wuxings {
                            margin-top: 14vw;
                            width: 52vw;
                            height: 52vw;
                            padding-bottom: 0;
                            position: relative;
                            font-size: 3.4vw;
                            line-height: 4vw;
                            font-size: 3.4vw;

                            .xing-charts {
                                width: 36vw;
                                height: 36vw;
                                margin: 4vw auto 0vw auto;
                            }

                            .labels1 {
                                position: absolute;
                                top: -3vw;
                                right: 2vw;
                                overflow: hidden;
                                border-radius: 1.2vw;

                                .name {
                                    padding: 0 1vw;
                                }

                                .percent {}
                            }

                            .labels2 {
                                position: absolute;
                                top: 24vw;
                                right: -4vw;
                                overflow: hidden;
                                border-radius: 1.2vw;

                                .name {
                                    padding: 0 1vw;
                                }

                                .percent {}
                            }

                            .labels3 {
                                position: absolute;
                                top: 42vw;
                                left: 50%;
                                transform: translate(-50%, 0);
                                overflow: hidden;
                                border-radius: 1.2vw;

                                .name {
                                    padding: 0 1vw;
                                }

                                .percent {}
                            }

                            .labels4 {
                                position: absolute;
                                top: 24vw;
                                left: -4vw;
                                overflow: hidden;
                                border-radius: 1.2vw;

                                .name {
                                    padding: 0 1vw;
                                }

                                .percent {}
                            }

                            .labels5 {
                                position: absolute;
                                top: -3vw;
                                left: 2vw;
                                overflow: hidden;
                                border-radius: 1.2vw;

                                .name {
                                    padding: 0 1vw;
                                }

                                .percent {}
                            }

                        }

                        .shengxiao {
                            background-image: url('@/assets/love/other/pp.png');
                            background-size: 100%;
                            width: 24vw;
                            height: 24vw;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            position: relative;

                            .img-shengxiao {
                                width: 15vw;

                            }

                            .shengxiao-year {
                                position: absolute;
                                left: 50%;
                                bottom: -7vw;
                                transform: translate(-50%, 0);
                                width: 100%;
                            }
                        }

                        .cone {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            width: 40vw;
                            background-image: url('@/assets/love/other/dx.png');
                            background-size: 100% 100%;
                            background-repeat: no-repeat;
                            height: 11vw;
                            display: flex;
                            justify-content: center;
                            align-items: center;

                            .hongxin {
                                color: #fff;
                                background-image: url('@/assets/love/other/xx.png');
                                background-size: 100%;
                                background-repeat: no-repeat;
                                width: 9vw;
                                height: 9vw;
                                line-height: 9vw;
                            }
                        }

                        .center-times {
                            background-image: url('@/assets/love/other/dp.png');
                            background-size: 100% 100%;
                            background-repeat: no-repeat;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            width: 46vw;
                            height: 24vw;
                            padding-top: 4vw;
                            font-size: 5vw;
                            color: #BB2A2A;

                            div {
                                margin: 0 2vw;
                            }
                        }

                        .nanfanghunyin {
                            flex: 1;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            font-size: 5vw;
                            color: #BB2A2A;
                        }
                    }

                    .baby_sub_small_title {
                        display: flex;
                        justify-content: center;
                        margin-top: 4vw;

                        .small_title {
                            margin: 0 3vw;
                            color: #120ABF;
                        }

                        .iconfont {
                            color: rgb(248, 116, 116);
                        }
                    }

                    .baby_txt_detail {
                        text-indent: 1.4em;
                        padding: 0vw 4vw;
                        text-align: start;
                        font-size: 3.6vw;
                        line-height: 7vw;
                    }

                    .baby_hui {
                        text-indent: 1.4em;
                        padding: 4vw 4vw 0vw 4vw;
                        color: #959696;
                        text-align: start;
                        font-size: 3.6vw;
                        line-height: 7vw;
                    }
                }

            }

        }

    }

    .flooters-info {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-top: 14vw;

        .erweima {
            background: rgb(56, 171, 227);
            padding: .6vw;
            border-radius: 1vw;

            .img-erweima {
                display: block;
                padding: .6vw;
                border-radius: 1vw;
                width: 30vw;
            }
        }

        .call {
            font-size: 4.4vw;
            font-weight: 700;
            margin: 4vw 0 8vw 0;
        }
    }
}</style>
