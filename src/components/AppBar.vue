<template>
  <v-app-bar
    v-if="showAppBar"
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
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'AppBar',
  data: () => ({
    ...useDisplay(),
  }),
  computed: {
    ...mapState({
      position: (state) => state.position,
    }),
    showAppBar() {
      if (this.mdAndUp) return true
      const { name } = this.$route

      return name !== 'home'
    },
    routeHome() {
      console.log(this.$route.name)
      const { name } = this.$route
      return name === 'home'
    },
  },
  methods: {
    ...mapMutations({
      setScrollToAfterEach: 'setScrollToAfterEach',
    }),
    goBackAndScroll(target) {
      this.setScrollToAfterEach(target)
      this.$router.push({ name: 'home' })
    },
    scrollToAboutme() {
      const { aboutme } = this.position
      if (this.routeHome === false) return this.goBackAndScroll('aboutme')
      document.documentElement.scrollTo(0, aboutme)
    },
    scrollToWorks() {
      const { works } = this.position
      if (this.routeHome === false) return this.goBackAndScroll('works')
      document.documentElement.scrollTo(0, works)
    },
    scrollToContact() {
      const { contact } = this.position
      if (this.routeHome === false) return this.goBackAndScroll('contact')
      document.documentElement.scrollTo(0, contact)
    },
  },
}
</script>
