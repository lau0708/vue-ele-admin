<template>
  <el-button
    :type="type"
    :size="size"
    :disabled="disabled"
    :plain="plain"
    :loading="loading"
    v-bind="$attrs"
    v-on="$listeners">
    <slot></slot>
    {{name}}
  </el-button>
</template>

<script>
  export default {
    name: "e-btn",
    props:{
      type:{
        type:String,
        default:"primary"
      },
      size:{
        type:String,
        default:"small"
      },
      disabled:{
        type:Boolean,
        default:false
      },
      //按钮文字
      name:{
        type:String,
        default:"新建"
      },
      //是否为朴素按钮
      plain:{
        type:Boolean,
        default:false
      },
      loading:{
        type:Boolean,
        default:false
      }
    }
  }
</script>

<style scoped>

</style>
