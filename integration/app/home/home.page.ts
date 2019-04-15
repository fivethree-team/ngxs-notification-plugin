import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import {
  SuccessNotification,
  HintNotification,
  WarningNotification,
  ErrorNotification,
  UnknownErrorNotification
} from '@fivethree/ngxs-notification-plugin';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private store: Store) {

  }

  success() {
    this.store.dispatch(new SuccessNotification('Success', {
      duration: 0,
      showCloseButton: true
    }));
  }

  changePassword(oldPassword: string, newPassword: string) {
    this.store.dispatch(new UnknownErrorNotification(oldPassword, newPassword))
      .subscribe(() => this.store.dispatch(new SuccessNotification('Your password has been successfully changed.')),
        (error) => this.store.dispatch(new UnknownErrorNotification(error)));
  }

  hint() {
    this.store.dispatch(new HintNotification('Hint', {
      showCloseButton: true
    }));
  }

  warning() {
    this.store.dispatch(new WarningNotification('Warning'));
  }

  error() {
    this.store.dispatch(new ErrorNotification('Error'));
  }

  unknownError() {
    this.store.dispatch(new UnknownErrorNotification());
  }

}
