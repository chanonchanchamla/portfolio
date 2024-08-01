<template>
  <v-app>
    <v-main>
      <router-view key="content" />
    </v-main>
    <app-bar />
    <side-bar />
  </v-app>
</template>

<script>
import { useDisplay } from 'vuetify'
import AppBar from '@/components/AppBar.vue'
import SideBar from '@/components/SideBar.vue'

export default {
  name: 'App',
  components: {
    AppBar,
    SideBar,
  },
  data: () => ({
    ...useDisplay(),
  }),
}
</script>
