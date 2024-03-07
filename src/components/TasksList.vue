<script setup lang="ts">
import TaskItem from '@/components/TaskItem.vue'

import type { tasksListType } from '@/types/tasks'

const { list } = defineProps<{ list: tasksListType }>()

const dragItem = (event: DragEvent, itemId: number) => {
  if (!event || !event.dataTransfer) return

  event.dataTransfer.dropEffect = 'move'
  event.dataTransfer.effectAllowed = 'move'
  event.dataTransfer.setData('itemId', JSON.stringify({ listId: list.id, itemId }))
}

const dropItem = (event: DragEvent) => {
  if (!event || !event.dataTransfer) return

  let { listId, itemId } = JSON.parse(event.dataTransfer.getData('itemId'))
}
</script>

<template>
  <section @dragover.prevent @drop="dropItem">
    <h2>{{ list.name }}</h2>

    <div>
      <TaskItem v-for="task of list.tasks" :key="task.id" :task="task" @dragItem="dragItem" />
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