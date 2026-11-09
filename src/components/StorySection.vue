<script setup lang="ts">
defineProps<{ id: string; heading: string }>()
</script>

<template>
  <!--
    Two columns on desktop. The heading sticks below the nav bar while the right
    column scrolls past it; when the section's content runs out, the heading
    scrolls away with it and the next section's heading takes over.
    Sticky needs every ancestor to leave `overflow` alone.
  -->
  <section
    :id="id"
    class="mx-auto grid min-h-svh max-w-6xl gap-8 px-6 pt-28 pb-32 md:grid-cols-[18rem_1fr] md:gap-16 md:px-12"
  >
    <h2 class="text-4xl font-bold tracking-tight md:sticky md:top-28 md:self-start md:text-5xl">
      {{ heading }}
    </h2>
    <div class="space-y-8 text-lg leading-relaxed text-white/80">
      <slot />
    </div>
  </section>
</template>
