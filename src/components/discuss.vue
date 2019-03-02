<template>
<div class="spk-discuss">
  <div class="discuss-send" @click="showModal">+</div>
    <div class="discuss-banner">
        <headernav :title = "headerTitle" :content = "headerContent"></headernav>
    </div>
    <div class="discuss-body">
        <div class="body-container">
            <div class="container-time">
                <div class="time-year">welcome</div>
                <div class="time-date">吐槽</div>
            </div>
            <div class="container-discuss">
                <div class="discuss-user" v-for="item in techniqueList">
                    <div class="user-show">
                      <discusscolumn :coldata = "item"></discusscolumn>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="discuss-show" :class="isModal ? 'discuss-show-active' : ''">
      <div class="show-modal">
        <div class="modal-close" @click="closeModal">x</div>
        <div class="modal-title">
          来说点什么吧...
        </div>
        <div class="modal-content">
          <div class="content-area">
            <textarea v-model="discussForm.content"></textarea>
          </div>
          <div class="content-btn" @click="submit">
            <div class="btn-submit"><i v-if="loading" class="el-icon-loading"></i>提交</div>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import Headernav from "./header-nav";
import Singlecolumnb from "./single-column-b";
import Discusscolumn from "./discuss-column";
export default {
  name: "discuss",
  components: { Headernav, Singlecolumnb, Discusscolumn },
  data() {
    return {
      isModal: false,
      loading: false,
      discussForm: {
        username: "",
        avatar: "",
        createTime: "",
        content: ""
      },
      headerTitle: {
        ch: "留言",
        en: "Message"
      },
      headerContent: "欢迎留言",
      techniqueList: []
    };
  },
  methods: {
    showModal() {
      this.isModal = this.isModal === false ? true : false;
    },
    closeModal() {
      this.isModal = false;
    },
    submit() {
      if (this.$store.state.Token.token) {
        let params = {
          username: this.$store.state.Token.username
        };
        this.$server.getUserInfo(params).then(
          obj => {
            let date = new Date();
            let strDate = date
              .toLocaleString()
              .replace(/[年月]/g, "-")
              .replace(/[日上下午]/g, "");
            this.discussForm = {
              ...this.discussForm,
              username: obj.username,
              avatar: obj.avatar,
              createTime: strDate
            };
              this.$server.addDiscuss(this.discussForm).then(obj => {
                this.isModal = false;
                this.$server.getDiscussList().then(obj => {
                  this.techniqueList = obj;
                  this.techniqueList.reverse();
                });
                this.$message({
                  type: "success",
                  message: "评论成功"
                });
              });
          },
          err => {
            this.$message({
              type: "err",
              message: "登录失效，请重新登录"
            });
          }
        );
      } else {
        this.$message({
          type: "error",
          message: "您还没有登录，无法发表评论"
        });
      }
    }
  },
  created() {
    this.$server.getDiscussList().then(obj => {
      this.techniqueList = obj;
      this.techniqueList.reverse();
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.spk-discuss {
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  padding-bottom: 20px;
  .discuss-send {
    position: fixed;
    right: 10px;
    top: 50%;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #04ac71;
    color: #fff;
    font-size: 30px;
    z-index: 999;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
  }
  .discuss-banner {
    width: 100%;
    height: 180px;
    position: relative;
  }
  .discuss-body {
    width: 1200px;
    margin: 20px auto 0;
    .body-container {
      width: 100%;
      position: relative;
      .container-time {
        position: absolute;
        left: 0;
        top: 0;
        width: 80px;
        height: 80px;
        text-align: center;
        .time-year {
          width: 100%;
          height: 25px;
          line-height: 25px;
          background-color: #04ac71;
          color: #fff;
        }
        .time-date {
          width: 100%;
          height: 55px;
          line-height: 55px;
          font-size: 26px;
          font-weight: bold;
          background-color: #efefef;
        }
      }
      .container-discuss {
        margin-left: 40px;
        padding-left: 85px;
        box-sizing: border-box;
        border-left: 1px solid #efefef;
        .discuss-user {
          padding: 20px 0;
          box-sizing: border-box;
          border-bottom: 1px dotted #efefef;
          border-radius: 3px;
          .user-show {
            width: 100%;
            height: 80px;
            background-color: aliceblue;
            border-radius: 3px;
            padding-left: 20px;
            box-sizing: border-box;
            color: #666;
            overflow: hidden;
          }
        }
      }
    }
  }
  .discuss-show {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: rgba($color: #333, $alpha: 1);
    color: #fff;
    z-index: 99;
    box-sizing: border-box;
    transition: all 0.3s;
    .show-modal {
      width: 1200px;
      margin: 0 auto;
      position: relative;
      .modal-close {
        position: absolute;
        right: 0;
        top: 0;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        line-height: 28px;
        text-align: center;
        font-size: 20px;
        cursor: pointer;
      }
      .modal-title {
        font-weight: bold;
        font-size: 20px;
      }
      .modal-content {
        margin-top: 20px;
        display: flex;
        justify-content: flex-start;
        .content-area {
          width: 90%;
          textarea {
            outline: none;
            resize: none;
            width: 100%;
            height: 150px;
            border-radius: 3px;
            padding: 20px;
            box-sizing: border-box;
          }
        }
        .content-btn {
          display: flex;
          margin-left: 10px;
          align-items: flex-end;
          .btn-submit {
            width: 80px;
            height: 40px;
            background-color: #04ac71;
            color: #fff;
            text-align: center;
            line-height: 40px;
            border-radius: 3px;
            transform: translateY(-5px);
            cursor: pointer;
          }
        }
      }
    }
  }
  .discuss-show-active {
    height: 40vh;
    padding: 20px 0;
  }
}
</style>

