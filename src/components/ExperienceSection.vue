<script setup>
import SectionShell from './SectionShell.vue'
import ExperienceItem from './ExperienceItem.vue'

defineProps({
  experience: {
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
  <SectionShell title="Experience" section-id="experience" :delay="delay">
    <div class="experience-list">
      <ExperienceItem
        v-for="(role, index) in experience"
        :key="`${role.company}-${index}`"
        :role="role"
      />
    </div>
  </SectionShell>
</template>
