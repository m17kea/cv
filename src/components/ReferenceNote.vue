<script setup>
import SectionShell from './SectionShell.vue'

defineProps({
  references: {
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
  <SectionShell title="References" section-id="references" :delay="delay">
    <p class="body-text">{{ references.note }}</p>
  </SectionShell>
</template>
