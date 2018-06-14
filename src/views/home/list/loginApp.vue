<template>
	<div id="contaier">
		<div id="leftbox">
			<div id="left01">
				<img src="./assets/KAOSER.png"/>
			</div>
			<div id="left-occp"></div>
			<div id="left02">
				<img src="./assets/img01.png"/>
			</div>
		</div>

		<div id="rightbox">
			<div id="right-container">
				<div class="formBox" id="loginDiv">
					<form>
						<div class="hint" v-show="showHint">
							<p>{{Hint}}</p>
						</div>
						<div class="form-title">
							<p>Login to your account </p>
						</div>
						<div class="form-group">
							<input type="text" class="form-input" placeholder="用户名" v-model="username" required/>
						</div>
						<div class="form-group">
							<input type="password" class="form-input" placeholder="密码" v-model="password" required/>
						</div>
						<div class="login-btn-box">
							<button class="valid-btn" v-on:click="login">LOGIN</button>
							<router-link to='/sign'>
								<p class="p-style">没有账号？现在注册.</p>
							</router-link>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

    //   import Lib from 'assets/js/Lib';
    //  import { Cell,Group,Divider } from 'vux'
    import {serviceapi} from "../../../../static/api.config";
    import {setCookie,} from "./assets/cookie";
    import bus from '../../../../static/eventBus';
    export default {
        data() {
            return {
                username: '',
                password: '',
                Hint: '',
                showHint: false
            }
        },
        //相关操作事件
        methods: {
            login: function () {
                console.log('username: '+this.username);
                if(this.username == "" || this.password == ""){
                    // alert("用户名和密码不能为空！");
                }
                else{
                    let data = {'username':this.username,'password':this.password};
                    var url = serviceapi()+"login";
                    this.$http.post(url,data).then((res)=>{
                        console.log(res);
                        if(res.data == -1){
                            this.Hint = "用户名或密码错误";
                            this.showHint = true;
                        }
                        else{
                            this.Hint = "登录成功";
                            this.showHint = true;
                            setCookie('username',this.username,1000*60);
                            setTimeout(function () {
                                bus.$emit("sendUsernameToHome",this.username);
                                this.$router.push('/home');
                            }.bind(this),1000)
                        }
                    })
                }
            }
        }
    }
</script>

<style scoped>
	div{
		margin: 0;
	}

	#contaier{
		margin: auto;
		width: 60%;
		height: 80%;
		top:10%;
		position: relative;
		background-color: #292c3d;
	}

	#leftbox{
		width: 45%;
		height: 100%;
		margin: 0;
		background-color: #f07330;
		overflow: hidden;
		float: left;
	}

	#left01{
		width: 80%;
		height: auto;
		position: relative;
		left: 20%;
		display: inline-block;
	}
	#left-occp{
		height: 50%;
	}
	#left02{
		width: 80%;
		height: auto;
		padding: 5%;
		position: relative;
		text-align: right;
		left: 20%;
	}
	img{
		width: 100%;
		height: auto;
		max-width: 100%;
	}
	#rightbox{
		top:40%;
		float: right;
		width: 55%;
		display: inline-block;
		padding: 0;
		position: relative;
	}

	#right-container{
		width: 100%;
		display: inline-block;
	}

	.formBox{
		width: 100%;
		margin-left: auto;
		margin-right: auto;
		padding: 0;
		display: inline-block;
	}

	.form-input{
		box-sizing: border-box;
		text-align:left;
		font-size:1em;
		height:3em;
		border:1px solid #333649;
		color:#FFFFFF;
		background-color: #2a2f42;
		-web-kit-appearance:none;
		-moz-appearance: none;
		display:block;
		outline:0;
		padding:0 50px;
		text-decoration:none;
		width:100%;
	}

	.login-btn-box{
		margin-top: 30px;
		margin-bottom: 10px;
	}

	.valid-btn{
		background-color: #292c3d;
		border-radius: 0 20px 20px 0;
		border: 1.5px solid #f07330;
		color: #f07330;
		font-size: 1em;
		height: 3em;
		border-left: none;
		width: 40%;
		outline:none;
	}

	.valid-btn:hover{
		background-color:#f07330;
		color: #FFFFFF;
		cursor: pointer;
	}

	.p-style{
		color: #6a6f77;
		display: inline;
		margin-left: 20px;
		font-size: 0.5em;
	}

	::-webkit-input-placeholder{
		color: #6a6f77;
	}

	.form-title{
		padding-left: 50px;
		margin-bottom: 5%;
		font-size: 1.5em;
		color: #6a6f77;
	}

	.hint{
		color: #f07330;
		padding-left: 50px;
		margin-bottom: 5px;
	}
</style>