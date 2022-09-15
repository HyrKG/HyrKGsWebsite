<template>
  <div id="app">
    <MHeader/>
    <Test/>
  </div>
</template>

<script>
import Test from './components/Test.vue'
import MHeader from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Test,
    MHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
