<template>
  <section>
    <strong>{{ formatedTime }}</strong>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StopWatch',
  props: {
    seconds: {
      default: 0,
      type: Number,
      required: true,
    },
  },
  computed: {
    formatedTime(): string {
      const timestamp = new Date(this.seconds * 1000);

      return timestamp.toISOString()
        .substr(11, 8);
    },
  },
});
</script>
