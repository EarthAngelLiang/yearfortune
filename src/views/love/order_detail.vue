<template>
    <div class="home" @click="showDates = false">
        <Tips />
        <div class="zixun-detail" @click="openService"><span class=" iconfont icon-manager-fill"
                style="font-size:8vw;color:#d1420a; font-weight: 100; text-shadow:  1px 1px rgba(0, 0, 0, 0.5);"></span>
                咨询老师
        </div>
        <div class="container">
            <div class="top-bg"></div>
            <div class="bottom-bg">
            </div>
            <div class="order-info" style="margin-top: 18vw;">
                <BoxBg>
                    <template v-slot:exhibition>
                        <TopDecoration :name="loveDatail.male_info.name + '和' + loveDatail.female_info.name + '的测算报告'">
                        </TopDecoration>
                        <div class="info-box">
                            <div class="person-info">
                                <div class="label">姓名：</div>
                                <div class="info-item">{{ loveDatail.male_info.name }}</div>
                            </div>
                            <div class="person-info">
                                <div class="label">性别:</div>
                                <div class="info-item">{{ loveDatail.male_info.gender }}</div>
                            </div>
                            <div class="person-info">
                                <div class="label" style="width: 19vw;text-align: left;">出生日期:</div>
                                <div class="info-item" style="text-align: left; padding:0;margin:0;"> 公(阳)历
                                    {{ loveDatail.male_info.solar_birthday }} {{ loveDatail.male_info.hour }} 时<br>
                                    农 (阳) 历 {{ loveDatail.male_info.lunar_birthday }} {{ loveDatail.male_info.sx_hour }}
                                </div>
                            </div>
                            <div class="person-info">
                                <div class="label">八字: </div>
                                <div class="info-item"> <span v-for="(item, index) in loveDatail.male_info.bazi"
                                        :key="index"> {{ item }} </span></div>
                            </div>
                            <div class="person-info">
                                <div class="label">喜用神:</div>
                                <div class="info-item">{{ loveDatail.male_info.xys }}</div>
                            </div>
                            <div class="person-info" style="margin-top: 4vw;">
                                <div class="label">姓名：</div>
                                <div class="info-item">{{ loveDatail.female_info.name }}</div>
                            </div>
                            <div class="person-info">
                                <div class="label">性别:</div>
                                <div class="info-item">{{ loveDatail.female_info.gender }}</div>
                            </div>
                            <div class="person-info">
                                <div class="label" style="width: 19vw;text-align: left;">出生日期:</div>
                                <div class="info-item" style="text-align: left;padding:0;margin:0;">公 (阳) 历
                                    {{ loveDatail.female_info.solar_birthday }} {{ loveDatail.female_info.hour }} 时 <br>
                                    农 (阳) 历 {{ loveDatail.female_info.lunar_birthday }} {{ loveDatail.female_info.sx_hour }}
                                </div>
                            </div>
                            <div class="person-info">
                                <div class="label">八字:</div>
                                <div class="info-item"><span v-for="(item, index) in loveDatail.female_info.bazi"
                                        :key="index"> {{ item }} </span></div>
                            </div>
                            <div class="person-info">
                                <div class="label">喜用神:</div>
                                <div class="info-item">{{ loveDatail.female_info.xys }}</div>
                            </div>
                        </div>

                    </template>
                </BoxBg>
            </div>
            <div class="order-info" style="margin-top: 8vw;">
                <BoxBg>
                    <template v-slot:heads>
                        <div class="indicative">
                            <div class="name">{{ loveDatail.male_info.name }}</div>
                            <div class="score">
                                <div class="numbers">{{ (parseFloat(loveDatail.paired_index.hehun_score) +5) }}</div>
                                <div class="number-txt">婚配指数</div>
                            </div>
                            <div class="name">{{ loveDatail.female_info.name }}</div>
                        </div>
                    </template>
                    <template v-slot:exhibition>
                        <div class="share">
                            <div class="comment" style="border-right: 1px solid rgb(224, 162, 172);">农历 {{
                                loveDatail.male_info.lunar_birthday }} {{ loveDatail.male_info.sx_hour }}</div>
                            <div class="share-analysis">
                                <div class="share-top">
                                    <div class="time-list">
                                        <div>年</div>
                                        <div>月</div>
                                        <div>日</div>
                                        <div style="border-right:none;">时</div>
                                    </div>
                                    <div class="tiangan">
                                        <div v-for="(item, index ) in loveDatail.male_info.bazi" :key="index"
                                            :style="{ 'border-right': index === loveDatail.male_info.bazi.length - 1 ? 'none' : '' }">
                                            {{ item }}</div>

                                    </div>
                                </div>

                                <div class="graphical">
                                    <div id="graphical1" class="graphical-charts"></div>
                                    <div class="labels1">
                                        <div class="name">金</div>
                                        <div class="percent"> {{ graphical1.series[1].data[0].value }} %</div>
                                    </div>
                                    <div class="labels2">
                                        <div class="name">水</div>
                                        <div class="percent"> {{ graphical1.series[1].data[1].value }} %</div>
                                    </div>
                                    <div class="labels3">
                                        <div class="name">木</div>
                                        <div class="percent"> {{ graphical1.series[1].data[2].value }} %</div>
                                    </div>
                                    <div class="labels4">
                                        <div class="name">火</div>
                                        <div class="percent"> {{ graphical1.series[1].data[3].value }} %</div>
                                    </div>
                                    <div class="labels5">
                                        <div class="name">土</div>
                                        <div class="percent"> {{ graphical1.series[1].data[4].value }} %</div>
                                    </div>
                                </div>
                                <div class="share-bottom">
                                    <div class="shengxiao">
                                        <div>{{ loveDatail.zodiac_fit_measure.male_sx }}</div>
                                        <div>虚岁{{ loveDatail.male_info.age }}</div>
                                    </div>
                                    <div class="benming" style="border-left: 1px solid  rgb(224, 162, 172);">
                                        {{ loveDatail.male_info.mingzhu }} 命</div>
                                </div>
                            </div>
                            <div class="center-line"></div>
                            <div class="share-analysis">
                                <div class="share-top">
                                    <div class="time-list">
                                        <div>年</div>
                                        <div>月</div>
                                        <div>日</div>
                                        <div style="border-right:none;">时</div>
                                    </div>
                                    <div class="tiangan">
                                        <div v-for="(item, index ) in loveDatail.female_info.bazi" :key="index"
                                            :style="{ 'border-right': index === loveDatail.female_info.bazi.length - 1 ? 'none' : '' }">
                                            {{ item }}</div>
                                    </div>
                                </div>

                                <div class="graphical">
                                    <div id="graphical2" class="graphical-charts"></div>
                                    <div class="labels1">
                                        <div class="name">金</div>
                                        <div class="percent"> {{ graphical2.series[1].data[0].value }} %</div>
                                    </div>
                                    <div class="labels2">
                                        <div class="name">水</div>
                                        <div class="percent"> {{ graphical2.series[1].data[1].value }} %</div>
                                    </div>
                                    <div class="labels3">
                                        <div class="name">木</div>
                                        <div class="percent"> {{ graphical2.series[1].data[2].value }} %</div>
                                    </div>
                                    <div class="labels4">
                                        <div class="name">火</div>
                                        <div class="percent"> {{ graphical2.series[1].data[3].value }} %</div>
                                    </div>
                                    <div class="labels5">
                                        <div class="name">土</div>
                                        <div class="percent"> {{ graphical2.series[1].data[4].value }} %</div>
                                    </div>
                                </div>
                                <div class="share-bottom">
                                    <div class="benming" style="border-right: 1px solid  rgb(224, 162, 172);">
                                        {{ loveDatail.female_info.mingzhu }} 命</div>
                                    <div class="shengxiao">
                                        <div>{{ loveDatail.zodiac_fit_measure.female_sx }}</div>
                                        <div>虚岁{{ loveDatail.female_info.age }}</div>
                                    </div>

                                </div>
                            </div>
                            <div class="comment" style="border-left: 1px solid rgb(224, 162, 172);">农历{{
                                loveDatail.female_info.lunar_birthday }} {{ loveDatail.female_info.sx_hour }}</div>
                        </div>
                    </template>
                </BoxBg>
            </div>
            <div class="order-info" style="margin-top: 8vw;">
                <BoxBg>
                    <template v-slot:exhibition>
                        <TopDecoration :name="'八字合婚详批'"></TopDecoration>
                        <div class="info-box">
                            <div class="commont-info">
                                <div class="label">老师寄语：</div>
                                <div class="info-item">传统八字合婚，不是单独参考生肖合冲的理论，更多需要依照八字中二人五行生克喜忌等命理关系来对二人感情婚姻进行吉凶预测。</div>
                                <div class="info-item">一般而言，只要双方八字五行互相调和，没有出现严重的冲克，且双方所行大运没有严重冲克等，便可看作是比较好的合婚。 </div>
                                <div class="info-item">
                                    合婚不仅可以帮助您判断对象是否适合跟自己结婚，亦可借八字命理的方法来增进一段感情和婚烟，同时也能通过命理方法，家居风水调整化解调和先天不合的感情关系，让感情顺利走在一起。
                                </div>
                            </div>
                        </div>

                    </template>
                </BoxBg>
            </div>
            <div class="order-info" style="margin-top: 8vw;">
                <BoxBg>
                    <template v-slot:exhibition>
                        <TopDecoration :name="'配对指数'"></TopDecoration>
                        <SubHead :subName="'合婚分数：' +(parseFloat(loveDatail.paired_index.hehun_score) +5) + '分'">
                            <template v-slot:content>
                                <div class="graduated">
                                    <div class="name">{{ loveDatail.male_info.name }}</div>
                                    <div class="rule">
                                        <div class="zhishiqi"
                                            :style="{ 'left': `calc( ${Math.round((parseFloat(loveDatail.paired_index.hehun_score) +5))}% - 5vw)` }">
                                            {{ (parseFloat(loveDatail.paired_index.hehun_score) +5) }}分
                                            <div class="sanjiao"></div>
                                        </div>
                                        <div class="status-marry">
                                            <div class="marry-item" style="background-color:rgb(4, 4, 4) ;">大凶</div>
                                            <div class="marry-item" style="background-color: rgb(68, 56, 56);">凶</div>
                                            <div class="marry-item" style="background-color: rgb(102, 95, 95);">小凶</div>
                                            <div class="marry-item" style="background-color: rgb(207, 199, 199);">平</div>
                                            <div class="marry-item" style="background-color: rgb(218, 169, 48);">小吉</div>
                                            <div class="marry-item" style="background-color: rgb(193, 66, 66);">吉</div>
                                            <div class="marry-item" style="background-color: rgb(231, 37, 79);">大吉</div>
                                        </div>
                                    </div>
                                    <div class="name">{{ loveDatail.female_info.name }}</div>
                                </div>
                                <div class="wu-score">
                                    <div class="wu-row">
                                        <div class="labels">八字适配度</div>
                                        <div class="percents">
                                            <div class="percents-son"
                                                :style="{ 'background-color': ' rgb(206, 54, 108)', 'width': `${loveDatail.paired_index.bazi_sp_score * 10}%` }">
                                                <div class="numbersf">{{ loveDatail.paired_index.bazi_sp_score }}分</div>
                                            </div>
                                        </div>
                                        <div class="numbers">10分</div>
                                    </div>
                                    <div class="wu-row">
                                        <div class="labels">五行适配度</div>
                                        <div class="percents">
                                            <div class="percents-son"
                                                :style="{ 'background-color': 'rgb(135, 36, 71)', 'width': `${loveDatail.paired_index.wuxing_sp_score * 10 / 2}%` }">
                                                <div class="numbersf">{{ loveDatail.paired_index.wuxing_sp_score }}分</div>
                                            </div>
                                        </div>
                                        <div class="numbers">20分</div>
                                    </div>
                                    <div class="wu-row">
                                        <div class="labels">生肖适配度</div>
                                        <div class="percents">
                                            <div class="percents-son"
                                                :style="{ 'background-color': ' rgb(206, 54, 54)', 'width': `${loveDatail.paired_index.shengxiao_sp_score * 10 / 2.5}%` }">
                                                <div class="numbersf">{{ loveDatail.paired_index.shengxiao_sp_score }}分
                                                </div>
                                            </div>
                                        </div>
                                        <div class="numbers">25分</div>
                                    </div>
                                    <div class="wu-row">
                                        <div class="labels">婚姻宫适配度</div>
                                        <div class="percents">
                                            <div class="percents-son"
                                                :style="{ 'background-color': ' rgb(241, 103, 103)', 'width': `${loveDatail.paired_index.hunyingong_sp_score * 10 / 2.5}%` }">
                                                <div class="numbersf">{{ loveDatail.paired_index.hunyingong_sp_score }}分
                                                </div>
                                            </div>
                                        </div>
                                        <div class="numbers">25分</div>
                                    </div>
                                    <div class="wu-row">
                                        <div class="labels">格局运势适配度</div>
                                        <div class="percents">
                                            <div class="percents-son"
                                                :style="{ 'background-color': ' rgb(136, 37, 11)', 'width': `${loveDatail.paired_index.gjys_sp_score * 10 / 2}%` }">
                                                <div class="numbersf">{{ loveDatail.paired_index.gjys_sp_score }}分</div>
                                            </div>
                                        </div>
                                        <div class="numbers">20分</div>
                                    </div>
                                </div>
                                <div class="info-box">
                                    <div class="commont-info">
                                        <div class="label">合婚分数</div>
                                        <div class="info-item">
                                            综合双方八字各项合冲情况来看，男方和女方的合婚等级为:
                                            <span v-if="(parseFloat(loveDatail.paired_index.hehun_score) +5)<14.3">大凶</span>
                                            <span v-else-if="(parseFloat(loveDatail.paired_index.hehun_score) +5)<28.5">凶</span>
                                            <span v-else-if="(parseFloat(loveDatail.paired_index.hehun_score) +5)<42.8">小凶</span>
                                            <span v-else-if="(parseFloat(loveDatail.paired_index.hehun_score) +5)<58.1">平</span>
                                            <span v-else-if="(parseFloat(loveDatail.paired_index.hehun_score) +5)<72.4">小吉</span>
                                            <span v-else-if="(parseFloat(loveDatail.paired_index.hehun_score) +5)<86.7">吉</span>
                                            <span v-else >大吉</span>
                                            <!-- <span v-for="(item, index) in loveDatail.paired_index.wenxitishi"
                                                :key="index">{{ item }}</span> -->
                                        </div>
                                        <div class="info-item">
                                            温馨提示: （90分以上）这说明你们双方八字的调和度极好，缘分较好，婚姻适配度很高，属于天造地设的一对。（70分以上）这表明你们双方八字的调和度很不错，你们之同的缘分比较深，婚配度也属于比较高的，两人相识相爱属于天赐良缘。两人若共结连理，能够拥有美满幸福的婚姻，只要懂得互相扶持，合力经营婚姻，可以白头偕老。（70分以下）表明你们不算太适合交往，但如果真心喜欢，多是彼此的缘分，或是往世的福、债，你们可以通过改正自己的性格缺点，并通过命理方法、风水调理提升彼此的协调度，就能保持相对稳定和谐的状态，婚姻也能美满。（低于30分）表明你们各方面基本不适合，如果真心相爱更多的建议则是好聚好散，留下回忆会更加美好，如仍要坚持，需为婚姻付出较多，多需谨慎。
                                            <!-- <span v-for="(item, index) in loveDatail.paired_index.wenxitishi"
                                                :key="index">{{ item }}</span> -->
                                        </div>
                                        <!-- <div class="label" style="margin-top: 4vw;">合婚综述</div>
                                        <div class="info-item">
                                            <span v-for="(item, index) in loveDatail.paired_index.hehunzongshu"
                                                :key="index">{{ item }}</span>
                                        </div> -->
                                    </div>
                                </div>
                            </template>
                        </SubHead>

                    </template>
                </BoxBg>
            </div>
            <div class="order-info" style="margin-top: 8vw;">
                <BoxBg>

                    <template v-slot:heads>
                        <div class="heads">
                            <TopDecoration :name="'八字适配度'"></TopDecoration>
                        </div>

                        <div class="headers-row" style="margin-top: 4vw;">
                            <div id="wudirection" class="wu-direction"></div>
                        </div>
                    </template>
                    <template v-slot:exhibition>
                        <SubHead :subName="'男方命局特点'">
                            <template v-slot:content>
                                <div class="info-box">
                                    <div class="commont-info" style="padding-top: 6vw;">
                                        <div class="info-item" v-for="(item, index) in loveDatail.male_fortune_trait"
                                            :key="index">
                                            {{ item }}
                                        </div>
                                        <!-- <div class="info-item">命局特点: 感情细腻丰富，乐于与人沟通交往</div>
                                        <div class="info-item">优点:善于在社交场合制造气氛，博人好感。</div>
                                        <div class="info-item">缺点:性情不懂收放，距离感把握不好容易造成他人误会。</div> -->
                                    </div>
                                </div>
                            </template>
                        </SubHead>
                        <SubHead :subName="'女方命局特点'">
                            <template v-slot:content>
                                <div class="info-box">
                                    <div class="commont-info" style="padding-top: 6vw;">
                                        <div class="info-item" v-for="(item, index) in loveDatail.female_fortune_trait"
                                            :key="index">
                                            {{ item }}
                                        </div>
                                        <!-- <div class="info-item">命局特点: 感情细腻丰富，乐于与人沟通交往</div>
                                        <div class="info-item">优点:善于在社交场合制造气氛，博人好感。</div>
                                        <div class="info-item">缺点:性情不懂收放，距离感把握不好容易造成他人误会。</div> -->
                                    </div>
                                </div>
                            </template>
                        </SubHead>
                        <SubHead :subName="'双方八字适配度点评'">
                            <template v-slot:content>
                                <div class="wu-score" style="margin-top: 8vw;">
                                    <div class="wu-row">
                                        <div class="labels">八字适配度</div>
                                        <div class="percents">
                                            <div class="percents-son"
                                                :style="{ 'background-color': 'rgb(206, 54, 108)', 'width': loveDatail.bazi_spd_score * 10 + '%' }">
                                                <div class="numbersf">{{ loveDatail.bazi_spd_score }}分</div>
                                            </div>
                                        </div>
                                        <div class="numbers">10分</div>
                                    </div>
                                </div>
                                <div class="info-box">
                                    <div class="commont-info">
                                        <div class="info-item">老师点评: <span
                                                v-for="(item, index) in loveDatail.bazi_spd_alldesc" :key="index"> {{ item
                                                }}
                                                <br /></span></div>
                                    </div>
                                </div>
                            </template>
                        </SubHead>
                    </template>
                </BoxBg>
            </div>
            <div class="order-info" style="margin-top: 8vw;">
                <BoxBg>
                    <template v-slot:exhibition>
                        <TopDecoration :name="'五行适配度 '"></TopDecoration>
                        <div class="headers-row">
                            <div class="tus">
                                <img  v-lazy="require('@/assets/love/other/n.png')" alt="" class="img-ren-tu">
                            </div>
                            <div class="charts-wuxings">
                                <div id="wuxings" class="xing-charts"></div>
                                <div class="labels1">
                                    <div class="name">金</div>
                                    <div class="percent"> {{ wuxings.series[1].data[0].value }} %</div>
                                </div>
                                <div class="labels2">
                                    <div class="name">水</div>
                                    <div class="percent"> {{ wuxings.series[1].data[1].value }} %</div>
                                </div>
                                <div class="labels3">
                                    <div class="name">木</div>
                                    <div class="percent"> {{ wuxings.series[1].data[2].value }} %</div>
                                </div>
                                <div class="labels4">
                                    <div class="name">火</div>
                                    <div class="percent"> {{ wuxings.series[1].data[3].value }} %</div>
                                </div>
                                <div class="labels5">
                                    <div class="name">土</div>
                                    <div class="percent"> {{ wuxings.series[1].data[4].value }} %</div>
                                </div>
                            </div>
                            <div class="tus">
                                <img  v-lazy="require('@/assets/love/other/nv.png')" alt="" class="img-ren-tu">
                            </div>
                        </div>
                        <div class="pan-jie">男女五行结合盘</div>
                        <SubHead :subName="'关于五行适配度'">
                            <template v-slot:content>
                                <div class="info-box">
                                    <div class="commont-info">
                                        <!-- <div class="label" style="margin-top: 6vw;">来学习！</div> -->
                                        <div class="label">
                                            <div style="text-indent: 1em; margin-top: 6vw;"
                                                v-for="(item, index) in loveDatail.about_wx_spd" :key="index">{{ item }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </SubHead>
                        <SubHead :subName="'双方五行适配度点评'">
                            <template v-slot:content>
                                <div class="wu-score" style="margin-top: 8vw;">
                                    <div class="wu-row">
                                        <div class="labels">五行适配度</div>
                                        <div class="percents">
                                            <div class="percents-son"
                                                :style="{ 'background-color': 'rgb(206, 54, 108)', 'width': loveDatail.paired_index.wuxing_sp_score * 10 / 2 + '%' }">
                                                <div class="numbersf">{{ loveDatail.paired_index.wuxing_sp_score }}分</div>
                                            </div>
                                        </div>
                                        <div class="numbers">20分</div>
                                    </div>
                                </div>
                                <div class="info-box" style="margin-top:5vw;">

                                    <div class="commont-info">
                                        <div class="label">对彼此是否有帮助？</div>
                                        <div class="info-item" v-for="(item, index) in loveDatail.wx_spd_desc" :key="index">
                                            <span v-if="index < 4">{{ item }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="info-box" >
                                    <div class="commont-info">
                                        <div class="label">一起合作的适配度</div>
                                        <div class="info-item" v-for="(item, index) in loveDatail.wx_spd_desc" :key="index">
                                            <span v-if="index >= 4">{{ item }}</span>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </SubHead>
                        <!-- <SubHead :subName="'对彼此是否有帮助？'">
                            <template v-slot:content>

                            </template>
                        </SubHead>
                        <SubHead :subName="'一起合作的适配度'">
                            <template v-slot:content>

                            </template>
                        </SubHead> -->
                    </template>
                </BoxBg>
            </div>
            <div class="order-info" style="margin-top: 8vw;">
                <BoxBg>
                    <template v-slot:exhibition>
                        <TopDecoration :name="'生肖适配度'"></TopDecoration>
                        <div class="headers-row" style="margin-top: 3vw;margin-bottom: 13vw;">
                            <div class="shengxiao" style="margin-right: 28vw;">
                                <img  v-lazy="require('@/assets/love/12/' + loveDatail.zodiac_fit_measure.male_sx + '.png')" alt="" class="img-shengxiao">
                                <div class="shengxiao-year">男方：{{ loveDatail.zodiac_fit_measure.male_sx }}</div>
                            </div>
                            <div class="cone">
                                <div class="hongxin">{{ loveDatail.zodiac_fit_measure.sx_relation }}</div>
                            </div>
                            <div class="shengxiao">
                                <img  v-lazy="require('@/assets/love/12/' +  + loveDatail.zodiac_fit_measure.female_sx + '.png')" alt="" class="img-shengxiao">
                                <div class="shengxiao-year">女方：{{ loveDatail.zodiac_fit_measure.female_sx }}</div>
                            </div>
                        </div>
                        <SubHead :subName="'关于生肖适配度'">
                            <template v-slot:content>
                                <div class="info-box">
                                    <div class="commont-info">
                                        <!-- <div class="label" style="margin-top: 6vw;">来学习！</div> -->
                                        <!-- <div class="info-item"> {{loveDatail.zodiac_fit_measure.about_sx_sp}}</div> -->
                                        <div class="info-item" style="margin-top: 6vw;"> {{
                                            loveDatail.zodiac_fit_measure.about_sx_sp }}</div>
                                    </div>
                                </div>
                            </template>
                        </SubHead>
                        <SubHead :subName="'双方生肖适配度点评'">
                            <template v-slot:content>
                                <div class="wu-score" style="margin-top: 8vw;">
                                    <div class="wu-row">
                                        <div class="labels">生肖适配度</div>
                                        <div class="percents">
                                            <div class="percents-son"
                                                :style="{ 'background-color': 'rgb(206, 54, 108)', 'width': loveDatail.paired_index.shengxiao_sp_score * 10 / 2.5 + '%' }">
                                                <div class="numbersf">{{ loveDatail.paired_index.shengxiao_sp_score }}分
                                                </div>
                                            </div>
                                        </div>
                                        <div class="numbers">25分</div>
                                    </div>
                                </div>
                                <div class="info-box">
                                    <div class="commont-info">
                                        <!-- <div class="label">适配度: 生肖狗 + 生肖蛇 = 小吉</div> -->
                                        <div class="info-item">{{ loveDatail.zodiac_fit_measure.desc }}</div>
                                        <!-- <div class="info-item" v-for="(item,index) in loveDatail.zodiac_fit_measure.desc" :key="index">{{item}}</div> -->
                                    </div>
                                </div>
                            </template>
                        </SubHead>
                    </template>
                </BoxBg>
            </div>
            <div class="order-info" style="margin-top: 8vw;">
                <BoxBg>
                    <template v-slot:exhibition>
                        <TopDecoration :name="'婚姻宫适配度'"></TopDecoration>

                        <div class="headers-row">
                            <div class="nanfanghunyin">
                                <div>男方</div>
                                <div>婚姻宫</div>
                            </div>
                            <div class="center-times">
                                <div>{{ loveDatail.marital_fit_measure.male_hyg }}</div>
                                <div style="color: #fff;">{{ loveDatail.marital_fit_measure.hyg_relation.slice(1) }}</div>
                                <div>{{ loveDatail.marital_fit_measure.female_hyg }}</div>
                            </div>
                            <div class="nanfanghunyin">
                                <div>女方</div>
                                <div>婚姻宫</div>
                            </div>
                        </div>
                        <SubHead :subName="'关于婚姻适配度'">
                            <template v-slot:content>
                                <div class="info-box">
                                    <div class="commont-info">
                                        <!-- <div class="label" style="margin-top: 6vw;">来学习！</div> -->
                                        <!-- <div class="info-item"  >{{loveDatail.marital_fit_measure.about_marry_sp}}</div> -->

                                        <div class="info-item" style="margin-top: 6vw;">{{
                                            loveDatail.marital_fit_measure.about_marry_sp }}</div>
                                    </div>
                                </div>
                            </template>
                        </SubHead>
                        <SubHead :subName="'双方婚姻宫适配度点评'">
                            <template v-slot:content>
                                <div class="wu-score" style="margin-top: 8vw;">
                                    <div class="wu-row">
                                        <div class="labels">婚姻宫适配度</div>
                                        <div class="percents">
                                            <div class="percents-son"
                                                :style="{ 'background-color': 'rgb(206, 54, 108)', 'width': loveDatail.paired_index.hunyingong_sp_score * 10 / 2.5 + '%' }">
                                                <div class="numbersf">{{ loveDatail.paired_index.hunyingong_sp_score }}分
                                                </div>
                                            </div>
                                        </div>
                                        <div class="numbers">25分</div>
                                    </div>
                                </div>
                                <div class="info-box">
                                    <div class="commont-info">
                                        <!-- <div class="label">适配度: 婚烟宫丑 +婚姻宫成=小X</div> -->
                                        <div class="info-item">{{ loveDatail.marital_fit_measure.desc }}</div>
                                    </div>
                                </div>
                            </template>
                        </SubHead>
                    </template>
                </BoxBg>
            </div>
            <div class="order-info" style="margin-top: 8vw;">
                <BoxBg>
                    <template v-slot:exhibition>
                        <TopDecoration :name="'格局运势适配度'"></TopDecoration>
                        <div class="headers-row">
                            <div class="nan-colors1">
                                <div class="colors-box"></div>
                                <div class="xbie">男方</div>
                            </div>
                            <div class="nan-colors2">
                                <div class="colors-box"></div>
                                <div class="xbie">女方</div>
                            </div>
                            <div class="gejus">
                                <div id="geju" class="geju-charts"></div>
                            </div>
                        </div>
                        <div class="pan-jie">双方格局运势走势图</div>
                        <SubHead :subName="'关于格局运势适配度'" style="margin-top: 8vw;">
                            <template v-slot:content>
                                <div class="info-box">
                                    <div class="commont-info">
                                        <!-- <div class="label" style="margin-top: 6vw;">来学习！</div> -->
                                        <div class="info-item" style="margin-top: 6vw;">{{
                                            loveDatail.gjys_fit_measure.about_gjys_sp }}</div>
                                    </div>
                                </div>
                            </template>
                        </SubHead>
                        <SubHead :subName="'双方格局运势适配度点评'">
                            <template v-slot:content>
                                <div class="wu-score" style="margin-top: 8vw;">
                                    <div class="wu-row">
                                        <div class="labels">格局运势适配度</div>
                                        <div class="percents">
                                            <div class="percents-son"
                                                :style="{ 'background-color': 'rgb(206, 54, 108)', 'width': loveDatail.paired_index.gjys_sp_score * 10 / 2 + '%' }">
                                                <div class="numbersf">{{ loveDatail.paired_index.gjys_sp_score }} 分</div>
                                            </div>
                                        </div>
                                        <div class="numbers">20分</div>
                                    </div>
                                </div>
                                <div class="info-box">
                                    <div class="commont-info">
                                        <div class="info-item">{{ loveDatail.gjys_fit_measure.desc }}</div>
                                    </div>
                                </div>
                            </template>
                        </SubHead>
                    </template>
                </BoxBg>
            </div>
            <div class="order-info" style="margin-top: 8vw;">
                <BoxBg>
                    <template v-slot:exhibition>
                        <TopDecoration :name="'两人旺夫妻分析'"></TopDecoration>
                        <SubHead :subName="'老师寄语'">
                            <template v-slot:content>
                                <div class="info-box" style="margin-top: 5vw;">
                                    <div class="commont-info">
                                        <div class="info-item"
                                            v-for="(item, index) in loveDatail.good_luck_couple_analysis.jiyu" :key="index">
                                            {{ item }}</div>
                                    </div>
                                </div>
                            </template>
                        </SubHead>
                        <SubHead :subName="'男方旺妻程度'">
                            <template v-slot:content>
                                <div class="info-box" style="margin-top: 5vw;">
                                    <div class="commont-info">
                                        <div class="info-item">
                                            {{ loveDatail.good_luck_couple_analysis.male_luck_wife }}
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </SubHead>
                        <SubHead :subName="'女方旺夫程度'">
                            <template v-slot:content>
                                <div class="info-box" style="margin-top: 5vw;">
                                    <div class="commont-info">
                                        <div class="info-item"> {{ loveDatail.good_luck_couple_analysis.female_luck_man }}
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </SubHead>
                        <SubHead :subName="'男方克妻程度'">
                            <template v-slot:content>
                                <div class="info-box" style="margin-top: 5vw;">
                                    <div class="commont-info">
                                        <div class="info-item">
                                            <span
                                                v-for="(item, index) in loveDatail.good_luck_couple_analysis.male_ke_wife.split('：')"
                                                :key="index">
                                                <span
                                                    v-if="index !== loveDatail.good_luck_couple_analysis.male_ke_wife.split('。').length - 2">{{
                                                        item
                                                    }}：</span>
                                                <span v-else >{{ item }}</span>
                                            </span>

                                        </div>
                                    </div>
                                </div>
                            </template>
                        </SubHead>

                        <SubHead :subName="'女方克夫程度'">
                            <template v-slot:content>
                                <div class="info-box" style="margin-top: 5vw;">
                                    <div class="commont-info">
                                        <div class="info-item">
                                            <span
                                                v-for="(item, index) in loveDatail.good_luck_couple_analysis.female_ke_man.split('。')"
                                                :key="index">
                                                <span
                                                    v-if="index !== loveDatail.good_luck_couple_analysis.female_ke_man.split('。').length - 2">{{
                                                        item
                                                    }}。</span>
                                                <span v-else  >{{ item }}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </SubHead>
                        <SubHead :subName="'正确看待旺夫旺妻'">
                            <template v-slot:content>
                                <div class="info-box" style="margin-top: 5vw;">
                                    <div class="commont-info">
                                        <div class="info-item"
                                            v-for="(item, index) in loveDatail.good_luck_couple_analysis.look_xiangluck_ke"
                                            :key="index">
                                            {{ item }}
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </SubHead>
                    </template>
                </BoxBg>
            </div>
            <div class="order-info" style="margin-top: 8vw;">
                <BoxBg>
                    <template v-slot:exhibition>
                        <TopDecoration :name="'婚姻潜在的危机预测'"></TopDecoration>

                        <SubHead :subName="'男方婚变情况预测'">
                            <template v-slot:content>
                                <div class="info-box" style="margin-top: 5vw;">
                                    <div class="commont-info">
                                        <div class="info-item"
                                            v-for="(item, index) in loveDatail.marry_crisis_forecast.male_forecast"
                                            :key="index">
                                            {{ item }}
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </SubHead>
                        <SubHead :subName="'女方婚变情况预测'">
                            <template v-slot:content>
                                <div class="info-box" style="margin-top: 5vw;">
                                    <div class="commont-info">
                                        <div class="info-item"
                                            v-for="(item, index) in loveDatail.marry_crisis_forecast.female_forecast"
                                            :key="index">
                                            {{ item }}
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </SubHead>
                    </template>
                </BoxBg>
            </div>
            <div class="order-info" style="margin-top: 8vw;">
                <BoxBg>
                    <template v-slot:exhibition>
                        <TopDecoration :name="'八字姻缘改运风水布局建议'"></TopDecoration>

                        <!-- <SubHead :subName="'男方个人调理建议'">
                            <template v-slot:content>
                                <div class="info-box" style="margin-top: 5vw;">
                                    <div class="commont-info">
                                        <div class="label"
                                            v-for="(item, index) in loveDatail.marry_fengshui_layout.male_grdl_jy"
                                            :key="index">{{ item }}</div>
                                    </div>
                                </div>
                            </template>
                        </SubHead> -->
                        <SubHead :subName="'男方家居调理建议'">
                            <template v-slot:content>
                                <div class="info-box" style="margin-top: 5vw;">
                                    <div class="jiu-direction">
                                        <div class="item-direction" v-for="(item, index) in direction" :key="item"
                                            :style="{ 'border-right': (index + 1) % 3 === 0 ? 'none' : '1px solid rgb(224, 162, 172)', 'border-bottom': index === 6 || index === 7 || index === 8 ? 'none' : '1px solid rgb(224, 162, 172)' }">
                                            {{ item }}
                                            <div class="level-number"
                                                v-if="item === loveDatail.marry_fengshui_layout.male_household_jy['1'][0] || item === loveDatail.marry_fengshui_layout.male_household_jy['2'][0] || item === loveDatail.marry_fengshui_layout.male_household_jy['3'][0]">
                                                <span
                                                    v-if="item === loveDatail.marry_fengshui_layout.male_household_jy['1'][0]">1{{
                                                        loveDatail.marry_fengshui_layout.male_household_jy['1'][0] ===
                                                        loveDatail.marry_fengshui_layout.male_household_jy['2'][0] ||
                                                        loveDatail.marry_fengshui_layout.male_household_jy['1'][0]
                                                        === loveDatail.marry_fengshui_layout.male_household_jy['3'][0] ? '、' :
                                                        ''
                                                    }}</span>
                                                <span
                                                    v-if="item === loveDatail.marry_fengshui_layout.male_household_jy['2'][0]">2{{
                                                        loveDatail.marry_fengshui_layout.male_household_jy['2'][0] ===
                                                        loveDatail.marry_fengshui_layout.male_household_jy['3'][0] ? '、' : ''
                                                    }}</span>
                                                <span
                                                    v-if="item === loveDatail.marry_fengshui_layout.male_household_jy['3'][0]">3</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="box-contents">
                                        <img  v-lazy="require('@/assets/love/other/yw.png')" alt="" class="img-question">
                                        <div class="yiwen">什么是家居调理:  通过易学風水调节家居气场环境，调节双方的能量，缓解相处的状态，减轻争吵和降低焦虑，以达到调节婚姻的目的。</div>
                                    </div>
                                    <div class="commont-info" style="margin-top: 4vw;">
                                        <div class="label">男方家居调理建议:</div>
                                        <div class="label">1、{{ loveDatail.marry_fengshui_layout.male_household_jy['1'][1]
                                        }}
                                        </div>
                                        <div class="label">2、{{ loveDatail.marry_fengshui_layout.male_household_jy['2'][1]
                                        }}
                                        </div>
                                        <div class="label">3、{{ loveDatail.marry_fengshui_layout.male_household_jy['3'][1]
                                        }}
                                        </div>
                                        <div>
                                            <div class="label"> </div>
                                        </div>

                                    </div>

                                </div>

                            </template>
                        </SubHead>
                        <!-- <SubHead :subName="'女方个人调理建议'">
                            <template v-slot:content>
                                <div class="info-box" style="margin-top: 5vw;">
                                    <div class="commont-info">
                                        <div class="label"
                                            v-for="(item, index) in loveDatail.marry_fengshui_layout.female_grdl_jy"
                                            :key="index">{{ item }}</div>
                                    </div>
                                </div>
                            </template>
                        </SubHead> -->
                        <SubHead :subName="'女方家居调理建议'">
                            <template v-slot:content>
                                <div class="info-box" style="margin-top: 5vw;">
                                    <div class="jiu-direction">
                                        <div class="item-direction" v-for="(item, index) in direction" :key="item"
                                            :style="{ 'border-right': (index + 1) % 3 === 0 ? 'none' : '1px solid rgb(224, 162, 172)', 'border-bottom': index === 6 || index === 7 || index === 8 ? 'none' : '1px solid rgb(224, 162, 172)' }">
                                            {{ item }}
                                            <div class="level-number"
                                                v-if="item === loveDatail.marry_fengshui_layout.female_household_jy['1'][0] || item === loveDatail.marry_fengshui_layout.female_household_jy['2'][0] || item === loveDatail.marry_fengshui_layout.female_household_jy['3'][0]">
                                                <span
                                                    v-if="item === loveDatail.marry_fengshui_layout.female_household_jy['1'][0]">1{{
                                                        loveDatail.marry_fengshui_layout.female_household_jy['1'][0] ===
                                                        loveDatail.marry_fengshui_layout.female_household_jy['2'][0] ||
                                                        loveDatail.marry_fengshui_layout.female_household_jy['1'][0]
                                                        === loveDatail.marry_fengshui_layout.female_household_jy['3'][0] ? '、' :
                                                        ''
                                                    }}</span>
                                                <span
                                                    v-if="item === loveDatail.marry_fengshui_layout.female_household_jy['2'][0]">2{{
                                                        loveDatail.marry_fengshui_layout.female_household_jy['1'][0] ===
                                                        loveDatail.marry_fengshui_layout.female_household_jy['3'][0] ? '、' : ''
                                                    }}</span>
                                                <span
                                                    v-if="item === loveDatail.marry_fengshui_layout.female_household_jy['3'][0]">3</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="commont-info" style="margin-top: 4vw;">
                                        <div class="label">女方家居调理建议:</div>
                                        <div class="label">1、{{ loveDatail.marry_fengshui_layout.female_household_jy['1'][1]
                                        }}</div>
                                        <div class="label">2、{{ loveDatail.marry_fengshui_layout.female_household_jy['2'][1]
                                        }}</div>
                                        <div class="label">3、{{ loveDatail.marry_fengshui_layout.female_household_jy['3'][1]
                                        }}</div>
                                    </div>

                                </div>
                            </template>
                        </SubHead>
                        <SubHead :subName="'已婚人士注意避忌'">
                            <template v-slot:content>
                                <div style="margin: 5vw 0; text-align: left;padding:0 2vw;">
                                    <div v-for="(item, index) in loveDatail.marry_fengshui_layout.zhuyishixiang" :key="index">
                                    <div class="label">{{ item }}</div>
                                </div>
                                </div>

                            </template>
                        </SubHead>
                    </template>
                </BoxBg>
            </div>
            <div class="order-info" style="margin-top: 8vw;">
                <BoxBg>
                    <template v-slot:exhibition>
                        <TopDecoration :name="'2023结婚黄道吉日表'"></TopDecoration>
                        <div class="date-box" @click.stop>
                            <div class="dates-title">点击了解具体月份结婚、订婚吉日</div>
                            <div class="date-list" :style="{ 'z-index': showDates ? -1 : 1 }">
                                <div class="date" v-for="(item, index) in currentDates.months" :key="index"
                                    @click="getMonthYiJiaQu(currentDates.currentYear, currentDates.numberMonth[index], currentDates.days[index])">
                                    <div class="years">2023</div>
                                    <div class="month">{{ item }}</div>
                                </div>
                                <div class="date" v-for="item in 3" style="opacity: 0;" :key="item + 14">
                                </div>
                            </div>
                            <div class="grid-date-list" v-show="showDates">
                                <div class="dates-title" style="margin-top:3vw;">点击了解具体月份结婚、订婚吉日</div>
                                <div class="dates-list">
                                    <div class="list-row">
                                        <div class="month-title">农历</div>
                                        <div class="month-center">公历</div>
                                        <div class="month-title">星期</div>
                                    </div>
                                    <div class="list-row" v-for="(item, index) in currentDates.currentYiJiaQu" :key="index">
                                        <div class="month-title">{{ item.lunarDate }}</div>
                                        <div class="month-center">{{ item.solars }}</div>
                                        <div class="month-title">{{ item.week }}</div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </template>
                </BoxBg>
            </div>
            <div class="flooters-info">
                <div class="erweima">
                    <img  v-lazy="require('@/assets/name/ewm/ewm.png')" alt="" class="img-erweima">
                </div>
                <div class="call">如需帮助，请联系客服微信：S600007S</div>
            </div>
        </div>
    </div>
</template>
<script>
import Tips from '@/components/name/tips/tips.vue'
import TopDecoration from '@/components/love/text_ui/top_decoration.vue'
import BoxBg from '@/components/love/bg/box_bg.vue'
import SubHead from '@/components/love/bg/subhead_bg.vue'
// import testJson from '@/views/love/test.json'
import { Lunar, LunarYear } from 'lunar-javascript'
import * as echarts from 'echarts'
import { openService } from '@/uitls/js/name_service'
export default {
  name: 'HomeView',
  components: {
    Tips,
    TopDecoration,
    BoxBg,
    SubHead
  },
  data () {
    return {
      showDates: false,
      direction: ['东南', '正南', '西南', '正东', '中宫', '正西', '东北', '正北', '西北'],
      ecahrtsWu: {

        tooltip: {
          trigger: 'axis'

        },
        legend: {
          left: 'center',
          data: [
            '男方',
            '女方'
          ],
          textStyle: {
            fontSize: 12,
            fontWeight: 700
          }
        },
        radar: [

          {
            radius: 80, // 缩放
            center: ['50%', '60%'], // 位置
            axisName: {
              color: '#000',
              fontSize: 14,
              fontWeight: 700
            },
            axisLine: {
              show: true
            },
            splitArea: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(212, 182, 161, 0.78)'
              }
            },
            indicator: [
              { text: '贵人', max: 100 },
              { text: '承受力', max: 100 },
              { text: '自制力', max: 100 },
              { text: '创造力', max: 100 },
              { text: '智商', max: 100 }
            ]
          }
        ],
        series: [
          {
            type: 'radar',
            tooltip: {
              trigger: 'item'
            },
            label: {
              show: false
            },
            data: [
              {
                value: [60, 73, 65, 85, 40],
                name: '男方'
              }
            ],
            itemStyle: {
              normal: {
                color: '#DAA930'
              }
            }
          },
          {
            type: 'radar',
            tooltip: {
              trigger: 'item',
              position: ['40%', '50%']
            },
            data: [
              {
                value: [30, 90, 56, 70, 82],
                name: '女方'
              }
            ],
            itemStyle: {
              color: '#BB2A2A'

            }
          }
        ]
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
      graphical1: {

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
              { value: 0, name: 'rose 1' },
              { value: 0, name: 'rose 2' },
              { value: 0, name: 'rose 3' },
              { value: 0, name: 'rose 4' },
              { value: 0, name: 'rose 5' }
            ]
          }
        ]

      },
      graphical2: {

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
      geju: {
        xAxis: {
          type: 'category',
          data: ['10岁', '20岁', '30岁', '40岁', '50岁', '60岁', '70岁', '80岁'],
          axisTick: {
            inside: true
          },
          axisLabel: {
            fontSize: 10
          },
          axisLine: {
            show: true,
            symbol: ['none', 'arrow'],
            symbolOffset: [10],
            lineStyle: {
              color: '#000'
            }
          }
        },
        grid: {
          top: '4%',
          left: '0%',
          right: '4%',
          bottom: '6%',
          containLabel: true
        },
        yAxis: {

          type: 'value',
          axisLine: {
            show: true,
            symbol: ['none', 'arrow'],
            symbolOffset: [10],
            lineStyle: {
              color: '#000'
            }
          },
          axisLabel: {
            fontSize: 10
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: true,
            inside: true
          }
        },
        series: [
          {

            data: [20, 46, 62, 22, 30, 52, 82, 12],
            type: 'line',
            smooth: true,
            lineStyle: {
              color: 'rgb(239, 155, 54)'
            },
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: 'rgb(239, 155, 54)',
                borderWidth: 2
              }

            }

          },
          {
            data: [30, 52, 82, 12, 20, 46, 62, 22],
            type: 'line',
            smooth: true,
            lineStyle: {
              color: 'rgb(219, 115, 115)'
            },
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: 'rgb(219, 115, 115)'
              }

            }
          }
        ]
      },
      loveDatail: {
        order_id: '',
        male_info: {
          name: '',
          gender: '',
          solar_birthday: '',
          lunar_birthday: '',
          sx_hour: '',
          hour: '',
          bazi: '',
          xiyongshen: '',
          age: '',
          shengxiao: '',
          mingzhu: ''
        },
        female_info: {
          name: '',
          gender: '',
          solar_birthday: '',
          lunar_birthday: '',
          sx_hour: '',
          hour: '',
          bazi: '',
          xiyongshen: '',
          age: '',
          shengxiao: '',
          mingzhu: ''
        },
        paired_index: {
          hehun_score: 0,
          bazi_sp_score: 0,
          wuxing_sp_score: 0,
          shengxiao_sp_score: 0,
          hunyingong_sp_score: 0,
          gjys_sp_score: 0,
          wenxitishi: [],
          hehunzongshu: []

        },
        male_wuxing_fit_measure: {
          金: 0,
          木: 0,
          水: 0,
          火: 0,
          土: 0
        },
        female_wuxing_fit_measure: {
          金: 0,
          木: 0,
          水: 0,
          火: 0,
          土: 0
        },
        wuxing_hepan_score: {
          金: 12,
          木: 22,
          水: 42,
          火: 18,
          土: 22
        },
        male_bazi_fit_measure: {
          guiren: 0,
          chengshouli: 0,
          sikaoli: 0,
          chuangzaoli: 0,
          zizhili: 0

        },
        female_bazi_fit_measure: {
          guiren: 0,
          chengshouli: 0,
          sikaoli: 0,
          chuangzaoli: 0,
          zizhili: 0
        },
        bazi_spd_alldesc: '',
        bazi_spd_score: 0,
        male_fortune_trait: [],
        female_fortune_trait: [],
        about_wx_spd: [],
        wx_spd_desc: '',
        zodiac_fit_measure: {
          male_sx: '',
          female_sx: '',
          about_sx_sp: [],
          desc: ''
        },
        marital_fit_measure: {
          male_hyg: '',
          female_hyg: '',
          about_marry_sp: [],
          hyg_relation: '相生',
          desc: ''
        },
        gjys_fit_measure: {
          male_gjys: [],
          female_gjys: [],
          about_gjys_sp: [],
          desc: ''
        },
        good_luck_couple_analysis: {
          jiyu: '',
          male_luck_wife: [],
          female_luck_man: [],
          look_xiangke: [],
          look_xiangluck: [],
          male_ke_wife: '',
          female_ke_man: ''
        },
        marry_crisis_forecast: {
          male_forecast: [],
          female_forecast: []

        },
        marry_fengshui_layout: {
          male_grdl_jy: [],
          female_grdl_jy: [],
          male_household_jy: {
            1: [
              ''
            ],
            2: [
              ''
            ],
            3: [
              ''
            ],
            male_avoid: []
          },
          female_household_jy: {
            1: [
              ''
            ],
            2: [
              ''
            ],
            3: [
              ''
            ],
            female_avoid: []
          }
        }
      },
      currentDates: {
        currentYear: '',
        months: [],
        days: [],
        numberMonth: [],
        currentYiJiaQu: [

        ]
      }

    }
  },
  mounted () {
    // this.loveDatail = testJson
    this.loveDatail = JSON.parse(localStorage.getItem('detailResultLove'))
    console.log(this.loveDatail, 'loveDatail')
    this.graphical1.series[1].data[0].value = this.loveDatail.male_wuxing_fit_measure.金
    this.graphical1.series[1].data[1].value = this.loveDatail.male_wuxing_fit_measure.水
    this.graphical1.series[1].data[2].value = this.loveDatail.male_wuxing_fit_measure.木
    this.graphical1.series[1].data[3].value = this.loveDatail.male_wuxing_fit_measure.火
    this.graphical1.series[1].data[4].value = this.loveDatail.male_wuxing_fit_measure.土

    this.graphical2.series[1].data[0].value = this.loveDatail.female_wuxing_fit_measure.金
    this.graphical2.series[1].data[1].value = this.loveDatail.female_wuxing_fit_measure.水
    this.graphical2.series[1].data[2].value = this.loveDatail.female_wuxing_fit_measure.木
    this.graphical2.series[1].data[3].value = this.loveDatail.female_wuxing_fit_measure.火
    this.graphical2.series[1].data[4].value = this.loveDatail.female_wuxing_fit_measure.土

    this.ecahrtsWu.series[0].data[0].value = [
      this.loveDatail.male_bazi_fit_measure.guiren * 0.7 + 30,
      this.loveDatail.male_bazi_fit_measure.chengshouri * 0.7 + 30,
      this.loveDatail.male_bazi_fit_measure.zizhili * 0.7 + 30,
      this.loveDatail.male_bazi_fit_measure.chuangzaoli * 0.7 + 30,
      this.loveDatail.male_bazi_fit_measure.sikaoli * 0.7 + 30
    ]
    this.ecahrtsWu.series[1].data[0].value = [
      this.loveDatail.female_bazi_fit_measure.guiren * 0.7 + 30,
      this.loveDatail.female_bazi_fit_measure.chengshouri * 0.7 + 30,
      this.loveDatail.female_bazi_fit_measure.zizhili * 0.7 + 30,
      this.loveDatail.female_bazi_fit_measure.chuangzaoli * 0.7 + 30,
      this.loveDatail.female_bazi_fit_measure.sikaoli * 0.7 + 30
    ]
    const tempArr = [...this.ecahrtsWu.series[0].data[0].value, ...this.ecahrtsWu.series[1].data[0].value]
    const shuMax = Math.ceil(Math.max.apply(null, tempArr) / 10) * 10
    console.log(shuMax, 'shuMax_shuMax')
    this.ecahrtsWu.radar[0].indicator[0].max = shuMax
    this.ecahrtsWu.radar[0].indicator[1].max = shuMax
    this.ecahrtsWu.radar[0].indicator[2].max = shuMax
    this.ecahrtsWu.radar[0].indicator[3].max = shuMax
    this.ecahrtsWu.radar[0].indicator[4].max = shuMax
    this.geju.series[0].data = this.loveDatail.gjys_fit_measure.male_gjys
    this.geju.series[1].data = this.loveDatail.gjys_fit_measure.female_gjys

    this.wuxings.series[1].data[0].value = this.loveDatail.wuxing_hepan_score.金
    this.wuxings.series[1].data[1].value = this.loveDatail.wuxing_hepan_score.水
    this.wuxings.series[1].data[2].value = this.loveDatail.wuxing_hepan_score.木
    this.wuxings.series[1].data[3].value = this.loveDatail.wuxing_hepan_score.火
    this.wuxings.series[1].data[4].value = this.loveDatail.wuxing_hepan_score.土

    this.drawEcharts()
    this.getDates()
  },
  methods: {
    openService () {
      openService()
    },
    drawEcharts () {
      const wudirectionChart = echarts.init(document.getElementById('wudirection'))
      wudirectionChart.setOption(
        this.ecahrtsWu

      )

      // echart使用
      const wuxingsChart = echarts.init(document.getElementById('wuxings'))
      wuxingsChart.setOption(
        this.wuxings
      )
      // echart使用
      const graphical1Chart = echarts.init(document.getElementById('graphical1'))
      graphical1Chart.setOption(
        this.graphical1
      )
      // echart使用
      const graphical2Chart = echarts.init(document.getElementById('graphical2'))
      graphical2Chart.setOption(
        this.graphical2
      )
      // echart使用
      const gejuChart = echarts.init(document.getElementById('geju'))
      gejuChart.setOption(
        this.geju
      )
    },
    getDates () {
      this.currentDates.currentYear = Lunar.fromDate(new Date()).getYear()
      const d = LunarYear.fromYear(this.currentDates.currentYear)
      const months = d.getMonthsInYear()
      const monthsArr = []
      const lunarMonthNumber = []
      const lunarDays = []
      for (let i = 0, j = months.length; i < j; i++) {
        monthsArr.push(months[i].toString().substr(5, months[i].toString().length - 10))
        lunarMonthNumber.push(months[i].getMonth())
        lunarDays.push(months[i].getDayCount())
      }
      this.currentDates.months = monthsArr
      this.currentDates.days = lunarDays
      this.currentDates.numberMonth = lunarMonthNumber
    },
    getMonthYiJiaQu (currentYear, currentMonth, countDays) {
      // 获取当月的农历日期
      const lunarDatesThisMonth = []
      for (let i = 1; i <= countDays; i++) {
        // 农历转化成阳历
        const solarDate = Lunar.fromYmd(currentYear, currentMonth, i).getSolar().toString()
        const times = new Date(solarDate)
        const temps = Lunar.fromDate(times)
        if (temps.getDayYi().indexOf('嫁娶') !== -1) {
          lunarDatesThisMonth.push(temps)
        }
      }
      const currentYiJiaQu = []
      for (let i = 0; i < lunarDatesThisMonth.length; i++) {
        const tempdatesarr = lunarDatesThisMonth[i].getSolar().toString().split('-')
        const tempSolars = '公历' + tempdatesarr[0] + '年' + tempdatesarr[1] + '月' + tempdatesarr[2] + '日'

        const tempLunarDay = lunarDatesThisMonth[i].getDayInChinese()
        const tempWeek = lunarDatesThisMonth[i].getWeekInChinese()
        currentYiJiaQu.push({ solars: tempSolars, lunarDate: tempLunarDay, week: tempWeek })
      }
      this.currentDates.currentYiJiaQu = currentYiJiaQu
      this.showDates = true
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
        font-weight: 700 !important;
        padding: 2vw 0;
        border-top-right-radius: 1.4vw;
        border-bottom-right-radius: 1.4vw;
        display: flex;
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
        overflow: hidden;

        .top-bg {
            position: absolute;
            top: -3vw;
            left: 0;
            z-index: -1;
            width: 100vw;
            height: 200vw;
            background-image: url('@/assets/love/bg/bg.png');
            background-size: 100%;
            background-repeat: no-repeat;

        }

        .bottom-bg {
            width: 100vw;
            height: calc(100% - 183vw);
            background-image: linear-gradient(to bottom, #FF8799, #F1B2BB);
            position: absolute;
            top: 183vw;
            left: 0;
            z-index: -1;
        }

        .order-info {
            display: flex;
            justify-content: center;
            margin-top: 4vw;

            .info-box {
                padding: 2vw 2vw 3vw 2vw;

                .person-info {
                    display: flex;
                    width: 80vw;

                    .info-item {
                        padding: 0 2vw;
                    }
                }

                .commont-info {
                    width: 100%;
                    text-align: left;

                    .info-item {
                        text-indent: 1.5em;
                    }
                }

                .jiu-direction {
                    display: flex;
                    justify-content: center;
                    width: calc(54vw + 6px);
                    border: 3px solid rgb(224, 162, 172);
                    flex-wrap: wrap;
                    margin: 4vw auto 0 auto;

                    .item-direction {
                        width: 18vw;
                        height: 18vw;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: relative;

                        .level-number {
                            position: absolute;
                            top: 2vw;
                            left: 50%;
                            transform: translate(-50%, 0);
                            min-width: 5vw;
                            height: 5vw;
                            padding: 0 1vw;
                            font-size: 2.8vw;
                            line-height: 5vw;
                            border-radius: 5vw;
                            color: #fff;
                            background-color: rgb(189, 45, 45);
                        }
                    }
                }

                .box-contents {
                    display: flex;
                    align-items: center;
                    margin-top: 4vw;

                    .img-question {
                        width: 16vw;
                    }

                    .yiwen {
                        font-size: 3.6vw;
                        text-align: left;
                    }
                }

            }

            .indicative {
                display: flex;
                justify-content: space-around;
                align-items: center;
                width: 80vw;
                font-size: 5vw;
                font-weight: 700;
                color: rgb(170, 42, 44);
                margin-top: 2vw;

                .name {}

                .score {
                    text-align: center;
                    line-height: 6vw;
                    width: 17vw;
                    height: 17vw;
                    border-radius: 14vw;
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    background: rgb(238, 195, 202);
                    border: 1px solid rgb(195, 133, 143);

                    .numbers {
                        font-size: 6vw;
                    }

                    .number-txt {
                        font-size: 3.4vw;

                    }
                }
            }

            .share {
                width: 84vw;
                margin: 1.4vw auto;
                border: 3px solid rgb(224, 162, 172);
                display: flex;
                justify-content: space-between;
                font-size: 3.4vw;

                .comment {
                    width: 8vw;
                    writing-mode: vertical-rl;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 4vw;
                }

                .center-line {
                    width: 3px;
                    height: 70vw;
                    background-color: rgb(224, 162, 172);
                }

                .share-analysis {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    .share-top {
                        width: 100%;

                        .time-list {
                            width: 100%;
                            display: flex;

                            div {
                                flex: 1;
                                padding: 1vw 0;
                                border-right: 1px solid rgb(224, 162, 172);
                                border-bottom: 1px solid rgb(224, 162, 172);
                            }
                        }

                        .tiangan {
                            display: flex;

                            div {
                                flex: 1;
                                padding: 2vw 0;
                                writing-mode: vertical-rl;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                border-right: 1px solid rgb(224, 162, 172);
                                border-bottom: 1px solid rgb(224, 162, 172);
                            }

                        }
                    }

                    .graphical {
                        flex: 1;
                        position: relative;
                        font-size: 3vw;
                        padding-top: 4vw;

                        .graphical-charts {

                            width: 22vw;
                            height: 22vw;
                            margin: 4vw auto 0vw auto;
                        }

                        .labels1 {
                            position: absolute;
                            top: 1vw;
                            right: 4vw;
                            overflow: hidden;
                            border-radius: 1.2vw;

                            .name {
                                padding: 0 1vw;
                            }

                            .percent {}
                        }

                        .labels2 {
                            position: absolute;
                            top: 18vw;
                            right: 0vw;
                            overflow: hidden;
                            border-radius: 1.2vw;

                            .name {
                                padding: 0 1vw;
                            }

                            .percent {}
                        }

                        .labels3 {
                            position: absolute;
                            top: 30vw;
                            left: 50%;
                            transform: translate(-50%, 0);
                            overflow: hidden;
                            border-radius: 1.2vw;

                            .percent {}
                        }

                        .labels4 {
                            position: absolute;
                            top: 18vw;
                            left: 0vw;
                            overflow: hidden;
                            border-radius: 1.2vw;

                            .name {
                                padding: 0 1vw;
                            }

                            .percent {}
                        }

                        .labels5 {
                            position: absolute;
                            top: 1vw;
                            left: 4vw;
                            overflow: hidden;
                            border-radius: 1.2vw;

                            .name {
                                padding: 0 1vw;
                            }

                            .percent {}
                        }

                    }

                    .share-bottom {
                        display: flex;
                        justify-content: space-between;
                        border-top: 1px solid rgb(224, 162, 172);

                        .shengxiao {
                            flex: 3;
                            display: flex;
                            justify-content: space-around;
                            align-items: center;
                        }

                        .benming {
                            flex: 1;
                            writing-mode: vertical-rl;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            padding: 2.4vw 0;
                        }
                    }
                }
            }

            .graduated {
                margin-top: 16vw;
                display: flex;
                justify-content: space-between;
                margin-bottom: 10vw;

                .name {
                    margin: 0 1vw;
                    font-size: 3.6vw;
                    color: rgb(172, 47, 49);
                }

                .rule {
                    flex: 1;
                    height: 6vw;
                    background-image: url('@/assets/love/other/bc.png');
                    background-size: 100%;
                    background-repeat: no-repeat;
                    position: relative;

                    .zhishiqi {
                        position: absolute;
                        top: -9vw;
                        width: 11vw;
                        height: 6vw;
                        line-height: 6vw;
                        border-radius: .6vw;
                        font-size: 3.6vw;
                        background-color: rgb(193, 66, 66);
                        color: #fff;

                        .sanjiao {
                            position: absolute;
                            top: 5vw;
                            left: 50%;
                            width: 0px;
                            height: 0px;
                            transform: translate(-50%, 0);
                            border-left: 2vw solid transparent;
                            border-right: 2vw solid transparent;
                            border-top: 3vw solid rgb(193, 66, 66);
                        }
                    }

                    .status-marry {
                        width: 100%;
                        position: absolute;
                        bottom: -6vw;
                        display: flex;

                        .marry-item {
                            flex: 1;
                            padding: 0;
                            font-size: 3.4vw;
                            color: #fff;
                            padding: .5vw 0;
                        }
                    }
                }
            }

            .wu-score {
                .wu-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 2.8vw;
                    margin: 2.6vw 0;

                    .labels {
                        width: 20vw;
                        margin: 0 .5vw;
                        color: rgb(172, 47, 49);
                    }

                    .numbers {
                        width: 8vw;
                    }

                    .percents {
                        flex: 1;
                        background-color: #fff;
                        border-radius: 6vw;
                        border: 1px solid rgb(172, 116, 125);
                        line-height: 3.4vw;
                        height: 3.4vw;

                        .percents-son {
                            border-radius: 6vw;
                            font-weight: 100;
                            text-align: right;
                            padding-right: 5%;
                            color: #fff;
                            line-height: 3.4vw;
                            height: 3.4vw;
                            font-size: 2.8vw;
                        }
                    }
                }
            }

            .heads {
                width: 100%;
                margin: 10px 0;
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
                    margin-top: 8vw;
                    width: 52vw;
                    height: 52vw;
                    padding-bottom: 0;
                    position: relative;
                    font-size: 3.4vw;

                    .xing-charts {
                        width: 36vw;
                        height: 36vw;
                        margin: 4vw auto 0vw auto;
                    }

                    .labels1 {
                        position: absolute;
                        top: -1vw;
                        right: 6vw;
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
                        right: 2vw;
                        overflow: hidden;
                        border-radius: 1.2vw;

                        .name {
                            padding: 0 1vw;
                        }

                        .percent {}
                    }

                    .labels3 {
                        position: absolute;
                        top: 40vw;
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
                        left: 2vw;
                        overflow: hidden;
                        border-radius: 1.2vw;

                        .name {
                            padding: 0 1vw;
                        }

                        .percent {}
                    }

                    .labels5 {
                        position: absolute;
                        top: -1vw;
                        left: 6vw;
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

            .pan-jie {
                color: #BB2A2A;
            }

            .date-box {
                position: relative;
                min-height: 84vw;

                .dates-title {
                    margin: 6vw 0 4vw 0;
                }

                .date-list {
                    display: flex;
                    justify-content: space-around;
                    flex-wrap: wrap;
                    width: 73vw;
                    margin: 3vw auto;
                    position: absolute;
                    top: 8vw;
                    left: 50%;
                    transform: translate(-50%, 0);

                    .date {
                        width: 14vw;
                        height: 14vw;
                        margin: 0 1vw 4vw 1vw;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        background-image: linear-gradient(to bottom, rgba(233, 178, 178, 0.2), rgb(239, 121, 121), rgb(246, 169, 81));
                        background: rgba(233, 178, 178, 0.2) 100%, linear-gradient(180.00deg, rgb(239, 121, 121) 46.565%, rgba(239, 121, 121, 0) 100%), rgb(246, 169, 81);
                        border: 1px solid rgb(151, 119, 119);
                        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
                        color: #fff;
                        border-radius: 3vw;

                        .month {
                            font-size: 3vw;
                        }
                    }
                }

                .grid-date-list {
                    background-color: #fff;
                    border-radius: 2vw;
                    width: 92%;
                    margin: 3vw auto;
                    padding: 1px 0;

                    .dates-list {
                        border: 1px solid rgb(170, 42, 44);
                        border-bottom: none;
                        width: 92%;
                        margin: 0 auto 4vw auto;

                        .list-row {
                            display: flex;
                            border-bottom: 1px solid rgb(170, 42, 44);
                            line-height: 7vw;

                            .month-title {
                                flex: 2;
                            }

                            .month-center {
                                flex: 5;
                                border-left: 1px solid rgb(170, 42, 44);
                                border-right: 1px solid rgb(170, 42, 44);
                            }
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

            .erweima {
                background-color: rgb(238, 195, 202);
                padding: 1.5vw;
                border-radius: 1vw;
                margin-top: 10vw;

                .img-erweima {
                    display: block;
                    padding: 1vw;
                    border: 1px solid #dac6b0;
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
    }
}</style>
