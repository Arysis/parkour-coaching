<template>
  <div class="content">
    <PageHeader/>
    <router-view/>
    <PageFooter/>
  </div>
  </template>

<script>
import PageHeader from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'

export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter
  }
}
</script>

<style>
body {
  overflow: auto;
  background-image: url("./assets/Agen.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
}

.content {
  border: none;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
