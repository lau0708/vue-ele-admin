<template>
  <el-card class="box-card" :style="{'width': width}">
    <div slot="header" class="clearfix">
      <span>{{title}}</span>
      <el-button v-if="optBtn" style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
    </div>
    <div class="text item">
      <slot></slot>
    </div>
  </el-card>
</template>

<script>
  export default {
    name: "e-card",
    props:{
      optBtn:{
        type:Boolean,
        default: false
      },
      title:{
        type:String,
        default:""
      },
      width:{
        type:String,
        default:"400px"
      }
    },
    data(){
      return {

      }
    }
  }
</script>

<style scoped lang="scss">
  .box-card{
    font-size: 14px;
  }
</style>
