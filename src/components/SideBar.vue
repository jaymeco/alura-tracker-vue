<template>
  <header>
    <h1>
      <img src="../assets/logo.png" width="100" alt="logo">
    </h1>
    <button class="button" @click="switchTheme">{{ buttonLabel }}</button>
    <nav class="panel mt-5">
      <ul>
        <li>
          <router-link to="/">
            <i class="fas fa-tasks"></i>
            Tarefas
          </router-link>
        </li>
        <li>
          <router-link to="/projects">
            <i class="fas fa-project-diagram"></i>
            Projetos
          </router-link>
        </li>
      </ul>
    </nav>
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

.panel {
  width: 100%;
}
.panel li {
  margin: 8px 0;
}

.link {
  color: #fff;
}

.link:hover {
  color: #FAF0CA;
}

.link.router-link-active {
  color: #FAF0CA;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}</style>
