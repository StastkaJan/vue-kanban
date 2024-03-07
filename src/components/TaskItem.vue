<script setup lang="ts">
import type { taskType } from '@/types/tasks'

const { task } = defineProps<{ task: taskType }>()
</script>

<template>
  <div draggable="true" @dragstart="$emit('dragItem', $event, task.id)">
    <h3>{{ task.name }}</h3>
    <span>{{ task.dueDate.toLocaleString('en-GB') }}</span>
  </div>
</template>

<style scoped>
div {
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 .3rem var(--text-color);
}

h3 {
  margin: 0;
}
</style>