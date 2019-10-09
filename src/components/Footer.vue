<template>
    <footer class="footer">
        <span class="todo-count">
            <strong>{{ remaining }}</strong>
            <template v-if="remaining != 1"> items</template><template v-else> item</template> left
        </span>
        <ul class="filters">
            <li v-for="tab in tabList" :key="tab">
                <a :href="'#/' + tab" :class="{ selected: (visibility == tab) }" @click="changeTab(tab)">{{ tab | capitalizeFLetter }}</a>
            </li>
        </ul>
        <button class="clear-completed" v-show="todos.length > remaining" @click="clearCompleted">Clear completed</button>
    </footer>
</template>

<script>
import { mapGetters, mapState, mapMutations } from "vuex"

export default {
    name: 'Footer',
    filters: {
        capitalizeFLetter (value) {
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    },
    computed: {
        ...mapGetters([
        'remaining'
        ]),
        ...mapState([
        'todos',
        'visibility',
        'tabList'
        ])
    },
    methods: mapMutations([
        'clearCompleted',
        'changeTab'
    ])
}
</script>

<style scoped>
</style>