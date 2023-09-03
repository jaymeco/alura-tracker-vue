import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import TaskPage from '../pages/TaskPage.vue';


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'tasks',
    component: TaskPage,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
