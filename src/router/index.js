import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/works/cdt-hub',
    name: 'cdthub',
    component: () => import('@/views/ProjectCDTHub.vue'),
  },
  {
    path: '/works/linkage-2',
    name: 'linkage',
    component: () => import('@/views/ProjectLinkage.vue'),
  },
  {
    path: '/works/officer',
    name: 'officer',
    component: () => import('@/views/ProjectOfficer.vue'),
  },
  {
    path: '/works/thaid',
    name: 'cors',
    component: () => import('@/views/ProjectCors.vue'),
  },
  {
    path: '/works/hospital-employee',
    name: 'gemp',
    component: () => import('@/views/ProjectGEMP.vue'),
  },
  {
    path: '/works/civil-registration',
    name: 'tr31',
    component: () => import('@/views/ProjectTR31.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
