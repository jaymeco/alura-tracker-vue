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
import { defineComponent, ref } from 'vue';
import Project from '../../interfaces/Project';
import { useAppStore } from '../../store';
import useNotifier from '@/hooks/useNotifier';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'CreateProjectPage',
  props: {
    projectId: {
      type: String,
    },
  },
  setup(props) {
    const store = useAppStore();
    const { notify } = useNotifier();
    const router = useRouter();

    const project = ref({ name: '' });

    if (props.projectId) {
      const foundProject: Project | undefined = store.state
        .project.projects.find(({ id }) => id === props.projectId);

      project.value.name = foundProject?.name ?? '';
    }

    function feedbackAction(message: string) {
      project.value.name = '';
      router.push('/projects');
      notify(NotificationType.SUCCESS, 'Sucesso!', message);
    }

    function handleSubmit() {
      if (props.projectId) {
        store.dispatch('UPDATE_PROJECT', {
          id: props.projectId,
          name: project.value.name,
        }).then(() => feedbackAction('Projeto atualizado com sucesso'));
      } else {
        store.dispatch('CREATE_PROJECT', project.value.name)
          .then(() => feedbackAction('Projeto cadastrado com sucesso'));
      }
    }

    return {
      project,
      handleSubmit,
    }
  }
});

</script>

<style scoped></style>