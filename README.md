# Ionic Notify Plugon for NGXS

[![npm version](https://badge.fury.io/js/%40fivethree%2Fngxs-notification-plugin.svg)](https://www.npmjs.com/@fivethree/ngxs-notification-plugin)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/fivethree-team/ngxs-notification-plugin/blob/master/LICENSE)

Notification Plugin for Angular 8 or higher and NGXS 3.3.4 or higher.

| Angular | @ngxs/store | @fivethree/@fivethree/ngxs-ionic-router-plugin |
| ------- | ----------- | ---------------------------------------------- |
| 8/9     | 3.6.x+      | 0.3.x+                                         |
| 7       | 3.3.4+      | 0.2.1                                          |

## 📦 Installation

```console
npm install @fivethree/ngxs-notification-plugin --save

# or if you are using yarn
yarn add @fivethree/ngxs-notification-plugin
```

## 🔨 Usage

Import the module into your root application module:

```typescript
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsNotificationPluginModule } from '@fivethree/ngxs-notification-plugin';
import { ToastService } from './toast.service';

@NgModule({
  imports: [
    NgxsModule.forRoot(states),
    NgxsNotificationPluginModule.forRoot(ToastService)
  ]
})
export class AppModule {}
```

Create a service called for example `ToastService` which has to implement `NotificationEngine`:

```typescript
import { NotificationEngine } from '@fivethree/ngxs-notification-plugin';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NotificationType } from '@fivethree/ngxs-notification-plugin';

@Injectable({
  providedIn: 'root'
})
export class ToastService implements NotificationEngine {
  private static SHORT_DURATION = 3000;

  constructor(private toast: ToastController) {}

  successNotification(message: string, options?: any, actions?: any) {
    this.showToast(message, 'success', options);
  }

  hintNotification(message: string, options?: any, actions?: any) {
    this.showToast(message, 'hint', options);
  }

  warningNotification(message: string, options?: any, actions?: any) {
    this.showToast(message, 'warning', options);
  }

  errorNotification(message: string, options?: any, actions?: any) {
    this.showToast(message, 'error', options);
  }

  unknownErrorNotification(options?: any, error?: any, actions?: any) {
    this.showToast('Unknown error', 'error', options);
  }

  async showToast(message: string, type: NotificationType, options?: any) {
    const toast = await this.toast.create({
      message: message,
      cssClass: `toast-${type}`,
      duration: ToastService.SHORT_DURATION,
      ...options
    });

    toast.present();
  }
}
```

Now the notifications will be reflected in your store under the `notification` state name.

## 🔔 Notification

Notifications are useful for the user to now if an interaction succeeded or failed.

Lets say you have an action to change the users password, you can display a notification if the password was changed successfully and if an error occurred.

```typescript
import { Store } from '@ngxs/store';
import { SuccessNotification, UnknownErrorNotification } from '@fivethree/ngxs-notification-plugin';

constructor(private store: Store) {

}

changePassword(oldPassword: string, newPassword: string) {
  this.store.dispatch(new ChangePassword(oldPassword, newPassword))
    .subscribe(() => this.store.dispatch(new SuccessNotification('Your password has been successfully changed.')),
        (error) => this.store.dispatch(new UnknownErrorNotification(error)));
}
```
