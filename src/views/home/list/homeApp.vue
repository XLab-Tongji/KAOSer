<template>
    <div id="app">
        <HeadNavi></HeadNavi>
        <SideNavi></SideNavi>
        <div class="right-btns">
            <div class="right-btns-box1">
            <button class="btn new-btn">新建</button>
            </div>
            <div class="right-btns-box2">
                <button class="btn in-btn">导入</button>
            </div>
        </div>
    </div>
</template>

<script>
    import HeadNavi from 'components/HeadNavi'
    import SideNavi from 'components/SideNavi'

    //注册局部组件
    export default {
        name: "home-app",
        components:{
            HeadNavi,
            SideNavi
        }
    }
</script>

<style scoped>
#app{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    background-color: #f7f7f7;
}
.right-btns{
    text-align: center;
}

.right-btns-box1{
    margin-top: 50px;
    margin-bottom: 10px;
}

    .btn{
        border-radius: 3px;
        font-size: 0.8em;
        height: 2.4em;
        width: 12%;
        outline:none
    }

    .new-btn{
        background-color: #f07330;
        color: #FFFFFF;
    }

.in-btn{
    border: 1px solid #F2F2F2;
    background-color: #f5f5f5;
}

</style>