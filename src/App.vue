<script setup>
import HeroHeader from './components/HeroHeader.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import EducationSection from './components/EducationSection.vue'
import ReferenceNote from './components/ReferenceNote.vue'

import { profile } from './data/profile'
import { about } from './data/about'
import { experience } from './data/experienceIndex'
import { education } from './data/education'
import { references } from './data/references'

const derivitecExperience = experience.slice(0, 1)
const priorExperience = experience.slice(1)
</script>

<template>
  <div class="page">
    <HeroHeader :profile="profile" :delay="0" />

    <main class="layout">
      <AboutSection :about="about" :delay="120" />

      <ExperienceSection :experience="derivitecExperience" :delay="240" />

      <ExperienceSection
        :experience="priorExperience"
        title=""
        section-id="experience-previous"
        :delay="360"
      />
      <EducationSection :education="education" :delay="420" />
      <ReferenceNote :references="references" :delay="480" />
    </main>
  </div>
</template>
