<template>
    <div class="home">
        <Tips />
        <TopBack />
        <div class="zixun-detail" @click="openService"><span class=" iconfont icon-manager-fill"
                style="font-size:8vw;color:#d1420a;font-weight: 100; text-shadow:  1px 1px rgba(0, 0, 0, 0.5);"></span> 咨询老师
        </div>
        <div class="container">
            <img   class="top-bg" src="@/assets/name/bg/index_bg.png" alt="">
            <div class="transprent"></div>
            <div class="jianbian"></div>
            <div class="top-tops" v-show="tempShow">以下是您的在线测算结果，请查看您的专属报告</div>

            <div class="order-info">
                <BoxBg>
                    <template v-slot:exhibition>
                        <TopDecoration :name="detailData.name + '的测算报告'"></TopDecoration>
                        <div class="play-box">
                            <div class="preferential">综合评分</div>
                            <div class="play-number">{{  Math.round(detailData.score*10)/10  }}</div>
                        </div>
                        <div class="recommendation">
                            <div class="teach">老师建议：</div>
                            <div class="teach">
                                <span v-for="(item, index) in detailData.jy_desc" :key="index"> <span
                                        v-if="index === 0 || index === 2 || index === 4 || index === 6"> &nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>{{ item }}<span v-if="index === 0">。</span> <br
                                        v-if="index === 1 || index === 3 || index === 5" /></span>
                            </div>
                        </div>
                    </template>
                </BoxBg>
            </div>
            <div class="order-info">
                <BoxBg>
                    <template v-slot:exhibition>
                        <TopDecoration :name="'命主基本信息'"></TopDecoration>
                        <div class="info-box">
                            <div class="label">姓名： {{ detailData.name }}</div>
                            <div class="label">性别： {{ detailData.gender }}</div>
                            <div class="date">
                                <div class="label">出生日期：</div>
                                <div class="infos-date">
                                    {{ '公(阳)历' + detailData.solar_birthday + ' ' + detailData.hour +
                                        '点' + ' ' }}
                                    <br>
                                    {{ '农(阴)历' + detailData.lunar_birthday + detailData.sx_hour }}
                                </div>
                            </div>
                        </div>
                    </template>
                </BoxBg>
            </div>
            <div class="order-info">
                <BoxBg>
                    <template v-slot:exhibition>
                        <TopDecoration :name="'关于姓名测算'"></TopDecoration>
                        <div class="kong" style="width: 100%;height: 5vw;"></div>
                        <div class="nav-box">
                            <NavText :name="'测算原则'"></NavText>
                        </div>
                        <div class="info-box">
                            <div style="text-indent: 1em;" class="label">
                                本测算根据传统易学原理，五行生克理论推算，评测姓名与命理匹配度。
                                并详细分析姓名对你的感情婚姻、事业工作、财运投资、职场人脉、一生机遇等影响，了解姓名特点优势，才能更好规划你的人生。
                            </div>
                        </div>
                        <div class="nav-box">
                            <NavText :name="'评分标准'"></NavText>
                        </div>
                        <div class="info-box">
                            <div class="label">
                                &nbsp; &nbsp;名字伴随我们一生，好的名字也会潜移默化的影响人的一生。<br />
                                &nbsp; &nbsp;在专业层面上我们从内（先天）、外（后天）两个维度去看名字对人的影响。先天占比70%，
                                后天占比30%。<br />
                                &nbsp; &nbsp;先天的关键核心是根据八字调整人与名字之间五行、阴阳之间的配合，
                                这种配合我们一般称之为喜用，是一种调节五行互为平衡的方法，这部分占比为60%。第二个基准是生肖，这部分占比为10%。<br />
                                &nbsp; &nbsp;后天的影响主要在名字本身，名字是否能适应后天大环境，好不好听？
                                适不适合社会？能否为缘主带来机遇？这一层面我们会从字形（10%）、字性（10%）、音律（10%）综合考虑我们名字的分值。
                            </div>
                        </div>
                    </template>
                </BoxBg>
            </div>
            <div class="order-info">
                <BoxBg>
                    <template v-slot:exhibition>
                        <TopDecoration :name="'命主八字排盘'"></TopDecoration>

                        <div class="name-detail-box">
                            <div class="zi-box">
                                <div class="zi-show" v-for="(item, index) in detailData.name" :key="index">

                                    <div class="pingying">
                                        <span v-if="detailData.lastname.length===1">{{ detailData.name_pinyin[index] }}</span>
                                        <span v-else>
                                            <span v-if="index>=detailData.lastname.length">{{ detailData.name_pinyin[index+1-detailData.lastname.length] }}</span>
                                            <span v-else>{{ detailData.name_pinyin[0].split(',')[index] }}</span>
                                        </span>
                                    </div>
                                    <div class="zi">{{ item }}</div>
                                    <div class="type">[
                                        <span v-if="detailData.lastname.length===1">{{ detailData.name_wuxing[index] }}</span>
                                        <span v-else>
                                            <span v-if="index>=detailData.lastname.length">{{ detailData.name_wuxing[index+1-detailData.lastname.length] }}</span>
                                            <span v-else>{{ detailData.name_wuxing[0][index] }}</span>
                                        </span>
                                        ]</div>
                                </div>
                            </div>
                            <div class="nav-box">
                                <NavText :name="'八字排盘'"></NavText>
                            </div>
                            <div class="pan-box">
                                <div class="title-row">
                                    <div class="title-item">四柱</div>
                                    <div class="title-item" v-for="(item, index) in  detailData.bazi_paipan.sizhu"
                                        :key="index">
                                        {{ item }}</div>
                                </div>
                                <div class="nav-list">
                                    <div class="nav-row">
                                        <div class="nav-item">五行</div>
                                        <div class="nav-item" v-for="(item, index) in  detailData.bazi_paipan.wuxing"
                                            :key="index">
                                            {{ item }}</div>
                                    </div>
                                    <div class="nav-row">
                                        <div class="nav-item">十神</div>
                                        <div class="nav-item" v-for="(item, index) in  detailData.bazi_paipan.shishen"
                                            :key="index">
                                            {{ item }}</div>

                                    </div>
                                    <div class="nav-row">
                                        <div class="nav-item">乾造</div>
                                        <div class="nav-item" v-for="(item, index) in  detailData.bazi_paipan.qianzao"
                                            :key="index">
                                            {{ item }}</div>
                                    </div>
                                    <div class="nav-row">
                                        <div class="nav-item">臧干</div>
                                        <div class="nav-item" v-for="(item, index) in  detailData.bazi_paipan.zangang"
                                            :key="index">
                                            {{ item }}</div>
                                    </div>
                                    <div class="nav-row">
                                        <div class="nav-item">纳音</div>
                                        <div class="nav-item" v-for="(item, index) in  detailData.bazi_paipan.nayin"
                                            :key="index">
                                            {{ item }}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="nav-box">
                                <NavText :name="'五行分析'"></NavText>
                            </div>
                            <div class="wu-types-box">
                                <div class="wu-one">
                                    <img  v-lazy="require('@/assets/name/wx/j.png')" alt="" class="type-elements">
                                    <div class="type-boxs">
                                        <div class="type-son"
                                            :style="{ 'width': detailData.wuxing_analysis.jin + '%', 'background-image': 'linear-gradient(to bottom,#fcfc18,#cfb403)' }">
                                        </div>
                                        <div class="type-zi"
                                            :style="{ 'background-color': '#D3C600', 'left': detailData.wuxing_analysis.jin + '%' }"
                                            @click="wuxingPercent.indexOf(1) === -1 ? wuxingPercent.push(1) : wuxingPercent = wuxingPercent.filter(item => { return item !== 1 })">
                                            金<div class="type-number" v-show="wuxingPercent.indexOf(1) !== -1">
                                                {{ detailData.wuxing_analysis.jin }}%</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="wu-one">
                                    <img  v-lazy="require('@/assets/name/wx/m.png')" alt="" class="type-elements">
                                    <div class="type-boxs">
                                        <div class="type-son"
                                            :style="{ 'width': detailData.wuxing_analysis.mu + '%', 'background-image': 'linear-gradient(to bottom,#01ff01,#009400)' }">
                                        </div>
                                        <div class="type-zi"
                                            :style="{ 'background-color': '#02B302', 'left': detailData.wuxing_analysis.mu + '%' }"
                                            @click="wuxingPercent.indexOf(2) === -1 ? wuxingPercent.push(2) : wuxingPercent = wuxingPercent.filter(item => { return item !== 2 })">
                                            木<div class="type-number" v-show="wuxingPercent.indexOf(2) !== -1">
                                                {{ detailData.wuxing_analysis.mu }}%</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="wu-one">
                                    <img  v-lazy="require('@/assets/name/wx/s.png')" alt="" class="type-elements">
                                    <div class="type-boxs">
                                        <div class="type-son"
                                            :style="{ 'width': detailData.wuxing_analysis.shui + '%', 'background-image': 'linear-gradient(to bottom,#01d9ff,#0274c0)' }">
                                        </div>
                                        <div class="type-zi"
                                            :style="{ 'background-color': '#00A8E8', 'left': detailData.wuxing_analysis.shui + '%' }"
                                            @click="wuxingPercent.indexOf(3) === -1 ? wuxingPercent.push(3) : wuxingPercent = wuxingPercent.filter(item => { return item !== 3 })">
                                            水<div class="type-number" v-show="wuxingPercent.indexOf(3) !== -1">
                                                {{ detailData.wuxing_analysis.shui }}%</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="wu-one">
                                    <img  v-lazy="require('@/assets/name/wx/h.png')" alt="" class="type-elements">
                                    <div class="type-boxs">
                                        <div class="type-son"
                                            :style="{ 'width': detailData.wuxing_analysis.huo + '%', 'background-image': 'linear-gradient(to bottom,#fc4d2e,#b31b10)' }">
                                        </div>
                                        <div class="type-zi"
                                            :style="{ 'background-color': '#C52B20', 'left': detailData.wuxing_analysis.huo + '%' }"
                                            @click="wuxingPercent.indexOf(4) === -1 ? wuxingPercent.push(4) : wuxingPercent = wuxingPercent.filter(item => { return item !== 4 })">
                                            火<div class="type-number" v-show="wuxingPercent.indexOf(4) !== -1">
                                                {{ detailData.wuxing_analysis.huo }}%</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="wu-one">
                                    <img  v-lazy="require('@/assets/name/wx/t.png')" alt="" class="type-elements">
                                    <div class="type-boxs">
                                        <div class="type-son"
                                            :style="{ 'width': detailData.wuxing_analysis.tu + '%', 'background-image': 'linear-gradient(to bottom,#fcac3d,#cf7901)' }">
                                        </div>
                                        <div class="type-zi"
                                            :style="{ 'background-color': '#E38D0B', 'left': detailData.wuxing_analysis.tu + '%' }"
                                            @click="wuxingPercent.indexOf(5) === -1 ? wuxingPercent.push(5) : wuxingPercent = wuxingPercent.filter(item => { return item !== 5 })">
                                            土<div class="type-number" v-show="wuxingPercent.indexOf(5) !== -1">
                                                {{ detailData.wuxing_analysis.tu }}%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="nav-box">
                                <NavText :name="'喜用神分析'"></NavText>
                            </div>
                            <div class="pan-box">
                                <div class="title-row">
                                    <div class="title-item">喜神</div>
                                    <div class="title-item">用神</div>
                                    <div class="title-item">闲神</div>
                                    <div class="title-item">仇神</div>
                                    <div class="title-item">忌神</div>
                                </div>
                                <div class="nav-list">
                                    <div class="nav-row">
                                        <div class="nav-item">{{ detailData.xiyongshen_analysis.xishen }}</div>
                                        <div class="nav-item">{{ detailData.xiyongshen_analysis.yongshen }}</div>
                                        <div class="nav-item">{{ detailData.xiyongshen_analysis.xianshen }}</div>
                                        <div class="nav-item">{{ detailData.xiyongshen_analysis.choushen }}</div>
                                        <div class="nav-item">{{ detailData.xiyongshen_analysis.jishen }}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="xishen">
                                <span v-for="(txt, index) in detailData.xiyongshen_analysis.xys_desc" :key="index">
                                    <span v-if="index === 0">&nbsp;&nbsp;&nbsp;&nbsp;{{ txt }}<br /></span>
                                    <span v-else style="color: red;">&nbsp;&nbsp;&nbsp;&nbsp;{{ txt }} <span
                                            v-if="index !== detailData.xiyongshen_analysis.xys_desc.length - 1">;</span>
                                        <span v-else></span> </span>
                                </span>
                            </div>
                            <div class="nav-box" style="margin-bottom: 7vw;">
                                <NavText :name="'姓名学寓意'"></NavText>
                            </div>
                            <div v-for="(item, index) in detailData.name_analysis" :key="index">
                                <div class="zi-fen" v-if="index === 0">
                                    <div class="zi"> {{ item.zi }}</div>
                                    <div class="fenxi">
                                        <div class="pingy" style="justify-content: space-between;padding-right: 6vw;"><div >拼音： {{ item.zi_pinyin }}</div> <div>五行： {{ item.zi_wuxing }}</div> </div>
                                        <div class="pingy">{{ item.zi_benyi}}</div>
                                        <div class="pingy">{{item.zi_yuyi }}</div>
                                    </div>

                                </div>
                                    <div class="zi-fen" v-if="index !== 0 &&item.zi !== detailData.name_analysis[index-1].zi">
                                    <div class="zi"> {{ item.zi }}</div>
                                    <div class="fenxi">
                                        <div class="pingy" style="justify-content: space-between;padding-right: 6vw;"><div >拼音： {{ item.zi_pinyin }}</div> <div>五行： {{ item.zi_wuxing }}</div> </div>
                                        <div class="pingy">{{ item.zi_benyi }}</div>
                                        <div class="pingy">{{ item.zi_yuyi }}</div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </template>
                </BoxBg>
            </div>
            <div class="order-info">
                <BoxBg>
                    <template v-slot:exhibition>
                        <TopDecoration :name="'姓名详批'"></TopDecoration>
                        <div class="name-detail-box">
                            <div class="nav-box" style="margin-bottom: 7vw;">
                                <NavText :name="'音律评定'"></NavText>
                            </div>
                            <div class="pingfen-box" style="">
                                <div class="label">音律评分</div>
                                <div class="number">{{ detailData.yinlv_score }}</div>
                                <div class="manfen">满分10分</div>
                            </div>
                            <div class="pan-box">
                                <div class="title-row">
                                    音调组合
                                </div>
                                <div class="nav-list">
                                    <div class="nav-row">
                                        <div class="zi-jiexi">汉字</div>
                                        <div class="zi-du" v-for="(item, index) in detailData.name" :key="index">{{ item }}
                                        </div>
                                    </div>
                                    <div class="nav-row">
                                        <div class="zi-jiexi">拼音</div>
                                        <div class="zi-du" v-for="(item, index)  in detailData.name_pinyin" :key="index">
                                            {{ item }}</div>

                                    </div>
                                    <div class="nav-row">
                                        <div class="zi-jiexi">音调</div>
                                        <div class="zi-du" v-for="(item, index)  in detailData.name_tone_list[1]"
                                            :key="index">{{ item }}</div>

                                    </div>
                                    <div class="nav-row">
                                        <div class="zi-jiexi">点评分析</div>
                                        <div class="zi-details">{{ detailData.name_tone_list[0] }}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="pan-box">
                                <div class="title-row">
                                    声母组合
                                </div>
                                <div class="nav-list">
                                    <div class="nav-row">
                                        <div class="zi-jiexi">汉字</div>
                                        <div class="zi-du" v-for="(item, index) in detailData.name" :key="index">{{ item }}
                                        </div>
                                    </div>
                                    <div class="nav-row">
                                        <div class="zi-jiexi">拼音</div>
                                        <div class="zi-du" v-for="(item, index)  in detailData.name_accent_list[1]"
                                            :key="index">{{ item[0] }}</div>

                                    </div>
                                    <div class="nav-row">
                                        <div class="zi-jiexi">声母</div>
                                        <div class="zi-du" v-for="(item, index)  in detailData.name_accent_list[2]"
                                            :key="index">{{ item[0] }}</div>

                                    </div>
                                    <div class="nav-row">
                                        <div class="zi-jiexi">声母属性</div>
                                        <div class="zi-du" v-for="(item, index)  in detailData.name_accent_list[3]"
                                            :key="index">{{ item }}</div>

                                    </div>
                                    <div class="nav-row">
                                        <div class="zi-jiexi">点评分析</div>
                                        <div class="zi-details">{{ detailData.name_accent_list[0] }}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="pan-box">
                                <div class="title-row">
                                    韵母组合
                                </div>
                                <div class="nav-list">
                                    <div class="nav-row">
                                        <div class="zi-jiexi">汉字</div>
                                        <div class="zi-du" v-for="(item, index) in detailData.name" :key="index">{{ item }}
                                        </div>
                                    </div>
                                    <div class="nav-row">
                                        <div class="zi-jiexi">拼音</div>
                                        <div class="zi-du" v-for="(item, index)  in detailData.name_accent_list[1]"
                                            :key="index">{{ item[0] }}</div>
                                    </div>
                                    <div class="nav-row">
                                        <div class="zi-jiexi">韵母</div>
                                        <div class="zi-du" v-for="(item, index)  in detailData.name_accent_list[4]"
                                            :key="index">{{ item[0] }}</div>
                                    </div>
                                    <div class="nav-row">
                                        <div class="zi-jiexi">韵母属性</div>
                                        <div class="zi-du" v-for="(item, index)  in detailData.name_accent_list[5]"
                                            :key="index">{{ item }}</div>
                                    </div>
                                    <div class="nav-row">
                                        <div class="zi-jiexi">点评分析</div>
                                        <div class="zi-details">{{ detailData.name_accent_list[0] }}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="xishen">
                                <div style="text-align: center;margin-bottom: 2vw;font-size: 4.4vw;font-weight: 700;">【音律总评】
                                </div>
                                <div style="text-indent: 1em;">{{ detailData.all_desc }}</div>
                            </div>
                            <div class="nav-box" style="margin-bottom: 7vw;">
                                <NavText :name="'字形评定'"></NavText>
                            </div>
                            <div class="pingfen-box">
                                <div class="label">字形评分</div>
                                <div class="number">{{ detailData.name_struct_dis.font_score }} 分</div>
                                <div class="manfen">满分10分</div>
                            </div>
                            <div class="zi-box">
                                <div class="zi-show" v-for=" (item, index) in detailData.name_struct_dis.struct_list"
                                    :key="index">
                                    <div class="zi">{{ item[0] }}</div>
                                    <div class="txtjx">{{ item[2] }}</div>
                                    <div class="txtjx">{{ item[1] }} 画</div>
                                </div>
                            </div>
                            <div class="xishen" style="margin-top: 3vw;">
                                <div style="text-align: center;margin-bottom: 2vw;font-size: 4.4vw;font-weight: 700;">
                                    【字形搭配分析】</div>
                                &nbsp;&nbsp;{{ detailData.name_struct_dis.zixing_dapei_fenxi }}
                            </div>
                            <div class="xishen">
                                <div style="text-align: center;margin-bottom: 2vw;font-size: 4.4vw;font-weight: 700;">
                                    【笔画书写分析】</div>
                                &nbsp;&nbsp;{{ detailData.name_struct_dis.bihua_shuxie_fenxi }}
                            </div>
                            <div class="xishen">
                                <div style="text-align: center;margin-bottom: 2vw;font-size: 4.4vw;font-weight: 700;">【字形总评】
                                </div>
                                &nbsp;&nbsp;{{ detailData.name_struct_dis.fone_all_desc }}
                            </div>

                            <div class="nav-box" style="margin-bottom: 7vw;">
                                <NavText :name="'五行喜用评定'"></NavText>
                            </div>
                            <div class="pingfen-box">
                                <div class="label">五喜用使用评分</div>
                                <div class="number"> {{ detailData.name_wuxing_xys_list[0] }}分</div>
                                <div class="manfen">满分60分</div>
                            </div>
                            <div class="zi-box">
                                <div class="zi-show" v-for="(item, index) in detailData.name" :key="index">
                                    <div class="zi">{{ item }}</div>
                                    <div class="type"> [
                                        <span v-if="detailData.lastname.length===1">{{ detailData.name_wuxing[index] }}</span>
                                        <span v-else>
                                            <span v-if="index>=detailData.lastname.length">{{ detailData.name_wuxing[index+1-detailData.lastname.length] }}</span>
                                            <span v-else>{{ detailData.name_wuxing[0][index] }}</span>
                                        </span>
                                        ]</div>
                                </div>
                            </div>
                            <div class="xishen" style="margin-top: 3vw;">
                                <div style="text-align: center;margin-bottom: 2vw;font-size: 4.4vw;font-weight: 700;">
                                    【命主喜用神情况】</div>

                                    <div v-for="(item,index) in detailData.name_wuxing_xys_list[1]" :style="{'margin-top':index===4?'3vw':'0','text-indent': '1em'}" :key="index">
                                        <div v-if="index!==4">
                                            {{item }}{{ index===0?'。':'' }}
                                        </div>
                                        <div v-else >
                                            <span v-for="(item1,ind) in item.split('。')" :key="ind">
                                                <span v-if="ind===0" >{{ item1 }}。 <br/></span>
                                                <span v-else>{{ ind===1?'&nbsp;&nbsp;&nbsp;':'' }} {{item1===''?'':item1+'。'}}</span>
                                            </span>
                                        </div>
                                    </div>

                            </div>
                            <div class="xishen">
                                <div style="text-align: center;margin-bottom: 2vw;font-size: 4.4vw;font-weight: 700;">
                                    【五行喜用使用总评】</div>
                                <div v-for="(items, indexs) in  detailData.name_wuxing_xys_list[2]" :key="indexs">{{ indexs + 1
                                    + '、' + items }}</div>
                            </div>
                            <div class="nav-box" style="margin-bottom: 7vw;">
                                <NavText :name="'字性使用评定'"></NavText>
                            </div>
                            <div class="pingfen-box">
                                <div class="label">字性评分</div>
                                <div class="number"> {{ detailData.zixing_dic.zixing_score }} 分</div>
                                <div class="manfen">满分10分</div>
                            </div>
                            <div class="zi-fen" v-for="(item, index) in  detailData.name_zi_rate" :key="index"
                                style="margin-top: 2vw; align-items: flex-start;">
                                <div class="zi">{{ item.zi }}</div>
                                <div class="zifenxi" style="line-height: 7vw;">
                                    <div class="pingy">全国起名中，该字出现顺序比例：</div>
                                    <div class="pingy">第一字 <div class="jindu">
                                            <div class="is-use" :style="{ 'width': 50 + '%' }">{{
                                                parseInt(Math.round(item.one_zi_rate)) }} %</div>
                                            <div class="is-not-use" :style="{ 'width': 50 + '%' }"> {{ 100 -
                                                parseInt(Math.round(item.one_zi_rate)) }} %</div>
                                        </div> 第二字</div>
                                    <div class="pingy" style="margin-top: 3vw;">全国起名中，该字性别使用比例：</div>
                                    <div class="pingy">
                                        男性
                                        <div class="icon-percent-bg">
                                            <div class="percent-bg">
                                                <img  v-for="num in 10" :key="num" src="@/assets/name/percent/bg.png" alt=""
                                                    class="touxiantu">
                                            </div>
                                            <div class="percent" :style="{ 'width': item.male_rate + '%' }">
                                                <img  v-for="num in 10" :key="num" src="@/assets/name/percent/nan.png" alt=""
                                                    class="touxiantu">
                                            </div>
                                        </div>
                                        {{ parseInt(Math.round(item.male_rate)) }} %
                                    </div>
                                    <div class="pingy">
                                        女性
                                        <div class="icon-percent-bg">
                                            <div class="percent-bg">
                                                <img  v-for="num in 10" :key="num" src="@/assets/name/percent/bg.png" alt=""
                                                    class="touxiantu">
                                            </div>
                                            <div class="percent" :style="{ 'width': item.female_rate + '%' }">
                                                <img  v-for="num in 10" :key="num" src="@/assets/name/percent/nv.png" alt=""
                                                    class="touxiantu">
                                            </div>
                                        </div>
                                        {{ 100 - parseInt(Math.round(item.male_rate)) }} %
                                        <!-- {{ parseInt(Math.round(item.female_rate)) }} % -->
                                    </div>
                                </div>
                            </div>
                            <div class="xishen">
                                <div style="text-align: center;margin-bottom: 2vw;font-size: 4.4vw;font-weight: 700;">
                                    【字性使用总评】</div>
                                <span v-if="detailData.gender === '男'">
                                    <span
                                        v-if="detailData.zixing_dic.physiology === '男性化'">&nbsp;&nbsp;名字偏男性化,用字情况正常。</span>
                                    <span
                                        v-if="detailData.zixing_dic.physiology === '中性化'">&nbsp;&nbsp;名字偏中性化,用字情况正常。</span>
                                    <span
                                        v-if="detailData.zixing_dic.physiology === '女性化'">&nbsp;&nbsp;名字偏女性化,用字情况一般。</span>
                                </span>
                                <span v-else-if="detailData.gender === '女'">
                                    <span
                                        v-if="detailData.zixing_dic.physiology === '男性化'">&nbsp;&nbsp;名字偏男性化,用字情况一般。</span>
                                    <span
                                        v-if="detailData.zixing_dic.physiology === '中性化'">&nbsp;&nbsp;名字偏中性化,用字情况正常。</span>
                                    <span
                                        v-if="detailData.zixing_dic.physiology === '女性化'">&nbsp;&nbsp;名字偏女性化,用字情况一般。</span>
                                </span>
                            </div>

                            <div class="nav-box" style="margin-bottom: 7vw;">
                                <NavText :name="'生肖起名评定'"></NavText>
                            </div>

                            <div class="pingfen-box">
                                <div class="label">生肖起名使用评分</div>
                                <div class="number"> {{ detailData.name_shengxiao_list[0] }} 分</div>
                                <div class="manfen">满分10分</div>
                            </div>
                            <div class="xishen" style="padding-top: 0;text-align: center;">

                                <!-- <div class="nav-box" style="margin-bottom: 7vw;">
                                    <NavText :name="'生肖用字分析'"></NavText>
                                </div> -->
                                {{ detailData.name_shengxiao_list[1] }}
                            </div>
                            <div class="xishen" style="padding-top: 0;">
                                <div style="text-align: center;margin:4vw 0 2vw 0;font-size: 4.4vw;font-weight: 700;">
                                    【生肖用字分析】</div>
                                <div>
                                    <div><b style="font-size: 3.6vw;line-height: 7vw;">建议部首(字根) : </b>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ detailData.name_shengxiao_list[2]
                                        }}
                                    </div>
                                </div>
                                <div>
                                    <div> <b style="font-size: 3.6vw;line-height: 7vw;">不建议部首(字根) :</b>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{
                                            detailData.name_shengxiao_list[3] }}
                                    </div>
                                </div>
                            </div>
                            <div class="xishen" style="padding-top: 0;">
                                <div style="text-align: center;margin:4vw 0 2vw 0;font-size: 4.4vw;font-weight: 700;">
                                    【需要防止犯太岁的年份】</div>
                                <!-- <div class="nav-box" style="margin-bottom: 7vw;">
                                    <NavText :name="'需要防止犯太岁的年份'"></NavText>
                                </div> -->
                                <div v-for="(item, index) in detailData.name_shengxiao_list" :key="index"> <span
                                        v-if="index >= 3">{{ index - 2 + '、' + item }}</span> </div>

                            </div>
                        </div>
                    </template>
                </BoxBg>
            </div>

            <div class="order-info">
                <BoxBg>
                    <template v-slot:exhibition>
                        <TopDecoration :name="'人生格局分析'"></TopDecoration>
                        <div class="name-detail-box">
                            <div class="nav-box">
                                <NavText :name="'人生五维评定'"></NavText>
                            </div>
                            <div class="echarts-main">
                                <div id="echart" class="echart"></div>
                                <div class="labels1">
                                    <div class="name">承受力</div>
                                    <div class="percent">{{ detailData.name_rensheng_analysis.chengshouri }}%</div>
                                </div>
                                <div class="labels2">
                                    <div class="name">思考力</div>
                                    <div class="percent">{{ detailData.name_rensheng_analysis.sikaoli }}%</div>
                                </div>
                                <div class="labels3">
                                    <div class="name">创造力</div>
                                    <div class="percent">{{ detailData.name_rensheng_analysis.chuangzaoli }}%</div>
                                </div>
                                <div class="labels4">
                                    <div class="name">自制力</div>
                                    <div class="percent">{{ detailData.name_rensheng_analysis.zizhili }}%</div>
                                </div>
                                <div class="labels5">
                                    <div class="name">贵人</div>
                                    <div class="percent">{{ detailData.name_rensheng_analysis.guiren }}%</div>
                                </div>
                            </div>
                            <div class="xishen" style="margin-bottom:4vw;">
                                <div class="nav-box">
                                    <NavText :name="'关于人生五维'"></NavText>
                                </div>
                                <!-- <div>【老师评语】</div> -->
                                <div style="margin-top:4vw;">
                                    <span v-for=" (item, index) in detailData.name_rensheng_analysis.ping_desc"
                                        :key="index">
                                        <span v-if="index < 3">&nbsp;&nbsp;&nbsp;&nbsp;{{ item }} <br></span> </span>
                                </div>
                                <!-- <div style="margin-top: 3vw;">【老师评语】</div> -->
                                <div class="nav-box">
                                    <NavText :name="'老师评语'"></NavText>
                                </div>
                                <div style="margin-top: 5vw;">
                                    <span v-for=" (item, index) in detailData.name_rensheng_analysis.ping_desc"
                                        :key="index">
                                        <span v-if="index >= 3">&nbsp;&nbsp;&nbsp;&nbsp;{{ item }} <br></span> </span>
                                </div>
                            </div>
                        </div>
                    </template>
                </BoxBg>
            </div>
            <div class="order-info">
                <BoxBg>
                    <template v-slot:exhibition>
                        <TopDecoration :name="'性格特征分析'"></TopDecoration>
                        <div class="name-detail-box">
                            <div class="nav-box">
                                <NavText :name="'外在特征'"></NavText>
                            </div>

                            <div class="xishen" style="margin-top: 3vw;text-indent: 1em;">
                                {{ detailData.xingge_struct_analysis.desc }}
                                {{ detailData.xingge_struct_analysis.wai }}

                            </div>
                            <div class="nav-box">
                                <NavText :name="'内在性格'"></NavText>
                            </div>

                            <div class="xishen" style="margin: 3vw 0 4vw 0;text-indent: 1em;">
                                {{ detailData.xingge_struct_analysis.nei }}

                            </div>
                        </div>
                    </template>
                </BoxBg>
            </div>
            <div class="order-info">
                <BoxBg>
                    <template v-slot:exhibition>
                        <TopDecoration :name="'健康分析'"></TopDecoration>
                        <div class="name-detail-box">
                            <div id="zhu" class="zhu-photo"></div>
                            <div class="nav-box">
                                <NavText :name="'脏腑分析'"></NavText>
                            </div>
                            <div class="xishen" style="margin: 3vw 0 4vw 0;">
                                <span v-for=" (item, index) in detailData.health_analysis.desc" :key="index">
                                    <span v-if="index <= 1">&nbsp;&nbsp;&nbsp;&nbsp;{{ item }} <br /></span> </span>
                            </div>
                            <div class="nav-box">
                                <NavText :name="'老师寄语'"></NavText>
                            </div>
                            <div class="xishen" style="margin: 3vw 0 4vw 0;">
                                <span v-for=" (item, index) in detailData.health_analysis.desc" :key="index">
                                    <span v-if="index > 1"> &nbsp;&nbsp;&nbsp;&nbsp;{{ item }} <br></span> </span>
                            </div>
                        </div>
                    </template>
                </BoxBg>
            </div>
            <div class="order-info">
                <BoxBg>
                    <template v-slot:exhibition>
                        <TopDecoration :name="'恋爱婚姻分析'"></TopDecoration>
                        <div class="name-detail-box">
                            <div class="mar-top">桃花指数</div>

                            <div class="xing-box">
                                <div class="xing-bg">
                                    <img  v-lazy="require('@/assets/name/percent/xxg.png')" alt="" class="bg">
                                    <img  v-lazy="require('@/assets/name/percent/xxg.png')" alt="" class="bg">
                                    <img  v-lazy="require('@/assets/name/percent/xxg.png')" alt="" class="bg">
                                    <img  v-lazy="require('@/assets/name/percent/xxg.png')" alt="" class="bg">
                                    <img  v-lazy="require('@/assets/name/percent/xxg.png')" alt="" class="bg">
                                </div>
                                <div class="xing"
                                    :style="{ 'width': (Math.ceil(((detailData.love_analysis.zhishu + (detailData.love_analysis.zhishu !== Math.floor(detailData.love_analysis.zhishu) ? 0.5 - detailData.love_analysis.zhishu + Math.floor(detailData.love_analysis.zhishu) : 0) * 0.4) / 5) * 100)) + '%' }">
                                    <img  v-lazy="require('@/assets/name/percent/xx.png')" alt="" class="bg">
                                    <img  v-lazy="require('@/assets/name/percent/xx.png')" alt="" class="bg">
                                    <img  v-lazy="require('@/assets/name/percent/xx.png')" alt="" class="bg">
                                    <img  v-lazy="require('@/assets/name/percent/xx.png')" alt="" class="bg">
                                    <img  v-lazy="require('@/assets/name/percent/xx.png')" alt="" class="bg">
                                </div>

                            </div>
                            <div class="xishen" style="margin: 3vw 0 4vw 0;">
                                <span v-for=" (item, index) in detailData.love_analysis.desc" :key="index">
                                    <span style="font-weight: 700;" v-if="index === 0">总述:</span>
                                    <span style="font-weight: 700;" v-if="index === 1">桃花的状态:</span>
                                    <span style="font-weight: 700;" v-if="index === 3">桃花出现的年龄阶段:</span>
                                    {{ item }} <br></span>

                            </div>
                        </div>

                    </template>
                </BoxBg>
            </div>
            <div class="order-info">
                <BoxBg>
                    <template v-slot:exhibition>
                        <TopDecoration :name="'事业工作分析'"></TopDecoration>
                        <div class="name-detail-box">
                            <div class="nav-box">
                                <NavText :name="'个人特质'"></NavText>
                            </div>
                            <div class="xishen" style="margin: 3vw 0 4vw 0; text-indent: 1em; ">
                                {{ detailData.career_analysis.tezhi }}
                            </div>
                            <div class="nav-box">
                                <NavText :name="'适合的工作'"></NavText>
                            </div>
                            <div class="xishen" style="margin: 3vw 0 4vw 0;">
                                <div style="text-indent: 1em;">{{ detailData.career_analysis.gongzuo_before_des }}</div>
                                <div style="text-indent: 1em;">
                                    <span v-for=" (item, index) in detailData.career_analysis.gongzuo" :key="index">
                                        <span v-if="index === 0">{{ item.replace('；', '。') }}<br></span>
                                        <span v-else> &nbsp;&nbsp;&nbsp;&nbsp;{{ item }}</span>
                                    </span>
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
import NavText from '@/components/name/text_ui/nav_text.vue'
import BoxBg from '@/components/name/box_bg/box_bg.vue'
import TopDecoration from '@/components/name/text_ui/top_decoration.vue'
import * as echarts from 'echarts'
import TopBack from '@/components/name/text_ui/top_back.vue'
import Tips from '@/components/name/tips/tips.vue'
import { mapMutations, mapState } from 'vuex'
import { openService } from '@/uitls/js/name_service'
export default {
  name: 'HomeView',
  components: {
    BoxBg,
    TopDecoration,
    NavText,
    TopBack,
    Tips
  },
  data () {
    return {
      tempShow: true,
      detailData: {
        order_id: '',
        score: 0,
        jy_desc: '',
        name: '',
        gender: '',
        solar_birthday: '',
        lunar_birthday: '',
        sx_hour: '',
        hour: 0,
        calender: '',
        name_pinyin: [],
        name_wuxing: [],
        bazi_paipan: {
          sizhu: [],
          wuxing: [],
          shishen: [],
          qianzao: [],
          zangang: [],
          nayin: []
        },
        zixing_dic: {
          zixing_score: '',
          physiology: ''
        },
        wuxing_analysis: {
          jin: 0,
          mu: 0,
          shui: 0,
          huo: 0,
          tu: 0
        },
        xiyongshen_analysis: {
          xishen: '',
          yongshen: '',
          xianshen: '',
          choushen: '',
          jishen: '',
          xys_desc: ''
        },
        name_analysis: [{
          zi: '',
          zi_pinyin: '',
          zi_wuxing: '',
          zi_yuyi: ''
        }],
        // {} 暂时是空的
        name_tone_list: {},
        name_accent_list: {},
        all_desc: '',
        name_struct_list: [],
        name_wuxing_xys_list: [],
        name_shengxiao_list: [],
        name_struct_dis: {
          bihua_shuxie_fenxi: '',
          zixing_dapei_fenxi: '',
          fone_all_desc: '',
          font_score: 0,
          struct_list: []
        },
        name_rensheng_analysis: {
          guiren: 0,
          chengshouri: 0,
          zizhili: 0,
          chuangzaoli: 0,
          sikaoli: 0,
          ping_desc: ''
        },
        xingge_struct_analysis: {
          wai: '',
          nei: ''
        },
        health_analysis: {
          心: 0,
          肝: 0,
          脾: 0,
          肺: 0,
          肾: 0,
          desc: []
        },
        love_analysis: {
          zhishu: 0,
          desc: []
        },
        career_analysis: {
          tezhi: '',
          gongzuo: ''
        }
      },
      birth: '',
      wuxingPercent: [],
      option: {

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
                color: function (colors) {
                  const colorList = [
                    'rgba(222, 83, 60,.2)',
                    'rgba(242, 147, 1,.2)',
                    'rgba(128, 173, 114,.2)',

                    'rgba(228, 191, 123,.2)',
                    'rgba(85, 123, 186,.2)'

                  ]
                  return colorList[colors.dataIndex]
                }
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
                    '#DE533C',
                    '#F29301',
                    '#80AD72',
                    '#E4BF7B',
                    '#557BBA'
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
      optionsZhu: {
        grid: {
          top: '50px',
          bottom: '20px',
          left: '10px',
          right: '10px'
        },
        xAxis: {
          type: 'category',
          axisTick: {
            show: false
          },
          axisLine: {

            lineStyle: {
              type: 'solid',
              color: 'rgb(173, 138, 105)'
            }
          },
          data: ['心(火)', '肝(木)', '脾(土)', '肺(金)', '肾(水)']
        },

        yAxis: {
          type: 'value',
          show: false
        },

        series: [
          {

            itemStyle: {
              borderRadius: 5,
              borderColor: 'transparent',
              color: 'transparent'
            },
            data: [
              3,
              3,
              3,
              3,
              3
            ],

            type: 'bar',
            stack: 'Total'
          },
          {

            itemStyle: {
              borderRadius: 5,
              borderColor: 'transparent',
              color: function (colors) {
                const colorList = [
                  '#CF4E38',
                  '#557BBA',
                  '#F29301',
                  '#E4BF7B',
                  '#80AD72'
                ]
                return colorList[colors.dataIndex]
              }
            },
            data: [
              20,
              50,
              58,
              67,
              15
            ],
            label: {
              show: true,
              position: 'top'
            },
            type: 'bar',
            stack: 'Total',
            barWidth: 16
          }
        ]
      }
    }
  },
  computed: {
    ...mapState(['orderid'])
  },
  mounted () {
    const myThis = this
    this.getDeatil()
    setTimeout(() => {
      myThis.tempShow = false
    }, 5000)
  },
  methods: {
    ...mapMutations(['setShowTips']),
    openService () {
      openService()
    },
    action () {
      console.log('点击了按钮')
    },
    async getDeatil () {
      this.detailData = JSON.parse(localStorage.getItem('detailResult'))
      this.optionsZhu.series[1].data[0] = this.detailData.health_analysis.心
      this.optionsZhu.series[1].data[1] = this.detailData.health_analysis.肝
      this.optionsZhu.series[1].data[2] = this.detailData.health_analysis.脾
      this.optionsZhu.series[1].data[3] = this.detailData.health_analysis.肺
      this.optionsZhu.series[1].data[4] = this.detailData.health_analysis.肾
      const zhuChart = echarts.init(document.getElementById('zhu'))
      zhuChart.setOption(
        this.optionsZhu
      )
      this.option.series[1].data[0].value = this.detailData.name_rensheng_analysis.chengshouri
      this.option.series[1].data[1].value = this.detailData.name_rensheng_analysis.sikaoli
      this.option.series[1].data[2].value = this.detailData.name_rensheng_analysis.chuangzaoli
      this.option.series[1].data[3].value = this.detailData.name_rensheng_analysis.zizhili
      this.option.series[1].data[4].value = this.detailData.name_rensheng_analysis.guiren
      // echart使用
      const bingChart = echarts.init(document.getElementById('echart'))
      bingChart.setOption(
        this.option
      )
    }
  }
}
</script>
<style lang="less" scoped>
// @font-face {
// font-family: "fzs";
//      src: url('~@/assets/font/FZFengYaSongS-GB.ttf') format('truetype');
// }
.home {
    margin-top: 10vw;
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
        // text-shadow:  1px 1px rgba(0, 0, 0, 0.5);
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
        background-color: #D8C38C;

        .top-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            z-index: -1;
        }

        .transprent {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -2;
            background-image: url(@/assets/name/bg/bottom_xu.png);
            background-size: cover;
            opacity: .4;
        }

        .jianbian {
            position: absolute;
            top: 190vw;
            left: 0;
            width: 100%;
            height: calc(100% - 190vw);
            background-image: linear-gradient(to bottom, rgba(212, 195, 153, .2), rgba(212, 195, 153, 1));
            z-index: -1;
        }

        .top-tops {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            background-color: rgba(0, 0, 0, .4);
            color: #d0d0d0;
            text-align: center;
            font-size: 3.6vw;
            font-weight: 100;
            line-height: 8vw;
        }

        .order-info {
            display: flex;
            justify-content: center;
            margin-top: 14vw;

            .play-box {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin: 2vw auto;
                width: 60vw;
                height: 36vw;
                background-size: contain;
                background-image: url('@/assets/name/bg/huajuan.png');

                .preferential {
                    font-size: 4.6vw;
                    margin-top: -3vw;
                }

                .play-number {
                    color: #F13E2D;
                    font-size: 8vw;
                    font-weight: 700;
                }
            }

            .recommendation {
                border-top: 1px solid rgba(227, 150, 81, .3);
                width: 80vw;
                margin: 0 auto;
                text-align: start;
                padding: 3vw 1vw;
            }

            .info-box {
                text-align: start;
                padding: 4vw;
                line-height: 5.6vw;

                .date {
                    display: flex;

                }
            }

            .name-detail-box {
                padding: 3vw;

                .zi-box {
                    display: flex;
                    justify-content: space-around;
                    flex-wrap: wrap;
                    margin: 0 auto;
                    width: 75vw;

                    .zi-show {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: center;
                        margin-top: 4vw;

                        .type {
                            color: #F13E2D;
                        }

                        .txtjx {
                            font-size: 4.2vw;
                            font-weight: 700;
                            line-height: 5vw;
                        }

                        .zi {
                            background-image: url('@/assets/name/name/xzk.png');
                            background-size: contain;
                            width: 17vw;
                            height: 17vw;
                            margin: 0 2vw;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            font-size: 13vw;
                            margin-bottom: 2vw;
                            // font-family: 'fzs';
                        }
                    }
                }

                .nav-box {
                    display: flex;
                    justify-content: center;
                    margin-top: 4vw;
                }

                .pan-box {
                    border-radius: 1.2vw;
                    border: 2px solid #AD8A69;
                    overflow: hidden;
                    line-height: 8vw;
                    margin-top: 6vw;

                    .title-row {
                        display: flex;
                        border-radius: 2px;
                        background-color: #C84141;
                        border-top-left-radius: 2px;
                        border-top-right-radius: 2px;
                        color: #fff;
                        justify-content: center;

                        .title-item {
                            width: 20%;
                        }
                    }

                    .nav-list {
                        .nav-row {
                            display: flex;
                            border-radius: 2px;
                            background-color: #fff;
                            border-top-left-radius: 2px;
                            border-top-right-radius: 2px;
                            border-top: 1px solid #D9D1C6;

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

                .wu-types-box {
                    margin-top: 6vw;

                    .wu-one {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin: 2.5vw 0;

                        .type-elements {
                            width: 7vw;
                            height: 7vw;
                        }

                        .type-boxs {
                            border: 1px solid #fff;
                            box-shadow: 0 0 1px 1px #AD8A69;
                            width: 66vw;
                            margin-left: 2vw;
                            border-radius: 6vw;
                            height: 4vw;
                            position: relative;

                            .type-son {
                                border-radius: 6vw;
                                height: 100%;
                            }

                            .type-zi {
                                position: absolute;
                                top: 50%;
                                width: 6vw;
                                height: 6vw;
                                color: #fff;
                                border-radius: 6vw;
                                border: 1px solid #fff;
                                font-size: 3.6vw;
                                font-weight: 100;
                                transform: translate(-50%, -50%);

                                .type-number {
                                    position: absolute;
                                    top: -5vw;
                                    left: 3vw;
                                    color: #000;
                                }
                            }
                        }

                    }
                }

                .xishen {
                    text-align: start;
                    padding: 3vw 1vw 0 1vw;
                }

                .zi-fen {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 4vw;

                    .zi {
                        background-image: url('@/assets/name/name/xzk.png');
                        background-size: contain;
                        width: 16vw;
                        height: 16vw;
                        margin: 0 2vw;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 13vw;
                        // font-family: 'fzs';
                    }

                    .zifenxi {
                        text-align: start;
                        width: 60vw;

                    }

                    .pingy {
                        font-size: 3.8vw;
                        display: flex;
                        align-items: center;

                        .jindu {
                            margin: 0 1vw;
                            display: flex;
                            align-items: center;
                            height: 4vw;
                            line-height: 4vw;
                            width: 34vw;
                            color: #fff;

                            .is-use {
                                background-color: rgb(232, 75, 25);
                                text-align: center;
                            }

                            .is-not-use {
                                background-color: rgb(242, 195, 14);
                                text-align: center;
                            }
                        }

                        .icon-percent-bg {
                            position: relative;
                            display: flex;
                            margin: 0 1vw;

                            .percent-bg {
                                display: flex;
                                align-items: center;
                            }

                            .percent {
                                position: absolute;
                                top: 0;
                                left: 0;
                                display: flex;
                                overflow: hidden;
                            }

                            .touxiantu {
                                width: 3.4vw;
                                margin: 0 .4vw;
                            }
                        }
                    }

                    .fenxi {
                        text-align: start;
                        width: 54vw;
                    }
                }

                .pingfen-box {
                    line-height: 7vw;

                    .label {
                        font-size: 4.6vw;

                    }

                    .number {
                        font-size: 6vw;
                        font-weight: 700;
                        color: rgb(241, 62, 45);
                    }

                    .manfen {
                        font-size: 3.6vw;
                        color: rgb(168, 154, 128);
                    }
                }

                .echarts-main {
                    width: 80vw;
                    height: 64vw;
                    display: flex;
                    justify-content: center;
                    margin-top: 10vw;
                    position: relative;

                    .echart {
                        width: 50vw;
                        height: 50vw;
                        position: relative;
                    }

                    .labels1 {
                        position: absolute;
                        top: -1vw;
                        right: 4vw;
                        overflow: hidden;
                        border-radius: 1.2vw;

                        .name {
                            background-color: #DE533C;
                            color: #fff;
                            padding: 0 1vw;
                        }

                        .percent {
                            background-color: #fff;

                        }
                    }

                    .labels2 {
                        position: absolute;
                        top: 30vw;
                        right: 0vw;
                        overflow: hidden;
                        border-radius: 1.2vw;

                        .name {
                            background-color: #F29301;
                            color: #fff;
                            padding: 0 1vw;
                        }

                        .percent {
                            background-color: #fff;

                        }
                    }

                    .labels3 {
                        position: absolute;
                        top: 52vw;
                        left: 34vw;
                        overflow: hidden;
                        border-radius: 1.2vw;

                        .name {
                            background-color: #80AD72;
                            color: #fff;
                            padding: 0 1vw;
                        }

                        .percent {
                            background-color: #fff;

                        }
                    }

                    .labels4 {
                        position: absolute;
                        top: 30vw;
                        left: 0vw;
                        overflow: hidden;
                        border-radius: 1.2vw;

                        .name {
                            background-color: #E4BF7B;
                            color: #fff;
                            padding: 0 1vw;
                        }

                        .percent {
                            background-color: #fff;

                        }
                    }

                    .labels5 {
                        position: absolute;
                        top: -1vw;
                        left: 4vw;
                        overflow: hidden;
                        border-radius: 1.2vw;

                        .name {
                            background-color: #50729A;
                            color: #fff;
                            padding: 0 1vw;
                        }

                        .percent {
                            background-color: #fff;

                        }
                    }

                }

                .zhu-photo {
                    width: 76vw;
                    height: 60vw;
                    margin: 0 auto;
                }

                .mar-top {
                    margin-top: 5vw;
                }

                .xing-box {
                    width: 32vw;
                    // background-color: red;
                    overflow: hidden;
                    margin: 0 auto;
                    position: relative;
                    margin-top: 2vw;

                    .xing-bg {
                        display: flex;
                    }

                    .bg {
                        margin: 0 1vw;
                        width: 4.4vw;
                        height: 4.4vw;
                    }

                    .xing {
                        position: absolute;
                        top: 0;
                        left: 0;
                        display: flex;
                        overflow: hidden;
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
                background-color: #EEE2CA;
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
