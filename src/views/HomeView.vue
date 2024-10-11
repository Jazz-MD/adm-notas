<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <h1>Administrador de notas</h1>
    <p>Aquí podras gestionar tus notas, apuntes, etc</p>
    <RouterLink :to="{ name: 'notas' }" class="btn btn-info"
      >Ver mis notas</RouterLink
    >
  </main>
</template>
