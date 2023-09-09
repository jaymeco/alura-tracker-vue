import Task from "@/entities/Task";
import Notification from "@/interfaces/Notification";
import { InjectionKey } from "vue";
import { createStore, Store, useStore } from 'vuex';
import { project, ProjectState } from "./modules/project";
import { task, TaskState } from "./modules/task";

export interface AppState {
  notifications: Notification[];
  project: ProjectState,
  task: TaskState,
}

export const key: InjectionKey<Store<AppState>> = Symbol();

export const store = createStore<AppState>({
  state: {
    notifications: [],
    project: {
      projects: [],
    },
    task: {
      tasks: [],
    }
  },
  mutations: {
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
  },
  modules: {
    project,
    task,
  },
});

export function useAppStore(): Store<AppState> {
  return useStore(key);
}
