<template>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Todos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Done Todos</a>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
// export default {
//   data() {
//     return {
//       newTodo: ""
//     };
//   },
//   methods: {
//     addTodo() {
//       if (this.newTodo.length > 0) {
//         this.$emit("on-new-todo", this.newTodo);
//       }
//       this.newTodo = "";
//     }
//   }
// };
</script>

<style lang="scss" scoped></style>
