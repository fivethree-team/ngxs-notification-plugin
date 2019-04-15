import { State, Action, StateContext } from '@ngxs/store';
import { NotificationType, NOTIFICATION_ENGINE, NotificationEngine } from './symbols';
import { Inject } from '@angular/core';
import {
    SuccessNotification,
    HintNotification,
    WarningNotification,
    ErrorNotification,
    UnknownErrorNotification
} from './notification.actions';

export interface NotificationStateModel {
    notification?: string;
    type?: NotificationType;
    error?: any;
}

@State<NotificationStateModel>({
    name: 'notification'
})
export class NotificationState {

    constructor(@Inject(NOTIFICATION_ENGINE) private _engine: NotificationEngine) {

    }

    @Action(SuccessNotification)
    successNotification(ctx: StateContext<NotificationStateModel>, action: SuccessNotification) {
        this._engine.successNotification();
    }

    @Action(HintNotification)
    hintNotification(ctx: StateContext<NotificationStateModel>, action: HintNotification) {
        this._engine.hintNotification();
    }

    @Action(WarningNotification)
    warningNotification(ctx: StateContext<NotificationStateModel>, action: WarningNotification) {
        this._engine.warningNotification();
    }

    @Action(ErrorNotification)
    errorNotification(ctx: StateContext<NotificationStateModel>, action: ErrorNotification) {
        this._engine.errorNotification();
    }

    @Action(UnknownErrorNotification)
    unknownErrorNotification(ctx: StateContext<NotificationStateModel>, action: UnknownErrorNotification) {
        this._engine.unknownErrorNotification();
    }

}
