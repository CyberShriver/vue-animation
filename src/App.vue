<template>
  <h3>Todo app</h3>
  <newtodoView />
  
</template>

<script>
import newtodoView from './components/newtodoView.vue'

export default {
  name: 'App',
  components: {
    newtodoView
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
