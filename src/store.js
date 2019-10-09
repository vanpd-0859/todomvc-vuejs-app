import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nextIndex: 1,
    newTodo: "",
    todos: [],
    visibility: "all",
    tabList: ['all', 'active', 'completed'] 
  },
  getters: {
    allDone: (state) => {
      return state.todos.filter(todo => todo.completed == false).length == 0
    },
    filterTodos: (state) => {
      switch (state.visibility) {
        case 'active': return state.todos.filter(todo => todo.completed == false)
        case 'completed': return state.todos.filter(todo => todo.completed)
        case 'all': 
        default: return state.todos
      }
    },
    remaining: (state) => {
      return state.todos.filter(todo => todo.completed == false).length
    }
  },
  mutations: {
    setNewTodo: (state, newTodo) => {
      state.newTodo = newTodo
    },
    addTodo: (state) => {
      if(state.newTodo != '') {
        state.todos.push({
          completed: false,
          id: state.nextIndex++,
          title: state.newTodo
        })
        state.newTodo = ''
      }
    },
    removeTodo: (state, id) => {
      var index = state.todos.findIndex(todo => todo.id == id)
      if(index != -1) {
        state.todos.splice(index, 1)
      }
    },
    toggleComplete: (state, id) => {
      var index = state.todos.findIndex(todo => todo.id == id)
      if(index != -1) {
        state.todos[index].completed = !state.todos[index].completed
      }
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter(todo => todo.completed == false)
    },
    toggleCompleteAll: (state) => {
      if (state.todos.filter(todo => todo.completed == false).length == 0) {
        state.todos.forEach(todo => {
          todo.completed = false
        })
      } else {
        state.todos.forEach(todo => {
          todo.completed = true
        })
      }
    },
    changeTab: (state, tab) => {
      if(state.tabList.includes(tab)) {
        state.visibility = tab
      }
    },
    editTodo: (state, {id, newTitle}) => {
      var todo = state.todos.find(todo => todo.id == id)
      if (todo != undefined && newTitle != '') {
        todo.title = newTitle
      }
    }
  },
  actions: {
  }
})
