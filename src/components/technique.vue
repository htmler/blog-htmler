<template>
<div class="spk-technique">
    <div class="technique-banner" ref="baner">
        <headernav :title = "headerTitle" :content = "headerContent"></headernav>
    </div>
    <div class="technique-nav" ref="techniquenav">
      <typenav :navList = "showList"></typenav>
    </div>
    <div class="technique-body">
      <div class="body-project" v-for="item in techniqueList">
        <singlecolumnb></singlecolumnb>
      </div>
    </div>
</div>
</template>

<script>
import Headernav from "./header-nav";
import Typenav from "./type-nav";
import Singlecolumnb from "./single-column-b";
export default {
  name: "technique",
  components: { Headernav, Typenav, Singlecolumnb},
  data() {
    return {
      isScroll: true,
      navBar: '',
      headerTitle: {
        ch: "技术帖",
        en: "Technique"
      },
      headerContent: "浅谈人生",
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
    showConsole(){
      if(this.isScroll){
        this.isScroll = false;
        this.navBar = this.$refs.techniquenav;
      }
      let currentTop = document.body.scrollTop || document.documentElement.scrollTop;
      if(currentTop < 180){
        this.navBar.style.position = 'relative';
        this.navBar.style.top = '0';
        this.$refs.baner.style.paddingBottom = '0';
      }else{
        this.navBar.style.position = 'fixed';
        this.navBar.style.top = '80px';
        this.$refs.baner.style.paddingBottom = '50px';
      }
    }
  },
  created(){
    window.addEventListener('scroll',this.showConsole)
  },
  destroyed(){
    window.removeEventListener('scroll',this.showConsole)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.spk-technique {
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  padding-bottom: 20px;
  .technique-banner {
    width: 100%;
    height: 180px;
    position: relative;
  }
  .technique-nav{
    width: 100%;
    height: 50px;
    background-color: #fff;
    line-height: 50px;
    box-sizing: border-box;
    border-bottom: 1px solid #efefef;
    z-index: 99;
  }
  .technique-body{
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

