<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <header>
      <div class="header-content">
        <h1>Sistema de Gestión de Programas de Postgrado USFX</h1>
        <nav>
          <RouterLink to="/">Inicio</RouterLink>
          <RouterLink to="/niveles-academicos">Niveles Académicos</RouterLink>
          <RouterLink to="/programas">Programas</RouterLink>
        </nav>
      </div>
    </header>

    <main>
      <RouterView />
    </main>

    <footer>
      <p>© 2025 Universidad San Francisco Xavier - Sistema de Postgrado</p>
    </footer>
  </div>
</template>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  background-color: var(--vt-c-black-soft);
  color: white;
  padding: 20px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  width: 100%;
  border-bottom: 1px solid var(--vt-c-divider-dark-1);
}

.header-content {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  margin: 0 0 15px 0;
  font-size: 1.8rem;
}

nav {
  display: flex;
  gap: 15px;
  flex-wrap: nowrap;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 4px;
  transition: background-color 0.3s;
  flex: 1;
  text-align: center;
  white-space: nowrap;
}

nav a:hover {
  background-color: var(--vt-c-black-mute);
}

nav a.router-link-exact-active {
  background-color: var(--vt-c-green);
  color: var(--vt-c-black);
  font-weight: 600;
}

main {
  flex: 1;
  background-color: var(--vt-c-black);
  padding: 20px 0;
}

footer {
  background-color: var(--vt-c-black-soft);
  color: var(--color-text);
  text-align: center;
  padding: 15px 0;
  border-top: 1px solid var(--vt-c-divider-dark-1);
}

footer p {
  margin: 0;
}

@media (max-width: 768px) {
  h1 {
    font-size: 1.3rem;
  }

  nav {
    gap: 10px;
  }

  nav a {
    font-size: 0.9rem;
    padding: 6px 12px;
  }
}
</style>
