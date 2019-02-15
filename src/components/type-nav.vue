<template>
<div class="nav-container">
  <ul class="container-list">
      <li v-for = "(item,index) in navList" @click="changeNav(item,index)" ref="navlist">{{item.name}}</li>
  </ul>
</div>
</template>

<script>
export default {
  name: "typenav",
  data() {
    return {
        index:0
    };
  },
  props: {
    navList: {
      required: true,
      type: Array
    }
  },
  methods:{
      changeNav(item,index){
          this.index = index
          this.$refs.navlist[index].style.backgroundColor = '#04ac71';
          this.$refs.navlist[index].style.color = '#fff';
          this.$emit('changeType',item.tag)
      }
  },
  watch: {
    index: {
      deep: true,
      handler: function(newVal, oldVal) {
        this.$refs.navlist[oldVal].style.backgroundColor = '#fff';
        this.$refs.navlist[oldVal].style.color = '#666';
      }
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
                background-color:#04ac71 !important;
                color: #fff !important;
            }
            &:nth-of-type(1){
                border-left: 1px solid #efefef;
                background-color:#04ac71;
                color: #fff;
            }
        }
    }
}
</style>

