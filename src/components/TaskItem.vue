<template>
  <BoxContainer>
    <div class="columns">
      <div class="column is-7">
        {{ task.description || `Tarefa de N° ${sequence}` }}
      </div>
      <div class="column">
        <StopWatch v-bind:seconds="task.time" />
      </div>
    </div>
  </BoxContainer>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import Task from '@/interfaces/Task';

import StopWatch from './StopWatch.vue';
import BoxContainer from './BoxContainer.vue';

export default defineComponent({
  name: 'TaskItem',
  components: {
    StopWatch,
    BoxContainer
  },
  props: {
    task: {
      type: Object as PropType<Task>,
      required: true,
    },
    sequence: {
      type: Number,
      required: true,
    },
  },
})
</script>

<style scoped></style>
