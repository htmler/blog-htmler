<template>
<div class="nav-container">
  <ul class="container-list">
      <li v-for = "item in navList">{{item.name}}</li>
  </ul>
</div>
</template>

<script>
export default {
  name: "typenav",
  data() {
    return {
    };
  },
  props: {
    navList: {
      required: true,
      type: Array
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.nav-container{
    width: 100%;
    height: 100%;
    .container-list{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        li{
            width:120px;
            text-align: center;
            box-sizing: border-box;
            border-right: 1px solid #efefef;
            color: #666;
            cursor: pointer;
            font-size: 14px;
            &:hover{
                background-color:#04ac71;
                color: #fff;
            }
            &:nth-of-type(1){
                border-left: 1px solid #efefef;
            }
        }
    }
}
</style>

