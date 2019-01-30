<template>
    <div class="column-container">
      <el-header style="text-align: right; font-size: 20px;background-color: #fff;color:#999">
        <router-link to = "/console/add/frame">
      <el-button>新增</el-button>
      </router-link>
    </el-header>
        <el-table :data="tableData">
        <el-table-column prop="title" label="标题" width="140">
        </el-table-column>
        <el-table-column prop="date1" label="时间" width="120">
        </el-table-column>
        <el-table-column prop="author" label="作者" width = "120">
        </el-table-column>
        <el-table-column prop="desc" label="简介" width = "660">
        </el-table-column>
        <el-table-column prop="handle" label="操作">
            <template slot-scope="scope">
                     <el-button @click="showEdit(scope.$index)" type="text" size="small">编辑</el-button>
            </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
export default {
  name: "console-frame",
  data() {
    return {
      tableData: []
    };
  },
  methods:{
      showEdit(i){
          this.$router.push({name:'edit',params:{id:this.tableData[i]._id}})
      }
  },
  created(){
      this.ruleForm = {
      ...this.ruleForm,
      tag:'frame'
    }
    this.$server.getFileList(this.ruleForm).then(obj => {
      this.tableData = obj;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>

