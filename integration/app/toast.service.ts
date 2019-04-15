import { NotificationEngine } from '@fivethree/ngxs-notification-plugin';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NotificationType } from 'projects/ngxs-notification-plugin/src/public_api';

@Injectable({
  providedIn: 'root'
})
export class ToastService implements NotificationEngine {

  private static LONG_DURATION = 6000;
  private static SHORT_DURATION = 3000;

  constructor(private toast: ToastController) { }

  successNotification(message: string, options?: any, actions?: any) {
    console.log('ToastService success called', message);
    this.showToast(message, 'success', options);
  }

  hintNotification(message: string, options?: any, actions?: any) {
    console.log('ToastService success called', message);
    this.showToast(message, 'hint', options);
  }

  warningNotification(message: string, options?: any, actions?: any) {
    console.warn('ToastService warning called');
    this.showToast(message, 'warning');
  }

  errorNotification(message: string, options?: any, actions?: any) {
    console.error('ToastService error called');
    this.showToast(message, 'error');
  }

  unknownErrorNotification(options?: any, error?: any, actions?: any) {
    console.error('ToastService unknown error called');
    this.showToast('Unknown error', 'error');
  }

  async showToast(message: string, type: NotificationType, options?: any ) {
    const toast = await this.toast.create({
      message: message,
      cssClass: `toast-${type}`,
      duration: ToastService.SHORT_DURATION,
      ...options
    });

    toast.present();
  }
}
