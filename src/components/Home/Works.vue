<template>
  <v-container id="works" fluid class="px-0 py-16">
    <v-row no-gutters>
      <v-col :cols="12" :md="11" :offset-md="1" class="pl-10 pr-5 pl-md-6 pr-md-16">
        <v-row no-gutters>
          <v-col :cols="12" class="text-spacing-1 text-h4 text-grey-darken-3 text-center pt-12 pb-8">
            Works
          </v-col>
        </v-row>
        <v-row no-gutters class="py-8">
          xxx
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useDisplay } from 'vuetify'

export default {
  name: 'MyWorks',
  data: () => ({
    ...useDisplay(),
  }),
}
</script>
