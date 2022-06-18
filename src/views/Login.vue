<template>
  <div class="login">
    <div class="logo">
      <img src="../assets/logo.jpg" alt="my login image" />
    </div>

    <div class="text-group">
      <div class="input-group">
        <input type="text" value="" placeholder="手机号" />
        <button>获取验证码</button>
      </div>
    </div>

    <div class="text-group">
      <div class="input-group">
        <input type="text" value="" placeholder="验证码" />
      </div>
    </div>
    <div v-if="false" class="invalid-feedback">验证码有误</div>

    <div class="login-des">
      <p>新用户登录即自动注册，表示已同意 <span>《用户服务协议》</span></p>
    </div>

    <div class="login-btn">
      <button>登录</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.login {
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  background: #fff;
}

.logo {
  text-align: center;
}

.logo img {
  width: 150px;
}

/* 表单 */
.text-group,
.login-des,
.login-btn {
  margin-top: 20px;
}
.login-des {
  color: #aaa;
  line-height: 22px;
}
.login-des span {
  color: #4d90fe;
}
.login-btn button {
  width: 100%;
  height: 40px;
  background-color: #48ca38;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  border: none;
  outline: none;
}
.login-btn button[disabled] {
  background-color: #8bda81;
}

/* 封装表单 */
.input-group {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.input-group input {
  height: 100%;
  width: 60%;
  outline: none;
}
.input-group button {
  border: none;
  outline: none;
  background: #fff;
}
.input-group button[disabled] {
  color: #aaa;
}
.is-invalid {
  border: 1px solid red;
}
.invalid-feedback {
  color: red;
  padding-top: 5px;
}
</style>