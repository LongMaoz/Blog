<template>
  <div>
    <strong>{{Titel}}</strong>
    <br>
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
      Desc:"面向Googel开发程序",
    };
  }
};
</script>

