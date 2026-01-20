<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  kicker: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
  sectionId: {
    type: String,
    default: '',
  },
  delay: {
    type: Number,
    default: 0,
  },
})
</script>

<template>
  <section :id="sectionId" class="section" :style="{ '--delay': `${delay}ms` }">
    <header class="section-header">
      <p v-if="kicker" class="section-kicker">{{ kicker }}</p>
      <h2 class="section-title">{{ title }}</h2>
      <p v-if="subtitle" class="section-subtitle">{{ subtitle }}</p>
    </header>
    <div class="section-body">
      <slot />
    </div>
  </section>
</template>
