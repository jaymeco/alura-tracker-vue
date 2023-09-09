import Task from "@/entities/Task";
import httpClient from "@/services/clients/axios";
import { AppState } from "@/store";
import { Module } from "vuex";

export interface TaskState {
  tasks: Task[];
}

export const task: Module<TaskState, AppState> = {
  mutations: {
    'DEFINE_TASKS'(state, tasks: Task[]) {
      state.tasks = tasks;
    },
    'ADD_TASK'(state, task: Task) {
      state.tasks.push(task);
    },
    'EDIT_TASK'(state, updatedTask: Task) {
      const index = state.tasks.findIndex((task) => task.id === updatedTask.id);
      state.tasks[index] = updatedTask;
    },
  },
  actions: {
    'GET_TASKS'({ commit }) {
      httpClient.get('/tasks')
        .then(({ data }) => commit('DEFINE_TASKS', data.map((response: any) => new Task(response))))
    },
    'CREATE_TASK'({ commit }, task: Task) {
      httpClient.post('/tasks', task.toJson())
        .then(({ data }) => commit('ADD_TASK', new Task(data)));
    },
    'UPDATE_TASK'({ commit }, task: Task) {
      httpClient.put(`/tasks/${task.id}`, task.toJson())
        .then(({ data }) => commit('EDIT_TASK', new Task(data)));
    }
  },
}
