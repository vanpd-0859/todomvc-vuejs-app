<template>
    <header class="header">
        <h1>todos</h1>
        <input type="text" v-model="newTodo" v-on:keyup.enter="addTodo" autofocus="autofocus" autocomplete="off" placeholder="What needs to be done?" class="new-todo">
    </header>
</template>

<script>
import { mapMutations } from "vuex"

export default {
	name: 'Header',
	computed: {
		newTodo: {
			get() {
				return this.$store.state.newTodo
			},
			set (value) {
				this.$store.commit('setNewTodo', value)
			}
		}
	},
	methods: mapMutations([
		'addTodo'
	])
}
</script>

<style scoped>
</style>