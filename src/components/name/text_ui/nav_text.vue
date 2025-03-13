<template>
    <div class="nav-box">
        <div class="height-long">
        </div>
        <div class="width-long">
            <div class="height-son">
            </div>
            <div class="width-son">
                <div class="height-sun"></div>
                <div class="width-sun">{{ name }}</div>
            </div>
        </div>
        <div class="icon-box">
            <div class="icont-img0"></div>
            <div class="icont-img1"></div>
        </div>
        <div class="center-line">
            <div class="lines-box">
                <div class="line"></div>
                <div class="box"></div>
            </div>
            <div class="lines-box">
                <div class="box"></div>
                <div class="line1"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['name'],
  data () {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
.nav-box {
    position: relative;

    .center-line {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        display: flex;
        justify-content: space-between;
        width: 79vw;

        .lines-box {
            display: flex;
            align-items: center;

            .box {
                width: 1.6vw;
                height: 1.6vw;
                background-color: #F6B0A1;
                transform: rotate(45deg);
            }

            .line {
                width: 14vw;
                background-image: linear-gradient(to right, #FDF0D9, #F6B0A1);
                height: .5vw;
            }

            .line1 {
                width: 14vw;
                background-image: linear-gradient(to right, #F6B0A1, #FDF0D9);
                height: .5vw;
            }
        }
    }

    .icon-box {
        position: absolute;
        left: 50%;
        top: 3.6vw;
        transform: translate(-50%, 0);
        display: flex;
        width: 46vw;
        justify-content: space-between;
        z-index: 3;

        .icont-img0 {
            width: 5.7vw;
            height: 3.6vw;
            background-image: url('@/assets/name/icon_img/left.png');
            background-size: contain;
        }

        .icont-img1 {
            width: 5.7vw;
            height: 3.6vw;
            background-image: url('@/assets/name/icon_img/right.png');
            background-size: contain;
        }
    }

    .height-long {
        background-color: #DE4843;
        width: 50vw;
        height: 10vw;
        border-radius: 1vw;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        margin: 0 auto;
    }

    .width-long {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #DE4843;
        width: 54vw;
        height: 8vw;
        border-radius: 1vw;
        z-index: 2;

        .height-son {
            width: calc(50vw - 2px);
            height: calc(10vw - 2px);
            background-color: #fff;
            border-radius: 1vw;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

        }

        .width-son {
            position: absolute;
            top: 1px;
            left: 1px;
            width: calc(54vw - 2px);
            height: calc(8vw - 2px);
            background-color: #fff;
            border-radius: 1vw;

            .height-sun {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background-color: #DE4843;
                width: calc(50vw - 4px);
                height: calc(10vw - 4px);
                z-index: 2;
                border-radius: 1vw;
            }

            .width-sun {
                position: absolute;
                top: 1px;
                left: 1px;
                background-color: #DE4843;
                width: calc(54vw - 4px);
                height: calc(8vw - 4px);
                z-index: 50;
                border-radius: 1vw;
                display: flex;
                align-items: center;
                justify-content: center;
                color: rgba(255, 255, 255, .9);
            }
        }
    }
}</style>
