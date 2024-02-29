<script setup lang="ts">
import { RouterView } from 'vue-router'
import PageHeader from './PageHeader.vue'
import PageFooter from './PageFooter.vue'
import SidebarMenu from './SidebarMenu.vue'
</script>

<template>
  <PageHeader />

  <SidebarMenu>
    <RouterView />
  </SidebarMenu>

  <PageFooter />
</template>
