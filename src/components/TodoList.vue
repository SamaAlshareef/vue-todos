<template>
  <div>
  <Navbar/>
  
  <div class="container">
    <div class="row">
      <div class="col-12 py-5">
        <h1>{{ listName }}</h1>
      </div>
    </div>
    <div class="row mb-3">
      <create-todo @on-new-todo="addTodo($event)" />
    </div>
    <div class="row">
      <div class="col-12 col-sm-10 col-lg-6">
        <ul class="list-group">
          <todo
            v-for="(todo, index) in todos"
            :key="index"
            :description="todo.description"
            :completed="todo.completed"
            @on-checked="todoChecked(todo)"
            @on-toggle="toggleTodo(todo)"
            @on-delete="deleteTodo(todo)"
            @on-edit="editTodo(todo, $event)"
          />
        </ul>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Todo from "./Todo.vue";
import CreateTodo from "./CreateTodo.vue";
import Navbar from "./Navbar.vue";

export default {
  props: {
    listName: String,
  },
  data() {
    return {
      
      todos: [],
      completedTodos:[],
      
    };
    
  },
  mounted(){
        this.initializeTodoArray();
  },
  methods: {
    initializeTodoArray(){
      this.todos = JSON.parse(localStorage.getItem("todos"));
      this.completedTodos = JSON.parse(localStorage.getItem("CompletedTodos"));
    },
    updateTodoArray(){
      const stringTodos = JSON.stringify(this.todos);
      localStorage.setItem("todos",stringTodos);
    },
    addTodo(newTodo) {
      this.todos.push({ description: newTodo, completed: false });
      const stringTodos = JSON.stringify(this.todos);
      localStorage.setItem("todos",stringTodos);
    },
    toggleTodo(todo) {
      todo.completed = !todo.completed;
    },
    deleteTodo(deletedTodo) {
      this.todos = this.todos.filter(todo => todo !== deletedTodo);
      this.updateTodoArray();
    },
    editTodo(todo, newTodoDescription) {
      todo.description = newTodoDescription;
      this.updateTodoArray();
    },
    todoChecked(checkedTodo){
      checkedTodo.completed = true;
      this.completedTodos.push(checkedTodo);
      const TodosDone = JSON.stringify(this.completedTodos);
      localStorage.setItem("CompletedTodos",TodosDone);
      this.todos = this.todos.filter(todo => todo !== checkedTodo);
      this.updateTodoArray();
    }
    
  },
  components: { Todo, CreateTodo, Navbar },
  
  
};
</script>

<style scoped lang="scss"></style>
