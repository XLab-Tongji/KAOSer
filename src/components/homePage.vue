<template>
  <div id="homepage" class="container" style="text-align: center">
    <img src="../assets/KAOS.png">
    <div>
      <el-input placeholder="请输入文件名" v-model="inpuTxt" style="width:30%">
        <el-button class="start" slot="append" @click="setFileName" icon="el-icon-document"> 新建 </el-button>
      </el-input>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import store from '../vuex/store'
  import router from '../router/index'
  export default {
    data () {
      return {
        inpuTxt: ''
      }
    },
    methods: {
      setFileName: function () {
        this.$store.commit('setFileName', this.inpuTxt)
        this.$router.push({path: '/draw'})

      },
      store,
      router
    }
  }
</script>

<style>
  #homepage {
    margin-top: 50px;
  }
</style>
