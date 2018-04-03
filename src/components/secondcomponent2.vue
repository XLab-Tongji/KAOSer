<template>
  <div>
    <h1>{{$store.state.kaosFileName}}</h1>
    <!--<hr class="container-hr"/>-->

      <!--<div id="hello">-->
        <!--<p style="color: #235695">HELLO,MY DEAR</p>-->
        <!--<button type="button" onclick="init()">进入kaos</button>-->
      <!--</div>-->

      <div id="playGround" style="width: 100%;height: 100%;">
      </div>
  </div>
</template>
<script src="../js/json2.min.js"></script>
<script src="../js/helloworld.js"></script>
<script type="text/javascript" src="../js/jquery-3.2.1.js"></script>
<script type="text/javascript" src="../js/jkl-dumper.js"></script>
<script type="text/javascript" src="../js/ObjTree.js"></script>
<script type="text/javascript" src="../js/hello.js"></script>
<script type="text/javascript" src="../js/mxClient.js"></script>
<script type="text/javascript" src="../js/myShaps.js"></script>
<script type="text/javascript" src="../js/mymain.js"></script>
<script type="text/ecmascript-6">
  import store from '@/vuex/store'
  import {hello} from '../../static/JS/helloworld'
  export default
  {
    data () {
      return {
        concept: 'Name:'
      }
    },
    store,
    methods:{
      onloadmain:function () {
        hello();
      }
    }
  }
</script>

<style>
  .drawPlane{
    margin-top: 10px;
  }
  .container-hr{
    width: 50%;
    border: none;
    height: 1px;
    background-color: lightgray;
  }
  #geSidebar,#geSidebar .geItem,#geSidebar .geItemEdge{
    -moz-transition: none;
    -o-transition: none;
    -ms-transition: none;
    transition: none;
  }

  #graphContainer{
    position:absolute;
    overflow: hidden;
    left:210px;
    top: 26px;
    right: 200px;
    bottom: 0px;
    /*background: url('../images/grid.gif')*/
  }

  #geSidebarContainer{
    visibility: visible;
    left:0px ;
    top:26px;
    width:210px;
    bottom:0px;
    overflow:visible;
    position:absolute;
    cursor:default;
  }

  #geSidebarContainer,#geSidebar{
    background:#ffffff;
    overflow:visible;
    position:absolute;
    border-style: solid solid solid solid;
    border-color: #e5e5e5;
    border-width: 1px;
  }
  #myToolBar{
    position: absolute;
    top:206px;
    border-style: solid solid solid solid;
    border-color: #e5e5e5;
    border-width: 2px;
    width:190px;
    height:400px;
    right: 5px;

  }
  #outlineContainer{
    top:26px;
    width:190px;
    height:180px;
    right: 5px;
    border-style: solid solid solid solid;
    border-color: #e5e5e5;
    border-width: 2px;
    position: absolute;
  }
  .geItem,.geItemEdge,.geItemEdgeClick{
    display:block;
    float:left;
    overflow: visible;
    position: relative;

    width: 64px;
    height: 64px;
    padding: 1px;

  }
  .svgclass:hover{
    border: 0px #99ccff solid;

    padding: 1px;
  }

  .geItemEdgeClick{
    border: 1px #99ccff solid;

    padding: 0px;
  }

  .svgclass{
    width: 56px;
    height: 56px;
    display:block;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    left: 2px;
    top: 2px
  }
  #hello{
    margin:0 auto;
    width:200px;
    height:100px;
    border:1px solid #4787ed;
    background-color: #dff0d8;
    text-align:center;
  }
  #btns{
    position: absolute;
    top:0px;
    right: 0px;
    width: 100%;
    height:26px;
    left:0px;
    background-color: #99ccff;
  }
  #fade{
    display: none;
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index:1001;
    -moz-opacity: 0.8;
    opacity:.80;
    filter: alpha(opacity=88);
  }
  #light {
    text-align: center;
    display: none;
    position: absolute;
    top: 35%;
    left: 35%;
    width: 30%;
    height: 20%;
    padding: 20px;
    border: 10px solid orange;
    background-color: white;
    z-index: 1002;
    overflow: auto;
  }
</style>

