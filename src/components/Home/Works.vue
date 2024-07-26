<template>
  <v-container id="works" fluid class="px-0 py-16">
    <v-row no-gutters>
      <v-col :cols="12" :sm="11" :offset-sm="1" class="pl-10 pr-0 pl-sm-0 pr-sm-0 pr-md-10">
        <v-row no-gutters>
          <v-col :cols="12" class="text-spacing-1 text-h4 text-grey-darken-3 text-center pt-6">
            Works
          </v-col>
          <v-col :col="12" class="py-6">
            <v-row no-gutters justify="center">
              <v-col :cols="12" :sm="6" :md="4" class="py-5">
                <v-row no-gutters class="px-0 px-sm-6">
                  <v-col :cols="12" class="text-center py-3">
                    <v-img :src="Tr31" aspect-ratio="1.6" cover position="top left" class="outlined rounded" />
                  </v-col>
                  <v-col :cols="12" class="text-center text-h6 text-grey-darken-2 pt-6">
                    ระบบทะเบียนราษฎร
                  </v-col>
                  <v-col :cols="12" class="text-center text-body-2 text-grey py-3">
                    ให้บริการประชาชนผ่านทางสำนักทะเบียนทั่วประเทศ เช่น การออกคำร้องทะเบียนราษฎร, การแจ้งเกิด, การแจ้งตาย, การแจ้งย้ายที่อยู่, การแก้ไขข้อมูล, การเพิ่มชื่อในทะเบียนบ้าน ฯลฯ
                  </v-col>
                </v-row>
              </v-col>
              <v-col :cols="12" :sm="6" :md="4" class="py-5">
                <v-row no-gutters class="px-0 px-sm-6">
                  <v-col :cols="12" class="text-center py-3">
                    <v-img :src="Cerors" aspect-ratio="1.6" cover position="top left" class="outlined rounded" />
                  </v-col>
                  <v-col :cols="12" class="text-center text-h6 text-grey-darken-2 pt-6">
                    ThaID
                  </v-col>
                  <v-col :cols="12" class="text-center text-body-2 text-grey py-3">
                    ให้บริการประชาชน ดำเนินการด้วยตนเองผ่านทางแอพ ThaID การคัดรับรองเอกสารทะเบียนราษฎร ทะเบียนครอบครัว ทะเบียนชื่อบุคคล, ตรวจสอบคำขอฯ, แก้ไขข้อมูลส่วนบุคคล
                  </v-col>
                </v-row>
              </v-col>
              <v-col :cols="12" :sm="6" :md="4" class="py-5">
                <v-row no-gutters class="px-0 px-sm-6">
                  <v-col :cols="12" class="text-center py-3">
                    <v-img :src="Tr31" aspect-ratio="1.6" cover position="top left" class="outlined rounded" />
                  </v-col>
                  <v-col :cols="12" class="text-center text-h6 text-grey-darken-2 pt-6">
                    ระบบทะเบียนราษฎร
                  </v-col>
                  <v-col :cols="12" class="text-center text-body-2 text-grey py-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim mi neque,
                    sed tincidunt felis interdum a
                  </v-col>
                </v-row>
              </v-col>
              <v-col :cols="12" :sm="6" :md="4" class="py-5">
                <v-row no-gutters class="px-0 px-sm-6">
                  <v-col :cols="12" class="text-center py-3">
                    <v-img :src="Tr31" aspect-ratio="1.6" cover position="top left" class="outlined rounded" />
                  </v-col>
                  <v-col :cols="12" class="text-center text-h6 text-grey-darken-2 pt-6">
                    ระบบทะเบียนราษฎร
                  </v-col>
                  <v-col :cols="12" class="text-center text-body-2 text-grey py-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim mi neque,
                    sed tincidunt felis interdum a
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
import Tr31 from '@/assets/tr31-1.png'
import Cerors from '@/assets/cors-1.png'

export default {
  name: 'MyWorks',
  data: () => ({
    ...useDisplay(),
    Tr31,
    Cerors,
  }),
}
</script>
