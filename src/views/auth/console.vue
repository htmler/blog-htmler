<template>
<el-container style="height: 100vh;">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>首页</template>
        <el-menu-item-group >
            <router-link to = "/console/banner">
          <el-menu-item index="1-1">banner</el-menu-item></router-link>
          <router-link to = "/console/mine">
          <el-menu-item index="1-2">我的信息</el-menu-item></router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-message"></i>技术帖</template>
        <el-menu-item-group>
            <router-link to = "/console/hc">
          <el-menu-item index="2-1">HTML+CSS</el-menu-item>
          </router-link>
          <router-link to = "/console/js">
          <el-menu-item index="2-2">Javascript</el-menu-item>
          </router-link>
          <router-link to = "/console/frame">
          <el-menu-item index="2-3">前端框架</el-menu-item>
          </router-link>
          <router-link to = "/console/node">
          <el-menu-item index="2-4">Nodejs</el-menu-item>
          </router-link>
          <router-link to = "/console/other">
          <el-menu-item index="2-5">其他</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-message"></i>小酒馆</template>
        <el-menu-item-group>
            <router-link to = "/console/continent">
          <el-menu-item index="3-1">文章列表</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title"><i class="el-icon-message"></i>音乐电影</template>
        <el-menu-item-group>
            <router-link to = "/console/banner">
            <el-menu-item index="4-1">轮播图</el-menu-item>
            </router-link>
            <router-link to = "/console/music">
          <el-menu-item index="4-2">音乐列表</el-menu-item>
          </router-link>
          <router-link to = "/console/video">
          <el-menu-item index="4-3">电影列表</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title"><i class="el-icon-message"></i>资源分享</template>
        <el-menu-item-group>
            <router-link to = "/console/resource">
          <el-menu-item index="5-1">资源列表</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title"><i class="el-icon-message"></i>发现</template>
        <el-menu-item-group>
            <router-link to = "/console/discovery">
          <el-menu-item index="6-1">发现列表</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: left; font-size: 20px;background-color: #333;color:#999">
        陈前
    </el-header>
    
    <el-main>
       <router-view/>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
  name: "console",
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(6).fill(item)
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

