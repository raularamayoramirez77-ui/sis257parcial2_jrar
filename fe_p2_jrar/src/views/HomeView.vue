<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="home-container">
    <div class="welcome-section">
      <h1>Bienvenido al Sistema de Gestión de Programas de Postgrado</h1>
      <p class="subtitle">Universidad San Francisco Xavier de Chuquisaca</p>

      <div class="cards-container">
        <div class="card">
          <h2>Niveles Académicos</h2>
          <p>Gestiona los diferentes niveles académicos disponibles: Diplomado, Especialidad, Maestría y Doctorado.</p>
          <RouterLink to="/niveles-academicos" class="btn">Gestionar Niveles</RouterLink>
        </div>

        <div class="card">
          <h2>Programas</h2>
          <p>
            Administra los programas de postgrado, incluyendo información detallada sobre duración,
            costo, fechas y estados.
          </p>
          <RouterLink to="/programas" class="btn">Gestionar Programas</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.welcome-section {
  text-align: center;
}

h1 {
  color: var(--color-heading);
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.subtitle {
  color: var(--vt-c-green);
  font-size: 1.3rem;
  margin-bottom: 40px;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.card {
  background: var(--vt-c-black-soft);
  padding: 30px;
  border-radius: 8px;
  border: 1px solid var(--vt-c-divider-dark-1);
  transition: transform 0.3s, border-color 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  border-color: var(--vt-c-green);
}

.card h2 {
  color: var(--vt-c-green);
  margin-bottom: 15px;
}

.card p {
  color: var(--color-text);
  line-height: 1.6;
  margin-bottom: 20px;
}

.btn {
  display: inline-block;
  background-color: var(--vt-c-green);
  color: var(--vt-c-black);
  padding: 12px 24px;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s;
  font-weight: 600;
}

.btn:hover {
  background-color: var(--vt-c-green-dark);
}

.info-section {
  background: var(--vt-c-black-soft);
  padding: 30px;
  border-radius: 8px;
  border: 1px solid var(--vt-c-divider-dark-1);
  text-align: left;
  max-width: 600px;
  margin: 0 auto;
}

.info-section h3 {
  color: var(--vt-c-green);
  margin-bottom: 20px;
  text-align: center;
}

.info-section ul {
  list-style: none;
  padding: 0;
}

.info-section li {
  color: var(--color-text);
  padding: 10px 0;
  border-bottom: 1px solid var(--vt-c-divider-dark-2);
}

.info-section li:last-child {
  border-bottom: none;
}

@media (max-width: 768px) {
  h1 {
    font-size: 1.8rem;
  }

  .subtitle {
    font-size: 1.1rem;
  }

  .cards-container {
    grid-template-columns: 1fr;
  }
}
</style>
