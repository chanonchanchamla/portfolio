<template>
  <profile />
  <about-me />
</template>

<script>
import { defineComponent } from 'vue';
import Profile from '@/components/Home/Profile.vue'
import AboutMe from '@/components/Home/AboutMe.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    Profile,
    AboutMe,
  },
});
</script>
