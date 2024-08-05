<template>
  <v-app-bar
    v-if="showAppBar"
    flat floating class="v-toolbar--blur"
  >
    <v-row v-if="mdAndUp" no-gutters justify="end" class="py-2">
      <v-col cols="auto" class="text-center my-2">
        <v-btn flat color="background" @click="scrollToAboutme()">
          <span class="text-h6 text-body-1 text-grey-darken-2 text-spacing-1">About</span>
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
      window.scrollTo({
        top: aboutme,
        behavior: 'smooth',
      })
    },
    scrollToWorks() {
      const { works } = this.position
      if (this.routeHome === false) return this.goBackAndScroll('works')
      window.scrollTo({
        top: works,
        behavior: 'smooth',
      })
    },
    scrollToContact() {
      const { contact } = this.position
      if (this.routeHome === false) return this.goBackAndScroll('contact')
      window.scrollTo({
        top: contact,
        behavior: 'smooth',
      })
    },
  },
}
</script>
