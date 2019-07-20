export class SuccessNotification {
  static readonly type = '[Notification] SuccessNotification';
  constructor(
    public readonly message: string | any,
    public readonly options?: any,
    public readonly actions?: any | any[]
  ) {}
}

export class HintNotification {
  static readonly type = '[Notification] HintNotification';
  constructor(
    public readonly message: string | any,
    public readonly options?: any,
    public readonly actions?: any | any[]
  ) {}
}

export class WarningNotification {
  static readonly type = '[Notification] WarningNotification';
  constructor(
    public readonly message: string | any,
    public readonly warning?: any,
    public readonly options?: any,
    public readonly actions?: any | any[]
  ) {}
}

export class ErrorNotification {
  static readonly type = '[Notification] ErrorNotification';
  constructor(
    public readonly message: string | any,
    public readonly error?: any,
    public readonly options?: any,
    public readonly actions?: any | any[]
  ) {}
}

export class UnknownErrorNotification {
  static readonly type = '[Notification] UnknownErrorNotification';
  constructor(
    public readonly error?: any,
    public readonly options?: any,
    public readonly actions?: any | any[]
  ) {}
}
