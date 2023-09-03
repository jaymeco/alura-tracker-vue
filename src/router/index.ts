import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import TaskPage from '../pages/TaskPage.vue';
import ProjectsPage from '../pages/ProjectsPage.vue';
import CreateProjectPage from '../pages/Projects/CreateProjectPage.vue';
import ListProjectPage from '../pages/Projects/ListProjectsPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'tasks',
    component: TaskPage,
  },
  {
    path: '/projects',
    component: ProjectsPage,
    children: [
      {
        path: '',
        name: 'Lsi-Projects',
        component: ListProjectPage,
      },
      {
        path: 'create',
        name: 'Create-Project',
        component: CreateProjectPage,
      },
      {
        path: ':projectId/edit',
        name: 'Edit-Project',
        component: CreateProjectPage,
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
