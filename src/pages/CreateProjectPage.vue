<template>
  <section class="projetos">
    <h1 class="title">Adicionar um projeto</h1>

    <form @submit.prevent="handleSubmit">
      <div class="field">
        <label for="name" class="label">Nome do projeto</label>
        <input type="text" class="input" v-model="project.name" id="project-name">
      </div>

      <div class="field">
        <button type="submit" class="button">
          Salvar
        </button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAppStore } from '../store';

export default defineComponent({
  name: 'CreateProjectPage',
  data() {
    return {
      project: {
        name: ''
      },
    };
  },
  methods: {
    handleSubmit() {
      this.store.commit('ADD_PROJECT', this.project.name);
      this.project.name = '';
      this.$router.push('/projects');
    }
  },
  setup() {
    const store = useAppStore()

    return {
      store,
    }
  }
});

</script>

<style scoped>
.projetos {
  padding: 1.25rem;
}
</style>