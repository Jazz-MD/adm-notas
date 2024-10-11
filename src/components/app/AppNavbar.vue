<script setup>
import { useNotesStore } from '@/stores/notesStore'
import { RouterLink } from 'vue-router'
const notesStore = useNotesStore()
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-info">
    <div class="container">
      <RouterLink class="navbar-brand" :to="{ name: 'home' }"
        >Administrador de notas</RouterLink
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink
              active-class="active"
              class="nav-link"
              aria-current="page"
              :to="{ name: 'home' }"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              active-class="active"
              class="nav-link"
              :to="{ name: 'notas' }"
              >Notas ({{ notesStore.notesCount }})
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
