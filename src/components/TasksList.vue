<script setup lang="ts">
import { computed } from 'vue'
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

const sortedTasks = computed(() =>
  [...list.tasks].sort((a, b) => Number(a.dueDate) - Number(b.dueDate))
)
</script>

<template>
  <section @dragover.prevent @drop="dropItem">
    <h2>{{ list.name }}</h2>

    <TransitionGroup tag="div">
      <TaskItem v-for="task of sortedTasks" :key="task.id" :task="task" @dragItem="dragItem" />
    </TransitionGroup>
  </section>
</template>

<style scoped>
section {
  flex-shrink: 0;
  width: 270px;
  padding: 1rem;
}

.v-move,
.v-enter-active,
.v-leave-active {
  transition: all .2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: scale(0);
}

.v-leave-active {
  position: absolute;
}
</style>