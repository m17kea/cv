<script setup>
defineProps({
  contact: {
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
  <section class="card contact" :style="{ '--delay': `${delay}ms` }">
    <p class="card-kicker">Contact</p>
    <div class="contact-block">
      <p v-for="(line, index) in contact.addressLines" :key="index" class="contact-line">
        {{ line }}
      </p>
    </div>
    <div class="contact-block">
      <p class="contact-label">Phone</p>
      <p class="contact-line">{{ contact.phone }}</p>
    </div>
    <div class="contact-block">
      <p class="contact-label">Email</p>
      <a class="contact-link" :href="`mailto:${contact.email}`">{{ contact.email }}</a>
    </div>
  </section>
</template>
