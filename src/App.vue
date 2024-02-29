<script setup lang="ts">
import { RouterView } from 'vue-router'
import PageHeader from './PageHeader.vue'
import PageFooter from './PageFooter.vue'
</script>

<template>
  <PageHeader />
  <RouterView />
  <PageFooter />
</template>
