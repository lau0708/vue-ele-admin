import Vue from "vue"


// table
import eTable from "@/components/table/e-table"
import eBtn from "@/components/e-btn"


// form
import eForm from "@/components/form/e-form"
import eInputName from "@/components/form/e-input-name"
import eInputPwd from "@/components/form/e-input-pwd"

let componentArr = [
  {name: "eTable",tem: eTable},
  {name: "eInputName",tem: eInputName},
  {name: "eBtn",tem: eBtn},
  {name: "eForm",tem: eForm},
  {name: "eInputPwd",tem: eInputPwd},
]


for(let i in componentArr){
  Vue.component(componentArr[i].name, componentArr[i].tem)
}


