<script setup lang="ts">
import TaskItem from '@/components/TaskItem.vue'
import { listsStore } from '@/stores/tasksLists'

import type { tasksListType } from '@/types/tasks'

const { list } = defineProps<{ list: tasksListType }>()

let lists = listsStore()

const dragItem = (event: DragEvent, itemId: number) => {
  lists.dragItem(event, list.id, itemId)
}

const dropItem = () => {
  lists.dropItem(list.id)
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