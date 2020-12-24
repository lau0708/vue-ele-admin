<template>
  <div class="index">
    <sidebar></sidebar>
    <div class="content">
      <content-header></content-header>
      <router-view class="router-view"></router-view>
    </div>
  </div>
</template>

<script>
  import Sidebar from "../sidebar/sidebar.vue"
  import contentHeader from "../component/contentHeader"
  export default {
    name: "index",
    components:{Sidebar, contentHeader}
  }
</script>

<style scoped lang="scss">
.index{
  height: 100%;
  display: flex;
  .content{
    width: calc(100% - 200px);
    height: 100%;
    display: flex;
    flex-direction: column;
    .router-view{
      flex:1;
      overflow-y: auto;
      background-color: #f6f8f9;
    }
  }
}
</style>
