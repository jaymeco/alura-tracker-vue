<template>
  <div class="box form-container">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
        <input type="text" class="input" placeholder="Qual tarefa você deseja fazer?" v-model="description" />
      </div>
      <div class="column">
        <TimerItem @on-time-finish="finishTask" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Task from '@/interfaces/Task';

import TimerItem from './Timer.vue';

export default defineComponent({
  name: 'FormSection',
  components: {
    TimerItem,
  },
  emits: ['onSubmit'],
  data: () => ({
    description: '',
  }),
  methods: {
    finishTask(time: number): void {
      const task: Task = {
        time,
        description: this.description,
      };
      this.$emit('onSubmit', task);
      this.description = '';
    }
  },
});
</script>

<style>
.form-container {
  color: var(--text-primary);
  background-color: var(--bg-primary);
}
</style>
