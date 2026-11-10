/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Public Web3Forms access key for the contact form. */
  readonly VITE_WEB3FORMS_KEY?: string
}
declare module 'typewriter-effect/dist/core' {
  import type { TypewriterClass } from 'typewriter-effect'
  const Typewriter: typeof TypewriterClass
  export default Typewriter
}
