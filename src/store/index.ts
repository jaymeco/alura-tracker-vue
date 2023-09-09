import Task from "@/entities/Task";
import Notification, { NotificationType } from "@/interfaces/Notification";
import Project from "@/interfaces/Project";
import httpClient from "@/services/clients/axios";
import { InjectionKey } from "vue";
import { createStore, Store, useStore } from 'vuex';

interface AppState {
  projects: Project[];
  notifications: Notification[];
  tasks: Task[];
}

export const key: InjectionKey<Store<AppState>> = Symbol();

export const store = createStore<AppState>({
  state: {
    projects: [],
    notifications: [],
    tasks: [],
  },
  mutations: {
    'ADD_PROJECT'(state, name: string) {
      const project: Project = {
        id: (new Date()).toISOString(),
        name,
      };

      state.projects.push(project);
    },
    'EDIT_PROJECT'(state, updatedProject: Project) {
      state.projects = state.projects.map((project) => {
        if (project.id === updatedProject.id) {
          return {
            ...project,
            name: updatedProject.name,
          };
        }

        return project;
      });
    },
    'DELETE_PROJECT'(state, projectId: string) {
      state.projects = state.projects.filter(({ id }) => id !== projectId);
    },
    'DEFINE_PROJECTS'(state, projects: Project[]) {
      state.projects = projects;
    },
    'NOTIFICATE'(state, newNotification: Notification) {
      newNotification = {
        ...newNotification,
        id: (new Date()).getTime(),
      }
      state.notifications.push(newNotification);

      setTimeout(() => {
        state.notifications = state.notifications.filter(({ id }) => id !== newNotification.id)
      }, 2000);
    },
    'DEFINE_TASKS'(state, tasks: Task[]) {
      state.tasks = tasks;
    }
  },
  actions: {
    'GET_PROJECTS'({ commit }) {
      httpClient.get('/projects')
        .then(({ data }) => commit('DEFINE_PROJECTS', data));
    },
    'CREATE_PROJECT'(context, name: string) {
      return httpClient.post('/projects', {
        name,
      });
    },
    'UPDATE_PROJECT'(context, project: Project) {
      return httpClient.put(`/projects/${project.id}`, project);
    },
    'DELETE_PROJECT'(context, id: string) {
      return httpClient.delete(`/projects/${id}`);
    },
    'GET_TASKS'({ commit }) {
      httpClient.get('/tasks')
        .then(({ data }) => commit('DEFINE_TASKS', data.map((response: any) => new Task(response))))
    }
  }
});

export function useAppStore(): Store<AppState> {
  return useStore(key);
}
