<template>
<div class="spk-homepage">
    <div class="homepage-banner">
        <headernav :title = "headerTitle" :content = "headerContent"></headernav>
    </div>
    <div class="homepage-summary">
        <div class="summary-left">
            <homesummary></homesummary>
        </div>
        <div class="summary-right">
            <homebanner></homebanner>
        </div>
    </div>
    <div class="homepage-study">
        <div class="study-left">
            <studybox :title = "'头条'"></studybox>
        </div>
        <div class="study-right">
            <tiptree :title = "'技术'" :navList = "navList1"></tiptree>
        </div>
    </div>
    <div class="homepage-column">
        <div class="column-left">
            <studybox></studybox>
        </div>
        <div class="column-right">
            <tiptree :title = "'我的'" :navList = "navList2"></tiptree>
        </div>
    </div>
</div>
</template>

<script>
import Tiptree from "./tiptree";
import Studybox from "./studybox";
import Homesummary from "./home-summary";
import Homebanner from "./home-banner";
import Headernav from "./header-nav";
export default {
  name: "homepage",
  components: { Tiptree, Studybox, Homesummary, Homebanner, Headernav },
  data() {
    return {
      navList1: [
        { name: "HTML+CSS", id: 0 },
        { name: "JavaScript", id: 1 },
        { name: "前端框架", id: 2 },
        { name: "Nodejs", id: 3 },
        { name: "其他", id: 4 }
      ],
      navList2: [
        { name: "小酒馆", id: 0 },
        { name: "音乐电影", id: 1 },
        { name: "资源分享", id: 2 },
        { name: "发现", id: 3 },
        { name: "其他", id: 4 }
      ],
      headerTitle: {
        ch: "首页",
        en: "Home"
      },
      headerContent: "你的故事讲到了哪"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.spk-homepage {
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 20px;
  .homepage-banner {
    width: 100%;
    height: 180px;
    position: relative;
  }
  .homepage-summary {
    width: 1200px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 30px 0 0;
    display: flex;
    justify-content: space-between;
    .summary-left {
      width: 20%;
      height: 350px;
      background-color: #eee;
      border-radius: 5px;
      background-color: #fff;
    }
    .summary-right {
      width: 78%;
      border-radius: 5px;
      background-color: #fff;
      border: 1px solid #efefef;
      box-sizing: border-box;
      padding: 20px;
    }
  }
  .homepage-study {
    padding: 30px 0 0;
    width: 1200px;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    margin: 0 auto;
    .study-left {
      width: 76%;
      height: 500px;
      border-radius: 5px;
      background-color: #fff;
      border: 1px solid #efefef;
    }
    .study-right {
      width: 22%;
      height: 500px;
      border: 1px solid #efefef;
      border-radius: 5px;
      box-sizing: border-box;
      padding: 0 20px;
      background-color: #fff;
    }
  }
  .homepage-column {
    padding: 30px 0 0;
    width: 1200px;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    margin: 0 auto;
    .column-left {
      width: 76%;
      height: 500px;
      border-radius: 5px;
      background-color: #fff;
      border: 1px solid #efefef;
    }
    .column-right {
      width: 22%;
      height: 500px;
      border: 1px solid #efefef;
      border-radius: 5px;
      box-sizing: border-box;
      padding: 0 20px;
      background-color: #fff;
    }
  }
}
</style>

