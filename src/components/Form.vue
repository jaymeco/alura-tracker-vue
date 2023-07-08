<template>
  <div class="box">
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

import TimerItem from './Timer.vue';

export default defineComponent({
  name: 'FormSection',
  components: {
    TimerItem,
  },
  data: () => ({
    description: '',
  }),
  methods: {
    finishTask(time: number): void {
      console.log(time);
      this.description = '';
    }
  },
});
</script>

<style scoped></style>
