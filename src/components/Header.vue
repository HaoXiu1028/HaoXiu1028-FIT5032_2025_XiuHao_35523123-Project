<template>
  <header class="header">
    <!-- 原有头部内容 -->
    <div class="logo">My Immigrant Health System</div>
    
    <!-- 新增登录按钮 -->
    <button @click="goToLogin">Login</button>
  </header>
</template>

<script>
export default {
  methods: {
    goToLogin() {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f8f9fa;
}

.login-btn {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.login-btn:hover {
  background-color: #0056b3;
}
</style>