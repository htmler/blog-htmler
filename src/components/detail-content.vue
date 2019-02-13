<template>
    <div class="detail-content-container">
        <div class="container-logo">
            <ul class="logo-list">
                <li v-for="item in dataShow.type">{{item}}</li>
            </ul>
            <div class="logo-author">
                <img src="../assets/d_avatar.png" alt="">
            </div>
        </div>
        <div class="container-content">
            <!-- <video src="../assets/1.mp4" controls></video> -->
            <div v-html="dataShow.content"></div>
        </div>
        <div class="container-end">
            <div class="end-name">THE END</div>
            <div class="end-info">
                版权声明：本文来自 <span class="info-from"> 豆瓣 </span> , 相关版权归原作者及来源网站所有。
            </div>
            <div class="end-link">查看全文</div>
        </div>
    </div>
</template>

<script>
export default {
  name: "detail-content",
  data() {
    return {};
  },
  props:{
      dataShow:{
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.detail-content-container {
    width: 100%;
    height: 100%;
    .container-logo{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
        box-sizing: border-box;
        border-bottom: 1px solid #efefef;
        padding-bottom: 20px;
        .logo-list{
            display: flex;
            li{
                width: 50px;
                height: 20px;
                line-height: 20px;
                text-align: center;
                font-size: 14px;
                background-color: #efefef;
                margin-right: 15px;
                &:nth-last-of-type(1){
                    margin-right: 0;
                }
            }
        }
        .logo-author{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-top: 20px;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .container-content{
        margin-top: 30px;
        min-height: 300px;
        // background-color: #000;
        video{
            width: 100%;
            height: 100%;
        }
    }
    .container-end{
        margin-top: 50px;
        text-align: center;
        .end-name{
            font-size: 24px;
            font-weight: bold;
            color: #333;
        }
        .end-info{
            font-size: 14px;
            color: #999;
            margin-top: 20px;
            .info-from{
                color: blue;
                cursor: pointer;
            }
        }
        .end-link{
            margin-top: 20px;
            color: blue;
            cursor: pointer;
            font-size: 14px;
        }
    }
}
</style>

