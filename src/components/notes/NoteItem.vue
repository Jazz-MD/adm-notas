<script setup>
import { useNotesStore } from '@/stores/notesStore'
import { RouterLink } from 'vue-router'

const notesStore = useNotesStore()

const { note } = defineProps({
  note: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="note-item h-100">
    <div class="note-item__header" data-test="note-title">
      <h3 class="flex-fill fw-bold fs-3">{{ note.title }}</h3>

      <div class="dropdown">
        <a
          class="btn btn-secondary dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="bi bi-three-dots-vertical"></i>
        </a>

        <ul class="dropdown-menu">
          <li>
            <RouterLink
              class="dropdown-item"
              :to="{ name: 'editar-nota', params: { id: note._uuid } }"
              >Editar</RouterLink
            >
          </li>
          <li>
            <span
              class="dropdown-item"
              @click="notesStore.removeNote(note._uuid)"
              >Eliminar</span
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="note-item__body">
      <p class="" data-test="note-content">
        {{ note.content }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.note-item {
  border: 1px solid $color-dark;
  box-shadow: 0px 0px 10px $color-dark;
  border-radius: $main-border-radius;
  &__header {
    border-radius: $main-border-radius $main-border-radius 0 0;
    display: flex;
    background-color: $color-main-bg;
    padding: 1rem;
  }
  &__body {
    padding: 2rem 1rem;
  }
}
</style>
