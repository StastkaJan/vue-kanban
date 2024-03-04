<script setup lang="ts">
import { reactive } from 'vue'
import TasksList from '@/components/TasksList.vue'

import type { tasksListType } from '@/types/tasks'

let lists = reactive<tasksListType[]>([{
  name: 'Task list 1',
  tasks: [{
    id: 1,
    name: 'Wash dishes',
    description: 'Lorem impsum dolor sit amet',
    dueDate: new Date(2024, 3, 10, 12, 15),
    comments: []
  }]
}, {
  name: 'Task list 2',
  tasks: [{
    id: 1,
    name: 'Wash dishes',
    description: 'Lorem impsum dolor sit amet',
    dueDate: new Date(2024, 3, 10, 12, 15),
    comments: []
  }]
}])
</script>

<template>
  <main>
    <header>
      <h1>Tasks</h1>
    </header>

    <div>
      <TasksList v-for="list of lists" :key="list.name" :list="list" />
    </div>
  </main>
</template>

<style scoped>
main {
  min-height: 70vh;
  margin-right: 5rem;
}

header {
  margin-bottom: 3rem;
  border-bottom: 2px solid var(--prim-color);
}

h1 {
  color: var(--prim-color);
}

div {
  display: flex;
}
</style>
