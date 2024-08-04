<template>
  <v-container ref="works" v-resize="setPosition" fluid class="px-0 py-8">
    <v-row no-gutters>
      <v-col :cols="12" :sm="11" :offset-sm="1" class="pl-10 pr-0 pl-sm-0 pr-sm-0 pr-md-10">
        <v-row no-gutters>
          <v-col :cols="12" class="text-spacing-1 text-h3 text-grey-darken-3 text-center pt-6">
            Works
          </v-col>
          <v-col :col="12" class="py-6">
            <v-row no-gutters justify="center">
              <v-col :cols="12" :sm="6" :lg="4" class="py-5">
                <v-row no-gutters justify="center" class="px-0 px-sm-6">
                  <v-col :cols="12" class="text-center py-3">
                    <v-img
                      src="@/assets/linkage-desktop/5.jpg" aspect-ratio="1.6" cover position="top left"
                      width="80%" class="elevation-2 rounded ma-auto cursor-pointer"
                      @click="go('linkage')"
                    />
                  </v-col>
                  <v-col
                    cols="auto"
                    class="text-center text-h6 text-grey-darken-2 pt-4 cursor-pointer"
                    @click="go('linkage')"
                  >
                    <span>Linkage 2</span>
                  </v-col>
                  <v-col :cols="12" class="text-center text-body-2 text-grey py-2">
                    2024
                  </v-col>
                </v-row>
              </v-col>
              <v-col :cols="12" :sm="6" :lg="4" class="py-5">
                <v-row no-gutters class="px-0 px-sm-6" justify="center">
                  <v-col :cols="12" class="text-center py-3">
                    <v-img
                      src="@/assets/erp-desktop/1.jpg" aspect-ratio="1.6" cover position="top left"
                      width="80%" class="elevation-2 rounded ma-auto cursor-pointer"
                      @click="go('cdthub')"
                    />
                  </v-col>
                  <v-col
                    cols="auto"
                    class="text-center text-h6 text-grey-darken-2 pt-4 cursor-pointer"
                    @click="go('cdthub')"
                  >
                    <span>CDT HUB</span>
                  </v-col>
                  <v-col :cols="12" class="text-center text-body-2 text-grey py-2">
                    2023
                  </v-col>
                </v-row>
              </v-col>
              <v-col :cols="12" :sm="6" :lg="4" class="py-5">
                <v-row no-gutters class="px-0 px-sm-6" justify="center">
                  <v-col :cols="12" class="text-center py-3">
                    <v-img
                      src="@/assets/officer-desktop/1.jpg" aspect-ratio="1.6" cover position="top left"
                      width="80%" class="elevation-2 rounded ma-auto cursor-pointer"
                      @click="go('officer')"
                    />
                  </v-col>
                  <v-col
                    :cols="12"
                    class="text-center text-h6 text-grey-darken-2 pt-4 cursor-pointer"
                    @click="go('officer')"
                  >
                    <span>สำนักทะเบียนออนไลน์</span>
                  </v-col>
                  <v-col :cols="12" class="text-center text-body-2 text-grey py-2">
                    2023
                  </v-col>
                </v-row>
              </v-col>
              <v-col :cols="12" :sm="6" :lg="4" class="py-5">
                <v-row no-gutters class="px-0 px-sm-6" justify="center">
                  <v-col :cols="12" class="text-center py-3">
                    <v-img
                      src="@/assets/gemp-mobile/17.png" aspect-ratio="1.6" cover position="top left"
                      width="80%" class="elevation-2 rounded ma-auto cursor-pointer"
                      @click="go('gemp')"
                    />
                  </v-col>
                  <v-col
                    :cols="12"
                    class="text-center text-h6 text-grey-darken-2 pt-4 cursor-pointer"
                    @click="go('gemp')"
                  >
                    <span>ทะเบียนเจ้าหน้าที่โรงพยาบาล</span>
                  </v-col>
                  <v-col :cols="12" class="text-center text-body-2 text-grey py-2">
                    2023
                  </v-col>
                </v-row>
              </v-col>
              <v-col :cols="12" :sm="6" :lg="4" class="py-5">
                <v-row no-gutters class="px-0 px-sm-6" justify="center">
                  <v-col :cols="12" class="text-center py-3">
                    <v-img
                      src="@/assets/cors-desktop/1.jpg" aspect-ratio="1.6" cover position="top left"
                      width="80%" class="elevation-2 rounded ma-auto cursor-pointer"
                      @click="go('cors')"
                    />
                  </v-col>
                  <v-col
                    :cols="12"
                    class="text-center text-h6 text-grey-darken-2 pt-4 cursor-pointer"
                    @click="go('cors')"
                  >
                    <span>ThaID</span>
                  </v-col>
                  <v-col :cols="12" class="text-center text-body-2 text-grey py-2">
                    2022 - 2023
                  </v-col>
                </v-row>
              </v-col>
              <v-col :cols="12" :sm="6" :lg="4" class="py-5">
                <v-row no-gutters class="px-0 px-sm-6" justify="center">
                  <v-col :cols="12" class="text-center py-3">
                    <v-img
                      src="@/assets/tr31-desktop/1.png" aspect-ratio="1.6" cover position="top left"
                      width="80%" class="elevation-2 rounded ma-auto cursor-pointer"
                      @click="go('tr31')"
                    />
                  </v-col>
                  <v-col
                    :cols="12"
                    class="text-center text-h6 text-grey-darken-2 pt-4 cursor-pointer"
                    @click="go('tr31')"
                  >
                    <span>ระบบทะเบียนราษฎร</span>
                  </v-col>
                  <v-col :cols="12" class="text-center text-body-2 text-grey py-2">
                    2018 - 2024
                  </v-col>
                </v-row>
              </v-col>
              <!-- <v-col :cols="12" :sm="6" :lg="4" class="py-5">
                <v-row no-gutters class="px-0 px-sm-6">
                  <v-col :cols="12" class="text-center py-3">
                    <v-img
                      :src="DocScanner" aspect-ratio="1.6" cover position="top left"
                      width="80%" class="outlined rounded ma-auto cursor-pointer"
                    />
                  </v-col>
                  <v-col :cols="12" class="text-center text-h6 text-grey-darken-2 pt-4">
                    <span class="cursor-pointer">Components & Libraries</span>
                  </v-col>
                  <v-col :cols="12" class="text-center text-body-2 text-grey py-2">
                    2021 - 2024
                  </v-col> -->
                  <!-- <v-col :cols="12" class="text-center text-body-2 text-grey-darken-1 py-3">
                    Vue.JS Components และ JavaScript Libraries ต่าง ๆ ที่ทำขึ้นมาเพื่อแชร์ใช้ภายในองค์กร เช่น Document Scanner, Change Log, CSS Custom Theme, ส่วนประกอบต่าง ๆ บนหน้าจอ
                  </v-col> -->
                <!-- </v-row>
              </v-col> -->
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
  name: 'MyWorks',
  data: () => ({
    ...useDisplay(),
  }),
  mounted() {
    this.setPosition()
  },
  methods: {
    ...mapMutations({
      setLastScroll: 'setLastScroll',
      setPositionWorks: 'setPositionWorks',
    }),
    setPosition() {
      const { offsetTop } = this.$refs.works.$el
      if (this.mdAndUp) return this.setPositionWorks(offsetTop)
      this.setPositionWorks(offsetTop + 100)
    },
    go(project) {
      const { scrollTop } = document.documentElement
      this.setLastScroll(scrollTop)
      this.$router.push({
        name: project,
      })
    },
  },
}
</script>
