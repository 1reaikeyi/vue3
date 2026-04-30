<template>
  <LoginPage
      ref="loginRef"
      brand-name="YourBrand"
      title="欢迎你!"
      subtitle="Please enter your details"
      primary-color="#4f46e5"
      @submit="handleLogin"
  />
</template>

<script setup>
import { ref } from 'vue'
import LoginPage from './components/LoginPage.vue'

const loginRef = ref(null)

async function handleLogin(payload) {
  loginRef.value?.setLoading(true)

  // Replace with your real auth logic
  await new Promise(r => setTimeout(r, 500))

  if (payload.email === 'hello@world.com' && payload.password === 'hello') {
    alert('Login successful!')
  } else {
    loginRef.value?.setError('Invalid email or password.')
  }

  loginRef.value?.setLoading(false)
}
</script>
