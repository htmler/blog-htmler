<template>
    <div class="summary-banner">
            <div class="banner-left"></div>
            <div class="right-nav">
                <ul class="nav-list">
                    <li class="list-img" v-for="item in [1,2,3]"></li>
                </ul>
                </div> 
        </div>
</template>

<script>
export default {
  name: "home-banner",
  data() {
    return {};
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
    background-color: orange;
    border-radius: 5px;
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
      }
    }
  }
}
</style>

