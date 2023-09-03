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
import { computed, defineComponent } from 'vue';
import { useAppStore } from '../store';

export default defineComponent({
  name: 'ProjectsPage',
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
    }
  },
  setup() {
    const store = useAppStore()

    return {
      store,
      projects: computed(() => store.state.projects)
    }
  }
});

</script>

<style scoped>
.projetos {
  padding: 1.25rem;
}
</style>