<template>
<div class="study-container">
    <div class="left-title">
        <span class="title-name">{{title}}</span>
    </div>
    <div class="left-container">
        <ul class="container-list" v-if="dataList.length > 0">
            <li v-for="item in dataList">
                <singlecolumn :dataObj = "item"></singlecolumn>
            </li>
        </ul>
        <ul class="container-list" v-if="dataList.length < 1">
              <defaultbox></defaultbox>
        </ul>
    </div>
</div>
</template>

<script>
import Singlecolumn from "./single-column";
import Defaultbox from "./default-box";
export default {
  name: "study-box",
  components: { Singlecolumn, Defaultbox },
  data() {
    return {
      dataList: []
    };
  },
  props: {
    title: {
      default: "精选",
      type: String
    },
    type: {
      default: "hc",
      type: String
    }
  },
  watch: {
    type: {
      deep: true,
      handler: function(newVal, oldVal) {
        this.type = newVal;
        this.ruleForm = {
          tag: this.type
        };
        this.$server.getHomeList(this.ruleForm).then(obj => {
          this.dataList = obj.slice(0, 6);
        });
      }
    }
  },
  created() {
    console.log(this.type);
    this.ruleForm = {
      tag: this.type
    };
    this.$server.getHomeList(this.ruleForm).then(obj => {
      this.dataList = obj.slice(0, 6);
    });
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
      .default-box{
        height: 100%;
      }
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

