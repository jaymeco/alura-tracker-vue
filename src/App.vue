<template>
  <main class="columns is-gapless is-multline" :class="{ 'dark-mode': isDarkMode }">
    <div class="column is-one-quarter">
      <SideBar @on-change-theme="switchTheme" />
    </div>
    <div class="column is-three-quarter content">
      <FormSection @on-submit="saveTask" />
      <div class="taks-list">
        <BoxContainer v-if="isEmptyTasks">
          Você não possui nenhuma produção hoje :(
        </BoxContainer>
        <TaskItem v-for="(task, index) in taskList.items" v-bind:key="index" :task="task" v-bind:sequence="index + 1" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Task from '@/entities/Task';
import List from '@/classes/List';

import SideBar from '@/components/SideBar.vue';
import FormSection from '@/components/Form.vue';
import TaskItem from '@/components/TaskItem.vue';
import BoxContainer from './components/BoxContainer.vue';

export default defineComponent({
  name: 'App',
  components: {
    SideBar,
    FormSection,
    TaskItem,
    BoxContainer
  },
  data: () => ({
    taskList: new List<Task>(),
    isDarkMode: false,
  }),
  computed: {
    isEmptyTasks() {
      return this.taskList.isEmpty;
    },
  },
  methods: {
    saveTask(task: Task) {
      this.taskList.add(task);
    },
    switchTheme(darkMode: boolean) {
      this.isDarkMode = darkMode;
    }
  },
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
