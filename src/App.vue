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
  color: #999;
  text-decoration: none;
}
textarea {
}
</style>
