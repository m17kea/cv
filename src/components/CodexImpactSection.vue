<script setup>
import SectionShell from './SectionShell.vue'

defineProps({
  codexImpact: {
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
  <SectionShell
    :title="codexImpact.title"
    :subtitle="codexImpact.subtitle"
    section-id="codex"
    :delay="delay"
  >
    <div class="codex-grid">
      <div class="codex-card">
        <h4 class="codex-title">Work</h4>
        <ul class="bullet-list">
          <li v-for="(item, index) in codexImpact.work" :key="index">{{ item }}</li>
        </ul>
      </div>
      <div class="codex-card">
        <h4 class="codex-title">Home</h4>
        <p v-if="codexImpact.personalIntro" class="codex-intro">{{ codexImpact.personalIntro }}</p>
        <ul class="bullet-list">
          <li v-for="(item, index) in codexImpact.personal" :key="index">{{ item }}</li>
        </ul>
      </div>
    </div>
  </SectionShell>
</template>
