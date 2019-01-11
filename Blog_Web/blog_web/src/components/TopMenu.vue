<template>
  <div>
    <strong>{{Titel}}</strong>
    <br><br>
    <span>{{Desc}}</span>
  </div>
</template>

<style>
  strong{
    cursor:default;
    font-size:50px;
    color: white
  }
  span{
    cursor:default;
    color:white
  }
</style>

<script>
export default {
  name: "topMenu",
  data() {
    return {
      Titel: "丶泷猫的Blog",
      Desc:"面向搜索引擎开发程序",
    };
  }
};
</script>

