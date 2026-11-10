<script setup lang="ts">
import { onMounted, onUnmounted, useTemplateRef } from 'vue'

const props = withDefaults(
  defineProps<{
    /** Colour of the dots and lines. */
    color?: string
    /** Colour painted behind the net. */
    background?: string
    /** Roughly one point per this many square pixels of screen. */
    density?: number
    /** Points closer than this (px) are joined by a line. */
    linkDistance?: number
    /** How far (px) the nearest points shift when the cursor is at the edge of the screen. */
    parallax?: number
  }>(),
  { color: '#fc0000', background: '#140c50', density: 14000, linkDistance: 150, parallax: 70 },
)

interface Point {
  x: number
  y: number
  vx: number
  vy: number
  /** Depth: 0.15 = far away (small, faint, barely shifts), 1 = close (large, shifts the most). */
  z: number
  /** Where the point is drawn this frame, after the parallax shift. */
  sx: number
  sy: number
}

const canvas = useTemplateRef<HTMLCanvasElement>('canvas')

const CRUISE = 0.35 // drift speed, px per frame
const MAX_POINTS = 160

let ctx: CanvasRenderingContext2D | null = null
let points: Point[] = []
let width = 0
let height = 0
let frame = 0
// Cursor position relative to the centre of the screen, from -1 to 1 on each axis.
// `target` is where the cursor is; `view` eases towards it so the net glides instead of snapping.
const target = { x: 0, y: 0 }
const view = { x: 0, y: 0 }
let reducedMotion = false

function resize() {
  const el = canvas.value
  if (!el || !ctx) return
  // Cap the pixel ratio: beyond 2x the extra sharpness isn't visible but costs fill rate.
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  width = window.innerWidth
  height = window.innerHeight
  el.width = Math.round(width * dpr)
  el.height = Math.round(height * dpr)
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

  // Points live in an area larger than the screen by the parallax distance on
  // every side, so shifting the net never uncovers an empty edge.
  const m = props.parallax
  const count = Math.min(Math.round(((width + m * 2) * (height + m * 2)) / props.density), MAX_POINTS)
  points = Array.from({ length: count }, () => {
    const angle = Math.random() * Math.PI * 2
    const z = 0.15 + Math.random() * 0.85
    return {
      x: -m + Math.random() * (width + m * 2),
      y: -m + Math.random() * (height + m * 2),
      // Far points also drift more slowly, which adds to the sense of depth.
      vx: Math.cos(angle) * CRUISE * z,
      vy: Math.sin(angle) * CRUISE * z,
      z,
      sx: 0,
      sy: 0,
    }
  })
  project()
  draw()
}

function step() {
  view.x += (target.x - view.x) * 0.06
  view.y += (target.y - view.y) * 0.06

  const m = props.parallax
  for (const p of points) {
    p.x += p.vx
    p.y += p.vy

    // Bounce off the edges of the (oversized) area.
    if (p.x < -m || p.x > width + m) p.vx *= -1
    if (p.y < -m || p.y > height + m) p.vy *= -1
    p.x = Math.min(Math.max(p.x, -m), width + m)
    p.y = Math.min(Math.max(p.y, -m), height + m)
  }
  project()
}

/** Parallax: shift each point against the cursor, in proportion to how close it is. */
function project() {
  for (const p of points) {
    p.sx = p.x - view.x * props.parallax * p.z
    p.sy = p.y - view.y * props.parallax * p.z
  }
}

function line(ax: number, ay: number, bx: number, by: number, alpha: number) {
  if (!ctx) return
  ctx.globalAlpha = alpha
  ctx.beginPath()
  ctx.moveTo(ax, ay)
  ctx.lineTo(bx, by)
  ctx.stroke()
}

function draw() {
  if (!ctx) return
  ctx.globalAlpha = 1
  ctx.fillStyle = props.background
  ctx.fillRect(0, 0, width, height)

  ctx.strokeStyle = props.color
  ctx.fillStyle = props.color
  ctx.lineWidth = 1

  for (let i = 0; i < points.length; i++) {
    const a = points[i]!

    for (let j = i + 1; j < points.length; j++) {
      const b = points[j]!
      const dist = Math.hypot(a.sx - b.sx, a.sy - b.sy)
      if (dist < props.linkDistance) {
        // Lines fade with length and with how far away their two ends are.
        line(a.sx, a.sy, b.sx, b.sy, (1 - dist / props.linkDistance) * 0.6 * ((a.z + b.z) / 2))
      }
    }

    ctx.globalAlpha = 0.3 + a.z * 0.7
    ctx.beginPath()
    ctx.arc(a.sx, a.sy, 1 + a.z * 1.6, 0, Math.PI * 2)
    ctx.fill()
  }
}

function loop() {
  step()
  draw()
  frame = requestAnimationFrame(loop)
}

const onPointerMove = (e: PointerEvent) => {
  // Touch has no hover, so only a real pointer drives the effect.
  if (e.pointerType !== 'mouse' && e.pointerType !== 'pen') return
  target.x = (e.clientX / width) * 2 - 1
  target.y = (e.clientY / height) * 2 - 1
}
// When the cursor leaves the page, glide back to centre.
const onPointerLeave = () => {
  target.x = 0
  target.y = 0
}

onMounted(() => {
  ctx = canvas.value?.getContext('2d') ?? null
  if (!ctx) return

  reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.addEventListener('resize', resize)
  resize()

  // Reduced motion: keep the still net that resize() just drew, and don't animate.
  if (reducedMotion) return
  window.addEventListener('pointermove', onPointerMove, { passive: true })
  document.documentElement.addEventListener('pointerleave', onPointerLeave)
  frame = requestAnimationFrame(loop)
})

onUnmounted(() => {
  cancelAnimationFrame(frame)
  window.removeEventListener('resize', resize)
  window.removeEventListener('pointermove', onPointerMove)
  document.documentElement.removeEventListener('pointerleave', onPointerLeave)
})
</script>

<template>
  <!-- Fixed behind everything; never intercepts clicks. -->
  <canvas ref="canvas" aria-hidden="true" class="pointer-events-none fixed inset-0 -z-10 h-full w-full" />
</template>
