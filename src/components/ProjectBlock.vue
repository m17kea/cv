<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="project-block">
    <div class="project-header">
      <h4 class="project-name">{{ project.name }}</h4>
      <p v-if="project.stack" class="project-stack">{{ project.stack }}</p>
    </div>
    <p v-if="project.description" class="project-description">{{ project.description }}</p>
    <ul v-if="project.bullets" class="bullet-list">
      <li v-for="(item, index) in project.bullets" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>
