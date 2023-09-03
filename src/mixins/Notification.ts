import { NotificationType } from "@/interfaces/Notification";
import { store } from "@/store";

export const notificationyMixin = {
  methods: {
    notifty(type: NotificationType, title: string, text: string) {
      store.commit('NOTIFICATE', {
        text,
        title,
        type,
      })
    }
  }
}
