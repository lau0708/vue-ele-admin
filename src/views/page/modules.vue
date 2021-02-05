<template>
  <div>
    组件
    <e-tag :tags="tags"></e-tag>

  </div>
</template>

<script>
  export default {
    name: "modules",
    data(){
      return {
        tags:[
          {
            name: "聊天室",
            path: "/chat_room"
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
