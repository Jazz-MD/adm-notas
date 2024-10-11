import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import NoteItem from './NoteItem.vue'

const mockNote = {
  _uuid: '123',
  title: 'Título de prueba',
  content: 'Este es el contenido de la nota de prueba',
}

describe('NoteItem.vue', () => {
  it('renderiza el título y el contenido correctamente', () => {
    const wrapper = shallowMount(NoteItem, {
      props: {
        note: mockNote,
      },
    })

    expect(wrapper.find('[data-test="note-title"]').text()).toBe(mockNote.title)
    expect(wrapper.find('[data-test="note-content"]').text()).toBe(
      mockNote.content,
    )
  })
})
