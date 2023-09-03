import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import TaskPage from '../pages/TaskPage.vue';
import ProjectsPage from '../pages/ProjectsPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'tasks',
    component: TaskPage,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsPage,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
