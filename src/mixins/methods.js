import axios from "./axios"

export default {
  mixins:[axios],
  methods:{
    msg_success(data){
      this.$message({
        message: data ? data : "成功",
        type:"success",
        showClose:true,
        duration:3000
      })
    },
    msg_error(data){
      this.$message({
        message: data ? data : "错误",
        type:"error",
        showClose:true,
        duration:3000
      })
    },
    getLabel(key){
      let res = this.$t("form.label."+key);
      if(res.indexOf(".") != -1){
        res = this.$t("table.theader."+key);
      }
      if(res.indexOf(".") != -1){
        res = this.$t(key);
      }
      return res;
    }
  }
}
