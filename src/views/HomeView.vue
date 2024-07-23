<template>
  <profile />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import Profile from '@/components/Home/Profile.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    Profile,
  },
});
</script>
