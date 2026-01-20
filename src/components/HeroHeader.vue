<script setup>
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
</script>

<template>
  <header class="hero" :style="{ '--delay': `${delay}ms` }">
    <div class="hero-copy">
      <p class="hero-kicker">Curriculum Vitae</p>
      <h1 class="hero-name">{{ profile.name }}</h1>
      <p class="hero-title">{{ profile.title }}</p>
      <p class="hero-tagline">{{ profile.tagline }}</p>
    </div>
    <div class="hero-accent" aria-hidden="true">
      <div class="hero-accent-inner"></div>
    </div>
  </header>
</template>
