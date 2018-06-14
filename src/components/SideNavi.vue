<template>
    <div id="side-navi">
        <!--<b-card no-body id="tab-content">-->
            <!--<b-tabs id="tabs-left" pills card vertical nav-wrapper-class="w-25" v-model="tabIndex">-->
                <!--<b-tab :title="`${proj.items}`"  v-for="proj in projects" :key="proj.items" :title-link-class="linkClass(proj.idx)">-->
                    <!--<a :href="url">{{proj.items}}</a>-->
                <!--</b-tab>-->
            <!--</b-tabs>-->
        <!--</b-card>-->
        <vue-tabs active-text-color="black"
                  type="pills"
                  :start-index="1"
                  direction="vertical"
                  id="tabs-left">
            <v-tab :title="`${proj.items}`"  v-for="proj in projects" :key="proj.items">
                <!--<a :href="url">{{proj.items}}</a>-->
                <div v-for="p in projects" :key="p.items" class="file-div">
                    <a class="file-a">
                        <div class="div-file-icon">
                            <img src="./assets/file_icon.png"/>
                        </div>
                        <p class="p-file-title">
                            {{p.items}}
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
    export default {
        name: "side-navi",
        data() {
            return {
                projects:[
                    {items: "项目一", idx: 0},
                    {items: "项目二", idx: 1},
                    {items: "项目三", idx: 2},
                    {items: "项目四", idx: 3}
                ],
                tabs:[],
                url: apiBase(),
                username:"",
                tabIndex: 0
            }
        },
        created: function () {
            bus.$on("sendUsernameToHome",function (arg) {
                this.username = arg;
                console.log(this.username);
            })
            var url = serviceapi()+"importFromMongo"+"?myname="+"test2";
            this.$axios({
                method: 'get',
                url: url,
                data:{
                    myname: 'test2'
                },
                headers:{
                    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                },
                responseType: 'json'
            }).then(function (res) {
                console.log(res);
                for(var file in res.data){
                    console.log(file.name);
                }
            })
        },
        methods: {
            linkClass(idx){
                if(this.tabIndex === idx){
                    return ['bg-custom']
                }
                else{
                    return ['bg-light','text-info']
                }
            },

        }
    }
</script>

<style lang="less">
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