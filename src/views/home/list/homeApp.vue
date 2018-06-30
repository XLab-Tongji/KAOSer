<template>
    <div id="app">
        <HeadNavi></HeadNavi>
        <!--<SideNavi></SideNavi>-->
        <div id="side-navi">
            <vue-tabs active-text-color="black"
                      type="pills"
                      :start-index="1"
                      direction="vertical"
                      id="tabs-left"
                      v-model="selected_proj">
                <v-tab :title="`${proj.projname}`"  v-for="proj in projects" :key="proj.projname">
                    <div v-for="p in proj.files" class="file-div">
                        <a class="file-a" :href= "drawurl+'?id='+p.id">
                            <div class="div-file-icon">
                                <img src="./assets/file_icon.png"/>
                            </div>
                            <p class="p-file-title">
                                {{p.filename}}
                            </p>
                        </a>
                    </div>
                </v-tab>
            </vue-tabs>
        </div>
        <div class="right-btns">
            <div class="right-btns-box1">
                <button class="btn" v-on:click="dispProjBox">新建项目</button>
            </div>
            <div class="right-btns-box3">
                <button class="btn" v-on:click="dispFileBox">新建文档</button>
            </div>
        </div>
        <div class="div-edit" v-show="edit_newProj">
            <div class="div-edit-title">
                <label>新建项目</label>
                <input class="input-title" type="text" v-model="new_projname"/>
            </div>
            <button class="btn btn-edit btn-cancel" v-on:click="cancel">取消</button>
            <button class="btn btn-edit btn-confirm" v-on:click="newProj">确认</button>
        </div>
        <div class="div-edit" v-show="edit_newFile">
            <div class="div-edit-title">
                <label>新建文档 | {{selected_proj}}</label>
                <input class="input-title" type="text" v-model="new_filename"/>
            </div>
            <button class="btn btn-edit btn-cancel" v-on:click="cancel">取消</button>
            <button class="btn btn-edit btn-confirm" v-on:click="newFile">确认</button>
        </div>
    </div>
</template>

