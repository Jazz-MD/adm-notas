import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { useNotesStore } from './notesStore'

describe('useNotesStore', () => {
  let notesStore

  beforeEach(() => {
    setActivePinia(createPinia())
    notesStore = useNotesStore()
  })

  it('debe inicializar el store correctamente', () => {
    expect(notesStore.notes).toEqual([])
    expect(notesStore.notesCount).toBe(0)
  })
})
