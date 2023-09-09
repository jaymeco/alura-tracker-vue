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
import useNotifier from '@/hooks/useNotifier';

export default defineComponent({
  name: 'CreateProjectPage',
  props: {
    projectId: {
      type: String,
    },
  },
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
        this.store.dispatch('UPDATE_PROJECT', {
          id: this.projectId,
          name: this.project.name,
        }).then(() => this.feedbackAction('Projeto atualizado com sucesso'));
      } else {
        this.store.dispatch('CREATE_PROJECT', this.project.name)
          .then(() => this.feedbackAction('Projeto cadastrado com sucesso'));
      }
    },
    feedbackAction(message: string) {
      this.project.name = '';
      this.$router.push('/projects');
      this.notify(NotificationType.SUCCESS, 'Sucesso!', message);
    }
  },
  mounted() {
    if (this.projectId) {
      const project: Project | undefined = this.store.state
        .projects.find(({ id }) => id === this.projectId);
      this.project.name = project?.name ?? '';
    }
  },
  setup() {
    const store = useAppStore();
    const { notify } = useNotifier();

    return {
      store,
      notify,
    }
  }
});

</script>

<style scoped></style>