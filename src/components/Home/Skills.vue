<template>
  <v-container id="skill" fluid class="pa-0">
    <v-row no-gutters>
      <v-col :cols="12" :md="11" :offset-md="1" class="pl-10 pr-5 pl-md-0 pr-md-10">
        <v-row no-gutters>
          <v-col :cols="12" class="text-spacing-1 text-h4 text-grey-darken-3 text-center pt-6">
            Skills
          </v-col>
          <v-row no-gutters class="py-8" justify="center">
            <v-col :cols="12" :sm="6" :md="4" class="py-5">
              <v-row no-gutters class="px-6">
                <v-col :cols="12" class="text-center text-h6 text-grey-darken-2 py-1">
                  สร้างสรรค์ UX/UI
                </v-col>
                <v-col :cols="12" class="text-center text-body-2 text-grey">
                  DESIGN
                </v-col>
                <v-col :cols="12" class="text-center py-6">
                  <v-icon :size="40" color="light-green-teal">fas fa-pen-ruler</v-icon>
                </v-col>
                <v-col :cols="12" class="text-center text-body-1 text-grey-darken-2">
                  ออกแบบ UX/UI โดยคำนึงถึงความพึงพอใจของผู้ใช้งานเป็นหลัก
                  ออกแบบอย่างเรียบง่าย เป็นระเบียบ ใช้งานได้อย่างง่ายดาย
                </v-col>
                <v-col :cols="12" class="text-center text-body-2 text-grey py-2">
                  :: Figma, Responsive Web Design, User Centered Design
                </v-col>
              </v-row>
            </v-col>
            <v-col :cols="12" :sm="6" :md="4" class="py-5">
              <v-row no-gutters class="px-6">
                <v-col :cols="12" class="text-center text-h6 text-grey-darken-2 py-1">
                  เขียนเว็บไซต์
                </v-col>
                <v-col :cols="12" class="text-center text-body-2 text-grey">
                  CODING
                </v-col>
                <v-col :cols="12" class="text-center py-6">
                  <v-icon :size="40" color="green-dried-herb" class="mr-2">fas fa-code</v-icon>
                </v-col>
                <v-col :cols="12" class="text-center text-body-1 text-grey-darken-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim mi neque,
                  sed tincidunt felis interdum a
                </v-col>
                <v-col :cols="12" class="text-center text-body-2 text-grey py-2">
                  :: Vue.JS, JavaScript, HTML, CSS, Vuetify, Bootstrap
                </v-col>
              </v-row>
            </v-col>
            <v-col :cols="12" :sm="6" :md="4" class="py-5">
              <v-row no-gutters class="px-6">
                <v-col :cols="12" class="text-center text-h6 text-grey-darken-2 py-1">
                  ส่งมอบงาน
                </v-col>
                <v-col :cols="12" class="text-center text-body-2 text-grey">
                  DEPLOY
                </v-col>
                <v-col :cols="12" class="text-center py-6">
                  <v-icon :size="40" color="light-brown">fas fa-code-branch</v-icon>
                </v-col>
                <v-col :cols="12" class="text-center text-body-1 text-grey-darken-2">
                  ตรวจสอบคุณภาพ Code ส่งมอบงานที่เกินความคาดหมาย ให้ผู้ใช้งานพึงพอใจ
                </v-col>
                <v-col :cols="12" class="text-center text-body-2 text-grey py-2">
                  :: Git Version Control, Eslint, SonarLint
                </v-col>
              </v-row>
            </v-col>
            <v-col :cols="12" :sm="6" :md="4" class="py-5">
              <v-row no-gutters class="px-6">
                <v-col :cols="12" class="text-center text-h6 text-grey-darken-2 py-1">
                  ฐานข้อมูล
                </v-col>
                <v-col :cols="12" class="text-center text-body-2 text-grey">
                  DATABASE
                </v-col>
                <v-col :cols="12" class="text-center py-6">
                  <v-icon :size="40" color="light-olive">fas fa-database</v-icon>
                </v-col>
                <v-col :cols="12" class="text-center text-body-1 text-grey-darken-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim mi neque,
                  sed tincidunt felis interdum a
                </v-col>
                <v-col :cols="12" class="text-center text-body-2 text-grey py-2">
                  :: Oracle, MySQL
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
