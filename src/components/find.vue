<template>
<div class="spk-find">
    <div class="find-banner">
        <headernav :title = "headerTitle" :content = "headerContent"></headernav>
    </div>
    <div class="find-body">
      <div class="body-project" v-for="item in techniqueList">
        <singlecolumnb></singlecolumnb>
      </div>
    </div>
</div>
</template>

<script>
import Headernav from "./header-nav";
import Singlecolumnb from "./single-column-b";
export default {
  name: "find",
  components: { Headernav, Singlecolumnb},
  data() {
    return {
      headerTitle: {
        ch: "发现",
        en: "discovery"
      },
      headerContent: "路过芬芳",
      techniqueList:[
        {name:'xx',id: 0},
        {name:'xx',id: 1},
        {name:'xx',id: 2},
        {name:'xx',id: 3},
        {name:'xx',id: 4},
      ]
    };
  },
  methods:{
  },
  created(){
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.spk-find {
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  padding-bottom: 20px;
  .find-banner {
    width: 100%;
    height: 180px;
    position: relative;
  }
  .find-body{
    width: 1200px;
    margin: 20px auto 0;
    display: flex; 
    flex-wrap: wrap;
    justify-content: flex-start;
    .body-project{
      width: 350px; 
      height: 300px;
      margin-right: 75px;
      &:nth-of-type(3n){
        margin-right: 0;
      }
    }
  }
}
</style>

