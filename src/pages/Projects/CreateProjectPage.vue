<template>
  <section>
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
import { NotificationType } from '@/interfaces/Notification';
import { defineComponent } from 'vue';
import Project from '../../interfaces/Project';
import { useAppStore } from '../../store';
import { notificationyMixin } from '@/mixins/Notification'

export default defineComponent({
  name: 'CreateProjectPage',
  props: {
    projectId: {
      type: String,
    },
  },
  mixins: [notificationyMixin],
  data() {
    return {
      project: {
        name: ''
      },
    };
  },
  methods: {
    handleSubmit() {
      if (this.projectId) {
        this.store.commit('EDIT_PROJECT', {
          id: this.projectId,
          name: this.project.name,
        });
      } else {
        this.store.commit('ADD_PROJECT', this.project.name);
      }
      this.project.name = '';
      this.$router.push('/projects');
      this.notifty(NotificationType.SUCCESS, 'Sucesso!', 'Projeto adicionado com sucesso!');
    },
  },
  mounted() {
    if (this.projectId) {
      const project: Project | undefined = this.store.state
        .projects.find(({ id }) => id === this.projectId);
      this.project.name = project?.name ?? '';
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

<style scoped></style>