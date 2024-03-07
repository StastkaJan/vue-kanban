<script setup lang="ts">
import TaskItem from '@/components/TaskItem.vue'

import type { tasksListType } from '@/types/tasks'

const { list } = defineProps<{ list: tasksListType }>()
</script>

<template>
  <section @dragover.prevent>
    <h2>{{ list.name }}</h2>

    <div>
      <TaskItem v-for="task of list.tasks" :key="task.id" :task="task" />
    </div>
  </section>
</template>

<style scoped>
section {
  flex-shrink: 0;
  width: 270px;
  padding: 1rem;
}
</style>