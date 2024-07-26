<template>
  <v-container id="aboutme" fluid class="px-0 py-16">
    <v-row no-gutters>
      <v-col :cols="12" :md="11" :offset-md="1" class="pl-10 pr-5 pl-md-6 pr-md-16">
        <v-row no-gutters>
          <v-col :cols="12" class="text-spacing-1 text-h4 text-grey-darken-3 text-center pt-12 pb-8">
            About me
          </v-col>
        </v-row>
        <v-row no-gutters class="py-8">
          <v-col :cols="12" :sm="12" :md="6" :lg="6" :xl="6" class="pr-0 pr-md-6">
            <p class="text-body-1 text-grey-darken-2 text-indent-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim mi neque,
              sed tincidunt felis interdum a. Vivamus vel nibh ac elit mollis malesuada vitae et arcu.
              Aenean tincidunt, justo et dapibus feugiat, velit augue bibendum augue, in maximus mi risus iaculis justo.
            </p>
          </v-col>
          <v-col :cols="12" :sm="12" :md="6" :lg="6" :xl="6" class="pt-8 pt-md-0 pl-md-6">
            <p class="text-body-1 text-grey-darken-2 text-indent-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim mi neque,
              sed tincidunt felis interdum a.
              <!-- Aenean tincidunt, justo et dapibus feugiat, velit augue bibendum augue, in maximus mi risus iaculis justo.
              Phasellus blandit lobortis felis, non pulvinar ante. Fusce gravida tempus diam at tempus. Donec vitae tempor dolor,
              ut aliquam nisl. Vivamus consequat cursus justo id feugiat. Nullam felis dui, varius nec orci molestie,
              ultrices laoreet sapien. Maecenas eget eros nibh. Donec pharetra dignissim lorem, consequat vestibulum mauris efficitur id. -->
            </p>
            <p class="text-body1 text-grey-darken-2 pl-10 pt-2">
              <ul>
                <li>Aenean tincidunt, justo et dapibus feugiat</li>
                <li>Velit augue bibendum augue</li>
                <li>Phasellus blandit lobortis felis</li>
              </ul>
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useDisplay } from 'vuetify'

export default {
  name: 'AboutMe',
  data: () => ({
    ...useDisplay(),
  }),
}
</script>
