<script setup>
defineProps({
  target: {
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
  <section class="card target" :style="{ '--delay': `${delay}ms` }">
    <p class="card-kicker">Target role</p>
    <h3 class="card-title">{{ target.role }}</h3>
    <p class="card-subtitle">{{ target.company }} - {{ target.location }}</p>
    <a class="card-link" :href="target.url" target="_blank" rel="noreferrer">
      View job posting
    </a>
  </section>
</template>
