<template>
    <div class="single-colunm-c" @click="jumpTo">
        <div class="column-title">{{item.title}}</div>
        <div class="column-content">
            {{item.desc}}...
        </div>
    </div>
</template>

<script>
export default {
  name: "singlecolumnc",
  data() {
    return {};
  },
  props:{
      item:{
          type:Object
      }
  },
  methods:{
      jumpTo(){
        window.location.href=`/detail/${this.item._id}`;
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.single-colunm-c {
  width: 100%;
  height: 100%;
  font-size: 14px;
  cursor: pointer;
  .column-title {
      color: #000;
      font-weight: bold;
  }
  .column-content{
      padding: 10px 0;
      box-sizing: border-box;
      border-bottom: 1px dotted #efefef;
      color: #999;
  }
}
</style>

