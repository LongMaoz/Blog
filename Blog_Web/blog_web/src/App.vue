<template>
  <div id="app">
    <TopMenu></TopMenu>
    <div id="nav">
      <Home></Home>
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  margin-top: 15%;
  position: absolute;
  z-index: 999;
}
</style>

<script>
import TopMenu from "@/components/TopMenu";
import Home from './views/Home.vue'

export default {
  components: {
    TopMenu,Home
  }
};
</script>
