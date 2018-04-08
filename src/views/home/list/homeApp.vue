<template>
    <div id="app">
        <HeadNavi></HeadNavi>
        <SideNavi></SideNavi>
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
}
</style>