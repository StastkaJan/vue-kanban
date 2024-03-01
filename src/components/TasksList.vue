<script setup lang="ts">
import TaskItem from '@/components/TaskItem.vue'

import type { tasksListType } from '@/types/tasks'

const { list } = defineProps<{ list: tasksListType }>()
</script>

<template>
  <section>
    <h2>{{ list.name }}</h2>

    <div>
      <TaskItem v-for="task of list.tasks" :key="task.id" :task="task" />
    </div>
  </section>
</template>