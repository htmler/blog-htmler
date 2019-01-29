<template>
    <div class="column-container">
        <el-table :data="tableData">
        <el-table-column prop="title" label="标题" width="140">
        </el-table-column>
        <el-table-column prop="date1" label="时间" width="120">
        </el-table-column>
        <el-table-column prop="author" label="作者" width = "120">
        </el-table-column>
        <el-table-column prop="content" label="简介" width = "660">
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <router-link to = "/console/edit">
        <el-button type="text" size="small">编辑</el-button>
                </router-link>
      </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
export default {
  name: "console-hc",
  data() {
    return {
      tableData:[],
    };
  },
  created() {
    this.$server.getFileList(this.ruleForm).then(obj => {
      this.tableData = obj;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>

