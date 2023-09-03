import Project from "@/interfaces/Project";
import { InjectionKey } from "vue";
import { createStore, Store, useStore } from 'vuex';

interface AppState {
  projects: Project[];
}

export const key: InjectionKey<Store<AppState>> = Symbol();

export const store = createStore<AppState>({
  state: {
    projects: [],
  },
  mutations: {
    'ADD_PROJECT'(state, name: string) {
      const project: Project = {
        id: (new Date()).toISOString(),
        name,
      };

      state.projects.push(project);
    },
  }
});

export function useAppStore(): Store<AppState> {
  return useStore(key);
}
