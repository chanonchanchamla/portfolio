<template>
  <v-app-bar
    v-if="mdAndUp"
    color="background" flat floating
  >
    <v-row no-gutters justify="end" class="px-4 py-2">
      <v-col cols="auto" class="text-center my-2">
        <v-btn flat color="background">
          <span class="text-h6 text-body-1 text-grey-darken-2 text-spacing-1">About me</span>
        </v-btn>
      </v-col>
      <v-col cols="auto" class="text-center my-2">
        <v-btn flat color="background">
          <span class="text-h6 text-body-1 text-grey-darken-2 text-spacing-1">Projects</span>
        </v-btn>
      </v-col>
      <v-col cols="auto" class="text-center my-2">
        <v-btn flat color="background">
          <span class="text-body-1 text-grey-darken-2 text-spacing-1">Contact</span>
        </v-btn>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
import { useDisplay } from 'vuetify'

export default {
  name: 'AppBar',
  data: () => ({
    ...useDisplay(),
  }),
}
</script>
