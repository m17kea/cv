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
  <SectionShell :title="about.title ?? 'About'" section-id="about" :delay="delay">
    <ul v-if="about.items" class="bullet-list">
      <li v-for="(item, index) in about.items" :key="index">{{ item }}</li>
    </ul>
    <div v-else class="stack">
      <p v-for="(paragraph, index) in about.paragraphs" :key="index" class="body-text">
        {{ paragraph }}
      </p>
    </div>
  </SectionShell>
</template>
