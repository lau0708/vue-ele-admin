<template>
  <div class="sidebar">
    <div class="theme">
      Project
    </div>
    <el-menu
      default-active="2"
      :router="true"
      background-color="#545c64"
      text-color="#fff"
      class="el-menu-vertical-demo">
      <template v-for="(side,index) in sidebarList">
        <!--有下拉-->
        <el-submenu v-if="side.level === 1 && !side.path" :index="side.component">
          <template>
            <template slot="title">
              <i class="iconfont side-icon" :class="side.icon"></i>
              <span>{{side.name ? side.name : $t("menu." + side.component)  }}</span>
            </template>

            <el-menu-item :index="cSide.path" v-for="(cSide,ind) in  side.children" :key="ind">
              <i class="iconfont side-icon" :class="cSide.icon"></i>
              <span slot="title">{{cSide.name ? cSide.name : $t("menu." + cSide.component)}}</span>
            </el-menu-item>
          </template>
        </el-submenu>

        <!--无下拉-->
        <el-menu-item v-else-if="side.level == 1 && side.path" :index="side.path">
          <i class="iconfont side-icon" :class="side.icon"></i>
          <span slot="title">{{side.name ? side.name : $t("menu." + side.component)}}</span>
        </el-menu-item>

      </template>

    </el-menu>
  </div>
</template>

<script>

  export default {
    name: "sidebar",
    data(){
      return {
        sidebarList:this.$store.state.sidebarList
      }
    },
    mounted() {
    }
  }
</script>

<style scoped lang="scss">
  .sidebar{
    width: 200px;
    height: 100%;
    background-color: #545c64;
    .theme{
      font-size: 20px;
      color: white;
      height: 100px;
      line-height: 100px;
      text-align: center;
    }
  }
</style>
