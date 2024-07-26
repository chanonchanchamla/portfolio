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
                  <v-col :cols="12" class="text-center py-3">
                    <v-icon :size="40" color="light-green-teal">fas fa-pen-ruler</v-icon>
                  </v-col>
                  <v-col :cols="12" class="text-center text-h6 text-grey-darken-2 pt-4 pb-2">
                    สร้างสรรค์ UX/UI
                  </v-col>
                  <v-col :cols="12" class="text-center text-body-2 text-grey pb-2">
                    DESIGN
                  </v-col>
                  <v-col :cols="12" class="text-center text-body-1 text-grey-darken-1 py-3">
                    ออกแบบ UX/UI โดยคำนึงถึงความพึงพอใจของผู้ใช้งานเป็นหลัก
                    ออกแบบอย่างเรียบง่าย เป็นระเบียบ ใช้งานได้อย่างง่ายดาย
                  </v-col>
                  <v-col :cols="12" class="text-center text-body-2 text-grey">
                    :: Figma, User Centered Design, Visual Design, Human Computer Interaction
                  </v-col>
                </v-row>
              </v-col>
              <v-col :cols="12" :sm="6" :md="4" class="py-7">
                <v-row no-gutters class="px-0 px-sm-6">
                  <v-col :cols="12" class="text-center py-3">
                    <v-icon :size="40" color="green-dried-herb">fas fa-code</v-icon>
                  </v-col>
                  <v-col :cols="12" class="text-center text-h6 text-grey-darken-2 pt-4 pb-2">
                    เขียน Code
                  </v-col>
                  <v-col :cols="12" class="text-center text-body-2 text-grey pb-2">
                    CODING
                  </v-col>
                  <v-col :cols="12" class="text-center text-body-1 text-grey-darken-1 py-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim mi neque,
                    sed tincidunt felis interdum a
                  </v-col>
                  <v-col :cols="12" class="text-center text-body-2 text-grey">
                    :: Vue.JS, JavaScript, HTML, CSS, Vuetify, Bootstrap, Responsive Web Design
                  </v-col>
                </v-row>
              </v-col>
              <v-col :cols="12" :sm="6" :md="4" class="py-7">
                <v-row no-gutters class="px-0 px-sm-6">
                  <v-col :cols="12" class="text-center py-3">
                    <v-icon :size="40" color="light-brown">fas fa-code-branch</v-icon>
                  </v-col>
                  <v-col :cols="12" class="text-center text-h6 text-grey-darken-2 pt-4 pb-2">
                    ส่งมอบงาน
                  </v-col>
                  <v-col :cols="12" class="text-center text-body-2 text-grey pb-2">
                    DEPLOY
                  </v-col>
                  <v-col :cols="12" class="text-center text-body-1 text-grey-darken-1 py-3">
                    ตรวจสอบคุณภาพ Code ส่งมอบงานที่เกินความคาดหมาย ให้ผู้ใช้งานพึงพอใจ
                  </v-col>
                  <v-col :cols="12" class="text-center text-body-2 text-grey">
                    :: Git Version Control, Eslint, SonarLint
                  </v-col>
                </v-row>
              </v-col>
              <v-col :cols="12" :sm="6" :md="4" class="py-7">
                <v-row no-gutters class="px-0 px-sm-6">
                  <v-col :cols="12" class="text-center py-3">
                    <v-icon :size="40" color="light-olive">fas fa-database</v-icon>
                  </v-col>
                  <v-col :cols="12" class="text-center text-h6 text-grey-darken-2 pt-4 pb-2">
                    ฐานข้อมูล
                  </v-col>
                  <v-col :cols="12" class="text-center text-body-2 text-grey pb-2">
                    DATABASE
                  </v-col>
                  <v-col :cols="12" class="text-center text-body-1 text-grey-darken-1 py-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim mi neque,
                    sed tincidunt felis interdum a
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
