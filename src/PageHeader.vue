<script setup lang="ts">
import { RouterLink } from 'vue-router'
console.log(window.matchMedia('(prefers-color-scheme: dark)'))
</script>

<template>
  <header>
    <RouterLink to="/">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />
    </RouterLink>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
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
  display: block;
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