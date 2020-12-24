<template>
  <div>
    <e-table :tableData = tableData :columns="columns" :total="total">
    </e-table>
  </div>
</template>

<script>
  import index from "../../mixins/index"
  export default {
    name: "homePage",
    mixins:[index],
    data(){
      return {
        tableData: [],
        columns:[
          {
            title:"id",
            key: "id"
          },
          {
            title:"name",
            key: "name"
          },
          {
            title:"address",
            key: "address"
          },
          {
            title:"email",
            key: "email"
          },
          {
            title:"createTime",
            key: "create_time"
          }
        ],
        total:0
      }
    },
    mounted() {
      this.tableInit();
    },
    methods:{
      tableInit(){
        this.req_get("/user_list", {}).then((data)=>{
          let result = data.result;
          this.tableData = result;
          this.total = result.length;
        })
      }
    }
  }
</script>

<style scoped>

</style>
