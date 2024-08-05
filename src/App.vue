<template>
  <v-app>
    <v-main>
      <router-view v-slot="{ Component, route }">
        <v-slide-x-transition mode="out-in">
          <div :key="route.name">
            <component :is="Component" />
          </div>
        </v-slide-x-transition>
      </router-view>
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
