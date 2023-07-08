<template>
  <header>
    <h1>
      <img src="../assets/logo.png" width="100" alt="logo">
    </h1>
    <button class="button" @click="switchTheme">{{ buttonLabel }}</button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SideBar',
  emits: ['onChangeTheme'],
  data: () => ({
    darkMode: false,
  }),
  computed: {
    buttonLabel() {
      return this.darkMode ? 'Desativar modo escuro'
        : 'Ativar modo escuro';
    },
  },
  methods: {
    switchTheme() {
      this.darkMode = !this.darkMode
      this.$emit('onChangeTheme', this.darkMode)
    }
  }
});
</script>

<style scoped>
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>
