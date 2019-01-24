<template>
<div class="study-container">
    <div class="left-title">
        <span class="title-name">{{title}}</span>
    </div>
    <div class="left-container">
        <ul class="container-list">
            <li v-for="item in [1,2,3,4,5,6]">
                <singlecolumn></singlecolumn>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import Singlecolumn from "./single-column";
export default {
  name: "study-box",
  components: { Singlecolumn },
  data() {
    return {};
  },
  props: {
    title: {
      default: "精选",
      type: String
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.study-container {
  .left-title {
    height: 50px;
    line-height: 50px;
    margin: 0 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #efefef;
    .title-name {
      border-bottom: 3px solid #000;
      display: inline-block;
      height: 47px;
    }
  }
  .left-container {
    .container-list {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 20px;
      box-sizing: border-box;
      li {
        width: 290px;
        height: 200px;
        border-radius: 5px;
        margin-bottom: 10px;
        box-sizing: border-box;
        border: 1px solid #efefef;
        padding: 10px;        
      }
    }
  }
}
</style>

