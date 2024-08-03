<template>
  <v-app>
    <v-main>
      <router-view key="content" />
    </v-main>
    <side-bar />
    <app-bar />
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
