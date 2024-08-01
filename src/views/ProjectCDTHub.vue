<template>
  <v-container id="details" fluid class="px-0 py-16 py-md-0 position-relative">
    <v-col cols="auto" class="py-3 px-2 px-md-4 px-lg-6 py-md-0 position-fixed">
      <v-btn flat icon size="small" @click="back()">
        <v-icon  size="24" color="grey-darken-2">fas fa-angle-left</v-icon>
      </v-btn>
    </v-col>
    <v-row no-gutters>
      <v-col :cols="12" :sm="11" :offset-sm="1" class="pl-10 pr-4 pl-sm-0 pr-sm-6 pr-md-10">
        <v-row no-gutters>
          <v-col :cols="12" class="pt-3 pt-md-2 px-2 px-md-0 text-h5  text-grey-darken-3">
            CDT HUB
          </v-col>
          <v-col :cols="12" class="pt-4 pb-8 px-2 px-md-0 text-subtitle-1 text-grey-darken-1">
            ออกแบบ UX/UI ระบบ Enterprise Resource Planing ใช้ภายในองค์กร
          </v-col>
          <v-col :cols="12" :sm="12" :md="6" :lg="6" :xl="6" class="pr-0 pr-md-6 pb-16">
            <v-row no-gutters>
              <v-col :cols="6" :sm="6" :md="6" :lg="6" :xl="4">
                <v-row no-gutters>
                  <v-col :cols="12" class="py-2 pr-2">
                    <v-img src="@/assets/erp-mobile/1.jpg" class="outlined ma-auto" />
                  </v-col>
                  <v-col :cols="12" class="py-2 pr-2">
                    <v-img src="@/assets/erp-mobile/3.jpg" class="outlined ma-auto" />
                  </v-col>
                  <v-col :cols="12" class="py-2 pr-2">
                    <v-img src="@/assets/erp-mobile/5.jpg" class="outlined ma-auto" />
                  </v-col>
                  <v-col :cols="12" class="py-2 pr-2">
                    <v-img src="@/assets/erp-mobile/7.jpg" class="outlined ma-auto" />
                  </v-col>
                  <v-col :cols="12" class="py-2 pr-2">
                    <v-img src="@/assets/erp-mobile/9.jpg" class="outlined ma-auto" />
                  </v-col>
                </v-row>
              </v-col>
              <v-col :cols="6" :sm="6" :md="6" :lg="6" :xl="4">
                <v-row no-gutters>
                  <v-col :cols="12" class="py-2 pl-2">
                    <v-img src="@/assets/erp-mobile/2.jpg" class="outlined ma-auto" />
                  </v-col>
                  <v-col :cols="12" class="py-2 pl-2">
                    <v-img src="@/assets/erp-mobile/4.jpg" class="outlined ma-auto" />
                  </v-col>
                  <v-col :cols="12" class="py-2 pl-2">
                    <v-img src="@/assets/erp-mobile/6.jpg" class="outlined ma-auto" />
                  </v-col>
                  <v-col :cols="12" class="py-2 pl-2">
                    <v-img src="@/assets/erp-mobile/8.jpg" class="outlined ma-auto" />
                  </v-col>
                  <v-col :cols="12" class="py-2 pl-2">
                    <v-img src="@/assets/erp-mobile/10.jpg" class="outlined ma-auto" />
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          <v-col :cols="12" :sm="12" :md="6" :lg="6" :xl="6" class="pl-0 pl-md-6 pt-10 pt-md-0 pb-16">
            <v-row no-gutters>
              <v-col :cols="12" class="py-2">
                <v-img src="@/assets/erp-desktop/1.jpg" class="outlined ma-auto" />
              </v-col>
              <v-col :cols="12" class="py-2">
                <v-img src="@/assets/erp-desktop/2.jpg" class="outlined ma-auto" />
              </v-col>
              <v-col :cols="12" class="py-2">
                <v-img src="@/assets/erp-desktop/3.jpg" class="outlined ma-auto" />
              </v-col>
              <v-col :cols="12" class="py-2">
                <v-img src="@/assets/erp-desktop/4.jpg" class="outlined ma-auto" />
              </v-col>
              <v-col :cols="12" class="py-2">
                <v-img src="@/assets/erp-desktop/5.jpg" class="outlined ma-auto" />
              </v-col>
              <v-col :cols="12" class="py-2">
                <v-img src="@/assets/erp-desktop/6.jpg" class="outlined ma-auto" />
              </v-col>
              <v-col :cols="12" class="py-2">
                <v-img src="@/assets/erp-desktop/7.jpg" class="outlined ma-auto" />
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

export default {
  name: 'ProjectCDTHub',
  data: () => ({
    ...useDisplay(),
  }),
  methods: {
    back() {
      this.$router.replace({ name: 'home' })
    },
  },
}
</script>
