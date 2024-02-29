<script setup lang="ts">
const date = new Date()
</script>

<template>
  <footer>
    <p>&copy;{{ date.getFullYear() }} Kanban template | By Jan Šťástka</p>
  </footer>
</template>

<style scoped>
footer {
  padding: 1rem;
}

footer p {
  text-align: center;
}
</style>