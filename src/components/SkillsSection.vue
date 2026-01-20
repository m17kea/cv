<script setup>
import SectionShell from './SectionShell.vue'
import SkillsGroup from './SkillsGroup.vue'

defineProps({
  skills: {
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
  <SectionShell title="Skills" section-id="skills" :delay="delay">
    <div class="skills-grid">
      <SkillsGroup v-for="group in skills" :key="group.title" :group="group" />
    </div>
  </SectionShell>
</template>
