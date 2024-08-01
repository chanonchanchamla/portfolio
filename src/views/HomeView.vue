<template>
  <profile />
  <about-me />
  <skills />
  <works />
  <contact />
</template>

<script>
import { defineComponent } from 'vue';
import Profile from '@/components/Home/Profile.vue'
import AboutMe from '@/components/Home/AboutMe.vue'
import Skills from '@/components/Home/Skills.vue'
import Works from '@/components/Home/Works.vue'
import Contact from '@/components/Home/Contact.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    Profile,
    AboutMe,
    Skills,
    Works,
    Contact,
  },
});
</script>
