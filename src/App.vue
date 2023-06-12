<template>
  <main class="columns is-gapless is-multline">
    <div class="column is-one-quarter">
      <SideBar />
    </div>
    <div class="column is-three-quarter">
      <FormSection />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import SideBar from '@/components/SideBar.vue';
import FormSection from '@/components/Form.vue';

export default defineComponent({
  name: 'App',
  components: {
    SideBar,
    FormSection,
  }
});
</script>
