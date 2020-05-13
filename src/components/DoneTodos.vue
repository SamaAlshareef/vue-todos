<template>
<div>
    <Navbar/>
    <h3 class="m-2">Tasks Completed</h3>
   
    <div class="container">
    <div class="row">
      <div class="col-12 col-sm-10 col-lg-6">
        <ul class="list-group">
          <fixed-todo-item class="p.thick"
            v-for="(todo, index) in completedTodos"
            :key="index"
            :description="todo.description"
            :completed="todo.completed"
          />
        </ul>
      </div>
    </div>
    </div>
</div>
</template>

<script>
import Navbar from "./Navbar.vue";
import FixedTodoItem from "./FixedTodoItem.vue";
export default {
    data() {
    return {
        completedTodos: []
    };
  },
    props: {
    description: String,
    completed: Boolean,
    
  },
  mounted(){
        this.initializeDoneTodosArray();
  },
  methods:{
    initializeDoneTodosArray(){
      this.completedTodos = JSON.parse(localStorage.getItem("CompletedTodos"));
    },
  },

    components: {Navbar,FixedTodoItem},
};
</script>

<style scoped>
p.thick {
  font-weight: bold;
}
</style>