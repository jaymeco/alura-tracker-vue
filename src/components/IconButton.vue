<template>
  <button class="button" @click="triggerAction" :disabled="disabled">
    <span class="icon">
      <i :class="'fas ' + iconName"></i>
    </span>
    <span>{{ label }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconButton',
  emits: ['action'],
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    iconName: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  methods: {
    triggerAction(): void {
      this.$emit('action');
    }
  }
});

</script>

<style scoped></style>
