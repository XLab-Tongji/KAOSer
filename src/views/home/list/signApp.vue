<template>
    <div id="app">

        <div class="container">
            <div class="content">
                <div>
                    <img src="./assets/image01.png" alt="" />
                </div>
                <div class="formBox" id="registerDiv">
                    <form>
                        <div class="form-group">
                            <label>选择一个用户名</label>
                            <input type="text" class="form-control" placeholder="用户名" v-model="username" required/>
                        </div>
                        <div class="form-group">
                            <label>输入您的密码</label>
                            <input type="password" class="form-control" placeholder="密码" v-model="password" required/>
                        </div>
                        <div class="login-d-btn">
                        <button class="btn btn-info" style="width: 30%" v-on:click="submit()">注册</button>
                        <router-link to='/login'>
                            <p class="p-style">已有账号？现在登录>></p>
                        </router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "sign-app",
        //相关操作事件
        methods: {
            submit: function () {
                console.log('username: '+this.username);
                this.$router.push({path: '/success'});
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
        width: 100%;
        height: 100%;
        background-color: #ffffff;
        border-radius:15px;
        box-shadow: 10px 10px #ececec;
    }

    .formBox{
        width: 100%;
        height: 100%;
        margin-left: auto;
        margin-right: auto;
        padding: 0 10% 10% 10%;
    }

    .login-d-btn{
        margin: 20px 0 0 0;
        padding: 0;
        text-align: center;
    }

</style>