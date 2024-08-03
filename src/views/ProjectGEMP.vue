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
      <v-col :cols="12" :sm="11" :offset-sm="1" class="pl-10 pr-1 pl-sm-0 pr-sm-6 pr-md-3 pb-7 pb-md-16">
        <v-row no-gutters>
          <v-col :cols="12" class="pt-3 pt-md-2 px-2 px-md-0 text-h5  text-grey-darken-3">
            ทะเบียนเจ้าหน้าที่โรงพยาบาล
          </v-col>
          <v-col :cols="12" class="pt-4 pb-8 px-2 px-md-0 text-subtitle-1 text-grey-darken-1">
            ออกแบบ UX/UI ทะเบียนเจ้าหน้าที่โรงพยาบาล เพิ่ม ลบ แก้ไข ตรวจสอบข้อมูล และอนุมัติรายการโดยผู้ควบคุม
          </v-col>
          <v-col :cols="12" class="pr-0 pr-md-6">
            <v-row no-gutters>
              <v-col :cols="6" :sm="6" :md="3" :lg="3" :xl="3">
                <v-row no-gutters>
                  <v-col :cols="12" class="py-2 pr-2 pr-md-4">
                    <v-img src="@/assets/gemp-mobile/1.jpg" class="elevation-2 rounded ma-auto" />
                  </v-col>
                  <v-col v-if="smAndDown" :cols="12" class="py-2 pr-2 pr-md-4">
                    <v-img src="@/assets/gemp-mobile/3.jpg" class="elevation-2 rounded ma-auto" />
                  </v-col>
                  <v-col :cols="12" class="py-2 pr-2 pr-md-4">
                    <v-img src="@/assets/gemp-mobile/5.jpg" class="elevation-2 rounded ma-auto" />
                  </v-col>
                  <v-col v-if="smAndDown" :cols="12" class="py-2 pr-2 pr-md-4">
                    <v-img src="@/assets/gemp-mobile/7.jpg" class="elevation-2 rounded ma-auto" />
                  </v-col>
                  <v-col :cols="12" class="py-2 pr-2 pr-md-4">
                    <v-img src="@/assets/gemp-mobile/9.jpg" class="elevation-2 rounded ma-auto" />
                  </v-col>
                  <v-col v-if="smAndDown" :cols="12" class="py-2 pr-2 pr-md-4">
                    <v-img src="@/assets/gemp-mobile/11.jpg" class="elevation-2 rounded ma-auto" />
                  </v-col>
                  <v-col :cols="12" class="py-2 pr-2 pr-md-4">
                    <v-img src="@/assets/gemp-mobile/13.jpg" class="elevation-2 rounded ma-auto" />
                  </v-col>
                  <v-col v-if="smAndDown" :cols="12" class="py-2 pr-2 pr-md-4">
                    <v-img src="@/assets/gemp-mobile/15.jpg" class="elevation-2 rounded ma-auto" />
                  </v-col>
                </v-row>
              </v-col>
              <v-col :cols="6" :sm="6" :md="3" :lg="3" :xl="3">
                <v-row no-gutters>
                  <v-col :cols="12" class="py-2 pl-2 pl-md-0 pr-0 pr-md-4">
                    <v-img src="@/assets/gemp-mobile/2.jpg" class="elevation-2 rounded ma-auto" />
                  </v-col>
                  <v-col v-if="smAndDown" :cols="12" class="py-2 pl-2 pl-md-0 pr-0 pr-md-4">
                    <v-img src="@/assets/gemp-mobile/4.jpg" class="elevation-2 rounded ma-auto" />
                  </v-col>
                  <v-col :cols="12" class="py-2 pl-2 pl-md-0 pr-0 pr-md-4">
                    <v-img src="@/assets/gemp-mobile/6.jpg" class="elevation-2 rounded ma-auto" />
                  </v-col>
                  <v-col v-if="smAndDown" :cols="12" class="py-2 pl-2 pl-md-0 pr-0 pr-md-4">
                    <v-img src="@/assets/gemp-mobile/8.jpg" class="elevation-2 rounded ma-auto" />
                  </v-col>
                  <v-col :cols="12" class="py-2 pl-2 pl-md-0 pr-0 pr-md-4">
                    <v-img src="@/assets/gemp-mobile/10.jpg" class="elevation-2 rounded ma-auto" />
                  </v-col>
                  <v-col v-if="smAndDown" :cols="12" class="py-2 pl-2 pl-md-0 pr-0 pr-md-4">
                    <v-img src="@/assets/gemp-mobile/12.jpg" class="elevation-2 rounded ma-auto" />
                  </v-col>
                  <v-col :cols="12" class="py-2 pl-2 pl-md-0 pr-0 pr-md-4">
                    <v-img src="@/assets/gemp-mobile/14.jpg" class="elevation-2 rounded ma-auto" />
                  </v-col>
                  <v-col v-if="smAndDown" :cols="12" class="py-2 pl-2 pl-md-0 pr-0 pr-md-4">
                    <v-img src="@/assets/gemp-mobile/16.jpg" class="elevation-2 rounded ma-auto" />
                  </v-col>
                </v-row>
              </v-col>
              <v-col v-if="mdAndUp" :cols="6" :sm="6" :md="3" :lg="3" :xl="3">
                <v-row no-gutters>
                  <v-col :cols="12" class="py-2 pr-4">
                    <v-img src="@/assets/gemp-mobile/3.jpg" class="elevation-2 rounded ma-auto" />
                  </v-col>
                  <v-col :cols="12" class="py-2 pr-4">
                    <v-img src="@/assets/gemp-mobile/7.jpg" class="elevation-2 rounded ma-auto" />
                  </v-col>
                  <v-col :cols="12" class="py-2 pr-4">
                    <v-img src="@/assets/gemp-mobile/11.jpg" class="elevation-2 rounded ma-auto" />
                  </v-col>
                  <v-col :cols="12" class="py-2 pr-4">
                    <v-img src="@/assets/gemp-mobile/15.jpg" class="elevation-2 rounded ma-auto" />
                  </v-col>
                </v-row>
              </v-col>
              <v-col v-if="mdAndUp" :cols="6" :sm="6" :md="3" :lg="3" :xl="3">
                <v-row no-gutters>
                  <v-col :cols="12" class="py-2 pr-4">
                    <v-img src="@/assets/gemp-mobile/4.jpg" class="elevation-2 rounded ma-auto" />
                  </v-col>
                  <v-col :cols="12" class="py-2 pr-4">
                    <v-img src="@/assets/gemp-mobile/8.jpg" class="elevation-2 rounded ma-auto" />
                  </v-col>
                  <v-col :cols="12" class="py-2 pr-4">
                    <v-img src="@/assets/gemp-mobile/12.jpg" class="elevation-2 rounded ma-auto" />
                  </v-col>
                  <v-col :cols="12" class="py-2 pr-4">
                    <v-img src="@/assets/gemp-mobile/16.jpg" class="elevation-2 rounded ma-auto" />
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
  name: 'ProjectGEMP',
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
