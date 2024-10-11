// aqui haremos las peticiones a la API
import axios from 'axios'

// instancia axios de la api
const api = axios.create({
  baseURL: 'https://crudapi.co.uk/api/v1',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
})

// crear nota
export const createNote = async newNote => {
  try {
    const response = await api.post('/notes', [newNote])

    const newNoteData = response.data.items[0]

    return newNoteData
  } catch (error) {
    console.error('Error al crear nota:', error)
  }
}

// leer todas la notas
export const fetchAllNotes = async () => {
  try {
    const response = await api.get('/notes')

    return response.data.items
  } catch (error) {
    console.error('Error al traer todas las notas', error)
  }
}

export const fetchNoteById = async id => {
  try {
    const response = await api.get(`/notes/${id}`)

    return response.data
  } catch (error) {
    console.error(`Error al hacer fetch a nota con id ${id}`, error)
  }
}

// eliminar una nota
export const deleteNote = async id => {
  try {
    await api.delete(`/notes/${id}`)
    return true
  } catch (error) {
    console.error(`Error al eliminar nota con id ${id}`, error)
    return false
  }
}

//funciona para actualizar una nota
export const updateNote = async (id, form) => {
  try {
    const response = await api.put(`/notes/${id}`, form)

    return response.data
  } catch (error) {
    console.error(`Error al actualizar nota con id ${id}`, error)
  }
}
