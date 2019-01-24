<template>
    <div class="single-colunm-c">
        <div class="column-title">冷幻觉</div>
        <div class="column-content">
            对于爱旅游的人来说，要是听到有人创办了旅游杂志，可能会以为这人肯定是个...
        </div>
    </div>
</template>

<script>
export default {
  name: "singlecolumnc",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.single-colunm-c {
  width: 100%;
  height: 100%;
  font-size: 14px;
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

