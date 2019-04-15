import { NotificationEngine, NotificationType } from '@fivethree/ngxs-notification-plugin';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService implements NotificationEngine {

  private static SHORT_DURATION = 3000;

  constructor(private toast: ToastController) { }

  successNotification(message: string, options?: any, actions?: any) {
    this.showToast(message, 'success', options);
  }

  hintNotification(message: string, options?: any, actions?: any) {
    this.showToast(message, 'hint', options);
  }

  warningNotification(message: string, options?: any, actions?: any) {
    this.showToast(message, 'warning');
  }

  errorNotification(message: string, options?: any, actions?: any) {
    this.showToast(message, 'error');
  }

  unknownErrorNotification(options?: any, error?: any, actions?: any) {
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
