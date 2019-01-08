<template>
  <el-menu style="position: fixed;top:0;left:0;width:100%;z-index=:999" :default-active="activeIndex" mode="horizontal" @select="handleSelect">
    <el-menu-item index="/Blog">
      <i class="el-icon-share"></i>
    </el-menu-item>
    <el-menu-item index="/Diary">个人日记</el-menu-item>
    <el-submenu index="2">
      <template slot="title">个人心得</template>
      <el-menu-item index="2-1">C#</el-menu-item>
      <el-menu-item index="2-2">JavaScrpit</el-menu-item>
      <el-menu-item index="2-3">Vue</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">神秘代码</template>
        <el-menu-item index="2-4-1">
          <router-link to="/about">商品</router-link>
        </el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
  </el-menu>
</template>
<style>
</style>
<script>
export default {
  name: "topMenu",
  data() {
    return {
      activeIndex: "0"
    };
  },
  created() {
    /* this.$ajax.post("/values", { name: "哈皮", age: 17 }).then(result => {
      // eslint-disable-next-line
      console.info(result);
    });
    this.$ajax.put("/values", { name: "heppler", age: 18 }).then(result => {
      // eslint-disable-next-line
      console.info(result);
    }); */
  },
  methods: {
    handleSelect(key) {
        this.$router.push(key);
    }
  }
};
</script>

