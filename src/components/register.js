import Vue from "vue"


// table
import eTable from "@/components/table/e-table"
import eBtn from "@/components/e-btn"


// form
import eForm from "@/components/form/e-form"
import eInputName from "@/components/form/e-input-name"
import eInputPwd from "@/components/form/e-input-pwd"


import eCard from "@/components/e-card"

let componentArr = [
  {name: "eTable",tem: eTable},
  {name: "eInputName",tem: eInputName},
  {name: "eBtn",tem: eBtn},
  {name: "eForm",tem: eForm},
  {name: "eInputPwd",tem: eInputPwd},
  {name: "eCard",tem: eCard},
]


for(let i in componentArr){
  Vue.component(componentArr[i].name, componentArr[i].tem)
}


