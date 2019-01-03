<template>
  <div class="home">
    <el-tooltip content="Blog主页" placement="bottom" effect="light">
      <el-button
        style="font-size:25px;padding:20px;margin:20px;"
        icon="el-icon-demo-home-fill"
        circle
      ></el-button>
    </el-tooltip>
    <el-tooltip content="QQ" placement="bottom" effect="light">
      <el-button style="font-size:25px;padding:20px;margin:20px;" icon="el-icon-demo-QQ" circle></el-button>
    </el-tooltip>
    <el-tooltip content="邮箱" placement="bottom" effect="light">
      <el-button
        @click="Email()"
        style="font-size:25px;padding:20px;margin:20px;"
        icon="el-icon-message"
        circle
      ></el-button>
    </el-tooltip>
    <el-tooltip content="GitHub" placement="bottom" effect="light">
      <el-button
        @click="GitHub()"
        style="font-size:25px;padding:20px;margin:20px;"
        icon="el-icon-demo-github-fill"
        circle
      ></el-button>
    </el-tooltip>
  </div>
</template>

<style>
.home {
  margin-top: 0em;
}
</style>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
  data() {
    return {};
  },
  methods: {
    Email() {
      window.location.href = "mailto:287175199@qq.com";
    },
    GitHub() {
      window.location.href = "https://github.com/LongMaoz";
    }
  }
};
</script>
