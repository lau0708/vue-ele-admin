<template>

  <el-form-item :label="getLabel(label)" :rules="rule" :prop="prop" :size="size" :label-width="label_width">

    <el-input
      type="password"
      v-bind="$attrs"
      v-on="$listeners"
      v-model="value"
      :disabled="disabled"
      :style="{'width':width + ' !important'}"
      :placeholder="plc ? ($t('hint.enter') + $t(plc)) : $t('hint.enter') + getLabel(label)"
    ></el-input>

  </el-form-item>

</template>

<script>
  import methods from  "@/mixins/methods"

  export default {
    mixins:[methods],
    data(){
      return {
        rule:[
          { required: this.require,
            message: this.require ? (this.$t("hint.enter") + this.getLabel(this.label) ) : "",
            trigger: 'change'
          },
          { min: this.min,
            max: this.max,
            message: this.$t("hint.enterLength") +this.min + this.$t("hint.to")+this.max+this.$t("hint.chars"),
            trigger: 'change' }
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
        default:"password"
      },
      require:{
        type:Boolean,
        default:true
      },
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 256
      },
      size:{
        type:String,
        default:"small"
      },
      disabled:{
        type:Boolean,
        default:false
      },
      label_width:{
        type:String,
        default: ""
      },
      plc:{
        type:String,
        default:""
      },
      width:{
        type:String,
        default:"300px"
      }
    }
  }
</script>
<style>

</style>
