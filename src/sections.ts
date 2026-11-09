/** The steps of the story, in scroll order. `id` is also the slot name in App.vue. */
export const sections = [
  { id: 'intro', label: 'Home' },
  { id: 'bio', label: 'Bio' },
  { id: 'work', label: 'Work history' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const

export type SectionId = (typeof sections)[number]['id']
