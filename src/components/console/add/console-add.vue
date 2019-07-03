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
                <el-form-item label="文章背景图" prop="imageUrl">
                    <el-upload
                      class="bg-uploader"
                      action="http://39.97.161.87:3000/api/fileUpload"
                      :show-file-list="false"
                      :on-success="handleAvatarSuccess"
                      :before-upload="beforeAvatarUpload">
                      <img v-if="ruleForm.imageUrl" :src="ruleForm.imageUrl" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="上传时间" required>
                    <el-col :span="11">
                    <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>
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
            <el-form-item label="内容" prop="content" v-if="!isAmusement">
                <!-- <el-input type="textarea" v-model="ruleForm.content"></el-input> -->
                <mavonEditor v-model="ruleForm.content" :subfield = 'false' ref="md" @imgAdd="$imgAdd"  @change="changeMavon"/>
                <!-- <div v-if="isAmusement" v-model="ruleForm.content">视频文件</div> -->
            </el-form-item>
            <el-form-item v-if="isAmusement" label="上传资源" prop="mvSrc">
                    <el-upload
                      class="bg-uploader"
                      action="http://39.97.161.87:3000/api/fileUpload"
                      :show-file-list="false"
                      :on-success="handleVideoSuccess">
                      <video v-if="ruleForm.mvSrc" :src="ruleForm.mvSrc" class="avatar"></video>
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
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
  name: "console-add",
  components: { mavonEditor },
  data() {
    return {
      isAmusement:false,
      ruleForm: {
        title: "",
        author:"",
        date1: "",
        delivery: false,
        type: [],
        desc: "",
        content: "",
        imageUrl:'',
        mvSrc:'',
        tag:this.$route.params.type,
        view:0
      },
      rules: {
        title: [
          { required: true, message: "请输入文章名称", trigger: "blur" },
          { min: 0, max: 16, message: "长度在16个字符以内", trigger: "blur" }
        ],
        author: [
          { required: true, message: "请输入文章作者", trigger: "blur" },
          { min: 0, max: 20, message: "长度在 0 到 20 个字符", trigger: "blur" }
        ],
        date1: [
          {
            type: "string",
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
  created(){
    if(this.$route.params.type === 'video' || this.$route.params.type === 'music'){
      this.isAmusement = true;
    }
  },
  methods: {
    handleVideoSuccess(res,file) {
      this.ruleForm.mvSrc = res.imgUrl;
    },
    handleAvatarSuccess(res, file) {
        this.ruleForm.imageUrl = res.imgUrl;
    },
    beforeAvatarUpload(file) { 
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传背景图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
    },
    changeMavon() {},
    $imgAdd() {
      // 第一步.将图片上传到服务器.
      var formdata = new FormData();
      formdata.append("image", $file);
      let res;
      this.img_file[pos] = $file;
      const promise = () => {
        const a = new Promise(resolve => {
        var xhr = new XMLHttpRequest();
        let res;
        xhr.open("POST", "http://39.97.161.87:3000/api/fileUpload", true);
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
            res = JSON.parse(xhr.responseText);
            resolve(res);
          }
        };
        xhr.send(formdata);
      });
      return a;
      };
      promise().then((item) => {
        this.$refs.md.$img2Url(pos, item.imgUrl);
      });
    },
    submitForm(formName) {
      // this.ruleForm.date1 = new Date(this.ruleForm.date1)
      this.$refs[formName].validate(valid => {
        if (valid) {
           this.$server.addFile(this.ruleForm).then(
             obj =>{
               this.$router.push({path:`/console/${this.$route.params.type}`})
             }
           )
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
.bg-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 300px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    height: 178px;
    display: block;
  }
</style>

