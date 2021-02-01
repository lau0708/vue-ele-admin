import Vue from "vue"


// table
import eTable from "@/components/table/e-table"
import eBtn from "@/components/e-btn"


// form
import eForm from "@/components/form/e-form"
import eInputName from "@/components/form/e-input-name"
import eInputPwd from "@/components/form/e-input-pwd"


import eCard from "@/components/e-card"
import eBreadcrumb from "@/components/e-breadcrumb"
import eRefresh from "@/components/e-refresh"
import eDropdown from "@/components/e-dropdown"
import eDialogCenter from "@/components/e-dialog-center"
import eTag from "@/components/e-tag"

let componentArr = [
  {name: "eTable",tem: eTable},
  {name: "eInputName",tem: eInputName},
  {name: "eBtn",tem: eBtn},
  {name: "eForm",tem: eForm},
  {name: "eInputPwd",tem: eInputPwd},
  {name: "eCard",tem: eCard},
  {name: "eBreadcrumb",tem: eBreadcrumb},
  {name: "eRefresh",tem: eRefresh},
  {name: "eDropdown",tem: eDropdown},
  {name: "eDialogCenter",tem: eDialogCenter},
  {name: "eTag",tem: eTag},
]


for(let i in componentArr){
  Vue.component(componentArr[i].name, componentArr[i].tem)
}


