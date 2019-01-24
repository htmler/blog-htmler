<template>
    <div class="column-container">
        <div class="container-left">
            <img src="../assets/d_avatar.png" alt="">
        </div>
        <div class="container-right">
            <div class="right-title">
                <span class="title-name">张三丰</span>
                <span class="title-time">2019-03-05</span>
            </div>
            <div class="right-content">
                张三丰你说的对！张三丰你说的对！张三丰你说的对！张三丰你说的对！张三丰你说的对！张三丰你说的对！张三丰你说的对！张三丰你说的对！张三丰你说的对！张三丰你说的对！张三丰你说的对！张三丰你说的对！    
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "discuss-column",
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
  display: flex;
  align-items: center;
  .container-left{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      img{
          width: 100%;
          height: 100%;
      }
  }
  .container-right{
      margin-left: 15px;
      width: 90%;
      .right-title{
          font-size: 14px;
          .title-name{
              color: #04ac71;
          }
          .title-time{
              padding-left: 10px;
          }
      }
      .right-content{
          padding-top: 5px;
          font-size: 14px;
      }
  }
}
</style>

