<template>
  <div id="app">
    <Header/>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/bs1">BootStrap1</router-link>|
      <router-link to="/bs2">BootStrap2</router-link>|
      <router-link to="/bs3">BootStrap3</router-link>|
      <router-link to="/bs4">BootStrap4</router-link>|
      <router-link to="/bs5">BootStrap5</router-link>|
      <router-link to="/bs6">BootStrap6</router-link>|
      <router-link to="/ca1">Cal1</router-link>|
      <router-link to="/ca2">Cal2</router-link>|
      <router-link to="/cr1">Carousel1</router-link>|
      <router-link to="/cr2">Carousel2</router-link>|
      <router-link to="/ax1">Axios1</router-link>|
      <router-link to="/ax2">Axios2</router-link>|
      <router-link to="/crypto1">Crypto</router-link>|
      <router-link to="/table1">Table1</router-link>|
    </nav>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/layout/HeaderView.vue'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
