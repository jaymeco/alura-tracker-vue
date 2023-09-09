<template>
  <FormSection @on-submit="saveTask" />
  <div class="taks-list">
    <BoxContainer v-if="isEmptyTasks">
      Você não possui nenhuma produção hoje :(
    </BoxContainer>
    <TaskItem v-for="(task, index) in tasks" v-bind:key="index" :task="task" v-bind:sequence="index + 1"
      @on-click="selectTask" />
  </div>
  <div v-if="selectedTask" class="modal" :class="{ 'is-active': selectedTask }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Editar tarefa</p>
        <button class="delete" aria-label="close" @click="unSelectTask"></button>
      </header>
      <section class="modal-card-body">
        <div class="field">
          <label for="description" class="label">Descrição da tarefa</label>
          <input type="text" class="input" v-model="selectedTask.description" id="task-description">
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="updateTask">Salvar</button>
        <button class="button" @click="unSelectTask">Cancelar</button>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

import Task from '../entities/Task';
import List from '../classes/List';

import FormSection from '../components/Form.vue';
import TaskItem from '../components/TaskItem.vue';
import BoxContainer from '../components/BoxContainer.vue';
import { useAppStore } from '@/store';

export default defineComponent({
  name: 'TaskPage',
  components: {
    FormSection,
    TaskItem,
    BoxContainer
  },
  data: () => ({
    isDarkMode: false,
    selectedTask: null as Task | null,
  }),
  computed: {
    isEmptyTasks() {
      return this.tasks.length === 0;
    },
  },
  methods: {
    saveTask(task: Task) {
      this.store.dispatch('CREATE_TASK', task);
    },
    switchTheme(darkMode: boolean) {
      this.isDarkMode = darkMode;
    },
    selectTask(task: Task) {
      this.selectedTask = task;
    },
    unSelectTask() {
      this.selectedTask = null;
    },
    updateTask() {
      this.store.dispatch('UPDATE_TASK', this.selectedTask)
      .then(() => this.unSelectTask());
    }
  },
  setup() {
    const store = useAppStore();
    store.dispatch('GET_TASKS');

    return {
      store,
      tasks: computed(() => store.state.tasks),
    };
  }
});
</script>

<style>
.taks-list {
  padding: 1.25em;
}

main {
  --bg-primary: #f5f5f5;
  --text-primary: #33333;
}

main.dark-mode {
  --bg-primary: #2b2d42;
  --text-primary: #ddd;
}

.content {
  background-color: var(--bg-primary);
}
</style>
