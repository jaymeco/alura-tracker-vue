import Project from "@/interfaces/Project";
import httpClient from "@/services/clients/axios";
import { AppState } from "@/store";
import { Module } from "vuex";

export interface ProjectState {
  projects: Project[];
}

export const project: Module<ProjectState, AppState> = {
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
  },
};
