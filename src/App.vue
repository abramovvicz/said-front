<template>
  <div id="app">
   
    <!-- <img alt="Vue logo" src="./assets/logo.png">-->
<router-view name="headerView"></router-view>
    <router-view name="contentView"></router-view>
    <router-view/>
    <router-view name="footerView"></router-view>


    <!-- <Header msg="header" /> 
    <Content msg="content"/>
    <router-view/>
    <Footer msg="footer"/> --> -->

  </div>
</template>

<script>

import Footer from '../components/Footer'
import Content from '../components/Content'
import Header from '../components/Header'


export default {
  name: 'App',
  components: {
    appFooter:Footer,
    appContent:Content,
    appHeader:Header,
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
