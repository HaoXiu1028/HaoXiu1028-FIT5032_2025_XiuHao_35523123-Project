<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="email">email：</label>
        <input type="email" id="email" v-model.trim="formData.email" required />
      </div>
      <div class="form-group">
        <label for="password">code：</label>
        <input type="password" id="password" v-model.trim="formData.password" required />
      </div>
      <button @click="submit" type="submit" class="submit-btn">Login</button>
    </form>
    <button @click="goBack" class="back-btn">Return to main page</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {

    submit(){
      alert('Success！')
    },
    handleSubmit() {
      // 实际项目中应在此添加表单验证和登录逻辑
      console.log('提交登录数据:', this.formData)
      // 模拟登录成功跳转
      this.$router.push('/')
    },
    goBack() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 80px auto;
  padding: 24px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.form-group {
  margin-bottom: 16px;
}
label {
  display: block;
  margin-bottom: 8px;
}
input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
.submit-btn, .back-btn {
  margin-top: 16px;
  padding: 10px 16px;
}
.back-btn {
  background: #e0e0e0;
}
</style>