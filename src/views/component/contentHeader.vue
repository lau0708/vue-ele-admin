<template>
  <div class="content-header">
    <div class="e-breadcrumb">
      <e-breadcrumb></e-breadcrumb>
    </div>
    <div class="tool-list">
      <e-refresh :animation="animation" @click="refreshContent"></e-refresh>
      <img :src="accountImg" class="account-img">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          {{$store.state.accountInfo.username}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><span @click="logout">退出账号</span></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <e-dialog-center ref="logoutDialog" @submit="submitLogout">
      <span>您确定要退出当前平台吗？</span>
    </e-dialog-center>
  </div>
</template>

<script>
  import index from "../../mixins/index";
  export default {
    name: "contentHeader",
    mixins:[index],
    data(){
      return {
        animation: false,
        accountImg: this.$store.state.accountInfo.img,
      }
    },
    methods:{
      refreshContent(){
        this.animation = true;
      },
      //退出账号
      logout(){
        this.req_post("/logout").then((data)=>{
          this.$refs.logoutDialog.show();
        })
      },
      submitLogout(){
        this.msg_success("退出账号");
        this.$router.push("/login")
      }
    }
  }
</script>

<style scoped lang="scss">
.content-header{
  height: 50px;
  border-bottom: 1px solid gainsboro;
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  .e-breadcrumb{
    margin-top: 15px;
  }
  .tool-list{
    display: flex;
    justify-content: space-around;
    .account-img{
      width: 40px;
      height: 40px;
      border-radius: 50px;
      margin:5px 10px 0px 10px;
    }
    .el-dropdown-link {
      margin-top: 15px;
      display: block;
      cursor: pointer;
      color: teal;
    }
    .el-icon-arrow-down {
      font-size: 12px;
    }
  }
}
</style>
