<template>
<div class="home">
  <div class="header">
    <div class="header-container">
      <div class="header-left">
      <div class="left-img">陈前</div>
    </div>
    <div class="header-right">
      <ul class="right-list">
        <li v-for="item in array"><router-link :to = "item.link">{{item.name}}</router-link></li>
      </ul>
    </div>
    <div class="header-console"><router-link to = "/console">后台管理</router-link></div>
    </div>
  </div>
<router-view/>
<div class="footer">
  <div class="footer-nav"></div>
  <div class="font-info"></div>
</div>
</div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      array: [
        { name: "首页", id: 1, link: "/home" },
        { name: "技术贴", id: 2, link: "/technique" },
        { name: "小酒馆", id: 3, link: "/continent" },
        { name: "音乐电影", id: 4, link: "/amusement" },
        { name: "资源分享", id: 5, link: "/resourse" },
        { name: "发现", id: 6, link: "/discovery" },
        { name: "留言", id: 7, link: "/discuss" },
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home {
  margin: 80px 0 0;
  background-color: #eaeaea;
  .header {
    width: 100%;
    position: fixed;
    top: 0;
    background-color: #333;
    color: #fff;
    z-index: 99;
    .header-container{
      display: flex;
      height: 80px;
      justify-content: flex-start;
      align-items: center;
      box-sizing: border-box;
      width: 1200px;
      margin: 0 auto;
      position: relative;
      .header-left {
      font-size: 32px;
    }
    .header-right {
      .right-list {
        display: flex;
        justify-content: flex-start;
        padding: 0 10px;
        li {
          height: 35px;
          font-size: 14px;
          color: #999;
          text-align: center;
          line-height: 35px;
          border-radius: 5px;
          padding: 0 20px;
          cursor: pointer;
          &:hover {
            color: #fff;
          }
        }
      }
    }
    .header-console{
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      font-size: 14px;
      color: #999;
      border: 1px solid #999;
      width: 100px;
      height: 40px;
      box-sizing: border-box;
      text-align: center;
      line-height: 40px;
      cursor: pointer;
      &:hover{
        color: #fff;
      }
    }
    }
  }
  .footer {
    position: relative;
    width: 100%;
    height: 200px;
    bottom: 0;
    background-color: #292929;
    .footer-nav {
      height: 60px;
      background-color: #343539;
      color: #999;
    }
  }
}
</style>

