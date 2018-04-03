<template>
  <el-container>
    <el-header class="header">
      <div class="header">
        <div class="container">
          <el-row>
            <el-col :span="24">
              <el-menu default-active="/home" class="el-menu-demo" mode="horizontal" :router="true">
                <el-menu-item index="/home"> 建模 </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-header>
    <div id="app">
      <router-view/>
    </div>
    <el-footer>
    </el-footer>
  </el-container>
</template>

<script>
  // import homePage from './components/homePage.vue'
//  import Element from 'element-ui'
//  import  'element-ui/lib/theme-default/index.css'
//  Vue.use(Element)
export default {
    name: 'app',
    data () {
      return {
      }
    }
    // components: {homePage}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}
</style>
