<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <StopWatch :seconds="seconds" />
    <IconButton :disabled="isCounting" @action="initCount" label="Play" icon-name="fa-play" />
    <IconButton :disabled="!isCounting" @action="finishCount" label="Stop" icon-name="fa-stop" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import StopWatch from './StopWatch.vue';
import IconButton from './IconButton.vue';  

export default defineComponent({
  name: 'TimerItem',
  emits: ['onTimeFinish'],
  components: {
    StopWatch,
    IconButton,
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
      this.$emit('onTimeFinish', this.seconds);
      this.seconds = 0;
    },
  },
});
</script>
