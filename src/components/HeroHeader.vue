<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

defineProps({
  profile: {
    type: Object,
    required: true,
  },
  delay: {
    type: Number,
    default: 0,
  },
})

const heroRef = ref(null)
const copyRef = ref(null)
let resizeObserver = null
let syncingPhotoSize = false

const syncPhotoSize = () => {
  if (syncingPhotoSize || !heroRef.value || !copyRef.value) {
    return
  }
  syncingPhotoSize = true
  const hero = heroRef.value
  hero.style.setProperty('--hero-photo-size', '0px')
  const copyHeight = Math.round(copyRef.value.getBoundingClientRect().height)
  hero.style.setProperty('--hero-photo-size', `${copyHeight}px`)
  syncingPhotoSize = false
}

onMounted(() => {
  syncPhotoSize()
  resizeObserver = new ResizeObserver(syncPhotoSize)
  if (copyRef.value) {
    resizeObserver.observe(copyRef.value)
  }
  window.addEventListener('resize', syncPhotoSize)
})

onBeforeUnmount(() => {
  if (resizeObserver) {
    resizeObserver.disconnect()
    resizeObserver = null
  }
  window.removeEventListener('resize', syncPhotoSize)
})
</script>

<template>
  <header ref="heroRef" class="hero" :style="{ '--delay': `${delay}ms` }">
    <div ref="copyRef" class="hero-copy">
      <p class="hero-kicker">Curriculum Vitae</p>
      <h1 class="hero-name">{{ profile.name }}</h1>
      <p v-if="profile.title" class="hero-title">{{ profile.title }}</p>
      <p v-if="profile.tagline" class="hero-tagline">{{ profile.tagline }}</p>
      <a v-if="profile.email" class="hero-email" :href="`mailto:${profile.email}`">
        {{ profile.email }}
      </a>
      <a
        v-if="profile.website"
        class="hero-contact"
        :href="profile.website"
        target="_blank"
        rel="noreferrer"
      >
        {{ profile.website }}
      </a>
    </div>
    <div v-if="profile.photo" class="hero-photo-frame">
      <img class="hero-photo" :src="profile.photo" :alt="`Headshot of ${profile.name}`" />
    </div>
    <div v-else class="hero-accent" aria-hidden="true">
      <div class="hero-accent-inner"></div>
    </div>
  </header>
</template>
