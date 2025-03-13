<template>
    <div ref="messages" :style="{ display: showTips ? 'block' : 'none' }" class="message-wrapper">{{ showTips }}</div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState(['showTips'])
  },
  watch: {
    showTips (val) {
      if (val !== '') {
        const myThis = this
        this.setShowTips(val)
        setTimeout(() => {
          myThis.setShowTips('')
        }, 3000)
      }
    }
  },
  methods: {
    ...mapMutations(['setShowTips'])
  }
}
</script>

<style lang="less" scoped>
.message-wrapper {
    max-width: 80vw;
    padding: 2vw;
    box-sizing: border-box;
    border-radius: 1vw;
    background: #fff;
    color: #222;
    font-size: 4.2vw;
    position: fixed;
    top: 40vh;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
}
</style>
