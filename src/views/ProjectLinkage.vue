<template>
  <v-container id="details" fluid class="px-0 py-0 position-relative">
    <v-fade-transition>
      <v-col
        v-if="displayBackButton"
        :class="smAndDown ? 'top left bring-to-top' : ''"
        cols="auto" class="py-3 px-2 px-md-4 px-lg-6 py-md-0 position-fixed"
      >
        <v-btn flat icon size="small" @click="back()">
          <v-icon  size="24" color="grey-darken-2">fas fa-angle-left</v-icon>
        </v-btn>
      </v-col>
    </v-fade-transition>
    <v-row no-gutters>
      <v-col :cols="12" :sm="11" :offset-sm="1" class="pl-10 pr-1 pl-sm-0 pr-sm-6 pr-md-14 pb-7 pb-md-16">
        <v-row no-gutters>
          <v-col :cols="12" class="pt-3 pt-md-2 px-2 px-md-0 text-h5  text-grey-darken-3">
            Linkage 2
          </v-col>
          <v-col :cols="12" class="pt-4 pb-8 px-2 px-md-0 text-subtitle-1 text-grey-darken-1">
            ออกแบบ UX/UI ระบบค้นหาข้อมูล จากข้อมูลของบุคคลหรือบ้าน ผ่านระบบ Linkage 2 ให้บริการหน่วยงานราชการ
          </v-col>
          <v-col :cols="12" :sm="12" :md="6" :lg="6" :xl="6" class="pr-0 pr-md-6">
            <v-row no-gutters>
              <v-col :cols="6" :sm="6" :md="6" :lg="6" :xl="6">
                <v-row no-gutters>
                  <v-col :cols="12" class="py-2 pr-2">
                    <v-img src="@/assets/linkage-mobile/1.jpg" class="elevation-2 rounded-smooth ma-auto" />
                  </v-col>
                  <v-col :cols="12" class="py-2 pr-2">
                    <v-img src="@/assets/linkage-mobile/3.jpg" class="elevation-2 rounded-smooth ma-auto" />
                  </v-col>
                  <v-col :cols="12" class="py-2 pr-2">
                    <v-img src="@/assets/linkage-mobile/5.jpg" class="elevation-2 rounded-smooth ma-auto" />
                  </v-col>
                  <v-col :cols="12" class="py-2 pr-2">
                    <v-img src="@/assets/linkage-mobile/7.jpg" class="elevation-2 rounded-smooth ma-auto" />
                  </v-col>
                  <v-col :cols="12" class="py-2 pr-2">
                    <v-img src="@/assets/linkage-mobile/9.jpg" class="elevation-2 rounded-smooth ma-auto" />
                  </v-col>
                </v-row>
              </v-col>
              <v-col :cols="6" :sm="6" :md="6" :lg="6" :xl="6">
                <v-row no-gutters>
                  <v-col :cols="12" class="py-2 pl-2">
                    <v-img src="@/assets/linkage-mobile/2.jpg" class="elevation-2 rounded-smooth ma-auto" />
                  </v-col>
                  <v-col :cols="12" class="py-2 pl-2">
                    <v-img src="@/assets/linkage-mobile/4.jpg" class="elevation-2 rounded-smooth ma-auto" />
                  </v-col>
                  <v-col :cols="12" class="py-2 pl-2">
                    <v-img src="@/assets/linkage-mobile/6.jpg" class="elevation-2 rounded-smooth ma-auto" />
                  </v-col>
                  <v-col :cols="12" class="py-2 pl-2">
                    <v-img src="@/assets/linkage-mobile/8.jpg" class="elevation-2 rounded-smooth ma-auto" />
                  </v-col>
                  <v-col :cols="12" class="py-2 pl-2">
                    <v-img src="@/assets/linkage-mobile/10.jpg" class="elevation-2 rounded-smooth ma-auto" />
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          <v-col :cols="12" :sm="12" :md="6" :lg="6" :xl="6" class="pl-0 pl-md-6 pt-10 pt-md-0">
            <v-row no-gutters>
              <v-col :cols="12" class="py-2">
                <v-img src="@/assets/linkage-desktop/1.jpg" class="elevation-2 rounded-smooth ma-auto" />
              </v-col>
              <v-col :cols="12" class="py-2">
                <v-img src="@/assets/linkage-desktop/2.jpg" class="elevation-2 rounded-smooth ma-auto" />
              </v-col>
              <v-col :cols="12" class="py-2">
                <v-img src="@/assets/linkage-desktop/3.jpg" class="elevation-2 rounded-smooth ma-auto" />
              </v-col>
              <v-col :cols="12" class="py-2">
                <v-img src="@/assets/linkage-desktop/4.jpg" class="elevation-2 rounded-smooth ma-auto" />
              </v-col>
              <v-col :cols="12" class="py-2">
                <v-img src="@/assets/linkage-desktop/5.jpg" class="elevation-2 rounded-smooth ma-auto" />
              </v-col>
              <v-col :cols="12" class="py-2">
                <v-img src="@/assets/linkage-desktop/6.jpg" class="elevation-2 rounded-smooth ma-auto" />
              </v-col>
              <v-col :cols="12" class="py-2">
                <v-img src="@/assets/linkage-desktop/7.jpg" class="elevation-2 rounded-smooth ma-auto" />
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
  name: 'ProjectLinkage',
  data: () => ({
    ...useDisplay(),
    displayBackButton: false,
  }),
  mounted() {
    setTimeout(() => {
      this.displayBackButton = true
    }, 1000)
  },
  methods: {
    back() {
      this.$router.replace({ name: 'home' })
    },
  },
}
</script>
