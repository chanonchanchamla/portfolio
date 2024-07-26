<template>
  <v-container id="profile" fluid class="pa-0">
    <v-row no-gutters>
      <v-col :style="fixedHeadingHeight" :cols="12" :md="11" :offset-md="1" class="py-10 pt-md-0 pl-10 px-md-0">
        <v-row no-gutters class="fill-height" align-content="center" align-content-md="start">
          <v-col :cols="12" class="text-spacing-2 text-grey-darken-3 text-h6">
            Hello
          </v-col>
          <v-col :cols="12" class="text-spacing-1 text-h4 py-2">
            I'm Chanon Chanchamla
          </v-col>
          <v-col :cols="12" class="text-spacing-1 text-grey-darken-3 text-h6">
            Front-End Developer.
          </v-col>
        </v-row>
      </v-col>
      <v-col :style="fixedProfileHeight" :cols="12" class="bg-clean-sky">
        <v-row no-gutters justify="center" align="end" class="fill-height">
          <v-img
            :src="faceImage" :max-height="(height * 90) / 100"
            height="85%" position="top center"
          />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useDisplay } from 'vuetify'
import faceImage from '@/assets/img5567.png'

export default {
  name: 'HelloWorld',
  data: () => ({
    faceImage,
    ...useDisplay(),
  }),
  computed: {
    fixedHeadingHeight() {
      const percent = this.mobile ? 35 : 30
      let height = (this.height * percent) / 100
      if (height <= 170 && this.mdAndUp) return ''
      if (this.mdAndUp) height -= 64

      return { height: `${height}px`, maxHeight: `${height}px` }
    },
    fixedProfileHeight() {
      const percent = this.mobile ? 65 : 70
      const height = (this.height * percent) / 100
      if (height <= 400 && this.mdAndUp) return ''

      return { height: `${height}px`, maxHeight: `${height}px` }
    },
  },
}
</script>

<style scoped>
.letter-spacing {
  letter-spacing: 0.075em !important;
}
</style>
