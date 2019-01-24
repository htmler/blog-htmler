<template>
    <div class="detail-hot-container">
        <div class="container-title">
            <div class="title-txt">热门</div>
        </div>
        <div class="container-list">
            <div class="list-body" v-for="item of hotList">
                <singlecolumnc></singlecolumnc>
            </div>
        </div>
    </div>
</template>

<script>
import Singlecolumnc from './single-column-c'
export default {
  name: "detail-hot",
  components:{Singlecolumnc},
  data() {
    return {
        hotList:[
            {name:'xxx',id:1},
            {name:'xxxx',id:2}
        ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.detail-hot-container {
  width: 100%;
  height: 100%;
  .container-title{
      border-bottom: 1px solid #efefef;
      box-sizing: border-box;
      overflow: hidden;
      .title-txt{
        height: 100%;
        padding: 10px 0;
        float: left;
        font-size: 18px;
        font-weight: bold;
        color: #000;
        border-bottom: 2px solid #000;
        box-sizing: border-box;
      }
  }
  .container-list{
      margin-top: 20px;
      .list-body{
          margin-bottom: 10px;
      }
  }
}
</style>

