<template>
  <main class="columns is-gapless is-multline">
    <div class="column is-one-quarter">
      <SideBar />
    </div>
    <div class="column is-three-quarter">
      <FormSection @on-submit="saveTask" />
      <div class="taks-list">
        <BoxContainer v-if="isEmptyTasks">
          Você não possui nenhuma produção hoje :(
        </BoxContainer>
        <TaskItem v-for="(task, index) in tasks" v-bind:key="index" :task="task" v-bind:sequence="index + 1" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Task from './interfaces/Task';

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
    tasks: [] as Task[],
  }),
  computed: {
    isEmptyTasks() {
      return this.tasks.length <= 0;
    },
  },
  methods: {
    saveTask(task: Task) {
      this.tasks.push(task);
    },
  },
});
</script>

<style scoped>
.taks-list {
  padding: 1.25em;
}
</style>
