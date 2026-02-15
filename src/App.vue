<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
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

const THEME_STORAGE_KEY = 'cv-theme-mode'
const themeMode = ref('system')
const prefersDark = ref(false)
let mediaQuery = null
let handleMediaChange = null

const resolvedTheme = computed(() => {
  if (themeMode.value === 'dark') {
    return 'dark'
  }
  if (themeMode.value === 'light') {
    return 'light'
  }
  return prefersDark.value ? 'dark' : 'light'
})

function applyResolvedTheme() {
  document.documentElement.setAttribute('data-theme', resolvedTheme.value)
  document.documentElement.style.colorScheme = resolvedTheme.value
}

function setThemeMode(mode) {
  themeMode.value = mode
  localStorage.setItem(THEME_STORAGE_KEY, mode)
}

watch(resolvedTheme, () => {
  applyResolvedTheme()
})

onMounted(() => {
  mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  handleMediaChange = (event) => {
    prefersDark.value = event.matches
  }

  prefersDark.value = mediaQuery.matches
  mediaQuery.addEventListener('change', handleMediaChange)

  const storedMode = localStorage.getItem(THEME_STORAGE_KEY)
  if (storedMode === 'system' || storedMode === 'light' || storedMode === 'dark') {
    themeMode.value = storedMode
  }
  applyResolvedTheme()
})

onBeforeUnmount(() => {
  if (mediaQuery && handleMediaChange) {
    mediaQuery.removeEventListener('change', handleMediaChange)
  }
})
</script>

<template>
  <div class="page">
    <div class="theme-toggle" role="group" aria-label="Color theme">
      <span class="theme-toggle-label">Theme</span>
      <button
        type="button"
        class="theme-toggle-button"
        :class="{ 'is-active': themeMode === 'system' }"
        aria-label="Auto theme"
        @click="setThemeMode('system')"
      >
        <span class="theme-icon" aria-hidden="true">◐</span>
        <span class="theme-text">Auto</span>
      </button>
      <button
        type="button"
        class="theme-toggle-button"
        :class="{ 'is-active': themeMode === 'light' }"
        aria-label="Light theme"
        @click="setThemeMode('light')"
      >
        <span class="theme-icon" aria-hidden="true">☀</span>
        <span class="theme-text">Light</span>
      </button>
      <button
        type="button"
        class="theme-toggle-button"
        :class="{ 'is-active': themeMode === 'dark' }"
        aria-label="Dark theme"
        @click="setThemeMode('dark')"
      >
        <span class="theme-icon" aria-hidden="true">☾</span>
        <span class="theme-text">Dark</span>
      </button>
    </div>

    <HeroHeader :profile="profile" :delay="0" />

    <main class="layout">
      <AboutSection :about="about" :delay="120" />

      <ExperienceSection :experience="derivitecExperience" :delay="240" />

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
