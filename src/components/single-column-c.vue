<template>
    <div class="single-colunm-c">
        <div class="column-title">冷幻觉</div>
        <div class="container-content">
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
.detail-hot-container {
  width: 100%;
  height: 100%;
  cursor: pointer;
  &:hover {
    .container-title {
      color: #04ac71;
    }
  }
  .container-title {
    font-size: 18px;
    margin-bottom: 15px;
  }
  .container-img {
    width: 100%;
    height: 140px;
    overflow: hidden;
    background-color: gray;
    border-radius: 5px;
    margin-bottom: 15px;
    img {
      transition: all 0.5s;
      width: 100%;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
  .container-bottom {
    box-sizing: border-box;
    padding: 5px;
    .bottom-summary {
      margin-bottom: 15px;
      font-size: 14px;
    }
    .bottom-more {
      color: #04ac71;
      font-size: 14px;
    }
  }
}
</style>

