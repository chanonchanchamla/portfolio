<template>
  <v-navigation-drawer
    :width="menu ? 120 : 40"
    location="right" color="background"
    permanent floating
  >
    <template v-if="smAndDown" v-slot:prepend>
      <v-row no-gutters class="py-3">
        <v-col :cols="12" class="text-right">
          <v-btn icon flat size="small" color="background" @click="menu = !menu">
            <v-icon size="24" color="grey-darken-3">
              fas fa-grip-lines
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </template>
    <v-slide-x-transition mode="out-in">
      <v-list v-if="menu && smAndDown" density="compact" nav>
        <v-list-item class="cursor-pointer" @click="scrollToAboutme()">
          <span class="text-body-2 text-grey-darken-3 text-spacing-1">About</span>
        </v-list-item>
        <v-list-item class="cursor-pointer" @click="scrollToWorks()">
          <span class="text-body-2 text-grey-darken-3 text-spacing-1">Works</span>
        </v-list-item>
        <v-list-item class="cursor-pointer" @click="scrollToContact()">
          <span class="text-body-2 text-grey-darken-3 text-spacing-1">Contact</span>
        </v-list-item>
      </v-list>
    </v-slide-x-transition>
    <template v-slot:append>
      <v-row no-gutters class="py-3" justify="end">
        <v-col cols="auto" class="text-subheading text-spacing-2 text-rotate text-vertical text-grey-darken-2">
          CHANON's
        </v-col>
      </v-row>
    </template>
  </v-navigation-drawer>
</template>

<script>
import { useDisplay } from 'vuetify'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'SideBar',
  data: () => ({
    ...useDisplay(),
    menu: false,
  }),
  computed: {
    ...mapState({
      position: (state) => state.position,
    }),
    routeHome() {
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
      this.menu = false
      if (this.routeHome === false) return this.goBackAndScroll('aboutme')
      setTimeout(() => {
        window.scrollTo({
          top: aboutme,
          behavior: 'smooth',
        })
      }, 300)
    },
    scrollToWorks() {
      const { works } = this.position
      this.menu = false
      if (this.routeHome === false) return this.goBackAndScroll('works')
      setTimeout(() => {
        window.scrollTo({
          top: works,
          behavior: 'smooth',
        })
      }, 300)
    },
    scrollToContact() {
      const { contact } = this.position
      this.menu = false
      if (this.routeHome === false) return this.goBackAndScroll('contact')
      setTimeout(() => {
        window.scrollTo({
          top: contact,
          behavior: 'smooth',
        })
      }, 300)
    },
  },
}
</script>
