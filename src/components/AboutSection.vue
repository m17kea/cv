<script setup>
import SectionShell from './SectionShell.vue'

defineProps({
  about: {
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
  <SectionShell title="About" section-id="about" :delay="delay">
    <div class="stack">
      <p v-for="(paragraph, index) in about.paragraphs" :key="index" class="body-text">
        {{ paragraph }}
      </p>
    </div>
  </SectionShell>
</template>
