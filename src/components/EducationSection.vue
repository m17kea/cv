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
      <p v-for="(item, index) in education" :key="index" class="education-line">
        <template v-if="item.line">
          {{ item.line }}
        </template>
        <template v-else>
          {{ item.qualification }} - {{ item.institution }} ({{ item.dateRange }})
        </template>
      </p>
    </div>
  </SectionShell>
</template>
