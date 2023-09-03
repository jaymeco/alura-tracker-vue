import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import TaskPage from '../pages/TaskPage.vue';
import ProjectsPage from '../pages/ProjectsPage.vue';
import CreateProjectPage from '../pages/CreateProjectPage.vue';

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
  },
  {
    path: '/projects/create',
    name: 'Create-Project',
    component: CreateProjectPage,
  },
  {
    path: '/projects/:projectId/edit',
    name: 'Edit-Project',
    component: CreateProjectPage,
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
