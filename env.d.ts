/// <reference types="vite/client" />
declare module 'typewriter-effect/dist/core' {
  import type { TypewriterClass } from 'typewriter-effect'
  const Typewriter: typeof TypewriterClass
  export default Typewriter
}
