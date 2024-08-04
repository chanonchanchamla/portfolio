<template>
  <v-container ref="contact" v-resize="setPosition" fluid class="px-0 py-8">
    <v-row no-gutters>
      <v-col :cols="12" :sm="11" :offset-sm="1" class="pl-10 pr-0 pl-sm-0 pr-sm-0 pr-md-10">
        <v-row no-gutters>
          <v-col :cols="12" class="text-spacing-1 text-h3 text-grey-darken-3 text-center pt-6 pb-5">
            Contact
          </v-col>
          <v-col :col="12" class="py-6">
            <v-row no-gutters justify="center" align="end">
              <v-col cols="auto" class="pr-5">
                <v-icon color="grey-darken-1">
                  fas fa-envelope
                </v-icon>
              </v-col>
              <v-col cols="auto" class="text-body-1 text-grey-darken-2">
                chanon.chanch@gmail.com
              </v-col>
            </v-row>
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
  name: 'MyContact',
  data: () => ({
    ...useDisplay(),
  }),
  mounted() {
    this.setPosition()
  },
  methods: {
    ...mapMutations({
      setPositionContact: 'setPositionContact',
    }),
    setPosition() {
      const { offsetTop } = this.$refs.contact.$el
      if (this.mdAndUp) return this.setPositionContact(offsetTop)
      this.setPositionContact(offsetTop + 50)
    },
  },
}
</script>
