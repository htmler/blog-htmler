<template>
    <div class="banner-container">
          <div class="container-left-img"><img src="../assets/larnten.png" alt=""></div>
          <div class="container-right-img"><img src="../assets/country-logo.png" alt=""></div>
          <div class="container-content">
            <div class="content-header">
              <span class="header-name">{{title.ch}}</span> <span class="header-line">/</span> <span class="header-transition">{{title.en}}</span>
            </div>
            <div class="content-tip">
              {{content}}
            </div>
          </div>
        </div>
</template>

<script>
export default {
  name: "header-nav",
  data() {
    return {};
  },
  props:{
      title:{
          type:Object,
          required: true,
      },
      content:{
          type:String,
          required: true
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.banner-container {
  width: 100%;
  height: 100%;
  background-color: #04896C;
  // background-image:linear-gradient(to right,#ECDA78,#F2B96A);
  position: relative;
  .container-content {
    width: 1200px;
    margin: 0 auto;
    color: #fff;
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    padding: 0 50px;
    .content-header {
      font-size: 36px;
      font-weight: bold;
    }
    .content-tip {
      font-size: 14px;
      color: #fff;
      padding-top: 10px;
    }
  }
  .container-left-img {
    width: 114px;
    height: 84px;
    position: absolute;
    top: 0;
    left: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .container-right-img {
    width: 229px;
    height: 90px;
    position: absolute;
    right: 0;
    top: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

