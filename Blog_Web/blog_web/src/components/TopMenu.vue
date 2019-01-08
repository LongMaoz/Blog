<template>
  <div>
    <strong>{{Titel}}</strong>
    <br><br>
    <span>{{Desc}}</span>
  </div>
</template>

<style>
  strong{
    font-size:50px;
    color: white
  }
  span{
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

