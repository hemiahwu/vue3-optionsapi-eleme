<template>
  <div class="login">
    <div class="logo">
      <img src="../assets/logo.jpg" alt="my login image" />
    </div>
    <InputGroup
      type="number"
      v-model:value="phone"
      placeholder="手机号"
      :btnTitle="btnTitle"
      :disabled="disabled"
      :error="errors.phone"
      @btnClick="getVerifyCode"
    />
    <InputGroup
      type="number"
      v-model:value="verifyCode"
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
      if (this.validatePhone()) {
        this.validateBtn();
      }
    },
    validatePhone() {
      if (!this.phone) {
        this.errors = {
          phone: "手机号不能为空",
        };
        return false;
      } else if (!/^1[345678]\d{9}$/.test(this.phone)) {
        this.errors = {
          phone: "请填写正确的手机号码",
        };
        return false;
      } else {
        this.errors = {};
        return true;
      }
    },
    validateBtn() {
      let time = 5;
      let timer = setInterval(() => {
        if (time === 0) {
          clearInterval(timer);
          this.btnTitle = "获取验证码";
          this.disabled = false;
        } else {
          this.btnTitle = time + "秒后重试";
          this.disabled = true;
          time--;
        }
      }, 1000);
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