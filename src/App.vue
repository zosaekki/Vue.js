<template>
  <div id="app">
    <TodoHeader />
    <TodoInput @childAddTodo="addTodo" />
    <TodoList :propsItems="todoItems" @childRemoveTodo="removeTodo" />
    <TodoFooter @childClearTodo="clearTodo" />
  </div>
</template>

<script>
import TodoHeader from './components/todo/TodoHeader.vue';
import TodoInput from './components/todo/TodoInput.vue';
import TodoList from './components/todo/TodoList.vue';
import TodoFooter from './components/todo/TodoFooter.vue';

export default {
  name: 'App',
  data() {
    return {
      todoItems: []
    }
  },
  methods: {
    addTodo(todoItem) {
      // localStorage.setItem(todoItem, todoItem);
      this.todoItems.push(todoItem);
      // this.changeValue();
    },
    removeTodo(todoItem, idx) {
      // localStorage.removeItem(todoItem, idx);
      this.todoItems.splice(idx, 1);
      // this.changeValue();
    },
    clearTodo() {
      // localStorage.clear();
      this.todoItems.splice(0);
      // this.changeValue();
    },
    changeValue() {
      const json = JSON.stringify(this.todoItems);
      localStorage.setItem('todoItems', json);
    }
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  watch: {
    todoItems: {
      deep: true,
      handler() {
        this.changeValue();
      }
    }
  },
  created() {
    const json = localStorage.getItem("todoItems");
    if(json) {
      const todoItems = JSON.parse(json);
      todoItems.forEach(item => {
        this.todoItems.push(item);
      })
    }
    /*
      if(localStorage.length > 0) {
          for(let i=0; i<localStorage.length; i++) {
              this.todoItems.push(localStorage.key(i));
          }
      }
    */
  },
}
</script>

<style>
  body { text-align: center; background-color: #F6F6F8; }
  input { border-style: groove; width: 200px; }
  button { border-style: groove; }
  .shadow { box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03); }
</style>