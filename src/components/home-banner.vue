<template>
    <div class="summary-banner">
            <div class="banner-left">
              <router-link :to = "{name:'detail',params:{id:bannerList[count]._id}}">
              <img class="main-img" :src="bannerList[count].imageUrl" alt="">
              </router-link>
            </div>
            <div class="right-nav">
                <ul class="nav-list">
                    <li class="list-img" v-for="(item,index) in bannerList" @mouseover="showBanner(item,index)" @mouseout="startGrow">  
                          <router-link :to = "{name:'detail',params:{id:bannerList[index]._id}}">
                              <img class="nav-img" v-if="item" :src="bannerList[index].imageUrl" alt="">
                          </router-link>
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
      timer: null,
      count: 0
    };
  },
  props: {
    bannerList: {
      type: Array
    }
  },
  methods: {
    showBanner(e, index) {
      this.count = index;
      clearInterval(this.timer);
    },
    startGrow(e) {
      this.timer = setInterval(() => {
        this.count++;
        if (this.count > 2) {
          this.count = 0;
        }
      }, 3000);
    }
  },
  created() {
    this.timer = setInterval(() => {
      this.count++;
      if (this.count > 2) {
        this.count = 0;
      }
    }, 3000);
  },
  destroyed() {
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
    img {
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
        &:hover {
          transform: scale(1.2);
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>

