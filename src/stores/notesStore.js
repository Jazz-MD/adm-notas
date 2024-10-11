import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import {
  createNote,
  deleteNote,
  fetchAllNotes,
  fetchNoteById,
  updateNote,
} from '@/services/notes.service'

export const useNotesStore = defineStore('notes', () => {
  const notes = ref([])
  const notesCount = computed(() => notes.value.length || 0)
  //leer todas las notas
  async function getNotes() {
    const notesData = await fetchAllNotes()
    if (notesData) {
      notes.value = notesData
    }
  }

  //   leer solo 1 registro segun su id
  function getItemById(id) {
    return notes.value.find(note => note._uuid === id)
  }

  async function getNoteById(id) {
    let noteData = getItemById(id) //verifica que esta en store local
    if (!noteData) {
      //sino encuentra dara en store local
      noteData = await fetchNoteById(id) //hace consulta a la API
    }
    return noteData
  }

  //agregar nota
  async function addNote(note) {
    const newNoteData = await createNote(note)
    if (newNoteData) {
      notes.value.unshift(newNoteData)
    }
    return newNoteData
  }

  //eliminar nota
  async function removeNote(id) {
    const isDeleted = await deleteNote(id)

    if (isDeleted) {
      notes.value = notes.value.filter(note => note._uuid !== id)
    }
  }

  //editar nota

  async function editNote(id, form) {
    const updateNoteData = await updateNote(id, form)

    if (updateNoteData) {
      notes.value = notes.value.map(note => {
        if (note._uuid === id) {
          return { ...note, ...updateNoteData }
        }
        return note
      })
    }

    return updateNoteData
  }

  return {
    notes,
    notesCount,
    addNote,
    getNotes,
    getNoteById,
    removeNote,
    editNote,
  }
})
