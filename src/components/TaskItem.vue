<template>
  <div class="box has-text-weight-bold">
    <div class="columns">
      <div class="column is-7">
        Descrição da tarefa
      </div>
      <div class="column">
        <StopWatch :seconds="15" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StopWatch from './StopWatch.vue';

export default defineComponent({
  name: 'TaskItem',
  components: {
    StopWatch,
  },
})
</script>

<style scoped>
.box {
  background-color: #FAF0CA;
}
</style>
