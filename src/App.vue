<template>
  <h3>Todo app</h3>
  <newtodoView />
  <TodolistViewVue/>
  
</template>

<script>
import newtodoView from './components/newtodoView.vue'
import TodolistViewVue from './components/TodolistView.vue';


export default {
  name: 'App',
  components: {
    newtodoView,TodolistViewVue
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
