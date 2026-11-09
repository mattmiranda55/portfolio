import { onMounted, onUnmounted, ref } from 'vue'

/**
 * Index of the section currently being read: the last one whose top edge has
 * scrolled above a line 40% of the way down the viewport.
 */
export function useActiveSection(ids: readonly string[]) {
  const active = ref(0)

  const update = () => {
    const line = window.innerHeight * 0.4
    let current = 0
    ids.forEach((id, k) => {
      const el = document.getElementById(id)
      if (el && el.getBoundingClientRect().top <= line) current = k
    })
    active.value = current
  }

  onMounted(() => {
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    update()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', update)
    window.removeEventListener('resize', update)
  })

  return active
}
