import Notification, { NotificationType } from "@/interfaces/Notification";
import Project from "@/interfaces/Project";
import { InjectionKey } from "vue";
import { createStore, Store, useStore } from 'vuex';

interface AppState {
  projects: Project[];
  notifications: Notification[];
}

export const key: InjectionKey<Store<AppState>> = Symbol();

export const store = createStore<AppState>({
  state: {
    projects: [],
    notifications: [],
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
  }
});

export function useAppStore(): Store<AppState> {
  return useStore(key);
}
