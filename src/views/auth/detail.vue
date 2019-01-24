<template>
  <div class="detail-container">
       <div class="container-header"></div>
       <div class="container-img">
           <div class="img-txt">
               <div class="img-title">亲爱的她</div>
                <div class="img-name-time">
                    <span class="name-txt">夏哲</span>
                    <span class="name-line">|</span>
                    <span class="name-time">3天前</span>
                </div>
           </div>
           <div class="img-cover"></div>
       </div>
       <div class="container-body">
           <div class="body-left">
               <detailcontent></detailcontent>
           </div>
           <div class="body-right">
               <detailhot></detailhot>
           </div>
       </div>
  </div> 
</template>

<script>
import Detailcontent from '../../components/detail-content.vue'
import Detailhot from '../../components/detail-hot'
export default {
  name: "detail",
  components:{Detailcontent, Detailhot},
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.detail-container {
  .container-header {
    position: fixed;
    width: 100%;
    height: 100%;
    height: 80px;
    top: 0;
    left: 0;
    background-color: #fff;
    border-bottom: 1px solid #efefef;
  }
  .container-img {
    margin-top: 80px;
    height: 500px;
    background: url(../../assets/bg-column.jpg) no-repeat;
    background-size: 100%;
    position: relative;
    .img-cover {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.05) 5%,
        rgba(0, 0, 0, 0.85) 100%
      );
    }
    .img-txt {
      position: absolute;
      left: 5%;
      bottom: 10%;
      color: #fff;
      z-index: 99;
      .img-title{
          font-size: 32px;
          font-weight: bold;
          margin-bottom: 10px;
      }
      .img-name-time{
          color: rgba($color: #fff, $alpha: 0.7);
          .name-line{
              padding: 0 10px;
              transform: scale(0.5);
              display: inline-block;
          }
      }
    }
  }
  .container-body{
      display: flex;
      justify-content: flex-start;
      width: 1200px;
      margin: 0 auto;
      .body-left{
          width: 70%;
          box-sizing: border-box;
          padding: 40px 40px 40px 0;
          border-right: 1px solid #efefef;
      }
      .body-right{
          width: 30%;
          box-sizing: border-box;
          padding: 40px;
      }
  }
}
</style>

