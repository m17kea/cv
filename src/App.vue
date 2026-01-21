<script setup>
import HeroHeader from './components/HeroHeader.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import EducationSection from './components/EducationSection.vue'
import ReferenceNote from './components/ReferenceNote.vue'
import TargetRole from './components/TargetRole.vue'

import { profile } from './data/profile'
import { about } from './data/about'
import { experience } from './data/experience'
import { skills } from './data/skills'
import { education } from './data/education'
import { references } from './data/references'
import { target } from './data/target'
</script>

<template>
  <div class="page">
    <HeroHeader :profile="profile" :delay="0" />

    <main class="layout">
      <div class="primary">
        <AboutSection :about="about" :delay="120" />
        <ExperienceSection :experience="experience" :delay="240" />
        <EducationSection :education="education" :delay="360" />
        <ReferenceNote :references="references" :delay="480" />
      </div>

      <aside class="sidebar">
        <TargetRole :target="target" :delay="180" />
        <SkillsSection :skills="skills" :delay="420" />
      </aside>
    </main>
  </div>
</template>
