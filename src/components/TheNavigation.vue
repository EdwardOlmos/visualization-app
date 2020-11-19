<template>
  <nav id="nav">
    <h1><router-link to="/">Home</router-link></h1>
  </nav>
</template>

<script>
//import store from "@/store.js"
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
#nav {
  display: flex;
  justify-content: center;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
