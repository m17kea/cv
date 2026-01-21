<script setup>
import HeroHeader from './components/HeroHeader.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import CodexImpactSection from './components/CodexImpactSection.vue'
import EducationSection from './components/EducationSection.vue'
import ReferenceNote from './components/ReferenceNote.vue'

import { profile } from './data/profile'
import { about } from './data/about'
import { experience } from './data/experienceIndex'
import { codexImpact } from './data/codexImpact'
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

      <div class="feature-row">
        <div class="feature-primary">
          <ExperienceSection :experience="derivitecExperience" :delay="240" />
        </div>
        <aside class="feature-sidebar">
          <CodexImpactSection :codex-impact="codexImpact" :delay="180" />
        </aside>
      </div>

      <ExperienceSection
        :experience="priorExperience"
        title="Earlier Experience"
        section-id="experience-previous"
        :delay="360"
      />
      <EducationSection :education="education" :delay="420" />
      <ReferenceNote :references="references" :delay="480" />
    </main>
  </div>
</template>
