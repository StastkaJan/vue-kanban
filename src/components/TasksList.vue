<script setup lang="ts">
import { computed, ref } from 'vue'
import { listsStore } from '@/stores/tasksLists'
import TaskItem from '@/components/TaskItem.vue'
import PlusIcons from '@/components/icons/PlusIcon.vue'

import type { tasksListType } from '@/types/tasks'

const { list } = defineProps<{ list: tasksListType }>()

let { setListName, addNewTask, getTask, setTask, movingTask } = listsStore()

const sortedTasks = computed(() =>
  [...list.tasks].sort((a, b) => Number(a.dueDate) - Number(b.dueDate))
)

const h2 = ref(list.name)

const allowNameEdit = (e: MouseEvent) => {
  const target = e.target as HTMLInputElement
  if (!target) return

  target.setAttribute('contenteditable', 'true')
  target.focus()
}

const confirmNameEdit = (e: KeyboardEvent) => {
  const target = e.target as HTMLInputElement
  if (!target) return

  setListName(list.id, target.innerText)
  target.removeAttribute('contenteditable')
}

const cancelNameEdit = (e: FocusEvent | KeyboardEvent) => {
  const target = e.target as HTMLInputElement
  if (!target) return

  h2.value = list.name
  target.removeAttribute('contenteditable')
}

const trackNameInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  if (!target) return

  h2.value = target.innerText
}

const dragTask = (listId: number, taskId: number) => {
  movingTask.listId = listId
  movingTask.taskId = taskId
}

const dropTask = (listIdTo: number) => {
  const task = getTask(movingTask.listId, movingTask.taskId, true)
  setTask(listIdTo, task)
}
</script>

<template>
  <section @dragover.prevent @drop="dropTask(list.id)">
    <h2>
      <span @dblclick="allowNameEdit" @keypress.enter="confirmNameEdit" @focusout="cancelNameEdit"
        @input.prevent="trackNameInput">
        {{ h2 }}
      </span>

      <button @click="addNewTask(list.id)">
        <PlusIcons :width="22" :height="22" />
      </button>
    </h2>

    <TransitionGroup tag="div">
      <TaskItem v-for="task of sortedTasks" :key="task.id" :task="task" @dragstart="dragTask(list.id, task.id)" />
    </TransitionGroup>
  </section>
</template>

<style scoped>
section {
  flex-shrink: 0;
  width: 270px;
  padding: 1rem;
}

h2 {
  display: flex;
  gap: .5rem;
}

button {
  fill: var(--text-color);
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