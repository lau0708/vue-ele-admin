<template>
  <el-dialog ref="dialog" :title="title" :visible.sync="dialog" :width="diawidth" @close="close">
    <e-form ref="dialogForm" :form="form" :size="size">
      <slot></slot>
    </e-form>

    <span slot="footer" class="dialog-footer">
      <template v-if="!slotFooter">
        <el-button @click="close" size="small">{{$t("button.cancel")}}</el-button>
        <el-button @click="submit" type="primary" size="small">{{$t("button.confirm")}}</el-button>
      </template>
      <template v-else>
         <slot :name="slotFooter"></slot>
      </template>

    </span>
  </el-dialog>
</template>

<script>
  export default {
    name: "e-dialog-center",
    props:{
      diawidth:{
        type: String,
        default:"30%"
      },
      customTitle:{
        type:String,
        default:"tip"
      },
      form:{
        type: Object,
        default:()=>{
          return {}
        }
      },
      size:{
        type: String,
        default: "small"
      },
      slotFooter:{
        type:String,
        default: ""
      },
      dialog:{
        type:Boolean,
        default:false
      }

    },
    computed:{
      title(){
        return this.$t("title." + this.customTitle)
      }
    },
    methods:{
      show(){
        this.dialog = true;
        this.$emit("show");
        try {
          this.$refs.dialogForm.clearValidate();
        }catch (e) {}
      },
      close(){
        this.clear();
        this.dialog = false;
        this.$emit("close");
      },
      submit(){
        this.$refs.dialogForm.valid((valid)=>{
          if(valid){
            this.$emit("submit")
          }
        })
      },
      clear(){
        try{
          this.$refs.dialogForm.reset();
          this.$refs.dialogForm.clearValidate();
        }catch (e) {}
      },
    }
  }
</script>

<style scoped lang="scss">
.dialog-footer{
  display: flex;
  justify-content: center;
}
</style>
