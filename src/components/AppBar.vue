<template>
  <v-app-bar
    color="background" flat floating
  >
    <v-row v-if="mdAndUp" no-gutters justify="end" class="py-2">
      <v-col cols="auto" class="text-center my-2">
        <v-btn flat color="background" @click="scrollToAboutme()">
          <span class="text-h6 text-body-1 text-grey-darken-2 text-spacing-1">About me</span>
        </v-btn>
      </v-col>
      <v-col cols="auto" class="text-center my-2">
        <v-btn flat color="background" @click="scrollToWorks()">
          <span class="text-h6 text-body-1 text-grey-darken-2 text-spacing-1">Works</span>
        </v-btn>
      </v-col>
      <v-col cols="auto" class="text-center my-2">
        <v-btn flat color="background" @click="scrollToContact()">
          <span class="text-body-1 text-grey-darken-2 text-spacing-1">Contact</span>
        </v-btn>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
import { useDisplay } from 'vuetify'
import { mapState } from 'vuex'

export default {
  name: 'AppBar',
  data: () => ({
    ...useDisplay(),
  }),
  computed: {
    ...mapState({
      position: (state) => state.position,
    }),
  },
  methods: {
    scrollToAboutme() {
      document.documentElement.scrollTo(0, this.position.aboutme)
    },
    scrollToWorks() {
      document.documentElement.scrollTo(0, this.position.works)
    },
    scrollToContact() {
      document.documentElement.scrollTo(0, this.position.contact)
    },
  },
}
</script>
