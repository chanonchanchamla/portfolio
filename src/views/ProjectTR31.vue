<template>
  <v-container id="details" fluid class="px-0 py-0 position-relative">
    <v-col
      :class="smAndDown ? 'top left bring-to-top' : ''"
      cols="auto" class="py-3 px-2 px-md-4 px-lg-6 py-md-0 position-fixed"
    >
      <v-btn flat icon size="small" @click="back()">
        <v-icon  size="24" color="grey-darken-2">fas fa-angle-left</v-icon>
      </v-btn>
    </v-col>
    <v-row no-gutters>
      <v-col :cols="12" :sm="11" :offset-sm="1" class="pl-10 pr-1 pl-sm-0 pr-sm-6 pr-md-14 pb-7 pb-md-16">
        <v-row no-gutters>
          <v-col :cols="12" class="pt-3 pt-md-2 px-2 px-md-0 text-h5  text-grey-darken-3">
            ระบบทะเบียนราษฎร
          </v-col>
          <v-col :cols="12" class="pt-4 pb-8 px-2 px-md-0 text-subtitle-1 text-grey-darken-1">
            ออกแบบ UX/UI และเขียน Code ระบบให้บริการประชาชนผ่านทางสำนักทะเบียน เช่น การออกคำร้องทะเบียนราษฎร, การแจ้งเกิด, การแจ้งตาย, การแจ้งย้ายที่อยู่, การแก้ไขข้อมูล, การเพิ่มชื่อในทะเบียนบ้าน ฯลฯ
          </v-col>
          <v-col :cols="12">
            <v-row no-gutters>
              <v-col :cols="12" :sm="12" :md="6" :lg="6" :xl="6">
                <v-row no-gutters>
                  <v-col :cols="12" class="py-2 pr-md-2">
                    <v-img src="@/assets/tr31-desktop/1.png" class="elevation-2 rounded ma-auto" />
                  </v-col>
                  <v-col :cols="12" class="py-2 pr-md-2">
                    <v-img src="@/assets/tr31-desktop/3.png" class="elevation-2 rounded ma-auto" />
                  </v-col>
                  <v-col :cols="12" class="py-2 pr-md-2">
                    <v-img src="@/assets/tr31-desktop/5.png" class="elevation-2 rounded ma-auto" />
                  </v-col>
                  <v-col :cols="12" class="py-2 pr-md-2">
                    <v-img src="@/assets/tr31-desktop/7.png" class="elevation-2 rounded ma-auto" />
                  </v-col>
                </v-row>
              </v-col>
              <v-col :cols="12" :sm="12" :md="6" :lg="6" :xl="6">
                <v-row no-gutters>
                  <v-col :cols="12" class="py-2 pl-md-2">
                    <v-img src="@/assets/tr31-desktop/2.png" class="elevation-2 rounded ma-auto" />
                  </v-col>
                  <v-col :cols="12" class="py-2 pl-md-2">
                    <v-img src="@/assets/tr31-desktop/4.png" class="elevation-2 rounded ma-auto" />
                  </v-col>
                  <v-col :cols="12" class="py-2 pl-md-2">
                    <v-img src="@/assets/tr31-desktop/6.png" class="elevation-2 rounded ma-auto" />
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
