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
    this.store.dispatch(new SuccessNotification('yea'));
  }

  hint() {
    this.store.dispatch(new HintNotification('yea'));
  }

  warning() {
    this.store.dispatch(new WarningNotification('yea'));
  }

  error() {
    this.store.dispatch(new ErrorNotification('yea'));
  }

  unknownError() {
    this.store.dispatch(new UnknownErrorNotification());
  }

}
