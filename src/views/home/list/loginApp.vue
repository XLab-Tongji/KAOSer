<template>
<div id="app">

	<div class="container">
		<div class="content">
			<div>
				<img src="./assets/image01.png" alt="" />
			</div>
			<div class="formBox" id="loginDiv">
				<form>
					<div class="form-group">
						<label>用户名</label>
						<input type="text" class="form-control" placeholder="用户名" v-model="username" required/>
					</div>
					<div class="form-group">
						<label>密码</label>
						<input type="password" class="form-control" placeholder="密码" v-model="password" required/>
					</div>
					<div class="login-d-btn">
					<button class="btn btn-info" style="width: 30%" v-on:click="submit()">登录</button>

					<router-link to='/sign'>
						<p class="p-style">没有账号？现在注册>></p>
					</router-link>
					</div>
				</form>
			</div>
		</div>
	</div>

</div>
</template>

<script>

import Lib from 'assets/js/Lib';

import { Cell,Group,Divider } from 'vux'


export default {
  data() {
    return {
    	username: '',
		password: ''
    }
  },
  //相关操作事件
  methods: {
	  submit: function () {
		  console.log('username: '+this.username);
          window.location.href="../router/index.html";
      }
  }
}
</script>

<style lang="less">

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