<script>
    import {apiBase,serviceapi} from "../../../../static/api.config";
    import HeadNavi from 'components/HeadNavi'
    import SideNavi from 'components/SideNavi'
    import store from "../../../../static/store";
    import Vue from "vue";
    //注册局部组件
    export default {
        name: "home-app",
        components:{
            HeadNavi,
            SideNavi
        },
        data(){
          return {
              edit_newProj: false,
              edit_newFile: false,
              new_projname: '',
              new_filename: '',

              drawurl:apiBase(),
              projects: [],
              tabs:[],
              url: apiBase(),
              username:'',
              tabIndex: 0,
              selected_proj: ''
          }
        },
        store,
        beforeCreate:function () {
            this.$store.commit('clearproject');
            var self = this;
            this.username = this.$store.state.username;
            var url = serviceapi()+"importFromMongo?myname="+this.username;
            this.$axios({
                method: 'get',
                url: url,
                data:{
                },
                headers:{
                    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                },
                responseType: 'json'
            }).then(function (res) {
                console.log(res.data);
                var projnames = [];
                var name = '';
                for(var i in res.data){  // 获得项目名称数组
                    name = res.data[i].projectname;
                    if(projnames.indexOf(name) === -1)
                        projnames.push(name)
                }
                for(var i in projnames){
                    var projname = projnames[i];
                    var project = {projname:'',files:[]};
                    var file = {id:'',filename:''};
                    project.projname = projname;
                    for (var j in res.data){
                        if(res.data[j].projectname == projname){
                            file.id = res.data[j].id;
                            file.filename = res.data[j].name;
                            project.files.push(file);
                            //   console.log(file.id);
                        }
                        file = {id:'',filename:''};
                    }
                    self.$store.commit('addproject',project);
                }
                // console.log(self.$store.state.projects);
            })
        },
        mounted: function () {
            this.projects = this.$store.state.projects;
            //console.log(this.projects);
            console.log("selected_proj: "+this.selected_proj);
        },
        methods: {
            dispProjBox: function () {
                this.edit_newProj = true;
            },
            dispFileBox: function () {
              this.edit_newFile = true;
              console.log(this.selected_proj);
            },
            cancel: function () {
                this.edit_newProj = false;
                this.edit_newFile = false;
            },
            newProj: function () {
                var projects = this.$store.state.projects;
                var isprojexist = false;
                for(var i in projects){
                    console.log(projects[i])
                    if(this.new_projname === projects[i].projname){
                        alert("项目已经存在，请选择其他项目名！");
                        isprojexist = true;
                    }
                }
               if(!isprojexist){
                   var proj = {projname: this.new_projname, files:[]};
                   this.$store.state.projects.push(proj);
                   this.edit_newProj = false;
               }
            },
            newFile: function () {
                var url = serviceapi()+"addNewFile";
                var projects = this.$store.state.projects;
                var idx = 0;
                for(var i in projects){
                    if(this.new_projname === projects[i].projname){
                        idx = i;
                        break;
                    }
                }
                var new_file = {id:'',filename:''};
                new_file.filename = this.new_filename;
                var self = this;
                console.log("username: "+self.$store.state.username);
                console.log("projname: "+self.selected_proj);
                console.log("title: "+self.new_filename);
                this.$axios({
                    method: 'get',
                    url: url,
                    params:{
                        username: self.$store.state.username,
                        projectName: self.selected_proj,
                        title: self.new_filename
                    },
                    headers:{
                        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                    responseType: 'json'
                }).then(function (res){
                    console.log(res.data.kaosfileId);
                    new_file.id = res.data.kaosfileId;
                    console.log(idx);
                    self.$store.state.projects[idx].files.push(new_file);
                    console.log(self.$store.state.projects[idx].files);
                    self.edit_newFile = false;
                   Vue.set( self.projects,self.$store.state.projects);
                })
            }
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

.right-btns-box2{
    margin: 10px 0;
}

    .btn{
        border-radius: 3px;
        font-size: 0.8em;
        height: 2.4em;
        width: 12%;
        outline:none;
    }

.right-btns-box1 button{
        background-color: #f07330;
        color: #FFFFFF;
    }

.right-btns-box3 button{
    background-color: #f7bd10;
    color: #FFFFFF;
}

.in-btn{
    border: 1px solid #F2F2F2;
    background-color: #ddd;
}

.div-edit{
    position: absolute;
    top: 200px;
    left: 30%;
    width: 40%;
    box-shadow: 0 4px 30px 0 #c7b8b8;
    height: 250px;
    border-radius: 15px;
    background-color: #ffffff;
    text-align: center;
    padding-top: 30px;
    /*display: none;*/
    z-index: 2;
}


.div-edit-title{
    margin: 10px 0;
}

    .btn-edit{
        width: 125px;
        margin: 0 20px;
        position: relative;
        bottom: -40px;
    }
.btn-confirm{
    background-color: #f07330;
    color: #ffffff;
}

    .div-edit-title label{
        display: block;
        margin-bottom: 30px;
        font-size: large;
        color: #6c757d;
    }

    .div-edit-title input{
        width: 80%;
        height: 2.5em;
    }

button{
    outline: none;
}

#side-navi{
    float: left;
    width: 70%;
    height: 100%;
    margin-left: 40px;
    margin-top: 10px;
}

#tab-content{
    height: 100%;
}

#tabs-left{
    height: 100%;
}


.file-div{
    width: 120px;
    height: 124px;
    float: left;
    text-align: center;
    padding-top: 5px;
}

.file-div:hover{
    background-color: #f3f4f5;
    border: thin solid #e5e5e5;
    border-radius: 3px;
    cursor: pointer;
}

.file-a{
    margin: auto;
    width: 100%;
    height: 100%;
}
.div-file-icon{
    text-align: center;
}

.p-file-title{
    color: #000000;
}
</style>