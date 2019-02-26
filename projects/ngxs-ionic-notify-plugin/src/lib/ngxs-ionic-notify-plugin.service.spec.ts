import { TestBed } from '@angular/core/testing';

import { NgxsIonicNotifyPluginService } from './ngxs-ionic-notify-plugin.service';

describe('NgxsIonicNotifyPluginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxsIonicNotifyPluginService = TestBed.get(NgxsIonicNotifyPluginService);
    expect(service).toBeTruthy();
  });
});
