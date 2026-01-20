<script setup>
defineProps({
  group: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="skills-group">
    <h4 class="skills-title">{{ group.title }}</h4>
    <ul class="skills-list">
      <li v-for="(item, index) in group.items" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>
