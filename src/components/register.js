import Vue from "vue"

import eTable from "@/components/table/e-table"

let componentArr = [
  {name: "eTable",tem: eTable}
]


for(let i in componentArr){
  Vue.component(componentArr[i].name, componentArr[i].tem)
}


