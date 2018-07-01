<template>
    <div id="side-navi">
        <vue-tabs active-text-color="black"
                  type="pills"
                  :start-index="1"
                  direction="vertical"
                  id="tabs-left"
                  v-model="selected_proj">
            <v-tab :title="`${proj.projname}`"  v-for="proj in projects" :key="proj.projname">
                <div v-for="p in proj.files" class="file-div">
                    <a class="file-a"  rel="external" :href= "drawurl+'?id='+p.id">
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
</template>

<script>

    import {apiBase,serviceapi} from "../../static/api.config";
    import bus from "../../static/eventBus";
    import store from "../../static/store";
    export default {
        name: "side-navi",
        data() {
            return {
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
            linktodraw: function () {
                window.location(apiBase());
            }
        }
    }
</script>

<style lang="less">
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

    file-a{
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