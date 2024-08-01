<template>
  <v-container id="works" fluid class="px-0 py-8">
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
                      :src="Linkage" aspect-ratio="1.6" cover position="top left"
                      width="80%" class="outlined rounded ma-auto cursor-pointer"
                      @click="go('Linkage-2')"
                    />
                  </v-col>
                  <v-col
                    cols="auto"
                    class="text-center text-h6 text-grey-darken-2 pt-4 cursor-pointer"
                    @click="go('Linkage-2')"
                  >
                    <span>Linkage 2</span>
                  </v-col>
                  <v-col :cols="12" class="text-center text-body-2 text-grey py-2">
                    2024
                  </v-col>
                  <!-- <v-col :cols="12" class="text-center text-body-2 text-grey-darken-1 py-3">
                    ค้นหาข้อมูลบุคคลหรือบ้าน ผ่านระบบ Linkage 2 ให้บริการหน่วยงานราชการ
                  </v-col> -->
                </v-row>
              </v-col>
              <v-col :cols="12" :sm="6" :lg="4" class="py-5">
                <v-row no-gutters class="px-0 px-sm-6" justify="center">
                  <v-col :cols="12" class="text-center py-3">
                    <v-img
                      :src="ERP" aspect-ratio="1.6" cover position="top left"
                      width="80%" class="outlined rounded ma-auto cursor-pointer"
                      @click="go('CDT-HUB')"
                    />
                  </v-col>
                  <v-col
                    cols="auto"
                    class="text-center text-h6 text-grey-darken-2 pt-4 cursor-pointer"
                    @click="go('CDT-HUB')"
                  >
                    <span>CDT HUB</span>
                  </v-col>
                  <v-col :cols="12" class="text-center text-body-2 text-grey py-2">
                    2023
                  </v-col>
                  <!-- <v-col :cols="12" class="text-center text-body-2 text-grey-darken-1 py-3">
                    Enterprise Resource Planing ใช้ภายในองค์กร
                  </v-col> -->
                </v-row>
              </v-col>
              <v-col :cols="12" :sm="6" :lg="4" class="py-5">
                <v-row no-gutters class="px-0 px-sm-6">
                  <v-col :cols="12" class="text-center py-3">
                    <v-img
                      :src="Officer" aspect-ratio="1.6" cover position="top left"
                      width="80%" class="outlined rounded ma-auto cursor-pointer"
                    />
                  </v-col>
                  <v-col :cols="12" class="text-center text-h6 text-grey-darken-2 pt-4">
                    <span class="cursor-pointer">สำนักทะเบียนออนไลน์</span>
                  </v-col>
                  <v-col :cols="12" class="text-center text-body-2 text-grey py-2">
                    2023
                  </v-col>
                  <!-- <v-col :cols="12" class="text-center text-body-2 text-grey-darken-1 py-3">
                    ระบบสำหรับเจ้าหน้าที่ของกรมการปกครอง ดำเนินการกับคำขอต่าง ๆ ที่ยื่นผ่านทางแอพ ThaID, ตรวจสอบข้อมูลและรายงานต่าง ๆ
                  </v-col> -->
                </v-row>
              </v-col>
              <v-col :cols="12" :sm="6" :lg="4" class="py-5">
                <v-row no-gutters class="px-0 px-sm-6">
                  <v-col :cols="12" class="text-center py-3">
                    <v-img
                      :src="GEMP" aspect-ratio="1.6" cover position="top left"
                      width="80%" class="outlined rounded ma-auto cursor-pointer"
                    />
                  </v-col>
                  <v-col :cols="12" class="text-center text-h6 text-grey-darken-2 pt-4">
                    <span class="cursor-pointer">ทะเบียนเจ้าหน้าที่โรงพยาบาล</span>
                  </v-col>
                  <v-col :cols="12" class="text-center text-body-2 text-grey py-2">
                    2023
                  </v-col>
                  <!-- <v-col :cols="12" class="text-center text-body-2 text-grey-darken-1 py-3">
                    ทะเบียนเจ้าหน้าที่โรงพยาบาล เพิ่ม ลบ แก้ไข ตรวจสอบข้อมูล และอนุมัติรายการโดยผู้ควบคุม
                  </v-col> -->
                </v-row>
              </v-col>
              <v-col :cols="12" :sm="6" :lg="4" class="py-5">
                <v-row no-gutters class="px-0 px-sm-6">
                  <v-col :cols="12" class="text-center py-3">
                    <v-img
                      :src="Cerors" aspect-ratio="1.6" cover position="top left"
                      width="80%" class="outlined rounded ma-auto cursor-pointer"
                    />
                  </v-col>
                  <v-col :cols="12" class="text-center text-h6 text-grey-darken-2 pt-4">
                    <span class="cursor-pointer">ThaID</span>
                  </v-col>
                  <v-col :cols="12" class="text-center text-body-2 text-grey py-2">
                    2022 - 2023
                  </v-col>
                  <!-- <v-col :cols="12" class="text-center text-body-2 text-grey-darken-1 py-3">
                    ให้บริการประชาชน ดำเนินการด้วยตนเองผ่านทางแอพ ThaID การคัดรับรองเอกสารทะเบียนราษฎร ทะเบียนครอบครัว ทะเบียนชื่อบุคคล, ตรวจสอบคำขอฯ, แก้ไขข้อมูลส่วนบุคคล
                  </v-col> -->
                </v-row>
              </v-col>
              <v-col :cols="12" :sm="6" :lg="4" class="py-5">
                <v-row no-gutters class="px-0 px-sm-6">
                  <v-col :cols="12" class="text-center py-3">
                    <v-img
                      :src="Tr31" aspect-ratio="1.6" cover position="top left"
                      width="80%" class="outlined rounded ma-auto cursor-pointer"
                    />
                  </v-col>
                  <v-col :cols="12" class="text-center text-h6 text-grey-darken-2 pt-4">
                    <span class="cursor-pointer">ระบบทะเบียนราษฎร</span>
                  </v-col>
                  <v-col :cols="12" class="text-center text-body-2 text-grey py-2">
                    2018 - 2024
                  </v-col>
                  <!-- <v-col :cols="12" class="text-center text-body-2 text-grey-darken-1 py-3">
                    บริการประชาชนผ่านทางสำนักทะเบียน เช่น การออกคำร้องทะเบียนราษฎร, การแจ้งเกิด, การแจ้งตาย, การแจ้งย้ายที่อยู่, การแก้ไขข้อมูล, การเพิ่มชื่อในทะเบียนบ้าน ฯลฯ
                  </v-col> -->
                </v-row>
              </v-col>
              <v-col :cols="12" :sm="6" :lg="4" class="py-5">
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
                  </v-col>
                  <!-- <v-col :cols="12" class="text-center text-body-2 text-grey-darken-1 py-3">
                    Vue.JS Components และ JavaScript Libraries ต่าง ๆ ที่ทำขึ้นมาเพื่อแชร์ใช้ภายในองค์กร เช่น Document Scanner, Change Log, CSS Custom Theme, ส่วนประกอบต่าง ๆ บนหน้าจอ
                  </v-col> -->
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
import Tr31 from '@/assets/tr31-1.png'
import Cerors from '@/assets/cors-1.png'
import Officer from '@/assets/officer-desktop-1.png'
import Linkage from '@/assets/linkage2-1.png'
import ERP from '@/assets/erp-desktop/1.jpg'
import GEMP from '@/assets/gemp-1.png'
import DocScanner from '@/assets/tr31-4.jpg'

export default {
  name: 'MyWorks',
  data: () => ({
    ...useDisplay(),
    Tr31,
    Cerors,
    Officer,
    Linkage,
    ERP,
    GEMP,
    DocScanner,
  }),
  methods: {
    go(project) {
      console.log(project)
      this.$router.push({
        name: 'works',
        params: {
          projectName: project,
        },
      })
    },
  },
}
</script>
