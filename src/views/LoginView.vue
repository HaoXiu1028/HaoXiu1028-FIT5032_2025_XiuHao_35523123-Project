<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()

const hardcodedUser = {
  username: 'admin',
  password: '123456'
}

const loginError = ref(false)

function login() {
  if (username.value === hardcodedUser.username && password.value === hardcodedUser.password) {
    localStorage.setItem('isAuthenticated', 'true')
    router.push('/about')
  } else {
    loginError.value = true
  }
}
</script>

<template>
  <div class="login-form">
    <h2>Login</h2>
    <input v-model="username" placeholder="Username" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="login">Login</button>
    <p v-if="loginError" style="color: red">Invalid credentials</p>
  </div>
</template>

<style scoped>
.login-form {
  max-width: 400px;
  margin: auto;
}
input {
  display: block;
  width: 100%;
  margin: 8px 0;
}
</style>