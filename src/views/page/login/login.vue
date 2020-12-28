<template>
  <div class="login-container">
    <div class="login-form">
      <e-form :form="formData">
        <div class="title">hello !</div>
        <div class="title-tips">欢迎来到{{ title }}！</div>
        <e-input-name label="userName" v-model="formData.username" prop="username"></e-input-name>
        <e-input-pwd label="pwd" v-model="formData.password" prop="password" @keyup.enter.native="handleLogin"></e-input-pwd>
        <e-btn
          :loading="loading"
          name="登录"
          @click="handleLogin"
        >
        </e-btn>
        <router-link to="/register">
          <div style="margin-top: 20px">注册</div>
        </router-link>
      </e-form>
    </div>
  </div>
</template>

<script>
  import index from "../../../mixins/index";
  export default {
    name: 'Login',
    mixins:[index],
    data() {
      return {
        title: "vue-ele-admin",
        formData: {
          username: '',
          password: '',
        },
        loading: false,
      }
    },
    mounted() {
      this.formData.username = 'admin';
      this.formData.password = '123456'
      // setTimeout(() => {
      //   this.handleLogin()
      // }, 3000)
    },
    methods: {
      //登录
      handleLogin() {
        this.req_post("/login", this.formData).then((data)=>{
          this.$router.push("/home_page")
          this.$store.commit("RefreshAccountInfo", data.result)
          this.msg_success("登录成功")
        })
      },
    },
  }
</script>

<style lang="scss" scoped>

  .login-container {
    height: 100vh;
    /*background: url('../../../../static/assets/login_images/login.jpg') center center fixed no-repeat;*/
    /*background-size: cover;*/
    background-color: aliceblue;
    .login-form{
      width: 300px;
      margin: 0 auto;
    }
    .title {
      font-size: 54px;
      font-weight: 500;
      color: rgba(14, 18, 26, 1);
    }

    .title-tips {
      margin-top: 29px;
      font-size: 26px;
      font-weight: 400;
      color: rgba(14, 18, 26, 1);
      text-overflow: ellipsis;
      white-space: nowrap;
    }


  }
</style>
