<template>
  <div class="basic-layout">
    <aside>
      <nav>
        <ul>
          <li>
            <RouterLink to="/">My tasks</RouterLink>
          </li>
        </ul>
      </nav>
    </aside>

    <slot></slot>
  </div>
</template>

<style scoped>
.basic-layout {
  display: grid;
  align-items: center;
  grid-template-columns: clamp(100px, 150px, 200px) 1fr;
  gap: 2rem;
}

aside {
  max-height: 500px;
}

nav {
  display: flex;
  flex-direction: column;
}

ul {
  padding: 0;
  list-style-type: none;
}

li {
  padding: .2rem 1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}
</style>