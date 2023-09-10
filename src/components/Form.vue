<template>
  <div class="box form-container">
    <div class="columns">
      <div class="column is-5" role="form" aria-label="Formulário para criação de uma nova tarefa">
        <input type="text" class="input" placeholder="Qual tarefa você deseja fazer?" v-model="description" />
      </div>
      <div class="column is-3">
        <div class="select">
          <select name="selected-project" v-model="selectedProject">
            <option :value="{}">Selecione um projeto</option>
            <option v-for="project in projects" :key="project.id" :value="project">
              {{ project.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="column">
        <TimerItem @on-time-finish="finishTask" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

import Task from '@/interfaces/Task';
import { key } from '@/store';

import TimerItem from './Timer.vue';
import Project from '@/interfaces/Project';
import TaskEntity from '@/entities/Task';

export default defineComponent({
  name: 'FormSection',
  components: {
    TimerItem,
  },
  emits: ['onSubmit'],
  setup(_, { emit }) {
    const store = useStore(key);
    const description = ref("");
    const selectedProject = ref<Project | null>(null);
    store.dispatch('GET_PROJECTS');

    function finishTask(time: number) {
      if(selectedProject.value) {
        const task: Task = {
          id: 0,
          time,
          description: description.value,
          project: selectedProject.value,
        };
        emit('onSubmit', new TaskEntity(task));
        description.value = '';
      }
    }

    return {
      description,
      selectedProject,
      finishTask,
      projects: computed(() => store.state.project.projects),
    };
  }
});
</script>

<style>
.form-container {
  color: var(--text-primary);
  background-color: var(--bg-primary);
}
</style>
