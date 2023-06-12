<template>
  <div class="box">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
        <input type="text" class="input" placeholder="Qual tarefa você deseja fazer?">
      </div>
      <div class="column">
        <div class="is-flex is-align-items-center is-justify-content-space-between">
          <section>
            <strong>{{ formatedTime }}</strong>
          </section>
          <button class="button" @click="initCount">
            <span class="icon">
              <i class="fas fa-play"></i>
            </span>
            <span>play</span>
          </button>
          <button class="button" @click="finishCount">
            <span class="icon">
              <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormSection',
  data: () => ({
    seconds: 0,
  }),
  computed: {
    formatedTime(): string {
      const timestamp = new Date(this.seconds * 1000);

      return timestamp.toISOString()
        .substr(11, 8);
    },
  },
  methods: {
    initCount() {
      setInterval(() => {
        this.seconds += 1;
      }, 1000);
    },
    finishCount() {
      console.log('Iniciando');
    },
  },
});
</script>

<style scoped></style>
