<template>
  <main class="columns is-gapless is-multline" :class="{ 'dark-mode': isDarkMode }">
    <div class="column is-one-quarter">
      <SideBar @on-change-theme="switchTheme" />
    </div>
    <div class="column is-three-quarter content">
      <NotificationMessage />
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import SideBar from '@/components/SideBar.vue';
import NotificationMessage from '@/components/NotificationMessage.vue';

export default defineComponent({
  name: 'App',
  components: {
    SideBar,
    NotificationMessage,
  },
  data: () => ({
    isDarkMode: false,
  }),
  methods: {
    switchTheme(darkMode: boolean) {
      this.isDarkMode = darkMode;
    }
  },
});
</script>

<style>
.taks-list {
  padding: 1.25em;
}

main {
  --bg-primary: #f5f5f5;
  --text-primary: #33333;
}

main.dark-mode {
  --bg-primary: #2b2d42;
  --text-primary: #ddd;
}

.content {
  background-color: var(--bg-primary);
}
</style>
