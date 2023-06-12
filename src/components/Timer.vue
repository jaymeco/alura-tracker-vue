<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <StopWatch :seconds="seconds" />
    <button class="button" @click="initCount" :disabled="isCounting">
      <span class="icon">
        <i class="fas fa-play"></i>
      </span>
      <span>play</span>
    </button>
    <button class="button" @click="finishCount" :disabled="!isCounting">
      <span class="icon">
        <i class="fas fa-stop"></i>
      </span>
      <span>stop</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import StopWatch from './StopWatch.vue';

export default defineComponent({
  name: 'TimerItem',
  components: {
    StopWatch,
  },
  data: () => ({
    seconds: 0,
    intervalId: 0,
    isCounting: false,
  }),
  methods: {
    initCount() {
      this.intervalId = setInterval(() => {
        this.seconds += 1;
      }, 1000);
      this.isCounting = !this.isCounting;
    },
    finishCount() {
      clearInterval(this.intervalId);
      this.isCounting = !this.isCounting;
    },
  },
});
</script>
