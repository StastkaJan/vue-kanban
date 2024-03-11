<script setup lang="ts">
import { watch } from 'vue'
import { listsStore } from '@/stores/tasksLists'
import TasksList from '@/components/TasksList.vue'
import PlusIcons from '@/components/icons/PlusIcon.vue'

let { lists, addList, saveList } = listsStore()

watch(lists, saveList)
</script>

<template>
  <main>
    <header>
      <h1>
        Tasks
        <button @click="addList">
          <PlusIcons :width="26" :height="26" />
        </button>
      </h1>
    </header>

    <div>
      <TasksList v-for="list of lists" :key="list.name" :list="list" />
    </div>
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-rows: max-content 1fr;
  gap: 1rem;
  min-height: 70vh;
  overflow: auto;
}

header {
  border-bottom: 2px solid var(--prim-color);
}

h1 {
  display: flex;
  color: var(--prim-color);
}

button {
  fill: var(--prim-color);
}

button:hover {
  fill: var(--text-color);
}

div {
  display: flex;
  overflow: auto;
}
</style>
