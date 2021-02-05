<template>

  <el-form-item v-if="label" :label="getLabel(label)" :prop="prop" :rules="rule" :size="size">
    <el-input
      v-bind="$attrs"
      v-on="$listeners"
      v-model="value"
      :disabled="disabled"
      :style="{'width':width + ' !important'}"
      :placeholder="placeholder?placeholder:'请输入'+getLabel(label)"></el-input>
    <slot></slot>
  </el-form-item>

  <el-input
    v-else
    v-bind="$attrs"
    v-on="$listeners"
    v-model="value"
    :disabled="disabled"
    :style="{'width':width + ' !important'}"
    :placeholder="placeholder?placeholder:'请输入'+getLabel(label)"
  ></el-input>



</template>

<script>
  import methods from "../../mixins/methods";
  export default {
    mixins:[methods],
    data(){
      return {
        rule:[
          { required: this.require,
            message:this.require?"请输入"+this.label:"",
            trigger: 'change'
          },
          {
            validator:this.validator,
            trigger: 'change'
          }
        ]
      }
    },
    props:{
      prop:{
        type:String,
        default:""
      },
      value:'',
      label:{
        type:String,
        default:""
      },
      require:{
        type:Boolean,
        default:true
      },
      width:{
        type:String,
        default:"300px"
      },
      min: {
        type: Number,
        default: 1
      },
      max: {
        type: Number,
        default: 45
      },
      size:{
        type:String,
        default:"small"
      },
      disabled:{
        type:Boolean,
        default:false
      },
      placeholder:{
        type:String,
        default:""
      }
    },
    methods:{
      validator(rule,value,callback){
        //验证
       if(!value){
          callback(new Error("请输入"));
        } else {
          callback();
        }
      }
    }
  }
</script>

<style scoped>

</style>
