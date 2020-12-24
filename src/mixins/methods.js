import axios from "./axios"

export default {
  mixins:[axios],
  methods:{
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
