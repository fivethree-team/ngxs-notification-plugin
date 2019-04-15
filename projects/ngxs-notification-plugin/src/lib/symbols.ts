import { InjectionToken } from '@angular/core';

export const NOTIFICATION_ENGINE = new InjectionToken('NOTIFICATIOn_ENGINE');

export type NotificationType = 'success' | 'hint' | 'warning' | 'error' | 'unknown-error';

export interface NotificationEngine {
    successNotification();
    hintNotification();
    warningNotification();
    errorNotification();
    unknownErrorNotification();
}
