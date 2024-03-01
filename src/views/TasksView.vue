<script setup lang="ts">
import { reactive } from 'vue'

import type { tasksLists } from '@/types/tasks.ts'

let lists = reactive<tasksLists>([])
</script>

<template>
  <main>
    <header>
      <h1>Tasks</h1>
    </header>

  </main>
</template>
