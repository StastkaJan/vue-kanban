<script setup lang="ts">
import TasksList from '@/components/TasksList.vue'
import { listsStore } from '@/stores/tasksLists'

let lists = listsStore()
</script>

<template>
  <main>
    <header>
      <h1>Tasks</h1>
    </header>

    <div>
      <TasksList v-for="list of lists.lists" :key="list.name" :list="list" />
    </div>
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-rows: max-content 1fr;
  min-height: 70vh;
  margin-right: 1rem;
  overflow: auto;
}

header {
  margin-bottom: 1rem;
  border-bottom: 2px solid var(--prim-color);
}

h1 {
  color: var(--prim-color);
}

div {
  display: flex;
  overflow: auto;
}
</style>@/stores/tasksLists
