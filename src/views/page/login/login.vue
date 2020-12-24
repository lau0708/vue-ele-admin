<template>
  <div class="login-container">
    <div class="login-form">
      <e-form :form="form">
        <div class="title">hello !</div>
        <div class="title-tips">欢迎来到{{ title }}！</div>
        <e-input-name label="userName" v-model="form.username" prop="username"></e-input-name>
        <e-input-pwd label="pwd" v-model="form.password" prop="password" @keyup.enter.native="handleLogin"></e-input-pwd>
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
  export default {
    name: 'Login',
    directives: {
      focus: {
        inserted(el) {
          el.querySelector('input').focus()
        },
      },
    },
    data() {
      return {
        title: "vue-ele-admin",
        form: {
          username: '',
          password: '',
        },
        loading: false,
        passwordType: 'password',
      }
    },
    mounted() {
      this.form.username = 'admin';
      this.form.password = '123456'
      // setTimeout(() => {
      //   this.handleLogin()
      // }, 3000)
    },
    methods: {
      //todo 登录
      handleLogin() {


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
