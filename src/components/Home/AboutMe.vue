<template>
  <v-container ref="aboutme" v-resize="setPosition" fluid class="px-0 pb-8 pt-16">
    <v-row no-gutters>
      <v-col :cols="12" :sm="11" :offset-sm="1" class="pl-10 pr-0 pl-sm-6 pr-sm-6 pr-md-16">
        <v-row no-gutters>
          <v-col :cols="12" class="text-spacing-1 text-h3 text-grey-darken-3 text-center pt-12 pb-8">
            About
          </v-col>
        </v-row>
        <v-row no-gutters class="py-6">
          <v-col :cols="12" class="pr-0 pr-md-6">
            <p class="text-body-1 text-grey-darken-2 text-indent-1 text-lg-center">
              สวัสดีครับ ผมชานนท์ จันทร์แจ่มหล้า ถนัดในด้านการเขียน Front-End และออกแบบ UX/UI มีประสบการณ์ทำงานสเกลใหญ่ร่วมกับภาครัฐบาลไทย
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useDisplay } from 'vuetify'
import { mapMutations } from 'vuex'

export default {
  name: 'AboutMe',
  data: () => ({
    ...useDisplay(),
  }),
  mounted() {
    this.setPosition()
  },
  methods: {
    ...mapMutations({
      setPositionAboutme: 'setPositionAboutme',
    }),
    setPosition() {
      const { offsetTop } = this.$refs.aboutme.$el
      if (this.mdAndUp) return this.setPositionAboutme(offsetTop)
      this.setPositionAboutme(offsetTop + 50)
    },
  },
}
</script>
