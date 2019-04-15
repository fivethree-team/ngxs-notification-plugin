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
    notification?: string | any;
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
        this._engine.successNotification(action.message, action.options, action.actions);
        ctx.setState({
            notification: action.message,
            type: 'success',
        });
    }

    @Action(HintNotification)
    hintNotification(ctx: StateContext<NotificationStateModel>, action: HintNotification) {
        this._engine.hintNotification(action.message, action.options, action.actions);
        ctx.setState({
            notification: action.message,
            type: 'hint',
        });
    }

    @Action(WarningNotification)
    warningNotification(ctx: StateContext<NotificationStateModel>, action: WarningNotification) {
        this._engine.warningNotification(action.message, action.options, action.warning, action.actions);
        ctx.setState({
            notification: action.message,
            type: 'warning',
            error: action.warning
        });
    }

    @Action(ErrorNotification)
    errorNotification(ctx: StateContext<NotificationStateModel>, action: ErrorNotification) {
        this._engine.errorNotification(action.message, action.options, action.error, action.actions);
        ctx.setState({
            notification: action.message,
            type: 'error',
            error: action.error
        });
    }

    @Action(UnknownErrorNotification)
    unknownErrorNotification(ctx: StateContext<NotificationStateModel>, action: UnknownErrorNotification) {
        this._engine.unknownErrorNotification(action.options, action.error, action.actions);
        ctx.setState({
            type: 'unknown-error',
            error: action.error
        });
    }

}
