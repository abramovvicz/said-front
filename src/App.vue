<template>
  <div id="app">
   
    <!-- <img alt="Vue logo" src="./assets/logo.png">-->
    <Header msg="header" /> 
    <!-- <Content msg="content"/> -->
    <router-view/>
    <TestComponent/>
    <Footer msg="footer"/> -->
  </div>
</template>

<script>

import Footer from './components/Footer'
// import Content from './components/Content'
import Header from './components/Header'
import TestComponent from './components/TestComponent'

export default {
  name: 'App',
  components: {
    Footer,
    // Content,
    Header,
    TestComponent

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
