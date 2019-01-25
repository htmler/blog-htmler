<template>
    <div class="summary-banner">
            <div class="banner-left">
              <img class="main-img" src="../assets/banner-1.jpg" alt="">
            </div>
            <div class="right-nav">
                <ul class="nav-list">
                    <li class="list-img" v-for="(item,index) in bannerArray" @mouseover="showBanner" @mouseout="startGrow">  
                      <img class="nav-img" :src="item.imgurl" alt="">
                    </li>
                </ul>
                </div> 
        </div>
</template>

<script>
export default {
  name: "home-banner",
  data() {
    return {
      timer:null,
      count:1,
      bannerArray:[
        { name: 'xxx',imgurl:require('../assets/banner-1.jpg')},
        { name: 'xxx',imgurl:require('../assets/banner-2.jpg')},
        { name: 'xxx',imgurl:require('../assets/banner-3.jpg')},
      ]
    };
  },
  methods:{
    showBanner(e){
      let mainImg = document.getElementsByClassName('main-img')[0];
      mainImg.src = e.target.src;
      clearInterval(this.timer);
      // console.log(e.target.src);
    },
    startGrow(e){
      this.timer = setInterval(() => {
      let mainImg = document.getElementsByClassName('main-img')[0];
      let navImg = document.getElementsByClassName('nav-img');
      this.count++;
      if(this.count > 3){
        this.count  = 1;
      }
      mainImg.src = require(`../assets/banner-${this.count}.jpg`);
    }, 3000);
    }
  },
  created(){
    this.timer = setInterval(() => {
      let mainImg = document.getElementsByClassName('main-img')[0];
      let navImg = document.getElementsByClassName('nav-img');
      this.count++;
      if(this.count > 3){
        this.count  = 1;
      }
      mainImg.src = require(`../assets/banner-${this.count}.jpg`);
    }, 3000);
  },
  destroyed(){
    clearInterval(this.timer);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.summary-banner {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .banner-left {
    width: 80%;
    height: 100%;
    border-radius: 5px;
    cursor: pointer;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .right-nav {
    width: 20%;
    height: 100%;
    box-sizing: border-box;
    padding-left: 20px;
    .nav-list {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .list-img {
        width: 100%;
        height: 30%;
        background-color: #000;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s;
        &:hover{
          transform: scale(1.2);
        }
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>

