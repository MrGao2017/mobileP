<template>
  <div class="login">
    <div class="login-box">
      <h2>登录</h2>
      <form @submit.prevent='sendLogin' autocomplete="off">
        <div><input autocomplete="off" placeholder="请输入用户名" type="text" name="user" /></div>
        <div><input autocomplete="off" placeholder="请输入密码" type="password" name="password" /></div>
        <div class="login-btn"><input type="submit" value="一键登入" /></div>
      </form>
        
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {}
    },
    methods: {
      sendLogin (ev) {
        this.isLogin = true
        localStorage.setItem('token', true)
        this.$router.go(-1)
      }
    }
  }
</script>
<style>
  .login .login-box{
    width: 400px;
    margin: 50px auto;
  }
  .login-box h2 {
    font-size: 30px;
    text-align: center;
    margin-bottom: 30px;
  }
  .login input {
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 0;
    box-shadow: 0 1px 3px #666;
    padding: 0 10px;
  }
  .login .login-btn input {
    background: #4db3ff;
  }
</style>
