<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
  export default {
    name: "e-breadcrumb",
    data(){
      return {
        list:{}
      }
    },
    watch:{
      $route(){
        this.list = this.getBreadcrumb()
        console.log(this.list)
      }
    },
    methods:{
      getBreadcrumb() {
        console.log(this.$route.matched)
        return this.$route.matched.filter(
          (item) => item.name && item.meta.title
        )
      },
    }
  }
</script>

<style scoped lang="scss">

</style>
