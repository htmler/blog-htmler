<template>
    <div class="column-container">
      <el-header style="text-align: right; font-size: 20px;background-color: #fff;color:#999">
        <router-link to = "/console/add/hc">
      <el-button>新增</el-button>
      </router-link>
    </el-header>
        <el-table :data="tableData" border :cell-style="cellStyle" :header-cell-style="rowClass">
        <el-table-column prop="title" label="标题" width="140">
        </el-table-column>
        <el-table-column prop="date1" label="时间" width="120">
        </el-table-column>
        <el-table-column prop="author" label="作者" width = "120">
        </el-table-column>
        <el-table-column prop="desc" label="简介" width = "660">
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
        <el-button @click="showEdit(scope.$index)" type="text" size="small">编辑</el-button>
        <el-popover
                        placement="top"
                        width="160"
                        v-model="visible">
                        <p>确定删除该条数据吗？</p>
                        <div style="text-align: right; margin: 0">
                            <el-button @click="remove(scope.$index)" type="text" size="small">删除</el-button>
                        </div>
                        <el-button slot="reference" type="text" size="small">删除</el-button>
                      </el-popover>
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
      tableData: [],
      visible : false
    };
  },
  methods: {
    showEdit(i) {
      this.$router.push({
        name: "edit",
        params: { id: this.tableData[i]._id }
      });
    },
    cellStyle() {
      return "text-align:center";
    },
    rowClass() {
      return "text-align:center";
    },
    remove(i) {
      let params = {
        id: this.tableData[i]._id
      };
      this.$server.removeFile(params).then(obj => {
        this.$server.getFileList(this.ruleForm).then(obj => {
          this.tableData = obj;
        });
      });
    }
  },
  created() {
    this.ruleForm = {
      ...this.ruleForm,
      tag: "hc"
    };
    this.$server.getFileList(this.ruleForm).then(obj => {
      this.tableData = obj;
    });
  }
};
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>

