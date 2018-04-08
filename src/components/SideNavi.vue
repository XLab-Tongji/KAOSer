<template>
    <div id="side-navi">
        <b-card no-body id="tab-content">
            <b-tabs id="tabs-left" pills card vertical nav-wrapper-class="w-25">
                <b-tab :title="`${proj.items}`" v-for="proj in projects" :key="proj.items">
                    {{proj.items}}
                </b-tab>
            </b-tabs>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: "side-navi",
        data() {
            return {
                projects:[
                    {items: "项目一"},
                    {items: "项目二"},
                    {items: "项目三"},
                    {items: "项目四"}
                ],
                tabs:[]
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    #side-navi{
        float: left;
        width: 80%;
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

</style>