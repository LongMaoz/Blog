<template>
  <div id="app">
    <TopMenu></TopMenu>
    <div id="nav">
      <router-view/>
      <!-- <router-link to="/about">About</router-link> -->
    </div>
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

export default {
  components: {
    TopMenu,
  }
};
</script>
