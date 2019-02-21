<template>
    <div class="column-container">
        <div class="container-left">
            <img :src="coldata.avatar || '../assets/d_avatar.png'" alt="">
        </div>
        <div class="container-right">
            <div class="right-title">
                <span class="title-name">{{coldata.username}}</span>
                <span class="title-time">{{coldata.createTime}}</span>
            </div>
            <div class="right-content">
                {{coldata.content}}    
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "discuss-column",
  data() {
    return {};
  },
  props: {
    coldata: {
      type: Object,
      required: true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.column-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  .container-left {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .container-right {
    margin-left: 15px;
    width: 90%;
    .right-title {
      font-size: 14px;
      .title-name {
        color: #04ac71;
      }
      .title-time {
        padding-left: 10px;
      }
    }
    .right-content {
      padding-top: 5px;
      font-size: 14px;
    }
  }
}
</style>

