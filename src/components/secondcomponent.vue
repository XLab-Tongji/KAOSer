<template>
  <div id="secondcomponent" class="container">
    <!--<h1 id="name">{{$store.state.kaosFileName}}</h1>-->
    <!--<hr class="container-hr"/>-->
    <div class="drawPlane">
      <div id="playGround" style="width: 100%;height: 100%;">
        <div id="mynamediv" style="position: absolute;top:0px;left: 120px;width: 67px;height: 66px;text-align: center">
          <h1>{{$store.state.kaosFileName}}</h1>
        </div>
        <div class="geEditor">
          <div id="geInfo">
            <div class="geBlock" style="text-align:center;min-width:50%;">
              <h1>Flowchart Maker and Online Diagram Software</h1>
              <p>
                Kaos(formerly Diagramly) is free online diagram software. You can use it as a flowchart maker, network diagram software, to create UML online, as an ER diagram tool,
                to design database schema, to build BPMN online, as a circuit diagram maker, and more. KAOS can import .vsdx, Gliffy&trade; and Lucidchart&trade; files .
              </p>
              <h2 id="geStatus">Loading...</h2>
              <p>
                Please ensure JavaScript is enabled.
              </p>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import store from '../vuex/store'
//  import {main} from '../../static/mymain'
//  import {helloworld} from '../../static/JS/myjs'
//  import {mxClient} from '../../static/JS/mxClient'
  export default
  {
    data () {
      return {
        concept: 'Name:'
      }
    },
    methods: {
      onloadmain: function () {
        main()
      }
    },
    store
  }
</script>

<style>
  .drawPlane{
    margin-top: 10px;
  }
  .container-hr{
    width: 1%;
    border: none;
    height: 1px;
    background-color: lightgray;
  }
</style>
