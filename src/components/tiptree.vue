<template>
<div class="tiptree-container">
  <div class="container-header">
    <span class="header-title">{{title}}</span>
  </div>
  <div class="container-body">
    <ul class="body-list">
      <li v-for="item in navList">
        <div class="li-squar">
        </div>
        <div class="li-content">{{item.name}}</div>
      </li>
    </ul>
    <div class="body-img">
      <img src="../assets/banner-2.jpg" alt="">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "tiptree",
  data() {
    return {
    };
  },
  props: {
    title: {
      default: "导航",
      required: true,
      type: String
    },
    navList: {
      required: true,
      type: Array
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.tiptree-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .container-header {
    height: 50px;
    border-bottom: 1px solid #efefef;
    line-height: 50px;
    .header-title {
      display: inline-block;
      height: 47px;
      border-bottom: 3px solid #000;
    }
  }
  .container-body {
    padding: 10px 0 10px 35px;
    border-left: 3px solid #efefef;
    box-sizing: border-box;
    flex: 1;
    display: flex;
    flex-direction: column;
    .body-list {
      display: flex;
      flex-direction: column;
      li {
        display: flex;
        justify-content: flex-start;
        color: #fff;
        width: 130%;
        transform: translateX(-55px);
        margin-bottom: 15px;
        transition: all 0.3s;
        cursor: pointer;
        &:hover {
          transform: translateX(-75px);
        }
        .li-squar {
          width: 0;
          height: 0;
          border: 20px solid;
          border-color: transparent #000 transparent transparent;
        }
        .li-content {
          flex: 1;
          background-color: #000;
          color: #fff;
          height: 40px;
          line-height: 40px;
          box-sizing: border-box;
          padding-left: 20px;
        }
      }
    }
    .body-img {
      flex: 1;
      width: 108%;
      background-color: #000;
      border-radius: 5px;
      transform: translateX(-15px);
      height: 150px;
      img{
            width: 100%;
            height: 100%;
          }
    }
  }
}
</style>

