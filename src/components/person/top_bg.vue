<template>
    <div>
        <div class="top-bg"></div>
        <div class="header-title" v-if="$route.path !== '/person/order_detail'"> 2023恋爱姻缘全透视</div>
        <div style="width: 100%; height:6.4vw"></div>
        <div class="banner-title" v-if="$route.path === '/person/home' || $route.path === '/person/play'"
            :style="{ 'background-image': `url(${require('@/assets/person/yyfx.png')})` }"></div>
        <div class="banner-title" v-if="$route.path === '/person/order_check'"
            :style="{ 'height': '23vw', 'background-image': `url(${require('@/assets/person/ddcx.png')})` }"></div>
        <div class="banner-title" v-else-if="$route.path === '/person/order_list'"
            :style="{ 'background-image': `url(${require('@/assets/person/ddlb.png')})` }"></div>
        <div class="banner-title" v-else-if="$route.path === '/person/order_detail'"
            :style="{ 'background-image': `url(${require('@/assets/person/bgxq.png')})` }"></div>
        <div class="type-analysis" v-if="$route.path === '/person/home' || $route.path === '/person/play'">
            <div class="tuxing-l"></div>
            <div class="txt-box">
                <div class="txt">恋爱发展</div>
                <div class="lines"></div>
                <div class="txt">桃花正缘</div>
                <div class="lines"></div>
                <div class="txt">恋爱时机</div>
                <div class="lines"></div>
                <div class="txt">感情经营</div>
            </div>
            <div class="tuxing-r"></div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.top-bg {
    background-image: url('@/assets/person/tt.png');
    width: 100vw;
    height: 180vw;
    background-size: 100%;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}

.header-title {
    color: #fff;
    text-align: center;
    font-size: 3.6vw;

    background-image: url('@/assets/person/th.png');
    background-size: 100%;
    width: 54%;
    padding-top: 8.6vw;
    margin: -8.6vw auto 0 auto;
    height: 15vw;
}

.banner-title {
    width: 84vw;
    height: 21vw;
    background-size: 100%;
    margin: 9vw auto 0 auto;
}

.type-analysis {
    margin-top: 2vw;
    display: flex;
    justify-content: center;
    align-items: center;

    .txt-box {
        color: #fff;
        margin: -1.6vw -3vw 0 -3vw;
        padding: 0 1vw;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: rgb(238, 113, 99);
        height: 5.8vw;
        line-height: 5.8vw;
        width: 78vw;
        font-size: 3.6vw;

        .lines {
            background-color: #fff;
            width: 1px;
            height: 3vw;
        }
    }

    .tuxing-l {
        width: 8vw;
        height: 5.8vw;
        background-size: 100%;
        background-image: url('@/assets/person/tl.png');

    }

    .tuxing-r {
        background-image: url('@/assets/person/tr.png');
        width: 8vw;
        height: 5.8vw;
        background-size: 100%;
        z-index: -1;
    }
}</style>
