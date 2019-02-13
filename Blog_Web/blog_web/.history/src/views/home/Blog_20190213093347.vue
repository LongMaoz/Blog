<template>
  <div class="Diary">
    <el-card shadow="always">
      <div slot="header" class="clearfix">
        <img src="@/assets/DiaryBg.jpg" style="width:100%;height:auto;">
        <h1>个人中心</h1>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.Diary >>> .el-card__header {
  padding: 0em;
}
.Diary >>> .el-card {
  margin: 100px 12%;
  color: black;
  text-align: center;
  border: 0px;
}

.Diary >>> .el-card.is-always-shadow,
.el-card.is-hover-shadow:focus,
.el-card.is-hover-shadow:hover {
  box-shadow: 5px 2px 12px 0 rgb(6, 3, 3);
}
</style>

<script>
export default {};
</script>

