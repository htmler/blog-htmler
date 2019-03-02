<template>
<div class="home">
  <div class="header">
    <div class="header-container">
      <div class="header-left">
      <div class="left-img">CQshare</div>
    </div>
    <div class="header-right">
      <ul class="right-list">
        <li v-for="item in array"><router-link :to = "item.link">{{item.name}}</router-link></li>
      </ul>
    </div>
    <div class="header-handle" v-if="!$store.state.Token.isLogin">
      <ul class="handle-list">
        <li @click="dialogVisible = true">注册</li>
        <li @click="loginVisible = true">登录</li>
      </ul>
    </div>
    <div class="header-info" v-if="$store.state.Token.isLogin">
      <ul class="handle-list">
        <li>
          <el-popover
            placement="top"
            width="160"
            trigger="hover"
            v-model="visible2">
            <p>是否注销</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
              <el-button type="primary" size="mini" @click="loginOut">确定</el-button>
            </div>
            <el-button slot="reference" @click="jumpTo">欢迎{{$store.state.Token.username}}</el-button>
          </el-popover>
        </li>
      </ul>
    </div>
    <!-- <div v-if="isroot" class="header-console"><router-link to = "/console" target = "_blank">后台管理</router-link></div> -->
    </div>
  </div>
<router-view/>
<div class="footer">
  <div class="footer-nav">
    <div class="nav-a"><router-link to = "/home">CQshare</router-link></div>
  </div>
  <!-- <div class="font-info"></div> -->
</div>
<el-dialog
  title="注册"
  :visible.sync="dialogVisible"
  width="30%">
  <div class="register-form">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item label="头像" prop="avatar">
            <el-upload
              class="avatar-uploader"
              action="http://39.97.161.87:3000/api/fileUpload"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="ruleForm.avatar" :src="ruleForm.avatar" class="avatar" style="width: 80px;height: 80px;border-radius: 50%;">
              <i style="width:100px;height:100px;border:1px solid #efefef;line-height:100px;" v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </el-form-item>
    </el-form>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="register">确 定</el-button>
  </span>
</el-dialog>
<el-dialog
  title="登录"
  :visible.sync="loginVisible"
  width="30%">
  <div class="register-form">
    <el-form :model="loginForm" :rules="loginrules" ref="loginForm" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
            <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
    </el-form>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="loginVisible = false">取 消</el-button>
    <el-button type="primary" @click="login">确 定</el-button>
  </span>
</el-dialog>
</div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      dialogVisible: false,
      loginVisible: false,
      isroot: false,
      visible2: false,
      array: [
        { name: "首页", id: 1, link: "/home" },
        { name: "技术贴", id: 2, link: "/technique" },
        { name: "小酒馆", id: 3, link: "/continent" },
        { name: "音乐电影", id: 4, link: "/amusement" },
        { name: "资源分享", id: 5, link: "/resourse" },
        { name: "发现", id: 6, link: "/discovery" },
        { name: "留言", id: 7, link: "/discuss" }
      ],
      ruleForm: {
        username: "",
        password: "",
        avatar: ""
      },
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 0, max: 20, message: "长度在20个字符以内", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 16, message: "长度在 6 到 16 个字符", trigger: "blur" }
        ]
      },
      loginrules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 0, max: 20, message: "长度在20个字符以内", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 16, message: "长度在 6 到 16 个字符", trigger: "blur" }
        ]
      }
    };
  },
  created() {},
  methods: {
    jumpTo(){
      if(this.$store.state.Token.username === 'system'){
        this.$router.push({path:`/console/mine`})
      }
    },
    handleAvatarSuccess(res, file) {
      this.ruleForm.avatar = res.imgUrl;
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传背景图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    register() {
      this.$server.register(this.ruleForm).then(obj => {
        if (obj.status) {
          this.dialogVisible = false;
        } else {
          this.$message.error(obj.errMessage);
          this.$refs["ruleForm"].resetFields();
        }
      });
    },
    login() {
      this.$server.login(this.loginForm).then(obj => {
        if (obj.status) {
          //拿到返回的token和username，并存到store
          let token = obj.token;
          let username = obj._doc.username;
          this.$store.dispatch("UserLogin", token);
          this.$store.dispatch("UserName", username);
          this.loginVisible = false;
          this.$store.state.Token.isLogin = true;
        } else {
          this.$refs["loginForm"].resetFields();
          this.$message.error(obj.errMessage);
        }
      });
    },
    loginOut() {
      this.$store.dispatch("UserLogout");
      if (!this.$store.state.Token.token) {
        this.$store.state.Token.isLogin = false;
        this.$message({
          type: "success",
          message: "注销成功"
        });
      } else {
        this.$message({
          type: "info",
          message: "注销失败"
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home {
  margin: 80px 0 0;
  background-color: #eaeaea;
  .header {
    width: 100%;
    position: fixed;
    top: 0;
    background-color: #333;
    color: #fff;
    z-index: 99;
    .header-container {
      display: flex;
      height: 80px;
      justify-content: flex-start;
      align-items: center;
      box-sizing: border-box;
      width: 1200px;
      margin: 0 auto;
      position: relative;
      .header-left {
        font-size: 32px;
      }
      .header-right {
        .right-list {
          display: flex;
          justify-content: flex-start;
          padding: 0 10px;
          li {
            height: 35px;
            font-size: 14px;
            color: #999;
            text-align: center;
            line-height: 35px;
            border-radius: 5px;
            padding: 0 20px;
            cursor: pointer;
            &:hover {
              color: #fff;
            }
          }
        }
      }
      .header-handle {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        font-size: 14px;
        color: #999;
        box-sizing: border-box;
        text-align: center;
        .handle-list {
          display: flex;
          li {
            cursor: pointer;
            width: 50px;
            &:hover {
              color: #fff;
            }
          }
        }
      }
      .header-info {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        font-size: 14px;
        color: #999;
        box-sizing: border-box;
        text-align: center;
        .handle-list {
          display: flex;
          li {
            width: 200px;
            text-align: right;
          }
        }
      }
      .header-console {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        font-size: 14px;
        color: #999;
        border: 1px solid #999;
        width: 100px;
        height: 40px;
        box-sizing: border-box;
        text-align: center;
        line-height: 40px;
        cursor: pointer;
        &:hover {
          color: #fff;
        }
      }
    }
  }
  .footer {
    position: relative;
    width: 100%;
    // height: 200px;
    bottom: 0;
    background-color: #292929;
    .footer-nav {
      height: 60px;
      background-color: #343539;
      color: #999;
      .nav-a{
        height: 100%;
        width: 1200px;
        margin: 0 auto;
        line-height: 60px;
        font-size: 36px;
        color: #fff;
      }
    }
  }
  .show-form {
    .el-upload {
      width: 100px;
      height: 100px;
      border: 1px solid #efefef;
      border-radius: 3px;
      line-height: 100px;
    }
  }
}
</style>

