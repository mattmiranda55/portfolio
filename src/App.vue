<script setup lang="ts">
import IntroSection from './components/IntroSection.vue'
import NavBar from './components/NavBar.vue'
import StorySection from './components/StorySection.vue'
import { useActiveSection } from './composables/useActiveSection'
import { sections } from './sections'

const active = useActiveSection(sections.map((s) => s.id))

function go(k: number) {
  const id = sections[k]?.id
  if (id) document.getElementById(id)?.scrollIntoView()
}
</script>

<template>
  <NavBar :active="active" @navigate="go" />

  <main>
    <section id="intro" class="h-svh">
      <IntroSection />
    </section>

    <!-- Everything below is placeholder content, long enough to show the sticky headings. -->
    <StorySection id="bio" heading="Bio">
      <p v-for="n in 4" :key="n">
        Placeholder paragraph {{ n }}. A few sentences about who you are, what you care about and
        how you got here. Keep going until this column is taller than the screen so the heading on
        the left has something to stay put for.
      </p>
    </StorySection>

    <StorySection id="work" heading="Work history">
      <article v-for="n in 5" :key="n" class="rounded-2xl border border-white/10 p-6">
        <h3 class="text-xl font-semibold text-white">Role {{ n }} · Company</h3>
        <p class="text-sm text-white/50">20XX – 20XX</p>
        <p class="mt-3">Placeholder: what you owned, what you shipped and what changed because of it.</p>
      </article>
    </StorySection>

    <StorySection id="projects" heading="Projects">
      <article v-for="n in 4" :key="n" class="rounded-2xl border border-white/10 p-6">
        <div class="mb-4 grid aspect-video place-items-center rounded-xl border border-dashed border-white/20 text-sm text-white/40">
          Screenshot
        </div>
        <h3 class="text-xl font-semibold text-white">Project {{ n }}</h3>
        <p class="mt-2">Placeholder: what it is, why you built it and a link.</p>
      </article>
    </StorySection>

    <StorySection id="contact" heading="Contact">
      <p>Placeholder: email and social links.</p>
    </StorySection>
  </main>
</template>
