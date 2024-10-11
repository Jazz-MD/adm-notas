<script setup>
import { ref, watch } from 'vue'
import { useNotesStore } from '@/stores/notesStore'
import { useRouter } from 'vue-router'
const router = useRouter()
const notesStore = useNotesStore()
const noteData = ref({
  title: '',
  content: '',
})
const props = defineProps({
  initialNote: {
    type: Object,
  },
})

watch(
  () => props.initialNote,
  newInitialNote => {
    if (newInitialNote) {
      noteData.value.title = newInitialNote.title
      noteData.value.content = newInitialNote.content
    }
  },
)

async function handleSubmit() {
  //validar los campos
  const inputsAreValid =
    noteData.value.title.trim() && noteData.value.content.trim()
  if (!inputsAreValid) {
    /* validación básica de campos */
    alert('Todos los campos son requeridos')
    return
  }
  const response = props.initialNote
    ? await notesStore.editNote(props.initialNote._uuid, noteData.value)
    : await notesStore.addNote(noteData.value)
  //si la respuesta es correcta de los campos anteriores redirecciona a vista notas
  if (response) {
    router.push({ name: 'notas' })
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <!-- título -->
    <div class="mb-3">
      <label for="title">Título</label>
      <input
        class="form-control"
        type="text"
        id="title"
        placeholder="Título de la nota"
        required
        v-model="noteData.title"
      />
    </div>
    <div class="mb-3">
      <label for="content">Contenido</label>
      <textarea
        class="form-control"
        id="content"
        placeholder="Contenido de la nota"
        required
        v-model="noteData.content"
      ></textarea>
    </div>

    <button class="btn btn-info" type="submit">Guardar nota</button>
  </form>
</template>
