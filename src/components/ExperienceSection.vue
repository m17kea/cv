<script setup>
import SectionShell from './SectionShell.vue'
import ExperienceItem from './ExperienceItem.vue'

defineProps({
  experience: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    default: 'Experience',
  },
  sectionId: {
    type: String,
    default: 'experience',
  },
  delay: {
    type: Number,
    default: 0,
  },
})
</script>

<template>
  <SectionShell :title="title" :section-id="sectionId" :delay="delay">
    <div class="experience-list">
      <ExperienceItem
        v-for="(role, index) in experience"
        :key="`${role.company}-${index}`"
        :role="role"
      />
    </div>
  </SectionShell>
</template>
