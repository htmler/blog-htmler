<template>
<router-link :to = "{name:'detail',params:{id:coldata._id}}" target="_blank"> 
    <div class="column-container">
        <div class="container-title">{{coldata.title}}</div>
        <div class="container-img">
            <img :src="coldata.imageUrl" alt="">
        </div>
        <div class="container-bottom">
            <div class="bottom-summary">
                <span>{{coldata.desc}}</span>
            </div>
            <div class="bottom-more">
                <span>阅读全文 ></span>
            </div>
        </div>
    </div>
</router-link>
</template>

<script>
export default {
  name: "single-column",
  data() {
    return {};
  },
  props:{
      coldata:{
          type:Object,
          required: true,
      },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.column-container {
  width: 100%;
  height: 100%;
  cursor: pointer;
  &:hover {
    .container-title {
      color: #04ac71;
    }
  }
  .container-title {
    font-size: 18px;
    margin-bottom: 15px;
  }
  .container-img {
    width: 100%;
    height: 140px;
    overflow: hidden;
    background-color: gray;
    border-radius: 5px;
    margin-bottom: 15px;
    img {
      transition: all 0.5s;
      width: 100%;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
  .container-bottom {
    box-sizing: border-box;
    padding: 5px;
    .bottom-summary {
      margin-bottom: 15px;
      font-size: 14px;
    }
    .bottom-more {
      color: #04ac71;
      font-size: 14px;
    }
  }
}
</style>

