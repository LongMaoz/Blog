<template>
  <div id="app">
    <!-- <router-link to="/about">About</router-link> -->
    <TopMenu></TopMenu>
    <transition name="bounce">
      
    </transition>
  </div>
</template>

<style>
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  z-index: 999;
}
</style>

<script>
import TopMenu from "@/components/Home/TopMenu.vue";

import BlogList from "@/views/home/Blog.vue";

export default {
  components: {
    TopMenu
  },
  created() {
  }
};
</script>
