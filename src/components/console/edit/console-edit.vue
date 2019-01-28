<template>
    <div class="column-container">
        <div class="container-form">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="文章名称" prop="title">
                    <el-input v-model="ruleForm.title"></el-input>
                </el-form-item>
                <el-form-item label="文章作者" prop="author">
                    <el-input v-model="ruleForm.author"></el-input>
                </el-form-item>
                <el-form-item label="上传时间" required>
                    <el-col :span="11">
                    <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                    </el-col>
                    <el-col :span="11">
                    </el-col>
                </el-form-item>
                <el-form-item label="设置为轮播" prop="delivery">
                    <el-switch v-model="ruleForm.delivery"></el-switch>
                </el-form-item>
                <el-form-item label="文章标签" prop="type">
                    <el-checkbox-group v-model="ruleForm.type">
                    <el-checkbox label="原创" name="type"></el-checkbox>
                    <el-checkbox label="转载" name="type"></el-checkbox>
                    <el-checkbox label="收录" name="type"></el-checkbox>
                    <el-checkbox label="技术" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
            <el-form-item label="简介" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item label="内容" prop="content">
                <!-- <el-input type="textarea" v-model="ruleForm.content"></el-input> -->
                <mavonEditor v-model="ruleForm.content" :subfield = 'false' ref="md" @imgAdd="$imgAdd"  @change="changeMavon"/>
            </el-form-item>
            <el-form-item> 
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
    </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
  name: "console-edit",
  components: { mavonEditor },
  data() {
    return {
      ruleForm: {
        title: "",
        author:"",
        date1: "",
        delivery: false,
        type: [],
        desc: "",
        content: ""
      },
      rules: {
        title: [
          { required: true, message: "请输入文章名称", trigger: "blur" },
          { min: 0, max: 20, message: "长度在20个字符以内", trigger: "blur" }
        ],
        author: [
          { required: true, message: "请输入文章作者", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个文章标签",
            trigger: "change"
          }
        ],
        desc: [{ required: true, message: "请填写简介内容", trigger: "blur" }]
      }
    };
  },
  methods: {
    changeMavon() {},
    $imgAdd() {},
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
           console.log(this.$store.state.fileList.show);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.column-container{
    width: 800px;
    margin: 0 auto;
}
</style>

