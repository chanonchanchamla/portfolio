<template>
  <v-container id="skill" fluid class="px-0 py-8">
    <v-row no-gutters>
      <v-col :cols="12" :sm="11" :offset-sm="1" class="pl-10 pr-0 pl-sm-0 pr-sm-0 pr-md-10">
        <v-row no-gutters>
          <v-col :cols="12" class="text-spacing-1 text-h3 text-grey-darken-3 text-center pt-6">
            Skills
          </v-col>
          <v-col :cols="12" class="py-4">
            <v-row no-gutters justify="center">
              <v-col :cols="12" :sm="6" :md="4" class="py-7">
                <v-row no-gutters class="px-0 px-sm-6">
                  <v-col :cols="12" class="text-center text-h6 text-grey-darken-1 py-3">
                    DESIGN
                  </v-col>
                  <v-col :cols="12" class="text-center pt-5 pb-6">
                    <v-icon :size="40" color="grey-darken-1">fas fa-pen-ruler</v-icon>
                  </v-col>
                  <v-col :cols="12" class="text-center text-body-1 text-grey-darken-2 py-3">
                    ออกแบบ UX/UI โดยคำนึงถึงความพึงพอใจของผู้ใช้งานเป็นหลัก
                    ออกแบบอย่างเรียบง่าย เป็นระเบียบ ใช้งานได้อย่างง่ายดาย
                  </v-col>
                  <v-col :cols="12" class="text-center text-body-2 text-grey">
                    :: Figma, User Centered Design, Visual Design, Human Computer Interaction, Responsive Web Design
                  </v-col>
                </v-row>
              </v-col>
              <v-col :cols="12" :sm="6" :md="4" class="py-7">
                <v-row no-gutters class="px-0 px-sm-6">
                  <v-col :cols="12" class="text-center text-h6 text-grey-darken-1 py-3">
                    CODING
                  </v-col>
                  <v-col :cols="12" class="text-center pt-5 pb-6">
                    <v-icon :size="40" color="grey-darken-1">fas fa-code</v-icon>
                  </v-col>
                  <v-col :cols="12" class="text-center text-body-1 text-grey-darken-2 py-3">
                    เข้าใจหลักการออกแบบ นำมาใช้ Coding อย่างพิถีพิถัน โครงสร้าง Code เป็นระเบียบ แยกแต่ละการทำงานเป็นฟังก์ชั่นลดความซ้ำซ้อน และรองรับการใช้งานกับอุปกรณ์ได้หลากหลาย
                  </v-col>
                  <v-col :cols="12" class="text-center text-body-2 text-grey">
                    :: Vue.js, JavaScript, HTML, CSS, Vuetify, Bootstrap, PHP, Nuxt.js (basic)
                  </v-col>
                </v-row>
              </v-col>
              <v-col :cols="12" :sm="6" :md="4" class="py-7">
                <v-row no-gutters class="px-0 px-sm-6">
                  <v-col :cols="12" class="text-center text-h6 text-grey-darken-1 py-3">
                    DEPLOY
                  </v-col>
                  <v-col :cols="12" class="text-center pt-5 pb-6">
                    <v-icon :size="40" color="grey-darken-1">fas fa-code-branch</v-icon>
                  </v-col>
                  <v-col :cols="12" class="text-center text-body-1 text-grey-darken-2 py-3">
                    ตรวจสอบคุณภาพ, Review code ลดข้อผิดพลาด เพื่อส่งมอบงานที่ดีให้ผู้ใช้งาน
                  </v-col>
                  <v-col :cols="12" class="text-center text-body-2 text-grey">
                    :: Git Version Control, Eslint, SonarLint, CI/CD
                  </v-col>
                </v-row>
              </v-col>
              <v-col :cols="12" :sm="6" :md="4" class="py-7">
                <v-row no-gutters class="px-0 px-sm-6">
                  <v-col :cols="12" class="text-center text-h6 text-grey-darken-1 py-3">
                    DATABASE
                  </v-col>
                  <v-col :cols="12" class="text-center pt-5 pb-6">
                    <v-icon :size="40" color="grey-darken-1">fas fa-database</v-icon>
                  </v-col>
                  <v-col :cols="12" class="text-center text-body-1 text-grey-darken-2 py-3">
                    ตรวจสอบวิเคราะห์ข้อมูล เขียนคำสั่ง SQL และเข้าใจ Data Dictionary
                  </v-col>
                  <v-col :cols="12" class="text-center text-body-2 text-grey">
                    :: Oracle, MySQL
                  </v-col>
                </v-row>
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
  name: 'MySkills',
  data: () => ({
    ...useDisplay(),
  }),
}
</script>
