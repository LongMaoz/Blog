<template>
  <div class="home">
    <el-dialog
      modal-append-to-body
      append-to-body
      :visible.sync="centerDialogVisible"
      width="30%"
      center
    >
      <img src="@/assets/Wechat.png" class="image">
    </el-dialog>
    <el-tooltip content="Blog主页" placement="bottom" effect="light">
      <el-button
        @click="Home()"
        style="font-size:25px;padding:20px;margin:20px;"
        icon="el-icon-demo-home-fill"
        circle
      ></el-button>
    </el-tooltip>
    <el-tooltip content="微信" placement="bottom" effect="light">
      <el-button
        @click="Wechat()"
        style="font-size:25px;padding:20px;margin:20px;"
        icon="el-icon-demo-wechat-fill"
        circle
      ></el-button>
    </el-tooltip>
    <el-tooltip content="QQ" placement="bottom" effect="light">
      <el-button
        @click="QQ()"
        style="font-size:25px;padding:20px;margin:20px;"
        icon="el-icon-demo-QQ"
        circle
      ></el-button>
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

<style scoped>
.home {
  margin-top: 0em;
}
.image {
  width: 100%;
  display: block;
}
.el-dialog__wrapper >>> .el-dialog__header {
  padding: 0px !important;
}
.el-dialog__wrapper >>> .el-dialog__body {
  padding: 0px !important;
}
.el-dialog__wrapper >>> .el-dialog__headerbtn .el-dialog__close {
  color: white;
}
.el-dialog__wrapper >>> .el-dialog__headerbtn {
  font-size: 35px;
}
</style>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
  data() {
    return {
      centerDialogVisible: false
    };
  },
  methods: {
    Home(){
      window.location.href="/home.html"
    },
    Wechat() {
      this.centerDialogVisible = true;
    },
    QQ() {
      window.location.href =
        "tencent://message/?uin=287175199&Site=www.xxxxxxx.com.cn&Menu=yes";
    },
    Email() {
      window.location.href = "mailto:287175199@qq.com";
    },
    GitHub() {
      window.location.href = "https://github.com/LongMaoz";
    }
  }
};
</script>
