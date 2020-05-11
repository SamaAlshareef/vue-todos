<template>
<div>
    <Navbar/>
    <h1 class="m-2">Todos</h1>
   
    <div class="container">
    <div class="row">
      <div class="col-12 col-sm-10 col-lg-6">
        <ul class="list-group">
          <todo
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
import Todo from "./Todo.vue";
export default {
    data() {
    return {
        completedTodos: JSON.parse(localStorage.getItem("CompletedTodos"))
    };
  },
    props: {
    description: String,
    completed: Boolean,
    
  },

    components: {Navbar,Todo},
};
</script>