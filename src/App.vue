<script setup lang="ts">
import ContactForm from './components/ContactForm.vue'
import IntroSection from './components/IntroSection.vue'
import NavBar from './components/NavBar.vue'
import StorySection from './components/StorySection.vue'
import { useActiveSection } from './composables/useActiveSection'
import { sections } from './sections'

// Served from the R2 bucket. Change the filename to match the uploaded file.
const resumeUrl = 'https://lava.mattmiranda.dev/resume.pdf'

const active = useActiveSection(sections.map((s) => s.id))

function go(k: number) {
  const id = sections[k]?.id
  if (id) document.getElementById(id)?.scrollIntoView()
}

const work = [
  {
    "company": "APPROVE Payments",
    "role": "Full Stack Software Developer",
    "start": "11/24",
    "end": "current",
    "description": ""
  },
  {
    "company": "CastleBranch",
    "role": "Associate Software Developer",
    "start": "6/22",
    "end": "11/22",
    "description": ""
  }
];

const projects = [
  {
    "name": "Helm",
    "github": "https://github.com/mattmiranda55/helm",
    "description": "Helm is an all in one dashboard for your homelab. Helm uses the Glances API for monitoring and container control. Helm also includes a full terminal for you to access on the go!",
    "screenshot": ""
  },
  {
    "name": "Orbital",
    "github": "https://github.com/mattmiranda55/orbital",
    "description": "",
    "screenshot": ""
  },
  {
    "name": "Nexus",
    "github": "https://github.com/mattmiranda55/nexus",
    "description": "",
    "screenshot": ""
  },
  {
    "name": "Unnamed space exploration game",
    "github": "https://github.com/mattmiranda55/space-game",
    "description": "(REPO IS PRIVATE DURING DEVELOPMENT) ____ is a space exploration game built in Godot that includes building and launching rockets, satellites, and space stations, landing on and colonizing the moons and planets of the Solar System, and meeting some uncontacted species. This game is intedended to be a little bit more accessable than games like Kerbal Space Program, while having some new features.",
    "screenshot": ""
  },
];
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
      <article v-for="w in work" :key="`${w.company}-${w.role}-${w.start}`" class="rounded-2xl border border-white/10 p-6">
        <h3 class="text-xl font-semibold text-white">{{ w.role }} · {{w.company}}</h3>
        <p class="text-sm text-white/50">{{w.start}} – {{w.end}}</p>
        <p class="mt-3">{{ w.description }}</p>
      </article>
    </StorySection>

    <StorySection id="projects" heading="Projects">
      <article v-for="p in projects" :key="p.name" class="rounded-2xl border border-white/10 p-6">
        <div class="mb-4 grid aspect-video place-items-center rounded-xl border border-dashed border-white/20 text-sm text-white/40">
          {{ p.screenshot }}
        </div>
        <h3 class="text-xl font-semibold text-white">{{ p.name }}</h3>
        <a target="__blank" class="text-sm text-white/50">{{ p.github }}</a>
        <p class="mt-2">{{ p.description }}</p>
      </article>
    </StorySection>

    <StorySection id="contact" heading="Contact">
      <p>Have a role, a project or a question? Send me a message.</p>

      <ContactForm />

      <div class="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 p-6">
        <div>
          <h3 class="text-xl font-semibold text-white">Resume</h3>
          <p class="text-base text-white/60">PDF</p>
        </div>
        <a
          :href="resumeUrl"
          target="_blank"
          rel="noopener"
          download
          class="rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white hover:text-black"
        >
          Download resume <span aria-hidden="true">↓</span>
        </a>
      </div>
    </StorySection>
  </main>
</template>
