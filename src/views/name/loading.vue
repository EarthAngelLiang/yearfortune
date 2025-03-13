<template>
    <div class="loading-box">
      <Tips/>
        <div class="loading-txt">等待测算结果…</div>
        <div class="loading-boxs">
            <div class="loading-box-son">
                <div class="percent" :style="{width: percent+'%'}"></div>
                <img  v-lazy="require('@/assets/name/icon_img/loading.png')" :style="{left: (percent-10)+'%'}" alt="" class="loading-img">
            </div>
            <div class="percent-percent">{{percent}}%</div>
        </div>
    </div>
</template>
<script>
import { get } from '@/axios/axios'
import Tips from '@/components/name/tips/tips.vue'
import { mapMutations, mapState } from 'vuex'
export default {
  components: {
    Tips
  },
  data () {
    return {
      percent: 0,
      over: false
    }
  },
  computed: {
    ...mapState(['orderid'])
  },
  mounted () {
    console.log(this.$route, '$toejsmfksdjf')
    const myThis = this
    let count = 0
    const timer = setInterval(() => {
      count++
      if (this.percent + 2 > 100) {
        this.percent = 100
      } else {
        this.percent += 1
      }
      if (myThis.over) {
        clearInterval(timer)
        myThis.$router.replace({ path: '/name/detail' })
      } else {
        if (count % 100 === 0) {
          myThis.getStatus()
        }
      }
    }, 20)
  },
  methods: {
    ...mapMutations(['setShowTips']),
    async getStatus () {
      const result = await get('/name_examine/order_result', { order_id: this.orderid })
      if (result.result === 0) {
        localStorage.setItem('detailResult', JSON.stringify(result))
        this.over = true
      } else {
        this.setShowTips(result.msg)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.loading-box{
    width: 100vw;
    height: 100vh;
    background-image: url('@/assets/name/bg/xu.png');
    background-color: #FAEED7;
    background-size: contain;
    position: relative;
    .loading-txt{
        position: absolute;
        top: 30vh;
        left: 0;
        width: 100%;
        color: #F13E2D;
        font-size: 7vw;
        font-weight: 700;
        text-align: center;
        z-index: 2;
    }
    .loading-boxs{
        position: absolute;
        top: 34vh;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 10vh;
        .loading-box-son{
            border: 1px solid #E89F5A;
            border-radius: 5vw;
            height: 4.2vw;
            width: 68vw;
            margin-right: 2vw;
            position: relative;
            .percent{
                background-image: linear-gradient(to bottom,#F86F4E , #C44337);
                height: 4.2vw;
                border-radius: 5vw;
                position: absolute;
                top: -1px;
                left: 0;

            }
            .loading-img{
                position: absolute;
                top: -1.6vw;
                width: 10.8vw;
                height: 7vw;
            }
        }
        .percent-percent{
            font-size: 4.6vw;
        }

    }
}
</style>
