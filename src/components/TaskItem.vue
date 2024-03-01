<script setup lang="ts">
import type { taskType } from '@/types/tasks'

const { task } = defineProps<{ task: taskType }>()
</script>

<template>
  <h3>{{ task.name }}</h3>
  <span>{{ task.dueDate.toLocaleString('en-GB') }}</span>
</template>