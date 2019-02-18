<template>
<div class="spk-amusement">
    <div class="amusement-banner">
        <headernav :title = "headerTitle" :content = "headerContent"></headernav>
    </div>
    <div class="amusement-list">
        <homebanner :bannerList = "bannerList"></homebanner>
    </div>
    <div class="amusement-body" v-if="techniqueList.length >0">
      <div class="body-project" v-for="item in techniqueList">
        <singlecolumnb :coldata = "item"></singlecolumnb>
      </div>
    </div>
    <div class="amusement-body" v-if="techniqueList.length <1">
        <defaultbox></defaultbox>
    </div>
</div>
</template>

<script>
import Headernav from "./header-nav";
import Singlecolumnb from "./single-column-b";
import Homebanner from "./home-banner";
import Defaultbox from "./default-box";
export default {
  name: "amusement",
  components: { Headernav, Singlecolumnb, Homebanner,Defaultbox},
  data() {
    return {
      headerTitle: {
        ch: "音乐电影",
        en: "Amusement"
      },
      headerContent: "芳华",
      bannerList:'',
      showList: [
        { name: "HTML+CSS", id: 0 },
        { name: "Javascript", id: 1 },
        { name: "前端框架", id: 2 },
        { name: "Nodejs", id: 3 },
        { name: "其他", id: 4 }
      ],
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
    this.$server.getAmuseBanner().then(obj => {
      this.bannerList = obj;
    });
    this.ruleForm = {
      ...this.ruleForm,
      tag:'music'
    }
    this.$server.getFileList(this.ruleForm).then(obj => {
      this.techniqueList = obj;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.spk-amusement {
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  padding-bottom: 20px;
  .amusement-banner {
    width: 100%;
    height: 180px;
    position: relative;
  }
  .amusement-list{
      width: 1200px;
      margin: 20px auto 0;
      height: 300px;
  }
  .amusement-body{
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

