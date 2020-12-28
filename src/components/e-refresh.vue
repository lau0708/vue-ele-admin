<template>

  <el-button type="text" v-bind="$attrs" v-on="$listeners" size="mini">
    <i class="el-icon-refresh" :class="animation? 'animation' : ''" ></i>
  </el-button>

</template>

<script>
  export default {
    name: "e-refresh",
    props:{
      animation:false
    }
  }
</script>

<style scoped lang="scss">
  .el-icon-refresh{
    font-size: 21px;
    font-weight:700;
    margin-left: 20px;
  }
  .el-icon-refresh.animation{
    animation:changDeg 1.5s linear 0.2s infinite;
  }
  @keyframes changDeg{
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }

</style>
