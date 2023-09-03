<template>
  <section>
    <router-link to="/projects/create" class="button">
      <span class="icon is-small">
        <i class="fas fa-plus"></i>
      </span>
      <span>Novo projeto</span>
    </router-link>

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
          <td>
            <router-link :to="`/projects/${project.id}/edit`" class="button">
              <span class="icon is-small">
                <i class="fas fa-pencil-alt"></i>
              </span>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useAppStore } from '../../store';

export default defineComponent({
  name: 'ProjectsPage',
  data() {
    return {
    };
  },
  setup() {
    const store = useAppStore()

    return {
      projects: computed(() => store.state.projects)
    }
  }
});

</script>

<style scoped>
</style>