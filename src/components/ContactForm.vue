<script setup lang="ts">
import { reactive, ref, useTemplateRef } from 'vue'
import SlingButton from './SlingButton.vue'

// Web3Forms emails each submission to the address the access key was created for.
// The key is meant to be public (it ships in the page), so it is safe in the bundle.
// Set it in .env.local for dev and as a build variable in Cloudflare Pages.
const accessKey = import.meta.env.VITE_WEB3FORMS_KEY
const endpoint = 'https://api.web3forms.com/submit'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const status = ref<Status>('idle')
const errorMessage = ref('')
const form = reactive({ name: '', email: '', message: '', botcheck: false })
const formEl = useTemplateRef('formEl')

// requestSubmit, not submit(): it runs the required-field checks first.
function send() {
  formEl.value!.requestSubmit()
}

async function submit() {
  if (status.value === 'sending') return

  if (!accessKey) {
    status.value = 'error'
    errorMessage.value = 'The form is not set up yet: VITE_WEB3FORMS_KEY is missing.'
    return
  }

  status.value = 'sending'
  errorMessage.value = ''

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Portfolio message from ${form.name}`,
        from_name: 'mattmiranda.dev',
        name: form.name,
        email: form.email,
        message: form.message,
        // Honeypot: real visitors never see or tick this, bots often do.
        botcheck: form.botcheck,
      }),
    })
    const result: { success?: boolean; message?: string } = await response.json()
    if (!response.ok || !result.success) throw new Error(result.message || 'Request failed')

    status.value = 'sent'
    form.name = ''
    form.email = ''
    form.message = ''
  } catch (error) {
    status.value = 'error'
    errorMessage.value =
      error instanceof Error && error.message
        ? `Couldn't send your message: ${error.message}`
        : "Couldn't send your message. Please try again."
  }
}
</script>

<template>
  <div v-if="status === 'sent'" role="status" class="rounded-2xl border border-white/10 p-6">
    <p class="text-xl font-semibold text-white">Thanks, your message is on its way.</p>
    <p class="mt-2">I'll get back to you as soon as I can.</p>
    <button
      type="button"
      class="mt-4 cursor-pointer text-base text-white/70 underline underline-offset-4 hover:text-white"
      @click="status = 'idle'"
    >
      Send another message
    </button>
  </div>

  <form v-else ref="formEl" class="space-y-5" @submit.prevent="submit">
    <div class="grid gap-5 md:grid-cols-2">
      <label class="block">
        <span class="mb-2 block text-sm text-white/60">Name</span>
        <input v-model.trim="form.name" type="text" name="name" autocomplete="name" required class="field" />
      </label>
      <label class="block">
        <span class="mb-2 block text-sm text-white/60">Email</span>
        <input v-model.trim="form.email" type="email" name="email" autocomplete="email" required class="field" />
      </label>
    </div>

    <label class="block">
      <span class="mb-2 block text-sm text-white/60">Message</span>
      <textarea v-model.trim="form.message" name="message" rows="6" required class="field resize-y" />
    </label>

    <!-- Honeypot field, hidden from people and assistive tech. -->
    <input v-model="form.botcheck" type="checkbox" name="botcheck" tabindex="-1" autocomplete="off" class="hidden" aria-hidden="true" />

    <div class="flex flex-wrap items-center gap-x-6 gap-y-4 pt-2">
      <SlingButton
        aria-label="Send message"
        well-color="rgba(255, 255, 255, 0.1)"
        band-color="rgba(255, 255, 255, 0.35)"
        :disabled="status === 'sending'"
        @send="send"
      />
      <p class="text-base text-white/60">
        {{ status === 'sending' ? 'Sending…' : 'Drag the arrow away and let go to launch your message, or just tap it.' }}
      </p>
      <p v-if="status === 'error'" role="alert" class="text-base text-red-400">{{ errorMessage }}</p>
    </div>
  </form>
</template>

<style scoped>
@reference "../app.css";

.field {
  @apply w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-base text-white outline-none transition-colors placeholder:text-white/30 focus:border-white/60;
}
</style>
