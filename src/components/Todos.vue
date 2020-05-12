<template>
<div>
    <Navbar/>
    <h3 class="m-2">Tasks Pending</h3>
   
    <div class="container">
    <div class="row">
      <div class="col-12 col-sm-10 col-lg-6">
        <ul class="list-group">
          <fixed-todo-item class="p.thick"
            v-for="(todo, index) in todos"
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
        todos: JSON.parse(localStorage.getItem("todos"))
    };
  },
    props: {
    description: String,
    completed: Boolean,
    
  },

    components: {Navbar,FixedTodoItem},
};
</script>

<style scoped>
p.thick {
  font-weight: bold;
}
</style>