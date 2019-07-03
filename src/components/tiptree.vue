<template>
<div class="tiptree-container">
  <div class="container-header">
    <span class="header-title">{{title}}</span>
  </div>
  <div class="container-body">
    <ul class="body-list">
      <li class="list-show" v-for="(item,index) in navList" @click="reload(item,index)" ref="lilist">
        <div class="li-squar">
        </div>
        <div class="li-content">{{item.name}}</div>
      </li>
    </ul>
    <div class="body-img">
      <img src="https://client-cq.oss-cn-beijing.aliyuncs.com/1.jpg" alt="">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "tiptree",
  data() {
    return {
      index:0,
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
  },
  methods:{
    reload(item,index){
      this.index = index;
      this.$refs.lilist[index].style.transform = 'translateX(-75px)';
      this.$emit('showdata',item.tag)
    }
  },
  watch: {
    index: {
      deep: true,
      handler: function(newVal, oldVal) {
        this.$refs.lilist[oldVal].style.transform = 'translateX(-55px)';
      }
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
      .list-show {
        display: flex;
        justify-content: flex-start;
        color: #fff;
        width: 130%;
        transform: translateX(-55px);
        margin-bottom: 15px;
        transition: all 0.3s;
        cursor: pointer;
        &:nth-of-type(1){
          transform: translateX(-75px);
        }
        .li-squar {
          width: 0;
          height: 0;
          border: 20px solid;
          border-color: transparent #ECDA78 transparent transparent;
        }
        .li-content {
          flex: 1;
          background-color: #ECDA78;
          color: #333;
          font-weight: bold;
          height: 40px;
          line-height: 40px;
          box-sizing: border-box;
          padding-left: 20px;
        }
      }
      .list-show:nth-of-type(2){
        .li-squar {
          border-color: transparent #CDA198 transparent transparent;
        }
        .li-content {
          background-color: #CDA198;
        }
      }
      .list-show:nth-of-type(3){
        .li-squar {
          border-color: transparent #7FE7DC transparent transparent;
        }
        .li-content {
          background-color: #7FE7DC;
        }
      }
      .list-show:nth-of-type(4){
        .li-squar {
          border-color: transparent #EEA08C transparent transparent;
        }
        .li-content {
          background-color: #EEA08C;
        }
      }
      .list-show:nth-of-type(5){
        .li-squar {
          border-color: transparent #F2B96A transparent transparent;
        }
        .li-content {
          background-color: #F2B96A;
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

