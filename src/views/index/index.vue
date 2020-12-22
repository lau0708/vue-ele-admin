<template>
  <div class="index">
    <sidebar></sidebar>
  </div>
</template>

<script>
  import Sidebar from "../sidebar/sidebar.vue"
  export default {
    name: "index",
    components:{Sidebar}
  }
</script>

<style scoped lang="scss">
.index{
  height: 100%;
}
</style>
