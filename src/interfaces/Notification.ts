export enum NotificationType {
  SUCCESS,
  INFO,
  ERROR,
}


export default interface Notification {
  title: string;
  text: string;
  type: NotificationType,
  id: number;
}