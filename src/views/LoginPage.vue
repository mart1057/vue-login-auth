<template>
  <div>
    {{ $store.state.token }}
    <input type="email" v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Password" />
    <button @click="login">Login</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
        this.$store.dispatch('loginUser', true)
    //   await localStorage.setItem("token", "jnouuiy54rfgftftyf766ftfytfgftfyf6ftfyf");
    //   const token = localStorage.getItem("token");
    //   if (token) {
    //     this.$router.push("/");
    //   }
    },
  },
};
</script>
