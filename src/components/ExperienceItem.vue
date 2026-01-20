<script setup>
import ProjectBlock from './ProjectBlock.vue'

defineProps({
  role: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="experience-item">
    <header class="experience-header">
      <div>
        <h3 class="experience-company">{{ role.company }}</h3>
        <p class="experience-title">{{ role.title }} - {{ role.location }}</p>
      </div>
      <p class="experience-dates">{{ role.dateRange }}</p>
    </header>

    <p v-if="role.overview" class="experience-overview">{{ role.overview }}</p>

    <div v-if="role.achievements" class="experience-achievements">
      <p v-if="role.achievementsIntro" class="experience-intro">{{ role.achievementsIntro }}</p>
      <ul class="detail-list">
        <li v-for="(item, index) in role.achievements" :key="index">
          <span class="detail-label">{{ item.label }}:</span>
          <span class="detail-text">{{ item.detail }}</span>
        </li>
      </ul>
      <p v-if="role.impact" class="experience-impact">{{ role.impact }}</p>
    </div>

    <div v-if="role.projects" class="experience-projects">
      <ProjectBlock
        v-for="(project, index) in role.projects"
        :key="`${role.company}-${project.name}-${index}`"
        :project="project"
      />
    </div>
  </article>
</template>
