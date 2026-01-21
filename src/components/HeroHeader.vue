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
      <p v-if="profile.title" class="hero-title">{{ profile.title }}</p>
      <p v-if="profile.tagline" class="hero-tagline">{{ profile.tagline }}</p>
      <a v-if="profile.email" class="hero-email" :href="`mailto:${profile.email}`">
        {{ profile.email }}
      </a>
      <a v-if="profile.phone" class="hero-contact" :href="`tel:${profile.phone}`">
        {{ profile.phone }}
      </a>
      <p v-if="profile.address" class="hero-contact">{{ profile.address }}</p>
    </div>
    <div v-if="profile.photo" class="hero-photo-frame">
      <img class="hero-photo" :src="profile.photo" :alt="`Headshot of ${profile.name}`" />
    </div>
    <div v-else class="hero-accent" aria-hidden="true">
      <div class="hero-accent-inner"></div>
    </div>
  </header>
</template>
