<script setup>
import SectionShell from './SectionShell.vue'

defineProps({
  education: {
    type: Array,
    required: true,
  },
  delay: {
    type: Number,
    default: 0,
  },
})
</script>

<template>
  <SectionShell title="Education" section-id="education" :delay="delay">
    <div class="education-list">
      <article v-for="(item, index) in education" :key="index" class="education-item">
        <div class="education-header">
          <h3 class="education-school">{{ item.institution }}</h3>
          <p class="education-dates">{{ item.dateRange }}</p>
        </div>
        <p class="education-qualification">{{ item.qualification }} - {{ item.location }}</p>
        <p class="education-summary">{{ item.summary }}</p>
      </article>
    </div>
  </SectionShell>
</template>
