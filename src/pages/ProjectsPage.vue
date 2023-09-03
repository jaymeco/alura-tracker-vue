<template>
  <section class="projetos">
    <h1 class="title">Projetos poha</h1>

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

    <table class="table is-full-width mt-2">
      <thead>
        <tr>
          <th>
            ID
          </th>
          <th>
            Nome
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td>
            {{ project.id }}
          </td>
          <td>
            {{ project.name }}
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Project from '../interfaces/Project';

export default defineComponent({
  name: 'ProjectsPage',
  data() {
    return {
      project: {
        name: ''
      },
      projects: [] as Project[],
    };
  },
  methods: {
    handleSubmit() {
      const project: Project = {
        id: (new Date()).toISOString(),
        name: this.project.name,
      };

      this.projects.push(project);
      this.project.name = '';
    }
  }
});

</script>

<style scoped>
.projetos {
  padding: 1.25rem;
}
</style>