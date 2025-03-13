<template>
  <div class="tbg">
    <div class="transprent"></div>
    <div class="jianbian"></div>
    <div>
      <TopYear :year="'2023婚姻全指南'"></TopYear>
    </div>
  </div>
</template>
<script>
import TopYear from '@/components/love/text_ui/top_year.vue'
export default {
  components: {
    TopYear
  }
}
</script>

<style lang="less" scoped>
.tbg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: -1;
  width: 100vw;
  background-image: url('@/assets/love/bg/btg.png');
  background-size: 100%;
  height: 164vw;

  .top-bg {
    position: absolute;
    top: -7.2vw;
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

  .text-name {
    padding-top: 7vw;
    height: 28vw;
  }

  .piaodai {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: -1;

    .piaodai-img {
      width: 100vw;
      position: absolute;
      top: 0;
      left: 0;
    }

    .px {
      width: 42vw;
      height: 12vw;
      position: absolute;
      right: -6vw;
      top: 2vw;
      transform: rotate(1deg);
    }
  }

  .banner-arear {
    position: absolute;
    top: 0;
    left: 0;
    height: 60vw;
    width: 100%;

    .left-xin-top {
      position: absolute;
      top: 3vw;
      left: 1vw;
      height: 11vw;
      width: 13vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      transform: rotate(-40deg);
      line-height: 3.8vw;
      font-size: 3.2vw;
      font-weight: 500;

      div {
        margin: 0 auto;
      }
    }

    .right-xin-top {
      position: absolute;
      top: 12vw;
      right: 2vw;
      height: 18vw;
      width: 18vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      transform: rotate(30deg);
      line-height: 3.8vw;
      font-size: 3.6vw;
      font-weight: 500;

      // background-color: #fff;
      div {
        margin: 0 auto;
      }
    }

    .left-xin-bottom {
      position: absolute;
      top: 38vw;
      left: 8vw;
      height: 18vw;
      width: 18vw;

      line-height: 3.8vw;
      font-size: 3.6vw;
      font-weight: 500;
      background-image: url('@/assets/love/bg/z.png');
      background-size: cover;

      .rotated {
        transform: rotate(-45deg);
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        padding-top: 2vw;

        div {
          width: 100%;
          text-align: center;
          padding-left: 2vw;
        }
      }

    }

    .right-xin-bottom {
      position: absolute;
      top: 40vw;
      right: 10vw;
      height: 18vw;
      width: 18vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;

      line-height: 3.8vw;
      font-size: 3.6vw;
      font-weight: 500;
      background-image: url('@/assets/love/bg/y.png');
      background-size: cover;

      .rotated {
        transform: rotate(45deg);
        width: 100%;

        div {
          width: 100%;
          text-align: center;
          padding-left: 2vw;
        }
      }

    }

    .img-barth {
      width: 58%;
      position: absolute;
      top: 17vw;
      left: 50%;
      transform: translate(-50%, 0);
    }

    .double-quan {
      position: absolute;
      top: 34vw;
      left: 50%;
      transform: translate(-50%, 0);
      display: flex;
      width: 40vw;
      justify-content: space-around;
      line-height: 7vw;

      .left-quan {
        position: absolute;
        top: 0;
        left: 0;
        width: 94%;
        height: 7vw;
        border: 1px solid rgba(248, 220, 226, 1);
        border-radius: 10vw;
      }

      .right-quan {
        position: absolute;
        top: 0;
        right: 0;
        width: 94%;
        height: 7vw;
        border: 1px solid rgba(248, 220, 226, 1);
        border-radius: 10vw;
      }
    }

    .spouse {
      position: absolute;
      top: 46vw;
      left: 50%;
      transform: translate(-50%, 0);
      width: 30%;
      height: 30vw;
      background-image: url('@/assets/love/bg/jh.png');
      background-size: 100%;
      background-repeat: no-repeat;
    }
  }
}</style>
