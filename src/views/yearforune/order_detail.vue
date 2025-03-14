<template>
  <div class="yearforune_warp">
    <div class="yearforune_top_introduction"></div>

    <div class="yearforune_history_list" style="margin-top:-104rem">
      <!-- 背景结构 -->
      <div class="yearforune_history_top"></div>
      <div class="yearforune_history_center">
        <div class="yearforune_detail_row">
          <div class="yearforune_detail_label">姓名：</div>
          <div class="yearforune_detail_text">
            <div class="yearforune_detail_name">张三</div>
          </div>
        </div>
        <div class="yearforune_detail_row">
          <div class="yearforune_detail_label">性别：</div>
          <div class="yearforune_detail_text">
            <div class="yearforune_detail_name">男</div>
          </div>
        </div>
        <div class="yearforune_detail_row">
          <div class="yearforune_detail_label">生日：</div>
          <div class="yearforune_detail_text">
            <div class="yearforune_detail_name">公(阳)厉 1990年16月15日 未知</div>
            <div class="yearforune_detail_name">农(阴)历 1990年五月三十 未知</div>
          </div>
        </div>

        <div class="pan-box">
          <div class="title-row">
            <div class="title-item">四柱</div>
            <div class="title-item">年柱</div>
            <div class="title-item">月柱</div>
            <div class="title-item">日柱</div>
            <div class="title-item">时柱</div>
          </div>
          <div class="nav-list">
            <div class="nav-row">
              <div class="nav-item">天干</div>
              <div class="nav-item">卯</div>
              <div class="nav-item">卯</div>
              <div class="nav-item">卯</div>
              <div class="nav-item">卯</div>
            </div>
            <div class="nav-row">
              <div class="nav-item">地支</div>
              <div class="nav-item">卯</div>
              <div class="nav-item">卯</div>
              <div class="nav-item">卯</div>
              <div class="nav-item">卯</div>

            </div>
          </div>
        </div>
      </div>
      <div class="yearforune_history_bottom"></div>
      <!-- 订单展示 -->
    </div>
    <!-- 五行 -->
    <div class="yearforune_history_list">
      <div class="yearforune_history_top yearforune_history_top1"></div>
      <div class="yearforune_history_center">
        <div class="yearforune_wuxing_row">
          <div class="yearforune_wuxing_item">
            <img src="@/assets/yearforune/detail_shui.png" alt="" class="yearforune_wuxing_img">
            <div class="yearforune_wuxing_text">中和</div>
          </div>
          <div class="yearforune_wuxing_item">
            <img src="@/assets/yearforune/detail_tu.png" alt="" class="yearforune_wuxing_img">
            <div class="yearforune_wuxing_text">中和</div>
          </div>
          <div class="yearforune_wuxing_item">
            <img src="@/assets/yearforune/detail_mu.png" alt="" class="yearforune_wuxing_img">
            <div class="yearforune_wuxing_text">中和</div>
          </div>
          <div class="yearforune_wuxing_item">
            <img src="@/assets/yearforune/detail_huo.png" alt="" class="yearforune_wuxing_img">
            <div class="yearforune_wuxing_text">中和</div>
          </div>
          <div class="yearforune_wuxing_item">
            <img src="@/assets/yearforune/detail_jin.png" alt="" class="yearforune_wuxing_img">
            <div class="yearforune_wuxing_text">中和</div>
          </div>
        </div>
        <div class="yearforune_wuxing_prents_box">

          <div class="yearforune_wuxing_prents">
            <div class="yearforune_wuxing_type" style="color:#F4CB77;margin-top:0rem;">金</div>
            <div class="yearforune_wuxing_tiao">
              <div class="yearforune_wuxing_tiao_son" :style="{ background: '#F4CB77', width: '60%' }"></div>
            </div>
            <div class="yearforune_wuxing_number">3个</div>
            <div class="yearforune_wuxing_introdution">比劫</div>
          </div>
          <div class="yearforune_wuxing_prents">
            <div class="yearforune_wuxing_type" style="color:#53BF74;">木</div>
            <div class="yearforune_wuxing_tiao">
              <div class="yearforune_wuxing_tiao_son" :style="{ background: '#53BF74', width: '60%' }"></div>
            </div>
            <div class="yearforune_wuxing_number">3个</div>
            <div class="yearforune_wuxing_introdution">比劫</div>
          </div>
          <div class="yearforune_wuxing_prents">
            <div class="yearforune_wuxing_type" style="color:#60ACDD;">水</div>
            <div class="yearforune_wuxing_tiao">
              <div class="yearforune_wuxing_tiao_son" :style="{ background: '#60ACDD', width: '60%' }"></div>
            </div>
            <div class="yearforune_wuxing_number">3个</div>
            <div class="yearforune_wuxing_introdution">比劫</div>
          </div>
          <div class="yearforune_wuxing_prents">
            <div class="yearforune_wuxing_type" style="color:#DA6D5F;">火</div>
            <div class="yearforune_wuxing_tiao">
              <div class="yearforune_wuxing_tiao_son" :style="{ background: '#DA6D5F', width: '60%' }"></div>
            </div>
            <div class="yearforune_wuxing_number">3个</div>
            <div class="yearforune_wuxing_introdution">比劫</div>
          </div>
          <div class="yearforune_wuxing_prents">
            <div class="yearforune_wuxing_type" style="color:#EC9651;">土</div>
            <div class="yearforune_wuxing_tiao">
              <div class="yearforune_wuxing_tiao_son" :style="{ background: '#EC9651', width: '60%' }"></div>
            </div>
            <div class="yearforune_wuxing_number">3个</div>
            <div class="yearforune_wuxing_introdution">比劫</div>
          </div>
        </div>

        <div class="yearforune_wuxing_shen">
          <div class="yearforune_wuxing_shen_item">
            喜用神：金
          </div>
          <div class="yearforune_wuxing_shen_item">
            用神为：土
          </div>
          <div class="yearforune_wuxing_shen_item">
            忌神为：水
          </div>
        </div>
        <div class="yearforune_wuxing_introduction">
          喜神、忌神、用神都很厉害，具体怎么厉害，我也不知道，但是就是很厉害，厉害的不要不要的。一旦被神盯上，想跑都跑不了。太可怕了！
        </div>
        <div class="yearforune_wuxing_years">
          <div class="yearforune_wuxing_year_row">
            <div class="yearforune_wuxing_year_title">流年：</div>
            <div class="yearforune_wuxing_year_number">2025、2028、2031</div>
          </div>
          <div class="yearforune_wuxing_year_introduction">流年不利啊，要花点银子破解一下啊！</div>
        </div>
        <div class="yearforune_wuxing_years">
          <div class="yearforune_wuxing_year_row">
            <div class="yearforune_wuxing_year_title">大运：</div>
            <div class="yearforune_wuxing_year_number">2026、2027、2029、2030、2032、2033</div>
          </div>
          <div class="yearforune_wuxing_year_introduction">大运将来啊，要花点银子巩固一下啊</div>

        </div>
        <div class="yearforune_weixin_btn" @click="openService">
          <img src="@/assets/yearforune/detail_weixin.png" alt="" class="yearforune_weixin_img">
          <div class="yearforune_weixin_text">联系老师解惑</div>
        </div>
        <div class="yearforune_weixin_bottom">这一段看不懂么？点击这里，找老师解惑</div>
      </div>
      <div class="yearforune_history_bottom"></div>
    </div>

    <!-- 八字运势 -->
    <div class="yearforune_history_list">
      <div class="yearforune_history_top yearforune_history_top2"></div>
      <div class="yearforune_history_center">
        <div class="yearforune_wuxing_introduction">
          待接口
        </div>
        <div class="yearforune_weixin_btn" @click="openService">
          <img src="@/assets/yearforune/detail_weixin.png" alt="" class="yearforune_weixin_img">
          <div class="yearforune_weixin_text">联系老师解惑</div>
        </div>
        <div class="yearforune_weixin_bottom">这一段看不懂么？点击这里，找老师解惑</div>
      </div>
      <div class="yearforune_history_bottom"></div>
    </div>

    <!-- 2025事业运势 -->
    <div class="yearforune_history_list">
      <div class="yearforune_history_top yearforune_history_top3"></div>
      <div class="yearforune_history_center">

        <div class="yearforune_wuxing_introduction">
          待接口
        </div>
        <div class="yearforune_weixin_btn" @click="openService">
          <img src="@/assets/yearforune/detail_weixin.png" alt="" class="yearforune_weixin_img">
          <div class="yearforune_weixin_text">联系老师解惑</div>
        </div>
        <div class="yearforune_weixin_bottom">这一段看不懂么？点击这里，找老师解惑</div>
      </div>
      <div class="yearforune_history_bottom"></div>
    </div>

    <!-- 2025情感运势 -->
    <div class="yearforune_history_list">
      <div class="yearforune_history_top yearforune_history_top4"></div>
      <div class="yearforune_history_center">

        <div class="yearforune_wuxing_introduction">
          待接口
        </div>
        <div class="yearforune_weixin_btn" @click="openService">
          <img src="@/assets/yearforune/detail_weixin.png" alt="" class="yearforune_weixin_img">
          <div class="yearforune_weixin_text">联系老师解惑</div>
        </div>
        <div class="yearforune_weixin_bottom">这一段看不懂么？点击这里，找老师解惑</div>
      </div>
      <div class="yearforune_history_bottom"></div>
    </div>

    <!-- 2025婚姻运势 -->
    <div class="yearforune_history_list">
      <div class="yearforune_history_top yearforune_history_top5"></div>
      <div class="yearforune_history_center">

        <div class="yearforune_wuxing_introduction">
          待接口
        </div>
        <div class="yearforune_weixin_btn" @click="openService">
          <img src="@/assets/yearforune/detail_weixin.png" alt="" class="yearforune_weixin_img">
          <div class="yearforune_weixin_text">联系老师解惑</div>
        </div>
        <div class="yearforune_weixin_bottom">这一段看不懂么？点击这里，找老师解惑</div>
      </div>
      <div class="yearforune_history_bottom"></div>
    </div>
    <!-- 2025健康运势 -->
    <div class="yearforune_history_list">
      <div class="yearforune_history_top yearforune_history_top6"></div>
      <div class="yearforune_history_center">

        <div class="yearforune_wuxing_introduction">
          待接口
        </div>
        <div class="yearforune_weixin_btn" @click="openService">
          <img src="@/assets/yearforune/detail_weixin.png" alt="" class="yearforune_weixin_img">
          <div class="yearforune_weixin_text">联系老师解惑</div>
        </div>
        <div class="yearforune_weixin_bottom">这一段看不懂么？点击这里，找老师解惑</div>
      </div>
      <div class="yearforune_history_bottom"></div>
    </div>
    <!-- 八字单月运势 -->
    <div class="yearforune_history_list">
      <div class="yearforune_history_top yearforune_history_top7"></div>
      <div class="yearforune_history_center">

        <div class="yearforune_wuxing_introduction">
          待接口
        </div>
        <div class="yearforune_weixin_btn" @click="openService">
          <img src="@/assets/yearforune/detail_weixin.png" alt="" class="yearforune_weixin_img">
          <div class="yearforune_weixin_text">联系老师解惑</div>
        </div>
        <div class="yearforune_weixin_bottom">这一段看不懂么？点击这里，找老师解惑</div>
      </div>
      <div class="yearforune_history_bottom"></div>
    </div>
    <!-- 2025生肖整体运势 -->
    <div class="yearforune_history_list">
      <div class="yearforune_history_top yearforune_history_top8"></div>
      <div class="yearforune_history_center">

        <div class="yearforune_wuxing_introduction">
          待接口
        </div>
        <div class="yearforune_weixin_btn" @click="openService">
          <img src="@/assets/yearforune/detail_weixin.png" alt="" class="yearforune_weixin_img">
          <div class="yearforune_weixin_text">联系老师解惑</div>
        </div>
        <div class="yearforune_weixin_bottom">这一段看不懂么？点击这里，找老师解惑</div>
      </div>
      <div class="yearforune_history_bottom"></div>
    </div>
    <!-- 2025生肖财富运势 -->
    <div class="yearforune_history_list">
      <div class="yearforune_history_top yearforune_history_top9"></div>
      <div class="yearforune_history_center">

        <div class="yearforune_wuxing_introduction">
          待接口
        </div>
        <div class="yearforune_weixin_btn" @click="openService">
          <img src="@/assets/yearforune/detail_weixin.png" alt="" class="yearforune_weixin_img">
          <div class="yearforune_weixin_text">联系老师解惑</div>
        </div>
        <div class="yearforune_weixin_bottom">这一段看不懂么？点击这里，找老师解惑</div>
      </div>
      <div class="yearforune_history_bottom"></div>
    </div>
    <!-- 2025生肖事业运势 -->
    <div class="yearforune_history_list">
      <div class="yearforune_history_top yearforune_history_top10"></div>
      <div class="yearforune_history_center">

        <div class="yearforune_wuxing_introduction">
          待接口
        </div>
        <div class="yearforune_weixin_btn" @click="openService">
          <img src="@/assets/yearforune/detail_weixin.png" alt="" class="yearforune_weixin_img">
          <div class="yearforune_weixin_text">联系老师解惑</div>
        </div>
        <div class="yearforune_weixin_bottom">这一段看不懂么？点击这里，找老师解惑</div>
      </div>
      <div class="yearforune_history_bottom"></div>
    </div>
    <!-- 2025生肖情感运势 -->
    <div class="yearforune_history_list">
      <div class="yearforune_history_top yearforune_history_top11"></div>
      <div class="yearforune_history_center">

        <div class="yearforune_wuxing_introduction">
          待接口
        </div>
        <div class="yearforune_weixin_btn" @click="openService">
          <img src="@/assets/yearforune/detail_weixin.png" alt="" class="yearforune_weixin_img">
          <div class="yearforune_weixin_text">联系老师解惑</div>
        </div>
        <div class="yearforune_weixin_bottom">这一段看不懂么？点击这里，找老师解惑</div>
      </div>
      <div class="yearforune_history_bottom"></div>
    </div>
    <!-- 2025生肖健康运势 -->
    <div class="yearforune_history_list">
      <div class="yearforune_history_top yearforune_history_top12"></div>
      <div class="yearforune_history_center">

        <div class="yearforune_wuxing_introduction">
          待接口
        </div>
        <div class="yearforune_weixin_btn" @click="openService">
          <img src="@/assets/yearforune/detail_weixin.png" alt="" class="yearforune_weixin_img">
          <div class="yearforune_weixin_text">联系老师解惑</div>
        </div>
        <div class="yearforune_weixin_bottom">这一段看不懂么？点击这里，找老师解惑</div>
      </div>
      <div class="yearforune_history_bottom"></div>
    </div>
    <!-- 2025生肖单月运势 -->
    <div class="yearforune_history_list">
      <div class="yearforune_history_top yearforune_history_top13"></div>
      <div class="yearforune_history_center">

        <div class="yearforune_wuxing_introduction">
          待接口
        </div>
        <div class="yearforune_weixin_btn" @click="openService">
          <img src="@/assets/yearforune/detail_weixin.png" alt="" class="yearforune_weixin_img">
          <div class="yearforune_weixin_text">联系老师解惑</div>
        </div>
        <div class="yearforune_weixin_bottom">这一段看不懂么？点击这里，找老师解惑</div>
      </div>
      <div class="yearforune_history_bottom"></div>
    </div>
    <!-- 九宫方位 -->
    <div class="yearforune_history_list">
      <div class="yearforune_history_top yearforune_history_top14"></div>
      <div class="yearforune_history_center">

        <div class="yearforune_jiugong"></div>
        <div class="yearforune_jiugong_item" v-for="item in 3" :key="item">
          <div class="yearforune_jiugong_label">
            桃花：一白
          </div>
          <div class="yearforune_wuxing_introduction">
            待接口
          </div>
        </div>
        <div class="yearforune_weixin_btn" @click="openService">
          <img src="@/assets/yearforune/detail_weixin.png" alt="" class="yearforune_weixin_img">
          <div class="yearforune_weixin_text">联系老师解惑</div>
        </div>
        <div class="yearforune_weixin_bottom">这一段看不懂么？点击这里，找老师解惑</div>
      </div>
      <div class="yearforune_history_bottom"></div>
    </div>
  </div>
