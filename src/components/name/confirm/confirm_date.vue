<template>
    <div class="marks">
        <div class="infos">
            <div class="confirms">
                <div class="backs" @click="$emit('backDates')">返回修改</div>
                <div class="isconfirm" @click="$emit('cons')">确认无误</div>
            </div>
            <div class="date-label">请确认选择时间是否正确</div>
            <div class="label-date"> 公历： <span style="color: #FE5B00;">{{ brithDate.gLabel }}</span> </div>
            <div class="label-date"> 农历： <span style="color: #FE5B00;">{{ brithDate.nLabel }}</span> </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['brithDate']

}
</script>
<style lang="less" scoped>
    .marks{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0,0,0,.4);
        z-index: 1000;
        .infos{
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: #fff;
            padding:  3vw 0;
            width: 100%;
            .confirms{
                display: flex;
                justify-content: space-between;
                padding: 0 5vw;
                .isconfirm{
                    color: #FE5B00;
                }
            }
            .date-label{
                margin: 3vw ;
                text-align: center;
            }
            .label-date{
                text-align: center;
                margin: 1vw 0;
            }
        }
    }
</style>
