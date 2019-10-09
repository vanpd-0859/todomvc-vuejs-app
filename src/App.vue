<template>
  <div class="todoapp">
    <Header/>
    <Main v-show="todos.length > 0"/>
    <Footer v-show="todos.length > 0"/>
  </div>
</template>

<script>
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { mapState } from "vuex";

export default {
  name: 'app',
  components: {
    Header,
    Main,
    Footer
  },
  computed: mapState([
	'todos'
  ])
}
</script>

<style>
@import url('./assets/css/main.css');
</style>
