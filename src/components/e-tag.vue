<template>
  <div class="e-tag">
    <el-tag
      v-for="tag in tags"
      :key="tag.name"
      closable
      :type="tag.type">
      {{tag.name}}
    </el-tag>
  </div>

</template>

<script>
  /**
   * tags:[
   *  {
   *    name:"标签名字", //标签名字
   *    type:"success", //标签类型
   *  }
   * ]
   * **/
  export default {
    name: "e-tag",
    props:{
      tags:{
        type: Array,
        default: () => {
          return []
        }
      }
    }
  }
</script>

<style scoped lang="scss">
.e-tag{
  padding: 0px 20px;
}
</style>
