<template>
    <div class="column-container">
        <div class="container-top">
          <img src="../assets/bg-column.jpg" alt="">
        </div>
        <div class="container-bottom">
            <div class="bottom-title">
                <span class="title-tip">原创</span>
                <span class="title-txt">如何使用css</span>
                <span class="title-time">2018-09-05</span>
            </div>
            <div class="bottom-content">
                <span class="content-txt">简单说就是aaaaaaaaaaaaaaaaaaaaaaaaa</span>
                <span class="content-more">查看原文 -></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "single-column",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.column-container {
  width: 100%;
  height: 100%;
  cursor: pointer;
  &:hover{
    .container-top{
      img{
        transform: scale(1.2);
      }
    }
  }
  .container-top {
    width: 100%;
    height: 75%;
    border-radius: 5px;
    overflow: hidden;
    img{
      width: 100%;
      height: 100%;
      transition: all 0.3s;
    }
  }
  .container-bottom {
    box-sizing: border-box;
    padding: 5px;
    .bottom-title {
      font-size: 14px;
      padding-bottom: 5px;
      .title-tip {
        background-color: red;
        border-radius: 10px;
        color: #fff;
        padding: 1px 10px;
      }
      .title-txt {
        font-weight: bold;
        color: #000;
      }
      .title-time {
        float: right;
        font-size: 12px;
      }
    }
    .bottom-content {
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      .content-txt {
        width: 70%;
        word-break: break-all;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .content-more {
        color: #04ac71;
        cursor: pointer;
      }
    }
  }
}
</style>

