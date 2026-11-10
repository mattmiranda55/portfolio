<template>
  <div class="relative h-full">
    <!-- Text on the left, picture on the right; stacked on small screens. -->
    <div
      class="mx-auto grid h-full max-w-6xl content-center items-center gap-10 px-6 md:grid-cols-[1fr_auto] md:gap-16 md:px-12"
    >
      <div>
        <!-- min-h keeps the layout from jumping while the line is still being typed. -->
        <h1
          class="min-h-[1.2em] text-6xl font-bold tracking-tight md:text-7xl lg:text-8xl"
        >
          <DecryptedText
            text="Hi, I'm Matt!"
            animate-on="view"
            reveal-direction="center"
            :speed="100"
            :max-iterations="10"
            :sequential="false"
          />
        </h1>
        <p class="mt-4 text-lg text-white/70 md:text-xl">Full Stack Software Developer</p>
      </div>

      <!-- Placeholder frame: swap this div for an <img class="... object-cover"> with the same size classes. -->
      <div
        class="grid aspect-4/5 w-48 place-items-center rounded-2xl border border-dashed border-white/30 bg-white/5 text-sm text-white/40 md:w-72 lg:w-80"
      >
        Photo
      </div>
    </div>

    <p class="scroll-hint absolute inset-x-0 bottom-8 text-center text-sm text-white/50">
      Scroll <span aria-hidden="true">↓</span>
    </p>
  </div>
</template>

<style scoped>
.scroll-hint {
  animation: nudge 1.6s ease-in-out infinite;
}

@keyframes nudge {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(6px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .scroll-hint {
    animation: none;
  }
}
</style>
<script setup lang="ts">
import DecryptedText from './DecryptedText.vue';
</script>
