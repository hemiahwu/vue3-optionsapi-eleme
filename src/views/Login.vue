<template>
  <div class="login">
    <div class="logo">
      <img src="../assets/logo.jpg" alt="my login image" />
    </div>
    <InputGroup
      type="number"
      v-model="phone"
      placeholder="手机号"
      :btnTitle="btnTitle"
      :disabled="disabled"
      :error="errors.phone"
      @btnClick="getVerifyCode"
    />
    <InputGroup
      type="number"
      v-model="verifyCode"
      placeholder="验证码"
      :error="errors.code"
    />

    <div class="login-des">
      <p>新用户登录即自动注册，表示已同意 <span>《用户服务协议》</span></p>
    </div>

    <div class="login-btn">
      <button>登录</button>
    </div>
  </div>
</template>

<script>
import InputGroup from "../components/InputGroup.vue";
export default {
  name: "Login",
  components: { InputGroup },
  data() {
    return {
      phone: "",
      btnTitle: "获取验证码",
      disabled: false,
      errors: {},
      verifyCode: "",
    };
  },
  methods: {
    getVerifyCode() {
      console.log("获取验证码");
    },
  },
};
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
</style>