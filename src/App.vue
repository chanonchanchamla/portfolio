<template>
  <v-app>
    <v-main>
      <v-slide-x-transition mode="out-in">
        <router-view key="content" />
      </v-slide-x-transition>
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
