import Project from "@/interfaces/Project";
import { InjectionKey } from "vue";
import { createStore, Store } from 'vuex';

interface AppState {
  projects: Project[];
}

export const key: InjectionKey<Store<AppState>> = Symbol();

export const store = createStore<AppState>({
  state: {
    projects: [],
  }
});
