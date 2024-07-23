<template>
  <v-navigation-drawer
    :width="40"
    location="right" color="background"
    permanent floating
  >
    <template v-if="smAndDown" v-slot:prepend>
      <v-row no-gutters class="py-2">
        <v-col :cols="12">
          <v-btn icon flat size="small" color="background">
            <v-icon size="24" color="grey-darken-3">
              mdi-drag-horizontal-variant
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </template>
    <template v-slot:append>
      <v-row no-gutters class="py-3">
        <v-col :cols="auto" class="text-h6 text-spacing-2 text-rotate text-vertical text-grey-darken-2">
          CHANON's
        </v-col>
      </v-row>
    </template>
  </v-navigation-drawer>
</template>

<script>
import { useDisplay } from 'vuetify'

export default {
  name: 'SideBar',
  data: () => ({
    ...useDisplay(),
  }),
}
</script>
