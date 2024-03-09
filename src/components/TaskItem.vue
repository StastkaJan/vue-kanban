<script setup lang="ts">
import { computed } from 'vue'
import { setupStore } from '@/stores/setup'

import type { taskType } from '@/types/tasks'

const { task } = defineProps<{ task: taskType }>()

const { languageCode } = setupStore()

const formatedDate = computed(() => {
  return task.dueDate.toLocaleString(languageCode, { dateStyle: 'short', timeStyle: 'short' })
})
</script>

<template>
  <div draggable="true">
    <h3>{{ task.name }}</h3>
    <span>{{ formatedDate }}</span>
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