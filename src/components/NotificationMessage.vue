<template>
  <div class="notifications">
    <article v-for="notification in notifications" class="message" :class="context[notification.type]"
      :key="notification.id">
      <div class="message-header">
        <p>{{ notification.title }}</p>
        <button class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">
        {{ notification.text }}
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { NotificationType } from '@/interfaces/Notification';
import { useAppStore } from '@/store';
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'NotificationMessage',
  data() {
    return {
      context: {
        [NotificationType.SUCCESS]: 'is-success',
        [NotificationType.ERROR]: 'is-danger',
        [NotificationType.INFO]: 'is-info',
      }
    };
  },
  setup() {
    const store = useAppStore();

    return {
      notifications: computed(() => store.state.notifications),
    }
  },
})

</script>

<style scoped>
.notifications {
  position: absolute;
  z-index: 99;
  top: 0;
  right: 0;
  width: 300px;
  padding: 8px;
}
</style>
