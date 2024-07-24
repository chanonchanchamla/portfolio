<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <v-col :cols="12" :md="10" :offset-md="1" class="px-10 px-md-0">
        <v-row no-gutters>
          <v-col :cols="12" class="text-spacing-1 text-h4 text-grey-darken-3 text-center pt-6 pb-3">
            Skills
          </v-col>
          <v-row no-gutters class="py-8">
            <v-col :cols="12" :sm="6" :md="4" class="py-3">
              <v-row no-gutters class="px-6">
                <v-col :cols="12" class="text-center text-h6 text-grey-darken-2 py-2">
                  สร้างสรรค์ UX/UI
                </v-col>
                <v-col :cols="12" class="text-center text-body-2 text-grey">
                  DESIGN
                </v-col>
                <v-col :cols="12" class="text-center py-6">
                  <v-icon :size="40" color="grey-darken-2">fas fa-pen-ruler</v-icon>
                </v-col>
                <v-col :cols="12" class="text-center text-body-1 text-grey-darken-2">
                  ออกแบบ UX/UI โดยคำนึงถึงประสบการณ์การใช้งาน ความพึงพอใจของผู้ใช้งานเป็นหลัก
                  เรียบง่าย เป็นระเบียบ และใช้งานได้สะดวกสบาย
                </v-col>
                <v-col :cols="12" class="text-center text-body-2 text-grey py-2">
                  Figma, Responsive Web Design
                </v-col>
              </v-row>
            </v-col>
            <v-col :cols="12" :sm="6" :md="4" class="py-3">
              <v-row no-gutters class="px-6">
                <v-col :cols="12" class="text-center text-h6 text-grey-darken-2 py-2">
                  เขียนเว็บไซต์
                </v-col>
                <v-col :cols="12" class="text-center text-body-2 text-grey">
                  CODING
                </v-col>
                <v-col :cols="12" class="text-center py-6">
                  <v-icon :size="40" color="grey-darken-2" class="mr-2">fas fa-code</v-icon>
                </v-col>
                <v-col :cols="12" class="text-center text-body-1 text-grey-darken-2">
                  ออกแบบ UX/UI โดยคำนึงถึงประสบการณ์การใช้งาน ความพึงพอใจของผู้ใช้งานเป็นหลัก
                  เรียบง่าย เป็นระเบียบ และใช้งานได้สะดวกสบาย
                </v-col>
                <v-col :cols="12" class="text-center text-body-2 text-grey py-2">
                  Vue.JS, JavaScript, HTML, CSS, Vuetify, Bootstrap
                </v-col>
              </v-row>
            </v-col>
            <v-col :cols="12" :sm="6" :md="4" class="py-3">
              <v-row no-gutters class="px-6">
                <v-col :cols="12" class="text-center text-h6 text-grey-darken-2 py-2">
                  ส่งมอบงาน
                </v-col>
                <v-col :cols="12" class="text-center text-body-2 text-grey">
                  DEPLOY
                </v-col>
                <v-col :cols="12" class="text-center py-6">
                  <v-icon :size="40" color="grey-darken-2">fas fa-code-branch</v-icon>
                </v-col>
                <v-col :cols="12" class="text-center text-body-1 text-grey-darken-2">
                  ตรวจสอบคุณภาพของ Code ทดสอบหาข้อผิดพลาด และส่งมอบงานที่ดีเกินความคาดหมาย ให้ผู้ใช้งานพึงพอใจ
                </v-col>
                <v-col :cols="12" class="text-center text-body-2 text-grey py-2">
                  Git flow, Eslint
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useDisplay } from 'vuetify'

export default {
  name: 'MySkills',
  data: () => ({
    ...useDisplay(),
  }),
}
</script>
