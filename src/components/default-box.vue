<template>
  <div class="default-box">
    <div class="box-img">
      <img src="../assets/nodata.png" alt>
    </div>
    <div class="box-txt"><span>暂无数据</span></div>
  </div>
</template>

<script>
export default {
  name: "defaultBox",
  data() {
    return {
      headerTitle: {
        ch: "小酒馆",
        en: "Continent"
      },
      headerContent: "你好，再见",
      showList: [
        { name: "HTML+CSS", id: 0 },
        { name: "Javascript", id: 1 },
        { name: "前端框架", id: 2 },
        { name: "Nodejs", id: 3 },
        { name: "其他", id: 4 }
      ],
      techniqueList: [
        { name: "xx", id: 0 },
        { name: "xx", id: 1 },
        { name: "xx", id: 2 },
        { name: "xx", id: 3 },
        { name: "xx", id: 4 }
      ]
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.default-box{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #f7f7f7;
    height: 300px;
    .box-img{
        width: 100px;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>