</template>
<script>

import { openService } from '@/uitls/js/name_service'

export default {
  data () {
    return {
      orderList: []
    }
  },
  methods: {
    openService () {
      openService()
    },
    toCheckHistory () {
      // this.$router
      console.log(this.$router, 'this.$router')
      this.$router.push('check_history')
    }
  }
}
</script>

<style lang="less" scoped>
.yearforune_warp {
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: rgb(228, 90, 43);
  padding-bottom: 400rem;
  .yearforune_top_introduction {
    width: 100vw;
    height: 416rem;
    background-image: url("@/assets/yearforune/detail_top.png");
    background-size: 100% 100%;
    z-index: 0;
  }

  .yearforune_history_list {
    width: 701rem;
    margin: 32rem auto 0 auto;
    .yearforune_history_top {
      width: 701rem;
      height: 104rem;
      background-image: url("@/assets/yearforune/detail_your.png");
      background-size: 100% 100%;
      z-index: 2;
    }
    .yearforune_history_top1 {
      background-image: url("@/assets/yearforune/detail_wu.png");
    }
    .yearforune_history_top2 {
      background-image: url("@/assets/yearforune/detail_bazi.png");
    }
    .yearforune_history_top3 {
      background-image: url("@/assets/yearforune/sy_20251.png");
    }
      .yearforune_history_top4 {
        background-image: url("@/assets/yearforune/qg_20252.png");
      }
      .yearforune_history_top5 {
        background-image: url("@/assets/yearforune/hy_20253.png");
      }
      .yearforune_history_top6 {
        background-image: url("@/assets/yearforune/jk_20254.png");
      }
.yearforune_history_top7 {
  background-image: url("@/assets/yearforune/bzdy_20255.png");
}
.yearforune_history_top8 {
  background-image: url("@/assets/yearforune/sxzt_20256.png");
}
.yearforune_history_top9 {
  background-image: url("@/assets/yearforune/sxcf_20257.png");
}
.yearforune_history_top10 {
  background-image: url("@/assets/yearforune/sxsy_20258.png");
}
.yearforune_history_top11 {
  background-image: url("@/assets/yearforune/sxqg_20259.png");
}
.yearforune_history_top12 {
  background-image: url("@/assets/yearforune/sxjk_202510.png");
}
.yearforune_history_top13 {
  background-image: url("@/assets/yearforune/sxdy_202511.png");
}
.yearforune_history_top14 {
  background-image: url("@/assets/yearforune/jg_202512.png");
}
    .yearforune_history_center {
      width: 701rem;
      background-image: url("@/assets/yearforune/history_2.png");
      background-size: 100% 100%;
      margin-top: -1px;
      z-index: 1;
      padding: 32rem 30rem 0 30rem;
      box-sizing: border-box;

      .yearforune_detail_row{
        display: flex;
        font-size: 32rem;
        margin-bottom: 12rem;
        line-height: 48rem;
        .yearforune_detail_label{
          width: 96rem;
          height: 48rem;
          font-weight: bold;
        }
        .yearforune_detail_text{
          .yearforune_detail_name{
            height: 48rem;
          }
        }
      }

      .pan-box {
          overflow: hidden;
          margin: 20rem auto 0 auto;
          padding-bottom: 10rem;
          font-size: 28rem;
          width: 610rem;
          .title-row {
            display: flex;
            border-radius: 2px;
            background-color: #E45A2B;
            border-top-left-radius: 2px;
            border-top-right-radius: 2px;
            color: #fff;
            justify-content: center;
            align-items: center;
            height: 56rem;
            .title-item {
              text-align: center;
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
              align-items: center;
              height: 56rem;
              .nav-item {
                text-align: center;
                width: 20%;
              }
            }

            // .zi-jiexi {
            //   background-color: #FAF5EC;
            //   width: 25%;
            //   font-weight: 700;
            //   border-right: 1px solid #DDD6CD;
            //   border-bottom: 1px solid #DDD6CD;
            // }

            // .zi-du {
            //   flex: 1;
            //   border-bottom: 1px solid #DDD6CD;
            // }

            // .zi-details {
            //   text-align: start;
            //   width: 75%;
            //   padding: 1vw 3vw;
            //   line-height: 5vw;
            //   box-sizing: border-box;
            // }
          }
      }

      .yearforune_wuxing_row{
        display: flex;
        justify-content: space-between;
        .yearforune_wuxing_item{
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          .yearforune_wuxing_img{
            width: 60rem;
            height: 60rem;
            margin-bottom: 8rem;
          }
          .yearforune_wuxing_text{
            // text-align: center;
            height: 40rem;
            line-height: 40rem;
            font-size: 28rem;
            color: #666666;
          }
        }
      }

      .yearforune_wuxing_prents_box{
        height: 272rem;
        width: 100%;
        margin-top: 48rem;
        .yearforune_wuxing_prents{
          height: 48rem;
          margin-top:8rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32rem;
          line-height: 48rem;
          .yearforune_wuxing_type{
            width: 56rem;
            text-align: left;
          }
          .yearforune_wuxing_tiao{
            width: 436rem;
            height: 12rem;
            border-radius: 6rem;
            background-color: #fff;
            position: relative;
            overflow: hidden;
            .yearforune_wuxing_tiao_son{
              position: absolute;
              top: 0;
              left: 0;
              height: 12rem;
              border-radius: 6rem;
            }
          }
          .yearforune_wuxing_number{
            width: 80rem;
            text-align: center;
          }
          .yearforune_wuxing_introdution{
            flex: 1;
          }
        }

      }

      .yearforune_wuxing_shen{
          margin-top:48rem;
          display: flex;
          justify-content: start;
          flex-wrap: wrap;
          margin-left: -16rem;
          margin-bottom: 20rem;
          .yearforune_wuxing_shen_item{
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1rem solid rgb(215, 75, 41);
            width: 204rem;
            height: 76rem;
            border-radius: 8rem;
            background-color: rgb(255, 245, 245);
            font-size: 32rem;
            font-weight: 700;
            color: #E45A2B;
            margin-left: 15rem;
            box-sizing: border-box;
          }
      }
      .yearforune_wuxing_years{
        padding: 23rem 0;
        border-bottom: 2rem solid #E9D2C0;
          .yearforune_wuxing_year_row{
              display: flex;
              font-size: 32rem;
              margin-bottom: 12rem;
              line-height: 48rem;
            .yearforune_wuxing_year_title{
              width: 96rem;
              height: 48rem;
              font-weight: bold;
            }
            .yearforune_wuxing_year_number{
              font-weight: 700;
            }
          }
      }
      .yearforune_weixin_btn{
        width: 350rem;
        height: 90rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #31BF5C;
        border-radius: 45rem;
        margin: 48rem auto 16rem auto;
        .yearforune_weixin_img{
          width: 54rem;
          height: 54rem;
          margin-right: 15rem;
        }
        .yearforune_weixin_text{
          color: #fff;
          font-weight: 700;
          font-size: 32rem;
        }
      }
      .yearforune_weixin_bottom{
        text-align: center;
        height: 40rem;
        line-height: 40rem;
        font-size: 28rem;
        color: #999999;
      }
      .yearforune_jiugong{
        width: 594rem;
        height: 594rem;
        background-image: url('@/assets/yearforune/jg_fang.png');
        background-size: 100% 100%;
        margin: 0 auto;
      }
      .yearforune_jiugong_label{
        width: 536rem;
        height: 98rem;
        margin:52rem auto 24rem auto;
        font-size: 32rem;
        font-weight: 700;
        color: #E45A2B;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url('@/assets/yearforune/jg_label.png');
        background-size: 100% 100%;
      }
      .yearforune_wuxing_introduction{
        font-size: 32rem;
        color: #333;
        padding-bottom: 24rem;
        border-bottom: 2rem solid #E9D2C0;
      }

    }
    .yearforune_history_bottom {
      width: 701rem;
      height: 48rem;
      background-image: url("@/assets/yearforune/history_3.png");
      background-size: 100% 100%;
      margin-top: -1px;
      z-index: 2;
    }
  }
}
</style>
