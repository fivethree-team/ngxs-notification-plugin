import { NotificationEngine } from '@fivethree/ngxs-notification-plugin';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService implements NotificationEngine {

  constructor() { }

  successNotification() {
    console.log('ToastService success called');
  }

  hintNotification() {
    console.log('ToastService hint called');
  }

  warningNotification() {
    console.warn('ToastService warning called');
  }

  errorNotification() {
    console.error('ToastService error called');
  }

  unknownErrorNotification() {
    console.error('ToastService unknown error called');
  }
}
