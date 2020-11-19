<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <Header msg="header" /> -->
    <!-- <Content msg="content"/> -->
    <!-- <Footer msg="footer"/> -->
      <headerView></headerView>
      <router-view/>
      <footerView></footerView>
    <!-- <router-view name="contentView"></router-view> -->
    <!-- <router-view name="footerView"></router-view> -->
  </div>
</template>

<script>
import Footer from './components/Footer'
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    headerView:Header,
    footerView:Footer

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
