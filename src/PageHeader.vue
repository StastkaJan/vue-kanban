<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/" class="logo">
      <img alt="logo" src="@/assets/logo.svg" width="50" height="50" />
      <span>Kanban template</span>
    </RouterLink>

    <nav>
      <RouterLink to="/profile">Profile</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5rem;
}

.logo {
  display: flex;
  align-items: center;
}

.logo span {
  font-size: 1.2rem;
}

nav {
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a {
  padding: .4rem .7rem;
}
</style>