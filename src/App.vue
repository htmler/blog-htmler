<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    this.$server.judgeToken().then(obj => {
      if(obj.isSuccess){
         this.$store.state.Token.isLogin = true
      }
    });
  }
};
</script>

<style>
html,
body,
h1,
h2,
h3,
ul,
li,
ol,
dt,
dd,
textarea {
  margin: 0;
  padding: 0;
}
ul,
li {
  text-decoration: none;
  list-style: none;
}
a {
  color: #999 !important;
  text-decoration: none !important;
}
textarea {
}
/*
    markdown style  <cn_brian@163.com>
*/
pre {
  padding: 1rem 1rem;
  background: #F3F3F3;
  overflow: auto;
  line-height: 1.45;
  box-sizing: border-box;
  border-radius: 10px;
  text-align: left;
}

</style>
