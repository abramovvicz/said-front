<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Header msg="header" />
    <Content msg="content"/>
    <Measurements msg="JEBAC"  />
    <Footer msg="footer"/>
  </div>
</template>

<script>
import Measurements from './components/Measurements.vue'
import Footer from './components/Footer'
import Content from './components/Content'
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Measurements,
    Footer,
    Content,
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
  margin-top: 60px;
}
</style>
