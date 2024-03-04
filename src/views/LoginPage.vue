<template>
    <div>
      <input type="email" v-model="email" placeholder="Email">
      <input type="password" v-model="password" placeholder="Password">
      <button @click="login">Login</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
        localStorage.setItem('token', 'ge9rgdfogpdfjpdfsd66dfdgf')
        this.$router.push('/')
      }
    }
  };
  </script>