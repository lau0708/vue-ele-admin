<template>
  <div>
    <el-form ref="form"
             @submit.native.prevent
             :model="form"
             :inline="inline"
             :size="size"
             :label-width="label_width"
             :label-position="label_position">
      <slot></slot>
    </el-form>
  </div>
</template>

<script>
  export default {
    props:{
      form:"",
      //true：行排列  false：纵向排列
      inline:{
        type:Boolean,
        default:false
      },
      //form表单尺寸
      size:{
        type:String,
        default:"small"
      },
      label_width:{
        type:String,
        default:"90px"
      },
      //label的位置
      label_position:{
        type:String,
        default:"left"
      }
    },
    methods:{
      //对整个表单进行校验
      valid(callback){
        this.$refs.form.validate((valid)=>{
          callback(valid)
        })
      },
      boolValid(){
        let res = true;
        this.$refs.form.validate((valid)=>{
          res = valid
        });
        return res
      },
      //表单部分校验
      validF(arr=[],callback){
        this.$refs.form.validateField(arr,callback)
      },
      //对整个表单进行重置 并移除校验结果
      reset(){
        this.$refs.form.resetFields()
      }
    }

  }
</script>

<style scoped>

</style>
