<template>
  <profile ref="profile" />
  <about-me ref="aboutme" />
  <skills />
  <works ref="works" />
  <contact ref="contact" />
</template>

<script>
import { defineComponent } from 'vue';
import { mapState } from 'vuex';
import Profile from '@/components/Home/Profile.vue'
import AboutMe from '@/components/Home/AboutMe.vue'
import Skills from '@/components/Home/Skills.vue'
import Works from '@/components/Home/Works.vue'
import Contact from '@/components/Home/Contact.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    Profile,
    AboutMe,
    Skills,
    Works,
    Contact,
  },
  computed: {
    ...mapState({
      lastScroll: (state) => state.lastScroll,
      scrollToAfterEach: (state) => state.scrollToAfterEach,
      position: (state) => state.position,
    }),
  },
  mounted() {
    console.log(this.$refs)
    if (this.scrollToAfterEach == null) {
      return this.scrollToPosition(this.lastScroll)
    }

    const { offsetTop } = this.$refs[this.scrollToAfterEach].$el
    return this.scrollToPosition(offsetTop - 100)
  },
  methods: {
    scrollToPosition(position) {
      document.documentElement.scrollTo(0, position)
    },
  },
});
</script>
