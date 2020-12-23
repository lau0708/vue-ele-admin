<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import addRoutes from "./router/addRoutes";

  export default {
    name: 'App',
    created(){
      if (sessionStorage.getItem("store") ) {
        //页面刷新之后移除session 并重新挂载路由
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))));
        sessionStorage.removeItem("store");
        addRoutes()
      }
      //监听页面刷新前 vuex 存储
      window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("store",JSON.stringify(this.$store.state))
      })
    }
  }
</script>

<style lang="scss">
  @import "../static/css/public.scss";

  #app{
    width: 100%;
    height: 100%;
  }
</style>
