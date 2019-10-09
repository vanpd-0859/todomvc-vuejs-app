<template>
    <section class="main">
		<template v-if="filterTodos.length > 0">
			<input type="checkbox" id="toggle-all" :checked="allDone" class="toggle-all" @click="toggleCompleteAll">
			<label for="toggle-all">Mark all as complete</label>
		</template>
        <ul class="todo-list">
            <li v-for="todo in filterTodos" :key="todo.id" class="todo" :class="{ completed: todo.completed, editing: (tabIdEditing == todo.id) }">
                <div class="view">
                    <input type="checkbox" class="toggle" :checked="todo.completed" @change="toggleComplete(todo.id)">
                    <label @dblclick="enterEditingMode(todo.id)" v-closable="{ exclude: [], handler: 'exitEditingMode' }">{{ todo.title }}</label>
                    <button class="destroy" @click="removeTodo(todo.id)"></button>
                </div>
                <input type="text" class="edit" v-focus :value="todo.title" @input="editTodo({id: todo.id, newTitle: $event.target.value})" @keyup.enter="exitEditingMode">
            </li>
        </ul>
    </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    name: 'Main',
    data: function() {
        return {
            tabIdEditing: 0
        }
    },
    computed: mapGetters([
        'filterTodos',
        'allDone',
    ]),
    methods: {
        enterEditingMode: function (id) {
            this.tabIdEditing = id
        },
        exitEditingMode: function() {
            this.tabIdEditing = 0
        },
        ...mapMutations([
		'removeTodo',
		'toggleComplete',
        'toggleCompleteAll',
        'editTodo'
        ])
    }
}
</script>

<style scoped>
</style>