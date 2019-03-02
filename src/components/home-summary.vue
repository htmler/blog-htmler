<template>
    <div class="summary-box">
        <!-- <div class="box-title">我的名片</div> -->
            <!-- <div class="box-info">
                <div class="info-img">
                    <img src="../assets/d_avatar.png" alt="">
                </div>
            </div>
            <div class="box-name">
                <span>陈前</span>
            </div> -->
        <div class="box-list">
            <div class="list-name list-li">网名：换种措辞</div>
            <div class="list-occup list-li">职业：前端开发工程师</div>
            <div class="list-home list-li">现居：北京-大兴区</div>
            <div class="list-Email list-li">Email：hjrfhd@qq.com</div>
        </div>
        <div class="box-icon">
            <div class="icon-home icon-show">home</div>
            <div class="icon-email icon-show">email</div>
            <div class="icon-qq icon-show">qq</div>
            <div class="icon-weibo icon-show">weibo</div>
        </div>
    </div>
</template>

<script>
export default {
  name: "home-summary",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.summary-box{
    width: 100%;
    height: 100%;
    padding: 20px 15px;
    border-radius: 3px;
    box-sizing: border-box;
    color: #d0d2d4;
    background-color: rgb(42, 42, 42);
    .box-title{
        font-weight: bold;
        font-size: 20px;
        color: #89919a
    }
    .box-info {
        display: flex;
        padding: 20px 0 0;
        height: 80px;
        justify-content:center;
        .info-img {
            width: 80px;
            border-radius: 50%;
            line-height: 80px;
            text-align: center;
            color: #fff;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .box-name{
        text-align: center;
    }
    .box-list{
        margin-top: 15px;
        font-size: 12px;
        .list-li{
            padding-bottom: 5px;
        }
    }
    .box-icon{
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        font-size: 12px;
        .icon-show{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            text-align: center;
            line-height: 50px;
            box-shadow: 0 1px 0 rgba($color: #fff, $alpha: 0.1),inset 0 1px 1px rgba($color: #000000, $alpha: 0.7)
        }
    }
}
</style>

