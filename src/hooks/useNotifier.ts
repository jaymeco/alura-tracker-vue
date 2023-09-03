import { NotificationType } from "@/interfaces/Notification";
import { store } from "@/store";

type Notifier = {
  notify(type: NotificationType, title: string, text: string): void;
}

export default function (): Notifier {
  const notify = (type: NotificationType, title: string, text: string) => {
    store.commit('NOTIFICATE', {
      text,
      title,
      type,
    })
  };

  return { notify };
}
