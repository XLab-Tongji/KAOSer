<template>
    <div id="app">

        <div class="container">
            <div class="content">
                <div>
                    <img src="./assets/image02.png" alt="" />
                </div>
                        <div class="login-d-btn">
                            <button class="btn btn-info" style="width: 30%" v-on:click="toLogin()">马上登录</button>
                        </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "success-app",
        methods: {
            toLogin: function () {
                console.log('username: '+this.username);
                this.$router.push({path: '/login'});
            }
        }
    }
</script>

<style scoped>

    .container{
        width: 600px;
        height: 400px;
        padding: 0;
        margin-top: 150px;
    }

    .content{
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-top: 10%;
        width: 100%;
        height: 100%;
        background-color: #ffffff;
        border-radius:15px;
        box-shadow: 10px 10px #ececec;
    }

</style>