export class SuccessNotification {
    static readonly type = '[Notification] SuccessNotification';
    constructor(public readonly payload: string,
        public readonly options?: Partial<any>,
        public readonly actionOnCancel?: any) { }
}

export class HintNotification {
    static readonly type = '[Notification] HintNotification';
    constructor(public readonly payload: string,
        public readonly options?: Partial<any>,
        public readonly actionOnCancel?: any) { }
}

export class WarningNotification {
    static readonly type = '[Notification] WarningNotification';
    constructor(public readonly payload: string,
        public readonly error?: any,
        public readonly options?: Partial<any>,
        public readonly actionOnCancel?: any) { }
}

export class ErrorNotification {
    static readonly type = '[Notification] ErrorNotification';
    constructor(public readonly payload: string,
        public readonly error?: any,
        public readonly options?: Partial<any>,
        public readonly actionOnCancel?: any) { }
}

export class UnknownErrorNotification {
    static readonly type = '[Notification] UnknownErrorNotification';
    constructor(public readonly error?: any) { }
}
