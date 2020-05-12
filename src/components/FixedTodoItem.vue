<template>
<div>
  <li class="d-flex align-items-center list-group-item">
    
      <span>{{ description }}</span>
    
  </li>
</div>
</template>

<script>
export default {
  props: {
    description: String,
    completed: Boolean
  },
}
</script>

<style lang="scss" scoped>
.completed {
  text-decoration: line-through;
}
</style>
